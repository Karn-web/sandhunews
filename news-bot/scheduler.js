// news-bot/scheduler.js
const cron = require('node-cron')
const config = require('./config')
const { scrapeNews } = require('./scraper')
const { rewriteArticle } = require('./ai-writer')
const { publishArticle } = require('./publisher')

console.log('🤖 SandhuNews AI Bot Started!')
console.log(`⏰ Scheduled for: ${config.schedule.hour}:${config.schedule.minute} IST`)
console.log(`📰 Will publish: ${config.publish.articlesPerDay} articles/day`)

// Export runBot so "npm run now" works
async function runBot() {
  console.log('\n' + '='.repeat(50))
  console.log('🚀 STARTING NEWS BOT -', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }))
  console.log('='.repeat(50))

  try {
    // Step 1: Scrape
    const news = await scrapeNews(config.sources)
    
    if (news.length === 0) {
      console.log('😴 No fresh news found. Going back to sleep.')
      return
    }

    // Step 2: Pick top articles
    const selected = news
      .sort(() => Math.random() - 0.5)
      .slice(0, config.publish.articlesPerDay)

    // Step 3: Rewrite & Publish each
    for (const item of selected) {
      console.log(`\n✍️ Rewriting: ${item.title}`)
      const article = rewriteArticle(item)
      
      console.log(`📤 Publishing: ${article.title}`)
      publishArticle(article, config)
    }

    console.log('\n✅ All done! Going back to sleep...')
    console.log('💤 Next run: Tomorrow 3:00 AM IST')

  } catch (err) {
    console.error('💥 Bot crashed:', err)
  }
}

// Export for testing
module.exports = { runBot }

// Schedule for 3:00 AM daily
cron.schedule(`${config.schedule.minute} ${config.schedule.hour} * * *`, () => {
  console.log('\n🔔 WAKE UP! Time to fetch news...')
  runBot()
}, {
  timezone: config.schedule.timezone
})

// Keep alive
setInterval(() => {}, 1000)