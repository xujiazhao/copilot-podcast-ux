// Podcast Playlist Data - Live from API
const PODCAST_API_URL = 'https://co-podcast-api.livelystone-662ae40f.southeastasia.azurecontainerapps.io/api/podcasts?limit=30&no_cache=true';

// Format seconds to "M:SS"
function formatDuration(seconds) {
  if (!seconds) return '--:--';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return mins + ':' + secs.toString().padStart(2, '0');
}

// Time ago from ISO datetime
function getTimeAgo(dt) {
  if (!dt) return '';
  const diff = Date.now() - new Date(dt).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return mins + 'm ago';
  const hours = Math.floor(mins / 60);
  if (hours < 24) return hours + 'h ago';
  return Math.floor(hours / 24) + 'd ago';
}

// Capitalize category label
function formatCategory(cat) {
  if (!cat) return 'News';
  return cat.split(/[\s_-]+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

// Transform API item to playlist format
function transformItem(item) {
  const sources = item.sources || [];
  const timeAgo = getTimeAgo(item.published_datetime);

  return {
    id: item.id,
    gm_id: item.gm_id,
    title: item.title,
    category: formatCategory(item.category),
    duration: formatDuration(item.duration_seconds),
    sources: sources.length,
    sourceNames: '',
    image: item.thumbnail_url || '',
    audioSrc: item.audio_url,
    gm_url: item.gm_url || '',
    published_datetime: item.published_datetime,
    timeAgo: timeAgo,
    detailedSources: sources.map((src, i) => ({
      name: 'MSN',
      logo: '',
      article: src.title,
      time: timeAgo || (i + 1) + 'h ago',
      url: src.url
    }))
  };
}

// Global playlist
let PODCAST_PLAYLIST = [];

// Promise that resolves when data is ready
const podcastDataReady = fetch(PODCAST_API_URL)
  .then(r => r.json())
  .then(data => {
    PODCAST_PLAYLIST = data.data.map(transformItem);
    console.log('Loaded ' + PODCAST_PLAYLIST.length + ' podcasts from API');

    // Fetch publisher info in background (doesn't block UI)
    fetchPublisherInfo();

    return PODCAST_PLAYLIST;
  })
  .catch(err => {
    console.error('Failed to load podcasts:', err);
    PODCAST_PLAYLIST = [];
    return PODCAST_PLAYLIST;
  });

// Lazy-load real publisher names and logos from MSN Content API
function fetchPublisherInfo() {
  const cache = {};
  const queue = [];

  // Collect all unique article IDs
  PODCAST_PLAYLIST.forEach(ep => {
    ep.detailedSources.forEach(src => {
      const m = src.url.match(/\/ar-(AA[A-Za-z0-9]+)/);
      if (m && !cache[m[1]]) {
        cache[m[1]] = true;
        queue.push({ articleId: m[1], source: src });
      }
    });
  });

  // Fetch in small batches
  let i = 0;
  function next() {
    if (i >= queue.length) return;
    const batch = queue.slice(i, i + 3);
    i += 3;
    Promise.all(batch.map(item =>
      fetch('https://assets.msn.com/content/view/v2/Detail/en-us/' + item.articleId)
        .then(r => r.json())
        .then(d => {
          const p = d.provider || {};
          if (p.name) item.source.name = p.name;
          const logo = (p.logo || {}).url;
          if (logo) item.source.logo = logo;
        })
        .catch(() => {})
    )).then(() => setTimeout(next, 50));
  }
  next();
}
