import { useEffect, useRef } from 'react'
import SEOHelmet from '../components/SEOHelmet'
import Breadcrumb from '../components/Breadcrumb'
import BackButton from '../components/BackButton'

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null)
  
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
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={ref} 
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function About() {
  return (
    <>
      <SEOHelmet 
        title="About Us - SandhuNews"
        description="SandhuNews is your trusted source for Punjab and India news. Founded by Karandeep Singh Sandhu, we cover current affairs, politics, sports, technology, and culture."
        keywords="SandhuNews, About SandhuNews, Karandeep Singh Sandhu, Punjab news, India news"
      />
      
      <BackButton />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sandhu-red/10 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-sandhu-red/5 rounded-full blur-[128px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <Breadcrumb />
          
          <AnimatedSection>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-sandhu-red/10 border border-sandhu-red/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-sandhu-red rounded-full animate-pulse"></span>
                <span className="text-sm text-sandhu-red font-medium">Who We Are</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
                About <span className="text-sandhu-red">SandhuNews</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-sandhu-muted max-w-3xl mx-auto">
                Your trusted source for authentic Punjab and India news, powered by passion and driven by truth.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            
            {/* Our Story */}
            <AnimatedSection delay={100}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-sandhu-red/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-sandhu-red/20 rounded-lg flex items-center justify-center text-sandhu-red text-sm">01</span>
                    Our Story
                  </h2>
                  <div className="text-sandhu-text leading-relaxed text-lg space-y-4">
                    <p>
                      <strong className="text-white">SandhuNews</strong> was founded in 2025 by <strong className="text-white">Karandeep Singh Sandhu</strong>, a 16-year-old web developer and entrepreneur from Lakkarwala, Punjab, India. What started as a passion project to create a dedicated platform for Punjab and India news has grown into a comprehensive digital publication serving thousands of readers.
                    </p>
                    <p>
                      Our mission is simple: deliver accurate, timely, and unbiased news coverage about Punjab, India, and topics that matter to our community. From current affairs and politics to sports, technology, entertainment, and culture — we cover it all with depth and integrity.
                    </p>
                    <p>
                      Unlike many news aggregators, every article on SandhuNews is carefully researched and written by our team. We believe in the power of original journalism and the responsibility that comes with informing the public.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Editorial Standards */}
            <AnimatedSection delay={200}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-sm">02</span>
                    Editorial Standards & Fact-Checking
                  </h2>
                  <div className="text-sandhu-text leading-relaxed text-lg space-y-4">
                    <p>
                      At SandhuNews, we maintain the highest standards of journalistic integrity. Our editorial process includes:
                    </p>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                        <span><strong className="text-white">Source Verification:</strong> Every claim is backed by credible sources including government records, official statements, and reputable publications.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                        <span><strong className="text-white">Fact-Checking Protocol:</strong> All articles undergo a rigorous fact-checking process before publication.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                        <span><strong className="text-white">Transparency:</strong> We clearly distinguish between news reporting and opinion pieces.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                        <span><strong className="text-white">Correction Policy:</strong> Errors are corrected promptly with clear disclosure of changes made.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* What We Cover */}
            <AnimatedSection delay={300}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 text-sm">03</span>
                    What We Cover
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: 'Current Affairs', desc: 'Punjab farmers protest, political developments, policy changes', icon: '📰' },
                      { title: 'Space & Science', desc: 'ISRO missions, scientific breakthroughs, technology news', icon: '🚀' },
                      { title: 'Sports', desc: 'Indian cricket, IPL, hockey, kabaddi, and more', icon: '🏏' },
                      { title: 'Finance & Economy', desc: 'Indian economy, stock market, business news', icon: '💰' },
                      { title: 'Entertainment', desc: 'Punjabi music, Bollywood, celebrity news', icon: '🎵' },
                      { title: 'Technology', desc: 'Digital India, startups, AI, innovation', icon: '💻' }
                    ].map((item, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-green-500/30 transition-all duration-300">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-sandhu-muted text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Our Team */}
            <AnimatedSection delay={400}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 text-sm">04</span>
                    Our Team
                  </h2>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-sandhu-red to-purple-600 rounded-2xl flex items-center justify-center text-3xl font-black text-white flex-shrink-0">
                      KS
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Karandeep Singh Sandhu</h3>
                      <p className="text-sandhu-red font-medium mb-2">Founder, Editor-in-Chief & Lead Developer</p>
                      <p className="text-sandhu-text text-sm leading-relaxed">
                        A 16-year-old entrepreneur from Lakkarwala, Punjab, Karandeep founded SandhuNews and Alpha APK Store. With expertise in React, Node.js, Supabase, and Cloudflare, he built this platform from scratch. His deep understanding of Punjab's culture and India's digital landscape drives SandhuNews's editorial direction.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {['React Developer', 'SEO Specialist', 'Punjab Expert', 'Entrepreneur'].map(skill => (
                          <span key={skill} className="bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-lg text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Why Trust Us */}
            <AnimatedSection delay={500}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 text-sm">05</span>
                    Why Trust SandhuNews?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { num: '25+', label: 'In-Depth Articles', desc: 'Original researched content' },
                      { num: '100%', label: 'Original Content', desc: 'No copy-paste, all hand-written' },
                      { num: 'Daily', label: 'Updates', desc: 'Fresh content regularly' }
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                        <div className="text-3xl font-black text-sandhu-red mb-1">{stat.num}</div>
                        <div className="text-white font-semibold text-sm">{stat.label}</div>
                        <div className="text-sandhu-muted text-xs">{stat.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AnimatedSection delay={150}>
              <div className="sticky top-24">
                {/* Quick Info */}
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-500 mb-6">
                  <h3 className="text-lg font-bold text-white mb-6">Publication Info</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sandhu-muted text-sm">Founded</span>
                      <span className="text-white font-medium">2025</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sandhu-muted text-sm">Founder</span>
                      <span className="text-white font-medium">Karandeep Singh Sandhu</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sandhu-muted text-sm">Location</span>
                      <span className="text-white font-medium text-right">Lakkarwala, Punjab, India</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sandhu-muted text-sm">Language</span>
                      <span className="text-white font-medium">English</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sandhu-muted text-sm">Updated</span>
                      <span className="text-white font-medium">July 2026</span>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="relative bg-gradient-to-br from-sandhu-red/10 to-purple-500/10 border border-white/10 rounded-3xl p-6 mb-6">
                  <h4 className="text-white font-bold mb-3">Get In Touch</h4>
                  <p className="text-sandhu-muted text-sm mb-4">
                    Have a news tip, correction, or partnership inquiry? We would love to hear from you.
                  </p>
                  <a 
                    href="mailto:alphaapkstore@gmail.com" 
                    className="inline-flex items-center gap-2 bg-sandhu-red hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                  >
                    Contact Us →
                  </a>
                </div>

                {/* Social Proof */}
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6">
                  <h4 className="text-white font-bold mb-3">Follow Us</h4>
                  <div className="space-y-3">
                    <a href="https://youtube.com/@alphaapkstore" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                      <span className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 text-xs">▶</span>
                      <div>
                        <div className="text-white text-sm font-medium">YouTube</div>
                        <div className="text-sandhu-muted text-xs">@alphaapkstore</div>
                      </div>
                    </a>
                    <a href="mailto:alphaapkstore@gmail.com" className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                      <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-xs">✉</span>
                      <div>
                        <div className="text-white text-sm font-medium">Email</div>
                        <div className="text-sandhu-muted text-xs">alphaapkstore@gmail.com</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
