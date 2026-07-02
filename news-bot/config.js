// news-bot/config.js
module.exports = {
  // Your website settings
  site: {
    name: 'SandhuNews',
    url: 'https://sandhunews.com',
    author: 'Karandeep Singh Sandhu',
    language: 'en'
  },

  // News sources to scrape
sources: [
  {
    name: 'Indian Express',
    rss: 'https://indianexpress.com/section/india/feed/',
    category: 'India'
  },
  {
    name: 'BBC India',
    rss: 'http://feeds.bbci.co.uk/news/world/asia/india/rss.xml',
    category: 'World'
  },
  {
    name: 'NDTV',
    rss: 'https://feeds.feedburner.com/ndtvnews-top-stories',
    category: 'Top News'
  },
  {
    name: 'Times of India',
    rss: 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms',
    category: 'Top News'
  },
  {
    name: 'The Hindu',
    rss: 'https://www.thehindu.com/news/national/?service=rss',
    category: 'India'
  }
],

  // What to write about
  topics: [
    'Punjab politics',
    'Punjab agriculture',
    'Indian economy',
    'Indian cricket',
    'Bollywood',
    'Punjabi music',
    'Technology India',
    'Education India',
    'Defence India',
    'ISRO'
  ],

  // Publishing settings
  publish: {
    articlesPerDay: 3,        // How many articles daily
    minWordCount: 800,        // Minimum article length
    maxWordCount: 1500,       // Maximum article length
    imageSearch: true         // Auto-find images
  },

  // Git settings (for auto-push)
  git: {
    repoPath: 'C:/Users/User/Desktop/sandhunews',  // Your project path
    branch: 'main',
    commitMessage: 'Auto: Daily news update'
  },

  // Schedule: 3:00 AM IST
  schedule: {
    hour: 3,
    minute: 0,
    timezone: 'Asia/Kolkata'
  }
}