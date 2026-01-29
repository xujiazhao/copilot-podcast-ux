// Podcast Playlist Data
// Each episode contains: title, category, duration, sources count, source names, gradient, image, and detailed sources

const PODCAST_PLAYLIST = [
  // Currently Playing (index 0) - Real Audio
  {
    id: 1,
    title: "Australia shuts down beaches over shark danger as officials investigate possible dingo attack",
    category: "World News",
    duration: "2:15",
    sources: 3,
    sourceNames: "BBC,Reuters,Guardian",
    gradient: "from-blue-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200",
    audioSrc: "podcasts/Australia shuts down beaches over shark danger as officials investigate possible dingo attack.mp3",
    detailedSources: [
      { name: "BBC", logo: "publisher icon/BBC.png", article: "Australian Beaches Closed After Shark Sightings", time: "2h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Dingo Attack Investigation Underway in Australia", time: "3h ago" },
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "Beach Safety Concerns Rise in Australia", time: "4h ago" }
    ]
  },
  
  // Batch 1: Items 2-11 (First 6 are real audio)
  {
    id: 2,
    title: "Bull run in D-Street today Sensex settles nearly 500 points up, Nifty at 25,340; what's behind this surge",
    category: "Finance",
    duration: "2:30",
    sources: 4,
    sourceNames: "Bloomberg,Reuters,CNBC,WSJ",
    gradient: "from-green-400 to-emerald-600",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=150",
    audioSrc: "podcasts/Bull run in D-Street today Sensex settles nearly 500 points up, Nifty at 25,340; what's behind this surge.mp3",
    detailedSources: [
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "Indian Markets Rally: Sensex Surges 500 Points", time: "1h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Nifty Hits 25,340 Amid Bull Run", time: "2h ago" },
      { name: "CNBC", logo: "publisher icon/CNBC.png", article: "What's Driving the Indian Stock Market Surge", time: "3h ago" },
      { name: "WSJ", logo: "publisher icon/WSJ.png", article: "D-Street Records Strong Gains", time: "4h ago" }
    ]
  },
  {
    id: 3,
    title: "Is AI eating up jobs in UK? New report paints bleak picture",
    category: "Technology",
    duration: "2:45",
    sources: 4,
    sourceNames: "BBC,Guardian,Reuters,ArsTechnica",
    gradient: "from-purple-400 to-indigo-600",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=150",
    audioSrc: "podcasts/Is AI eating up jobs in UK New report paints bleak picture.mp3",
    detailedSources: [
      { name: "BBC", logo: "publisher icon/BBC.png", article: "AI Job Displacement: UK Report Findings", time: "1h ago" },
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "New Study Shows AI Impact on UK Employment", time: "2h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "UK Faces AI-Driven Job Market Shifts", time: "3h ago" },
      { name: "Ars Technica", logo: "publisher icon/ArsTechnica.png", article: "The Reality of AI and Jobs in Britain", time: "4h ago" }
    ]
  },
  {
    id: 4,
    title: "Nick Mastrascusa identified as fourth victim in Maine plane crash; top Hawaiian chef, father of three",
    category: "Breaking News",
    duration: "2:20",
    sources: 4,
    sourceNames: "AP,CNN,NBC News,USA Today",
    gradient: "from-red-400 to-rose-600",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=150",
    audioSrc: "podcasts/Nick Mastrascusa identified as fourth victim in Maine plane crash; top Hawaiian chef, father of three.mp3",
    detailedSources: [
      { name: "AP", logo: "publisher icon/AP.png", article: "Fourth Victim Identified in Maine Plane Crash", time: "1h ago" },
      { name: "CNN", logo: "publisher icon/CNN.png", article: "Hawaiian Chef Nick Mastrascusa Among Crash Victims", time: "2h ago" },
      { name: "NBC News", logo: "publisher icon/NBC News.png", article: "Maine Plane Crash Claims Life of Celebrated Chef", time: "3h ago" },
      { name: "USA Today", logo: "publisher icon/USA Today.png", article: "Father of Three Lost in Tragic Plane Accident", time: "4h ago" }
    ]
  },
  {
    id: 5,
    title: "One injured in shooting involving US Border Patrol in Arizona",
    category: "US News",
    duration: "1:50",
    sources: 3,
    sourceNames: "AP,Reuters,CNN",
    gradient: "from-amber-400 to-orange-600",
    image: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=150",
    audioSrc: "podcasts/One injured in shooting involving US Border Patrol in Arizona.mp3",
    detailedSources: [
      { name: "AP", logo: "publisher icon/AP.png", article: "Border Patrol Shooting Incident in Arizona", time: "1h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "One Injured in Arizona Border Patrol Shooting", time: "2h ago" },
      { name: "CNN", logo: "publisher icon/CNN.png", article: "Investigation Underway After Arizona Shooting", time: "3h ago" }
    ]
  },
  {
    id: 6,
    title: "Twinkle Khanna opens up about menopause at 52; says it once made her feel like a phone with a faulty charger",
    category: "Entertainment",
    duration: "2:35",
    sources: 3,
    sourceNames: "Time,Insider,Vox",
    gradient: "from-pink-400 to-fuchsia-600",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    audioSrc: "podcasts/Twinkle Khanna opens up about menopause at 52; says it once made her feel like a phone with a faulty charger.mp3",
    detailedSources: [
      { name: "Time", logo: "publisher icon/Time.png", article: "Twinkle Khanna on Menopause: Breaking the Stigma", time: "1h ago" },
      { name: "Insider", logo: "publisher icon/Insider.png", article: "Bollywood Star Shares Candid Menopause Experience", time: "2h ago" },
      { name: "Vox", logo: "publisher icon/Vox.png", article: "Why More Celebrities Are Talking About Menopause", time: "3h ago" }
    ]
  },
  {
    id: 7,
    title: "Why a classic book still confuses adults who swear they 'got it' in school",
    category: "Culture",
    duration: "3:10",
    sources: 4,
    sourceNames: "NPR,NYT,Guardian,Vox",
    gradient: "from-teal-400 to-cyan-600",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=150",
    audioSrc: "podcasts/Why a classic book still confuses adults who swear they got it in school.mp3",
    detailedSources: [
      { name: "NPR", logo: "publisher icon/NPR.png", article: "Classic Literature: What We Miss in School", time: "1h ago" },
      { name: "NYT", logo: "publisher icon/NYT.png", article: "Rereading Classics as Adults: New Perspectives", time: "2h ago" },
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "Why These Books Deserve a Second Read", time: "3h ago" },
      { name: "Vox", logo: "publisher icon/Vox.png", article: "The Hidden Depths of High School Reading Lists", time: "4h ago" }
    ]
  },
  {
    id: 8,
    title: "Celebs who refuse to interact with their fans",
    category: "Entertainment",
    duration: "2:45",
    sources: 4,
    sourceNames: "Insider,Vox,Time,USA Today",
    gradient: "from-pink-400 to-fuchsia-600",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=150",
    audioSrc: "podcasts/Celebs who refuse to interact with their fans.mp3",
    detailedSources: [
      { name: "Insider", logo: "publisher icon/Insider.png", article: "Celebrities Known for Avoiding Fan Interactions", time: "1h ago" },
      { name: "Vox", logo: "publisher icon/Vox.png", article: "Why Some Stars Keep Their Distance", time: "2h ago" },
      { name: "Time", logo: "publisher icon/Time.png", article: "The Complex Relationship Between Celebs and Fans", time: "3h ago" },
      { name: "USA Today", logo: "publisher icon/USA Today.png", article: "Fan Expectations vs Celebrity Privacy", time: "4h ago" }
    ]
  },
  {
    id: 9,
    title: "Experts: Stocks you should buy to profit from tax refunds in 2026",
    category: "Finance",
    duration: "3:20",
    sources: 4,
    sourceNames: "Bloomberg,CNBC,WSJ,Forbes",
    gradient: "from-green-400 to-emerald-600",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=150",
    audioSrc: "podcasts/Experts_ Stocks you should buy to profit from tax refunds in 2026.mp3",
    detailedSources: [
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "Best Stocks to Buy with Your Tax Refund", time: "1h ago" },
      { name: "CNBC", logo: "publisher icon/CNBC.png", article: "Investment Strategies for Tax Season 2026", time: "2h ago" },
      { name: "WSJ", logo: "publisher icon/WSJ.png", article: "Expert Picks for Tax Refund Investing", time: "3h ago" },
      { name: "Forbes", logo: "publisher icon/Forbes.png", article: "How to Grow Your Tax Refund", time: "4h ago" }
    ]
  },
  {
    id: 10,
    title: "Huda Beauty founder Huda Kattan accused of amplifying pro-regime narrative in Iran video row",
    category: "Business",
    duration: "2:55",
    sources: 4,
    sourceNames: "BBC,Guardian,Reuters,Vox",
    gradient: "from-rose-400 to-pink-600",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150",
    audioSrc: "podcasts/Huda Beauty founder Huda Kattan accused of amplifying pro-regime narrative in Iran video row.mp3",
    detailedSources: [
      { name: "BBC", logo: "publisher icon/BBC.png", article: "Huda Kattan Faces Backlash Over Iran Video", time: "1h ago" },
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "Beauty Mogul Accused of Pro-Regime Stance", time: "2h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Huda Beauty Controversy Explained", time: "3h ago" },
      { name: "Vox", logo: "publisher icon/Vox.png", article: "The Politics Behind the Beauty Industry", time: "4h ago" }
    ]
  },
  {
    id: 11,
    title: "IBM stock price today jumps over 7% after IBM earnings beat estimates – AI software growth and big acquisitions spark investor frenzy",
    category: "Technology",
    duration: "3:15",
    sources: 4,
    sourceNames: "Bloomberg,CNBC,WSJ,Reuters",
    gradient: "from-blue-400 to-indigo-600",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=150",
    audioSrc: "podcasts/IBM stock price today jumps over 7% after IBM earnings beat estimates – AI software growth and big acquisitions spark investor frenzy.mp3",
    detailedSources: [
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "IBM Stock Surges on Strong Earnings", time: "1h ago" },
      { name: "CNBC", logo: "publisher icon/CNBC.png", article: "IBM's AI Growth Drives Stock Rally", time: "2h ago" },
      { name: "WSJ", logo: "publisher icon/WSJ.png", article: "Why Investors Are Betting Big on IBM", time: "3h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "IBM Earnings Beat Wall Street Expectations", time: "4h ago" }
    ]
  },
  
  // Batch 2: Items 12-21
  {
    id: 12,
    title: "Nicola Peltz receives $1,000,000 a month allowance from her billionaire father Nelson",
    category: "Celebrity",
    duration: "2:30",
    sources: 4,
    sourceNames: "Insider,Vox,Time,USA Today",
    gradient: "from-amber-400 to-orange-600",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150",
    audioSrc: "podcasts/Nicola Peltz receives $1,000,000 a month allowance from her billionaire father Nelson.mp3",
    detailedSources: [
      { name: "Insider", logo: "publisher icon/Insider.png", article: "Inside Nicola Peltz's Lavish Lifestyle", time: "1h ago" },
      { name: "Vox", logo: "publisher icon/Vox.png", article: "The Wealthy World of Celebrity Heiresses", time: "2h ago" },
      { name: "Time", logo: "publisher icon/Time.png", article: "How Billionaire Families Manage Wealth", time: "3h ago" },
      { name: "USA Today", logo: "publisher icon/USA Today.png", article: "Peltz Family Fortune Revealed", time: "4h ago" }
    ]
  },
  {
    id: 13,
    title: "This is the favourite habit of billionaires that quietly shapes long-term wealth",
    category: "Finance",
    duration: "3:00",
    sources: 4,
    sourceNames: "Forbes,Bloomberg,CNBC,Business Insider",
    gradient: "from-emerald-400 to-teal-600",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=150",
    audioSrc: "podcasts/This is the favourite habit of billionaires that quietly shapes long-term wealth.mp3",
    detailedSources: [
      { name: "Forbes", logo: "publisher icon/Forbes.png", article: "The One Habit All Billionaires Share", time: "1h ago" },
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "Secrets of Long-Term Wealth Building", time: "2h ago" },
      { name: "CNBC", logo: "publisher icon/CNBC.png", article: "What Rich People Do Differently", time: "3h ago" },
      { name: "Business Insider", logo: "publisher icon/Business Insider.png", article: "Billionaire Habits You Can Adopt Today", time: "4h ago" }
    ]
  },
  {
    id: 14,
    title: "Why are we having a forum on caste: audience unsettles Dalit writers at Delhi book launch",
    category: "Culture",
    duration: "3:25",
    sources: 4,
    sourceNames: "Guardian,BBC,NPR,Reuters",
    gradient: "from-violet-400 to-purple-600",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150",
    audioSrc: "podcasts/Why are we having a forum on caste audience unsettles Dalit writers at Delhi book launch.mp3",
    detailedSources: [
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "Tensions Rise at Delhi Literary Event", time: "1h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "Caste Debate Sparks Controversy in India", time: "2h ago" },
      { name: "NPR", logo: "publisher icon/NPR.png", article: "Dalit Writers Speak Out on Discrimination", time: "3h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Book Launch Highlights Caste Tensions", time: "4h ago" }
    ]
  },
  {
    id: 15,
    title: "Your Pillow Is Silently Destroying Your Neck: The Shocking Discovery by Japan's Leading Pain Expert",
    category: "Health",
    duration: "3:35",
    sources: 4,
    sourceNames: "NPR,BBC,Guardian,Reuters",
    gradient: "from-cyan-400 to-blue-600",
    image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=150",
    audioSrc: "podcasts/Your Pillow Is Silently Destroying Your Neck The Shocking Discovery by Japans Leading Pain Expert.mp3",
    detailedSources: [
      { name: "NPR", logo: "publisher icon/NPR.png", article: "Is Your Pillow Causing Chronic Pain?", time: "1h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "Japanese Expert Reveals Pillow Dangers", time: "2h ago" },
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "The Science of Sleep Posture", time: "3h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "How to Choose the Right Pillow", time: "4h ago" }
    ]
  },
  {
    id: 16,
    title: "World Health Organization Declares New Pandemic Preparedness Plan",
    category: "Health",
    duration: "8:22",
    sources: 5,
    sourceNames: "NPR,BBC,Guardian,Reuters,AP",
    gradient: "from-teal-400 to-emerald-600",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=150",
    detailedSources: [
      { name: "NPR", logo: "publisher icon/NPR.png", article: "WHO Unveils Pandemic Prevention Strategy", time: "1h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "Global Health Preparedness Gets Boost", time: "2h ago" },
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "New Framework for Future Pandemics", time: "3h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "WHO Director Outlines New Health Strategy", time: "4h ago" },
      { name: "AP", logo: "publisher icon/AP.png", article: "Global Leaders Back Pandemic Preparedness Plan", time: "5h ago" }
    ]
  },
  {
    id: 17,
    title: "NBA Trade Deadline: Blockbuster Deals Shake Up League",
    category: "Sports",
    duration: "6:47",
    sources: 4,
    sourceNames: "ESPN,Yahoo Sports,NBC Sports,Fox Sports",
    gradient: "from-red-400 to-orange-600",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=150",
    detailedSources: [
      { name: "ESPN", logo: "publisher icon/Ramdom3.png", article: "NBA Trade Deadline: Winners and Losers", time: "1h ago" },
      { name: "Yahoo Sports", logo: "publisher icon/YouTube.png", article: "Every Major Trade Explained", time: "2h ago" },
      { name: "NBC Sports", logo: "publisher icon/NBC News.png", article: "Championship Implications of Deadline Deals", time: "3h ago" },
      { name: "Fox Sports", logo: "publisher icon/Fox news.png", article: "How the Trades Reshape the Playoff Picture", time: "4h ago" }
    ]
  },
  {
    id: 18,
    title: "Amazon Unveils Revolutionary Drone Delivery Network",
    category: "Business",
    duration: "5:15",
    sources: 4,
    sourceNames: "WSJ,Bloomberg,CNBC,Forbes",
    gradient: "from-yellow-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=150",
    detailedSources: [
      { name: "WSJ", logo: "publisher icon/WSJ.png", article: "Amazon Prime Air Expands to 50 Cities", time: "1h ago" },
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "How Amazon's Drone Network Works", time: "2h ago" },
      { name: "CNBC", logo: "publisher icon/CNBC.png", article: "Amazon's Delivery Revolution", time: "3h ago" },
      { name: "Forbes", logo: "publisher icon/Forbes.png", article: "The Future of Last-Mile Delivery", time: "4h ago" }
    ]
  },
  {
    id: 19,
    title: "California Wildfires: State of Emergency Declared",
    category: "Breaking",
    duration: "7:02",
    sources: 6,
    sourceNames: "CNN,AP,Reuters,BBC,NPR,ABC",
    gradient: "from-red-500 to-rose-700",
    image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=150",
    detailedSources: [
      { name: "CNN", logo: "publisher icon/CNN.png", article: "California Wildfire Emergency: Live Updates", time: "30m ago" },
      { name: "AP", logo: "publisher icon/AP.png", article: "Thousands Evacuated as Fires Spread", time: "1h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Fire Crews Battle Blaze in Southern California", time: "2h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "California Fires: International Response", time: "3h ago" },
      { name: "NPR", logo: "publisher icon/NPR.png", article: "Communities Face Devastating Losses", time: "4h ago" },
      { name: "ABC", logo: "publisher icon/ABC.png", article: "First Responders Work Through the Night", time: "5h ago" }
    ]
  },
  {
    id: 20,
    title: "Meta's New AR Glasses Challenge Apple's Dominance",
    category: "Technology",
    duration: "6:38",
    sources: 3,
    sourceNames: "ArsTechnica,Wired,The Verge",
    gradient: "from-cyan-400 to-blue-600",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=150",
    detailedSources: [
      { name: "Ars Technica", logo: "publisher icon/ArsTechnica.png", article: "Meta Orion: The Apple Vision Pro Killer?", time: "1h ago" },
      { name: "Wired", logo: "publisher icon/Ramdom1.png", article: "Hands-On with Meta's New AR Glasses", time: "2h ago" },
      { name: "The Verge", logo: "publisher icon/Ramdom2.png", article: "Meta vs Apple: The AR Battle Heats Up", time: "3h ago" }
    ]
  },
  {
    id: 21,
    title: "Ukraine Peace Talks Show Signs of Progress in Geneva",
    category: "World",
    duration: "8:55",
    sources: 7,
    sourceNames: "Reuters,AP,BBC,Guardian,NYT,Washington Post,NPR",
    gradient: "from-slate-400 to-zinc-600",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=150",
    detailedSources: [
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Geneva Talks: Breakthrough in Ukraine Negotiations", time: "1h ago" },
      { name: "AP", logo: "publisher icon/AP.png", article: "Diplomats Report Progress on Ceasefire", time: "2h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "What a Ukraine Peace Deal Could Look Like", time: "3h ago" },
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "Hope Rises for End to Conflict", time: "4h ago" },
      { name: "NYT", logo: "publisher icon/NYT.png", article: "Inside the Diplomatic Breakthrough", time: "5h ago" },
      { name: "Washington Post", logo: "publisher icon/Washington Post.png", article: "Key Players in the Peace Negotiations", time: "6h ago" },
      { name: "NPR", logo: "publisher icon/NPR.png", article: "What Peace Could Mean for Europe", time: "7h ago" }
    ]
  },
  
  // Batch 3: Items 22-31
  {
    id: 22,
    title: "Spotify Introduces AI-Generated Podcast Feature",
    category: "Technology",
    duration: "5:28",
    sources: 3,
    sourceNames: "The Verge,ArsTechnica,Wired",
    gradient: "from-green-400 to-emerald-600",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=150",
    detailedSources: [
      { name: "The Verge", logo: "publisher icon/Ramdom2.png", article: "Spotify's AI DJ Gets a Podcast Makeover", time: "1h ago" },
      { name: "Ars Technica", logo: "publisher icon/ArsTechnica.png", article: "How Spotify's AI Podcast Feature Works", time: "2h ago" },
      { name: "Wired", logo: "publisher icon/Ramdom1.png", article: "The Future of AI-Generated Audio Content", time: "3h ago" }
    ]
  },
  {
    id: 23,
    title: "Japan's Economic Revival: Nikkei Reaches Historic High",
    category: "Finance",
    duration: "6:12",
    sources: 4,
    sourceNames: "Bloomberg,Reuters,WSJ,CNBC",
    gradient: "from-red-400 to-rose-600",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=150",
    detailedSources: [
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "Nikkei Breaks 40,000 for First Time", time: "1h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Japan's Economic Resurgence Explained", time: "2h ago" },
      { name: "WSJ", logo: "publisher icon/WSJ.png", article: "Why Investors Are Bullish on Japan", time: "3h ago" },
      { name: "CNBC", logo: "publisher icon/CNBC.png", article: "Japan's Stock Market Hits Historic Milestone", time: "4h ago" }
    ]
  },
  {
    id: 24,
    title: "Nobel Prize Winner Announces Breakthrough in Alzheimer's Research",
    category: "Health",
    duration: "7:45",
    sources: 5,
    sourceNames: "NPR,BBC,Reuters,AP,Guardian",
    gradient: "from-purple-400 to-violet-600",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=150",
    detailedSources: [
      { name: "NPR", logo: "publisher icon/NPR.png", article: "New Alzheimer's Treatment Shows Promise", time: "1h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "Breakthrough in Understanding Brain Disease", time: "2h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Nobel Laureate's Research Changes Dementia Care", time: "3h ago" },
      { name: "AP", logo: "publisher icon/AP.png", article: "Families React to Alzheimer's Breakthrough", time: "4h ago" },
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "The Science Behind the Cure", time: "5h ago" }
    ]
  },
  {
    id: 25,
    title: "Formula 1 Season Preview: Red Bull's New Challenger Revealed",
    category: "Sports",
    duration: "6:33",
    sources: 4,
    sourceNames: "ESPN,BBC Sport,Sky Sports,Auto Sport",
    gradient: "from-blue-500 to-red-600",
    image: "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=150",
    detailedSources: [
      { name: "ESPN", logo: "publisher icon/Ramdom3.png", article: "F1 2026: What to Expect from Each Team", time: "1h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "Red Bull Unveils RB22 at Launch Event", time: "2h ago" },
      { name: "Sky Sports", logo: "publisher icon/Ramdom1.png", article: "Can Anyone Challenge Verstappen?", time: "3h ago" },
      { name: "Auto Sport", logo: "publisher icon/Ramdom2.png", article: "Technical Analysis of the New F1 Cars", time: "4h ago" }
    ]
  },
  {
    id: 26,
    title: "Taylor Swift Announces Final Eras Tour Dates",
    category: "Entertainment",
    duration: "4:22",
    sources: 4,
    sourceNames: "Vox,Time,Insider,USA Today",
    gradient: "from-pink-400 to-purple-600",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150",
    detailedSources: [
      { name: "Vox", logo: "publisher icon/Vox.png", article: "Taylor Swift's Historic Tour Comes to an End", time: "1h ago" },
      { name: "Time", logo: "publisher icon/Time.png", article: "Eras Tour By the Numbers", time: "2h ago" },
      { name: "Insider", logo: "publisher icon/Insider.png", article: "Every Record the Eras Tour Broke", time: "3h ago" },
      { name: "USA Today", logo: "publisher icon/USA Today.png", article: "Fans React to Final Tour Announcement", time: "4h ago" }
    ]
  },
  {
    id: 27,
    title: "Google DeepMind Achieves Major AGI Milestone",
    category: "Technology",
    duration: "8:17",
    sources: 5,
    sourceNames: "ArsTechnica,Wired,Bloomberg,Reuters,BBC",
    gradient: "from-blue-400 to-green-500",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=150",
    detailedSources: [
      { name: "Ars Technica", logo: "publisher icon/ArsTechnica.png", article: "DeepMind's Gemini Ultra 2 Passes AGI Benchmarks", time: "1h ago" },
      { name: "Wired", logo: "publisher icon/Ramdom1.png", article: "Are We Close to Artificial General Intelligence?", time: "2h ago" },
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "Google's AI Breakthrough Explained", time: "3h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Tech World Reacts to AGI Claims", time: "4h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "What Is AGI and Why Does It Matter?", time: "5h ago" }
    ]
  },
  {
    id: 28,
    title: "India Becomes World's Third Largest Economy",
    category: "World",
    duration: "7:08",
    sources: 6,
    sourceNames: "Reuters,Bloomberg,BBC,Guardian,NYT,Forbes",
    gradient: "from-orange-400 to-green-600",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=150",
    detailedSources: [
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "India Overtakes Japan in GDP Rankings", time: "1h ago" },
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "India's Economic Rise: What's Next?", time: "2h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "How India Became an Economic Powerhouse", time: "3h ago" },
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "India's Economic Transformation Explained", time: "4h ago" },
      { name: "NYT", logo: "publisher icon/NYT.png", article: "The New Global Economic Order", time: "5h ago" },
      { name: "Forbes", logo: "publisher icon/Forbes.png", article: "Investment Opportunities in India's Growth", time: "6h ago" }
    ]
  },
  {
    id: 29,
    title: "Electric Vehicle Sales Surpass Gas Cars in Europe",
    category: "Climate",
    duration: "5:52",
    sources: 4,
    sourceNames: "Guardian,BBC,Reuters,Bloomberg",
    gradient: "from-green-400 to-teal-600",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=150",
    detailedSources: [
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "EVs Outsell Combustion Cars for First Time", time: "1h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "Europe's Electric Revolution", time: "2h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "What EV Sales Milestone Means for Climate", time: "3h ago" },
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "Automakers Accelerate EV Production", time: "4h ago" }
    ]
  },
  {
    id: 30,
    title: "Senate Passes Historic Infrastructure Bill 2.0",
    category: "Politics",
    duration: "6:45",
    sources: 5,
    sourceNames: "Politico,NYT,Washington Post,AP,Reuters",
    gradient: "from-blue-400 to-slate-600",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=150",
    detailedSources: [
      { name: "Politico", logo: "publisher icon/Politico.png", article: "Infrastructure Bill Passes with Bipartisan Support", time: "1h ago" },
      { name: "NYT", logo: "publisher icon/NYT.png", article: "What's in the New Infrastructure Package", time: "2h ago" },
      { name: "Washington Post", logo: "publisher icon/Washington Post.png", article: "How the Bill Will Transform America", time: "3h ago" },
      { name: "AP", logo: "publisher icon/AP.png", article: "Senate Votes 72-28 on Infrastructure", time: "4h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Markets React to Infrastructure Spending", time: "5h ago" }
    ]
  },
  {
    id: 31,
    title: "Netflix Announces Live Sports Streaming Deal",
    category: "Business",
    duration: "4:38",
    sources: 4,
    sourceNames: "Variety,Bloomberg,WSJ,CNBC",
    gradient: "from-red-500 to-gray-800",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=150",
    detailedSources: [
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "Netflix Enters Live Sports Market", time: "1h ago" },
      { name: "WSJ", logo: "publisher icon/WSJ.png", article: "Streaming Wars Heat Up with Sports", time: "2h ago" },
      { name: "CNBC", logo: "publisher icon/CNBC.png", article: "Netflix's Bold Sports Strategy", time: "3h ago" },
      { name: "Variety", logo: "publisher icon/Ramdom1.png", article: "How Netflix Plans to Dominate Sports", time: "4h ago" }
    ]
  },
  
  // Batch 4: Items 32-41
  {
    id: 32,
    title: "OpenAI and Microsoft Announce Strategic Partnership Expansion",
    category: "Technology",
    duration: "7:22",
    sources: 5,
    sourceNames: "Bloomberg,Reuters,ArsTechnica,Wired,Forbes",
    gradient: "from-teal-400 to-blue-600",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=150",
    detailedSources: [
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "Microsoft Deepens OpenAI Investment", time: "1h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Tech Giants Expand AI Collaboration", time: "2h ago" },
      { name: "Ars Technica", logo: "publisher icon/ArsTechnica.png", article: "What the New Deal Means for AI", time: "3h ago" },
      { name: "Wired", logo: "publisher icon/Ramdom1.png", article: "Microsoft and OpenAI's Deepening Ties", time: "4h ago" },
      { name: "Forbes", logo: "publisher icon/Forbes.png", article: "The Business of Artificial Intelligence", time: "5h ago" }
    ]
  },
  {
    id: 33,
    title: "Fed Chair Signals Major Policy Shift in Congressional Testimony",
    category: "Finance",
    duration: "8:15",
    sources: 6,
    sourceNames: "WSJ,Bloomberg,CNBC,Reuters,NYT,Forbes",
    gradient: "from-green-400 to-emerald-700",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=150",
    detailedSources: [
      { name: "WSJ", logo: "publisher icon/WSJ.png", article: "Fed Chair: Rate Cuts Coming This Year", time: "1h ago" },
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "Markets React to Fed Testimony", time: "2h ago" },
      { name: "CNBC", logo: "publisher icon/CNBC.png", article: "What the Fed's New Stance Means", time: "3h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Fed Signals Shift in Monetary Policy", time: "4h ago" },
      { name: "NYT", logo: "publisher icon/NYT.png", article: "Congressional Reaction to Fed Chair", time: "5h ago" },
      { name: "Forbes", logo: "publisher icon/Forbes.png", article: "How Rate Cuts Will Affect Your Wallet", time: "6h ago" }
    ]
  },
  {
    id: 34,
    title: "Mars Sample Return Mission Faces Critical Funding Decision",
    category: "Science",
    duration: "6:58",
    sources: 4,
    sourceNames: "NPR,BBC,AP,Reuters",
    gradient: "from-orange-400 to-red-600",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=150",
    detailedSources: [
      { name: "NPR", logo: "publisher icon/NPR.png", article: "Mars Mission's Future Hangs in Balance", time: "1h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "NASA's Mars Sample Return Under Review", time: "2h ago" },
      { name: "AP", logo: "publisher icon/AP.png", article: "Congress Debates Space Exploration Budget", time: "3h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Scientists Rally for Mars Mission Funding", time: "4h ago" }
    ]
  },
  {
    id: 35,
    title: "Super Bowl LX Sets Record for Most-Watched Broadcast",
    category: "Sports",
    duration: "5:12",
    sources: 5,
    sourceNames: "ESPN,Fox Sports,NBC Sports,CBS Sports,USA Today",
    gradient: "from-indigo-400 to-purple-600",
    image: "https://images.unsplash.com/photo-1508098682722-e99c643e7f76?w=150",
    detailedSources: [
      { name: "ESPN", logo: "publisher icon/Ramdom3.png", article: "Super Bowl LX Shatters Viewership Records", time: "1h ago" },
      { name: "Fox Sports", logo: "publisher icon/Fox news.png", article: "150 Million Watch Historic Super Bowl", time: "2h ago" },
      { name: "NBC Sports", logo: "publisher icon/NBC News.png", article: "Super Bowl Becomes Most-Watched Event Ever", time: "3h ago" },
      { name: "CBS Sports", logo: "publisher icon/Ramdom1.png", article: "Breaking Down the Record Ratings", time: "4h ago" },
      { name: "USA Today", logo: "publisher icon/USA Today.png", article: "Super Bowl LX: A Night to Remember", time: "5h ago" }
    ]
  },
  {
    id: 36,
    title: "Universal Basic Income Pilot Shows Promising Results",
    category: "Politics",
    duration: "7:35",
    sources: 5,
    sourceNames: "Politico,NPR,Guardian,Vox,NYT",
    gradient: "from-violet-400 to-pink-600",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=150",
    detailedSources: [
      { name: "Politico", logo: "publisher icon/Politico.png", article: "UBI Experiment Yields Positive Outcomes", time: "1h ago" },
      { name: "NPR", logo: "publisher icon/NPR.png", article: "What We Learned from Basic Income Trial", time: "2h ago" },
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "UBI: The Evidence Is In", time: "3h ago" },
      { name: "Vox", logo: "publisher icon/Vox.png", article: "Could Universal Basic Income Work in America?", time: "4h ago" },
      { name: "NYT", logo: "publisher icon/NYT.png", article: "Lessons from the UBI Pilot Program", time: "5h ago" }
    ]
  },
  {
    id: 37,
    title: "Disney+ Announces Marvel Phase 7 Complete Lineup",
    category: "Entertainment",
    duration: "5:45",
    sources: 4,
    sourceNames: "Variety,IGN,Time,Insider",
    gradient: "from-red-400 to-blue-600",
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=150",
    detailedSources: [
      { name: "IGN", logo: "publisher icon/IGN.png", article: "Every Marvel Phase 7 Project Announced", time: "1h ago" },
      { name: "Time", logo: "publisher icon/Time.png", article: "Marvel's Next Decade Revealed", time: "2h ago" },
      { name: "Insider", logo: "publisher icon/Insider.png", article: "What's Coming to the MCU", time: "3h ago" },
      { name: "Variety", logo: "publisher icon/Ramdom1.png", article: "Disney's Marvel Strategy for 2026-2030", time: "4h ago" }
    ]
  },
  {
    id: 38,
    title: "Antarctic Ice Sheet Collapse Warning from Scientists",
    category: "Climate",
    duration: "8:42",
    sources: 6,
    sourceNames: "Guardian,BBC,NPR,Reuters,NYT,Washington Post",
    gradient: "from-cyan-300 to-blue-700",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=150",
    detailedSources: [
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "Scientists Warn of Accelerating Ice Loss", time: "1h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "Antarctic Ice Sheet at Tipping Point", time: "2h ago" },
      { name: "NPR", logo: "publisher icon/NPR.png", article: "What Ice Sheet Collapse Means for Sea Levels", time: "3h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "New Data Shows Alarming Ice Melt Rate", time: "4h ago" },
      { name: "NYT", logo: "publisher icon/NYT.png", article: "Climate Scientists Sound the Alarm", time: "5h ago" },
      { name: "Washington Post", logo: "publisher icon/Washington Post.png", article: "Coastal Cities Face Rising Threat", time: "6h ago" }
    ]
  },
  {
    id: 39,
    title: "Quantum Computing Breakthrough Threatens Current Encryption",
    category: "Cybersecurity",
    duration: "7:18",
    sources: 4,
    sourceNames: "ArsTechnica,Wired,Reuters,Bloomberg",
    gradient: "from-gray-400 to-slate-700",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=150",
    detailedSources: [
      { name: "Ars Technica", logo: "publisher icon/ArsTechnica.png", article: "Quantum Computer Breaks RSA Encryption", time: "1h ago" },
      { name: "Wired", logo: "publisher icon/Ramdom1.png", article: "The End of Traditional Cryptography?", time: "2h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Tech Industry Scrambles for Quantum-Safe Security", time: "3h ago" },
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "Quantum Computing Stocks Surge on Breakthrough", time: "4h ago" }
    ]
  },
  {
    id: 40,
    title: "New Gene Therapy Cures Previously Untreatable Cancer",
    category: "Health",
    duration: "6:55",
    sources: 5,
    sourceNames: "NPR,BBC,Reuters,AP,NYT",
    gradient: "from-pink-400 to-rose-600",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=150",
    detailedSources: [
      { name: "NPR", logo: "publisher icon/NPR.png", article: "Revolutionary Cancer Treatment Approved", time: "1h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "Gene Therapy Breakthrough Saves Lives", time: "2h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "FDA Approves Groundbreaking Cancer Cure", time: "3h ago" },
      { name: "AP", logo: "publisher icon/AP.png", article: "Patients Share Stories of Recovery", time: "4h ago" },
      { name: "NYT", logo: "publisher icon/NYT.png", article: "The Science Behind the Cancer Breakthrough", time: "5h ago" }
    ]
  },
  {
    id: 41,
    title: "Global Chip Shortage Finally Shows Signs of Ending",
    category: "Business",
    duration: "5:28",
    sources: 5,
    sourceNames: "Bloomberg,WSJ,CNBC,Reuters,Forbes",
    gradient: "from-blue-400 to-indigo-600",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=150",
    detailedSources: [
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "Semiconductor Supply Chain Normalizes", time: "1h ago" },
      { name: "WSJ", logo: "publisher icon/WSJ.png", article: "Chip Shortage Easing Across Industries", time: "2h ago" },
      { name: "CNBC", logo: "publisher icon/CNBC.png", article: "What the End of Chip Shortage Means", time: "3h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Global Chip Production Hits Record Levels", time: "4h ago" },
      { name: "Forbes", logo: "publisher icon/Forbes.png", article: "Winners and Losers of the Chip Recovery", time: "5h ago" }
    ]
  }
];

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PODCAST_PLAYLIST };
}
