import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import SEOHelmet from '../components/SEOHelmet'

const categories = [
  { 
    title: 'People', 
    route: 'person',
    description: 'Influential personalities from Punjab and India',
    items: [
      { name: 'Karandeep Singh Sandhu', slug: 'karandeep-singh-sandhu', role: 'Founder, Web Developer', tag: 'Featured' },
      { name: 'Sidhu Moosewala', slug: 'sidhu-moosewala', role: 'Punjabi Singer', tag: 'Legend' },
      { name: 'Bhagwant Mann', slug: 'bhagwant-mann', role: 'CM of Punjab', tag: 'Politics' },
      { name: 'Diljit Dosanjh', slug: 'diljit-dosanjh', role: 'Actor & Singer', tag: 'Entertainment' },
      { name: 'APJ Abdul Kalam', slug: 'apj-abdul-kalam', role: 'Former President', tag: 'Inspiration' },
      { name: 'Virat Kohli', slug: 'virat-kohli', role: 'Cricketer', tag: 'Sports' },
    ]
  },
  { 
    title: 'Places', 
    route: 'place',
    description: 'Important locations across Punjab and India',
    items: [
      { name: 'Lakkarwala', slug: 'lakkarwala', role: 'Punjab, India', tag: 'Hometown' },
      { name: 'Amritsar', slug: 'amritsar', role: 'Golden Temple City', tag: 'Spiritual' },
      { name: 'Ludhiana', slug: 'ludhiana', role: 'Industrial Hub', tag: 'Business' },
      { name: 'Chandigarh', slug: 'chandigarh', role: 'Union Territory', tag: 'Capital' },
      { name: 'Delhi', slug: 'delhi', role: 'National Capital', tag: 'Politics' },
      { name: 'Mumbai', slug: 'mumbai', role: 'Financial Capital', tag: 'Bollywood' },
    ]
  },
  { 
    title: 'Topics', 
    route: 'topic',
    description: 'Current affairs and trending discussions',
    items: [
      { name: 'Punjab Farmers Protest', slug: 'punjab-farmers-protest', role: 'Current Affairs', tag: 'Hot' },
      { name: 'ISRO Missions', slug: 'isro-missions', role: 'Space & Science', tag: 'Trending' },
      { name: 'Punjabi Music Industry', slug: 'punjabi-music', role: 'Entertainment', tag: 'Culture' },
      { name: 'Digital India', slug: 'digital-india', role: 'Technology', tag: 'Future' },
    ]
  },
]

function AnimatedCard({ item, route }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
        }
      },
      { threshold: 0.1 }
    )
    
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Link 
      ref={cardRef}
      to={`/${route}/${item.slug}`}
      className="group relative opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sandhu-red/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-sandhu-red/50 hover:bg-white/10 transition-all duration-500 h-full">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-medium text-sandhu-red bg-sandhu-red/10 px-3 py-1 rounded-full">
            {item.tag}
          </span>
          <span className="text-sandhu-muted text-xs group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-sandhu-red transition-colors duration-300 mb-2">
          {item.name}
        </h3>
        <p className="text-sm text-sandhu-muted">{item.role}</p>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <SEOHelmet 
        title="SandhuNews - India & Punjab Knowledge Hub | Karandeep Singh Sandhu"
        description="Discover comprehensive information about India and Punjab. People, places, topics - curated by Karandeep Singh Sandhu."
        keywords="India, Punjab, SandhuNews, Karandeep Singh Sandhu, knowledge, news"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-sandhu-dark">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sandhu-red/20 rounded-full blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-sandhu-red rounded-full animate-pulse"></span>
            <span className="text-sm text-sandhu-muted">Knowledge Platform by 16 y/o Developer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            Know <span className="text-transparent bg-clip-text bg-gradient-to-r from-sandhu-red to-purple-500">India</span>.
            <br />
            Know <span className="text-transparent bg-clip-text bg-gradient-to-r from-sandhu-red to-purple-500">Punjab</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-sandhu-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Comprehensive knowledge about people, places, and topics. 
            Curated by <span className="text-white font-semibold">Karandeep Singh Sandhu</span>, 
            16-year-old web developer from Punjab, India.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/person/karandeep-singh-sandhu"
              className="bg-sandhu-red hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sandhu-red/25"
            >
              About the Founder →
            </Link>
            <Link 
              to="#explore"
              className="bg-white/5 backdrop-blur-lg border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10"
            >
              Explore Topics
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="explore" className="relative py-24">
        <div className="max-w-7xl mx-auto px-4">
          {categories.map((cat, catIndex) => (
            <div key={cat.title} className="mb-24 last:mb-0">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
                    {cat.title}
                  </h2>
                  <p className="text-sandhu-muted text-lg">{cat.description}</p>
                </div>
                <span className="hidden md:block text-6xl font-black text-white/5">
                  0{catIndex + 1}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item) => (
                  <AnimatedCard key={item.slug} item={item} route={cat.route} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-sandhu-red/5 via-transparent to-purple-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '20+', label: 'Pages' },
              { number: '1000+', label: 'Words Per Page' },
              { number: '16', label: 'Years Old' },
              { number: '1.5', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sandhu-red to-purple-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-sandhu-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sandhu-red/10 via-transparent to-purple-500/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            About SandhuNews
          </h2>
          <p className="text-sandhu-muted text-lg leading-relaxed mb-8">
            Founded by <span className="text-white font-semibold">Karandeep Singh Sandhu</span>, 
            a 16-year-old web developer from Lakkarwala, Punjab. Also founder of Alpha APK Store. 
            Building the future, one project at a time. This platform aims to provide comprehensive, 
            accurate, and detailed information about India and Punjab for global audiences.
          </p>
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 text-sandhu-red hover:text-white font-semibold transition-colors duration-300"
          >
            Read More <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}