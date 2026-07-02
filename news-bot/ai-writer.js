// news-bot/ai-writer.js
// This uses a simple rewrite engine - you can upgrade to OpenAI API later

function rewriteArticle(original) {
  const { title, content, source, category } = original

  // Extract key info from content
  const sentences = content
    .replace(/<[^>]*>/g, '') // Remove HTML
    .split(/[.!?]+/)
    .filter(s => s.trim().length > 20)
    .slice(0, 8) // Top 8 sentences

  // Generate slug
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 60)

  // Create rewritten article
  const rewritten = {
    slug: `${slug}-${Date.now()}`,
    title: title,
    summary: sentences[0]?.trim() || title,
    category: category,
    tag: getTag(category),
    content: generateContent(title, sentences, source),
    sources: [source],
    image: `https://source.unsplash.com/800x600/?${getImageKeyword(category)}`,
    stats: generateStats(category),
    date: new Date().toISOString()
  }

  return rewritten
}

function getTag(category) {
  const tags = {
    'Punjab': 'Hot',
    'India': 'Trending',
    'World': 'Popular',
    'Top News': 'Hot',
    'Politics': 'Analysis'
  }
  return tags[category] || 'Trending'
}

function getImageKeyword(category) {
  const keywords = {
    'Punjab': 'punjab,india',
    'India': 'india,news',
    'World': 'world,global',
    'Top News': 'news,headlines',
    'Politics': 'politics,government'
  }
  return keywords[category] || 'news'
}

function generateStats(category) {
  const stats = {
    'Punjab': [
      { value: '30M+', label: 'Population' },
      { value: '5', label: 'River Basins' }
    ],
    'India': [
      { value: '1.4B', label: 'Population' },
      { value: '28', label: 'States' }
    ],
    'World': [
      { value: '8B', label: 'Global Pop' },
      { value: '195', label: 'Countries' }
    ]
  }
  return stats[category] || [
    { value: '2026', label: 'Year' },
    { value: '24/7', label: 'Coverage' }
  ]
}

function generateContent(title, sentences, source) {
  const intro = `${title} has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.`
  
  const body = sentences.map((s, i) => {
    const prefixes = [
      'Reports indicate that',
      'According to sources,',
      'It has been revealed that',
      'Analysts suggest that',
      'Furthermore,',
      'In addition,',
      'The situation highlights',
      'Experts believe that'
    ]
    return `${prefixes[i % prefixes.length]} ${s.trim()}.`
  }).join('\n\n')

  const conclusion = `As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`

  return `${intro}\n\n${body}\n\n${conclusion}`
}

module.exports = { rewriteArticle }