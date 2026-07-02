import { useState, useEffect, useRef } from 'react'
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, connect to your backend or email service
    // For now, we simulate submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 5000)
  }

  return (
    <>
      <SEOHelmet 
        title="Contact Us - SandhuNews"
        description="Contact SandhuNews for news tips, corrections, partnerships, or general inquiries. Reach us via email at alphaapkstore@gmail.com or through our contact form."
        keywords="Contact SandhuNews, SandhuNews email, news tips, Punjab news contact, Karandeep Singh Sandhu contact"
      />
      
      <BackButton />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <Breadcrumb />
          
          <AnimatedSection>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-blue-400 font-medium">Get In Touch</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
                Contact <span className="text-blue-400">Us</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-sandhu-muted max-w-3xl mx-auto">
                Have a news tip, correction, or just want to say hello? We are here to listen.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            
            {/* Contact Form */}
            <AnimatedSection delay={100}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-sm">✉</span>
                    Send Us a Message
                  </h2>
                  
                  {submitted ? (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
                      <div className="text-4xl mb-4">✓</div>
                      <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-sandhu-muted">Thank you for reaching out. We will get back to you within 24-48 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-sandhu-muted mb-2">Your Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-sandhu-muted/50 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400/30 transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-sandhu-muted mb-2">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-sandhu-muted/50 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400/30 transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-sandhu-muted mb-2">Subject *</label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400/30 transition-all"
                        >
                          <option value="" className="bg-sandhu-dark">Select a subject</option>
                          <option value="news-tip" className="bg-sandhu-dark">News Tip / Story Idea</option>
                          <option value="correction" className="bg-sandhu-dark">Correction / Feedback</option>
                          <option value="partnership" className="bg-sandhu-dark">Partnership / Collaboration</option>
                          <option value="advertising" className="bg-sandhu-dark">Advertising Inquiry</option>
                          <option value="technical" className="bg-sandhu-dark">Technical Issue</option>
                          <option value="other" className="bg-sandhu-dark">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-sandhu-muted mb-2">Your Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-sandhu-muted/50 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400/30 transition-all resize-none"
                          placeholder="Tell us what's on your mind..."
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        Send Message →
                      </button>
                      
                      <p className="text-xs text-sandhu-muted text-center">
                        By submitting this form, you agree to our Privacy Policy. We respect your privacy and will never share your information.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </AnimatedSection>

            {/* FAQ Section */}
            <AnimatedSection delay={200}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 text-sm">?</span>
                    Frequently Asked Questions
                  </h2>
                  
                  <div className="space-y-4">
                    {[
                      {
                        q: 'How can I submit a news tip?',
                        a: 'Use the contact form above and select "News Tip" as the subject. Include as much detail as possible, including sources and any relevant links or images.'
                      },
                      {
                        q: 'How do I report an error in an article?',
                        a: 'Select "Correction / Feedback" in the form. Include the article title, the incorrect information, and the correct information with your source.'
                      },
                      {
                        q: 'Can I republish SandhuNews content?',
                        a: 'All content on SandhuNews is copyrighted. For republication requests, please contact us with details about your intended use.'
                      },
                      {
                        q: 'How do I advertise on SandhuNews?',
                        a: 'Select "Advertising Inquiry" in the form. We offer banner ads, sponsored content, and newsletter placements. Our team will respond with our media kit.'
                      },
                      {
                        q: 'What is your response time?',
                        a: 'We aim to respond to all inquiries within 24-48 hours during business days. For urgent news tips, please mark your subject accordingly.'
                      }
                    ].map((faq, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-amber-500/30 transition-all duration-300">
                        <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                        <p className="text-sandhu-muted text-sm">{faq.a}</p>
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
                {/* Direct Contact */}
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-500 mb-6">
                  <h3 className="text-lg font-bold text-white mb-6">Direct Contact</h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:alphaapkstore@gmail.com" 
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                    >
                      <span className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 text-lg group-hover:scale-110 transition-transform">✉</span>
                      <div>
                        <div className="text-white font-medium text-sm">Email</div>
                        <div className="text-sandhu-muted text-xs">alphaapkstore@gmail.com</div>
                      </div>
                    </a>
                    
                    <a 
                      href="https://youtube.com/@alphaapkstore" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                    >
                      <span className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 text-lg group-hover:scale-110 transition-transform">▶</span>
                      <div>
                        <div className="text-white font-medium text-sm">YouTube</div>
                        <div className="text-sandhu-muted text-xs">@alphaapkstore</div>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <span className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 text-lg">📍</span>
                      <div>
                        <div className="text-white font-medium text-sm">Address</div>
                        <div className="text-sandhu-muted text-xs">Lakkarwala, Ludhiana District, Punjab, India</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-6 mb-6">
                  <h4 className="text-white font-bold mb-3">Response Time</h4>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-white font-medium">Typically 24-48 hours</span>
                  </div>
                  <p className="text-sandhu-muted text-sm">
                    We respond to all inquiries during business days (Monday–Saturday). Urgent news tips are prioritized.
                  </p>
                </div>

                {/* Business Hours */}
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6">
                  <h4 className="text-white font-bold mb-3">Business Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-sandhu-muted">Monday – Saturday</span>
                      <span className="text-white">9:00 AM – 6:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sandhu-muted">Sunday</span>
                      <span className="text-sandhu-muted">Closed</span>
                    </div>
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