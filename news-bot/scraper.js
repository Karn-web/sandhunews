// news-bot/scraper.js
const Parser = require('rss-parser')
const parser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
})

async function scrapeNews(sources) {
  const allNews = []

  for (const source of sources) {
    try {
      console.log(`📡 Fetching: ${source.name}`)
      const feed = await parser.parseURL(source.rss)

      const articles = feed.items.slice(0, 5).map(item => ({
        title: item.title,
        link: item.link,
        content: item['content:encoded'] || item.content || item.summary || '',
        pubDate: item.pubDate,
        source: source.name,
        category: source.category
      }))

      allNews.push(...articles)
      console.log(`✅ Got ${articles.length} from ${source.name}`)
    } catch (err) {
      console.log(`❌ Failed: ${source.name} - ${err.message}`)
    }
  }

  // Filter: only last 24 hours
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)
  const freshNews = allNews.filter(n => new Date(n.pubDate) > oneDayAgo)

  console.log(`\n📊 Total fresh articles: ${freshNews.length}`)
  return freshNews
}

module.exports = { scrapeNews }