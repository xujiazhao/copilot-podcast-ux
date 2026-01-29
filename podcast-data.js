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
    title: "A 47-year study finally reveals the age when your body starts losing strength and endurance",
    category: "Health",
    duration: "3:10",
    sources: 4,
    sourceNames: "NPR,BBC,Guardian,Reuters",
    gradient: "from-teal-400 to-emerald-600",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150",
    audioSrc: "podcasts/A 47-year study finally reveals the age when your body starts losing strength and endurance.mp3",
    detailedSources: [
      { name: "NPR", logo: "publisher icon/NPR.png", article: "Landmark Study Reveals When Bodies Start Declining", time: "1h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "The Age Your Strength Peaks, According to Science", time: "2h ago" },
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "What 47 Years of Research Tells Us About Aging", time: "3h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "New Study Pinpoints Physical Decline", time: "4h ago" }
    ]
  },
  {
    id: 17,
    title: "Candace Owens leaks Erika Kirk phone call and slams widow's laughter two weeks after assassination",
    category: "Politics",
    duration: "3:25",
    sources: 4,
    sourceNames: "Politico,CNN,AP,Reuters",
    gradient: "from-red-400 to-orange-600",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=150",
    audioSrc: "podcasts/Candace Owens leaks Erika Kirk phone call and slams widow's laughter two weeks after assassination.mp3",
    detailedSources: [
      { name: "Politico", logo: "publisher icon/Politico.png", article: "Candace Owens Releases Controversial Recording", time: "1h ago" },
      { name: "CNN", logo: "publisher icon/CNN.png", article: "Phone Call Leak Sparks Outrage", time: "2h ago" },
      { name: "AP", logo: "publisher icon/AP.png", article: "Owens Faces Backlash Over Leaked Call", time: "3h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Controversy Erupts Over Widow's Recording", time: "4h ago" }
    ]
  },
  {
    id: 18,
    title: "Girls, no one tells you these 5 things before it's too late",
    category: "Lifestyle",
    duration: "2:55",
    sources: 4,
    sourceNames: "Vox,Time,Insider,USA Today",
    gradient: "from-pink-400 to-rose-600",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150",
    audioSrc: "podcasts/Girls, no one tells you these 5 things before its too late.mp3",
    detailedSources: [
      { name: "Vox", logo: "publisher icon/Vox.png", article: "The Life Lessons Women Wish They Knew Earlier", time: "1h ago" },
      { name: "Time", logo: "publisher icon/Time.png", article: "What Every Young Woman Should Know", time: "2h ago" },
      { name: "Insider", logo: "publisher icon/Insider.png", article: "5 Things No One Tells Young Women", time: "3h ago" },
      { name: "USA Today", logo: "publisher icon/USA Today.png", article: "Essential Advice for Women", time: "4h ago" }
    ]
  },
  {
    id: 19,
    title: "Gold extends rally, dollar dips as Trump brushes off currency weakness",
    category: "Finance",
    duration: "2:45",
    sources: 4,
    sourceNames: "Bloomberg,Reuters,CNBC,WSJ",
    gradient: "from-yellow-400 to-amber-600",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=150",
    audioSrc: "podcasts/Gold extends rally, dollar dips as Trump brushes off currency weakness.mp3",
    detailedSources: [
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "Gold Prices Surge Amid Dollar Weakness", time: "1h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Trump Dismisses Currency Concerns", time: "2h ago" },
      { name: "CNBC", logo: "publisher icon/CNBC.png", article: "Markets React to Dollar Dip", time: "3h ago" },
      { name: "WSJ", logo: "publisher icon/WSJ.png", article: "Gold Rally Continues as Dollar Falls", time: "4h ago" }
    ]
  },
  {
    id: 20,
    title: "How many hours can you play video games before it wrecks your health",
    category: "Health",
    duration: "3:00",
    sources: 4,
    sourceNames: "BBC,NPR,Guardian,Reuters",
    gradient: "from-purple-400 to-indigo-600",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=150",
    audioSrc: "podcasts/How many hours can you play video games before it wrecks your health.mp3",
    detailedSources: [
      { name: "BBC", logo: "publisher icon/BBC.png", article: "Gaming and Health: Finding the Balance", time: "1h ago" },
      { name: "NPR", logo: "publisher icon/NPR.png", article: "When Gaming Becomes Harmful", time: "2h ago" },
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "The Health Risks of Excessive Gaming", time: "3h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Study Reveals Gaming Time Limits", time: "4h ago" }
    ]
  },
  {
    id: 21,
    title: "Netflix announces an unhinged new limited series starring Bond-wife, Rachel Weisz",
    category: "Entertainment",
    duration: "2:35",
    sources: 4,
    sourceNames: "Vox,Time,Insider,USA Today",
    gradient: "from-red-500 to-rose-600",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=150",
    audioSrc: "podcasts/Netflix announces an unhinged new limited series starring Bond-wife, Rachel Weisz.mp3",
    detailedSources: [
      { name: "Vox", logo: "publisher icon/Vox.png", article: "Rachel Weisz Stars in New Netflix Thriller", time: "1h ago" },
      { name: "Time", logo: "publisher icon/Time.png", article: "Netflix's Most Anticipated Limited Series", time: "2h ago" },
      { name: "Insider", logo: "publisher icon/Insider.png", article: "Everything We Know About the New Show", time: "3h ago" },
      { name: "USA Today", logo: "publisher icon/USA Today.png", article: "Rachel Weisz Returns to TV", time: "4h ago" }
    ]
  },
  
  // Batch 3: Items 22-31
  {
    id: 22,
    title: "No matter how many books I read: Hrithik Roshan gets candid about his never-ending obsession with Bollywood biceps",
    category: "Entertainment",
    duration: "3:15",
    sources: 4,
    sourceNames: "Insider,Vox,Time,USA Today",
    gradient: "from-orange-400 to-red-600",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=150",
    audioSrc: "podcasts/No matter how many books I read_ Hrithik Roshan gets candid about his never-ending obsession with Bollywood biceps.mp3",
    detailedSources: [
      { name: "Insider", logo: "publisher icon/Insider.png", article: "Hrithik Roshan on Fitness and Fame", time: "1h ago" },
      { name: "Vox", logo: "publisher icon/Vox.png", article: "Bollywood's Obsession with Muscles", time: "2h ago" },
      { name: "Time", logo: "publisher icon/Time.png", article: "Hrithik Opens Up About Body Image", time: "3h ago" },
      { name: "USA Today", logo: "publisher icon/USA Today.png", article: "The Pressure of Bollywood Fitness", time: "4h ago" }
    ]
  },
  {
    id: 23,
    title: "Union finance minister to present economic survey in Lok Sabha ahead of Budget 2026",
    category: "Politics",
    duration: "3:30",
    sources: 4,
    sourceNames: "Reuters,Bloomberg,BBC,Guardian",
    gradient: "from-blue-400 to-indigo-600",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=150",
    audioSrc: "podcasts/Union finance minister to present economic survey in Lok Sabha ahead of Budget 2026.mp3",
    detailedSources: [
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "India's Economic Survey Preview", time: "1h ago" },
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "What to Expect from Budget 2026", time: "2h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "India's Finance Minister Prepares Key Address", time: "3h ago" },
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "Economic Survey Sets Stage for Budget", time: "4h ago" }
    ]
  },
  {
    id: 24,
    title: "What is Zakir Khan suffering from? Comedian opens up about his genetic illness. Here's what it really means",
    category: "Health",
    duration: "3:20",
    sources: 4,
    sourceNames: "NPR,BBC,Guardian,Reuters",
    gradient: "from-purple-400 to-violet-600",
    image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=150",
    audioSrc: "podcasts/What is Zakir Khan suffering from Comedian opens up about his genetic illness Heres what it really means.mp3",
    detailedSources: [
      { name: "NPR", logo: "publisher icon/NPR.png", article: "Comedian Reveals Battle with Genetic Condition", time: "1h ago" },
      { name: "BBC", logo: "publisher icon/BBC.png", article: "Zakir Khan's Health Journey Explained", time: "2h ago" },
      { name: "Guardian", logo: "publisher icon/Guardian.png", article: "Understanding Genetic Illnesses", time: "3h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Star Comedian Opens Up About Health", time: "4h ago" }
    ]
  },
  {
    id: 25,
    title: "Why did shares of this Africa-based micro-cap company soar over 43% today",
    category: "Finance",
    duration: "2:50",
    sources: 4,
    sourceNames: "Bloomberg,Reuters,CNBC,Forbes",
    gradient: "from-green-400 to-emerald-600",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=150",
    audioSrc: "podcasts/Why did shares of this Africa-based micro-cap company soar over 43% today.mp3",
    detailedSources: [
      { name: "Bloomberg", logo: "publisher icon/Bloomberg.png", article: "African Stock Sees Massive Single-Day Gain", time: "1h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "Micro-Cap Company Shocks Investors", time: "2h ago" },
      { name: "CNBC", logo: "publisher icon/CNBC.png", article: "What's Behind the 43% Surge", time: "3h ago" },
      { name: "Forbes", logo: "publisher icon/Forbes.png", article: "Africa's Hottest Stock Today", time: "4h ago" }
    ]
  },
  {
    id: 26,
    title: "With health under scrutiny, US President Trump focuses on legacy and how history will judge him",
    category: "Politics",
    duration: "3:40",
    sources: 4,
    sourceNames: "Politico,CNN,AP,Reuters",
    gradient: "from-slate-400 to-zinc-600",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=150",
    audioSrc: "podcasts/With health under scrutiny, US President Trump focuses on legacy and how history will judge him.mp3",
    detailedSources: [
      { name: "Politico", logo: "publisher icon/Politico.png", article: "Trump's Legacy Focus Amid Health Questions", time: "1h ago" },
      { name: "CNN", logo: "publisher icon/CNN.png", article: "President's Health Under Microscope", time: "2h ago" },
      { name: "AP", logo: "publisher icon/AP.png", article: "Trump Considers Historical Legacy", time: "3h ago" },
      { name: "Reuters", logo: "publisher icon/Reuters.png", article: "White House Addresses Health Concerns", time: "4h ago" }
    ]
  }
];

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PODCAST_PLAYLIST };
}
