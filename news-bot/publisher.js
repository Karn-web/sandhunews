const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

function publishArticle(article, config) {
  addToTopicsData(article, config)
  addToSitemap(article, config)
  gitPush(config)

  console.log('Published: ' + article.title)
  console.log('URL: ' + config.site.url + '/topic/' + article.slug)
}

function addToTopicsData(article, config) {
  const topicPagePath = path.join(config.git.repoPath, 'src', 'pages', 'TopicPage.jsx')
  let content = fs.readFileSync(topicPagePath, 'utf8')

  const newEntry = `
  '${article.slug}': {
    title: '${escapeString(article.title)}',
    summary: '${escapeString(article.summary)}',
    image: '${article.image}',
    category: '${article.category}',
    tag: '${article.tag}',
    sources: ${JSON.stringify(article.sources)},
    stats: ${JSON.stringify(article.stats)},
    content: \`${escapeContent(article.content)}\`
  },`

  const insertPoint = content.indexOf('const topicsData = {') + 'const topicsData = {'.length
  content = content.slice(0, insertPoint) + newEntry + content.slice(insertPoint)

  fs.writeFileSync(topicPagePath, content)
  console.log('Added to TopicPage.jsx')
}

function addToSitemap(article, config) {
  const sitemapPath = path.join(config.git.repoPath, 'public', 'sitemap.xml')
  let content = fs.readFileSync(sitemapPath, 'utf8')

  const newUrl = `
  <url>
    <loc>${config.site.url}/topic/${article.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`

  const insertPoint = content.lastIndexOf('</urlset>')
  content = content.slice(0, insertPoint) + newUrl + '\n' + content.slice(insertPoint)

  fs.writeFileSync(sitemapPath, content)
  console.log('Updated sitemap.xml')
}

function gitPush(config) {
  const projectPath = config.git.repoPath
  
  try {
    console.log('Pushing to Git...')
    execSync('git add .', { cwd: projectPath })
    execSync('git commit -m "Auto: Daily news update - ' + new Date().toISOString() + '"', { cwd: projectPath })
    execSync('git push origin ' + config.git.branch, { cwd: projectPath })
    console.log('Deployed! Cloudflare will auto-build.')
  } catch (err) {
    console.log('Git push failed:', err.message)
  }
}

function escapeString(str) {
  return str.replace(/'/g, "\\'").replace(/`/g, '\\`')
}

function escapeContent(str) {
  return str.replace(/`/g, '\\`')
}

module.exports = { publishArticle }