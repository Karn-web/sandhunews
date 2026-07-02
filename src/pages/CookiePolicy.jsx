import { useEffect, useRef, useState } from 'react'
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

export default function CookiePolicy() {
  const [activeTab, setActiveTab] = useState('essential')

  const cookieTypes = {
    essential: {
      title: 'Essential Cookies',
      icon: '🔒',
      color: 'green',
      description: 'Necessary for the website to function properly. These cannot be disabled.',
      cookies: [
        { name: 'session_id', purpose: 'Maintains your session state', duration: 'Session' },
        { name: 'cookie_consent', purpose: 'Stores your cookie preferences', duration: '1 year' },
        { name: 'csrf_token', purpose: 'Security token for form submissions', duration: 'Session' },
      ]
    },
    analytics: {
      title: 'Analytics Cookies',
      icon: '📊',
      color: 'blue',
      description: 'Help us understand how visitors interact with our website.',
      cookies: [
        { name: '_ga', purpose: 'Google Analytics - distinguishes users', duration: '2 years' },
        { name: '_gid', purpose: 'Google Analytics - distinguishes users', duration: '24 hours' },
        { name: '_gat', purpose: 'Google Analytics - throttles request rate', duration: '1 minute' },
        { name: '_ga_*', purpose: 'Google Analytics 4 - persists session state', duration: '2 years' },
      ]
    },
    advertising: {
      title: 'Advertising Cookies',
      icon: '📢',
      color: 'amber',
      description: 'Used by Google AdSense to deliver relevant ads and measure performance.',
      cookies: [
        { name: '__gads', purpose: 'Google AdSense - measures ad performance', duration: '13 months' },
        { name: '__gpi', purpose: 'Google AdSense - stores user preferences', duration: '13 months' },
        { name: 'IDE', purpose: 'Google DoubleClick - ad delivery', duration: '1 year' },
        { name: 'test_cookie', purpose: 'Google - checks if browser accepts cookies', duration: '15 minutes' },
        { name: 'NID', purpose: 'Google - stores user preferences', duration: '6 months' },
      ]
    },
    functional: {
      title: 'Functional Cookies',
      icon: '⚙️',
      color: 'purple',
      description: 'Enable enhanced functionality and personalization.',
      cookies: [
        { name: 'theme_preference', purpose: 'Stores your dark/light mode preference', duration: '1 year' },
        { name: 'language', purpose: 'Remembers your language selection', duration: '1 year' },
      ]
    }
  }

  const colorClasses = {
    green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', dot: 'bg-green-400' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', dot: 'bg-blue-400' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', dot: 'bg-amber-400' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', dot: 'bg-purple-400' },
  }

  return (
    <>
      <SEOHelmet 
        title="Cookie Policy - SandhuNews"
        description="SandhuNews Cookie Policy. Learn about the cookies we use, including Google AdSense cookies, and how to manage your cookie preferences."
        keywords="SandhuNews cookie policy, cookies, Google AdSense cookies, cookie consent, GDPR cookies"
      />
      
      <BackButton />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[128px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <Breadcrumb />
          
          <AnimatedSection>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-orange-400 font-medium">Cookies</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
                Cookie <span className="text-orange-400">Policy</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-sandhu-muted max-w-3xl mx-auto">
                Transparency about the cookies we use and how they improve your experience.
              </p>
              
              <div className="mt-6 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <span className="text-sandhu-muted text-sm">Last Updated:</span>
                <span className="text-white font-medium text-sm">July 1, 2026</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative max-w-4xl mx-auto px-4 pb-24">
        <div className="space-y-8">
          
          {/* Introduction */}
          <AnimatedSection delay={100}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners.
                </p>
                <p>
                  At <strong className="text-white">SandhuNews</strong>, we use cookies to enhance your browsing experience, analyze site traffic, personalize content, and serve relevant advertisements through <strong className="text-white">Google AdSense</strong>.
                </p>
                <p>
                  This Cookie Policy explains what cookies we use, why we use them, and how you can manage your cookie preferences. This policy works alongside our <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* How We Use Cookies */}
          <AnimatedSection delay={150}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>We use cookies for the following purposes:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Essential Functionality
                    </h3>
                    <p className="text-sm text-sandhu-muted">To enable core website features like navigation, security, and accessibility.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Performance & Analytics
                    </h3>
                    <p className="text-sm text-sandhu-muted">To understand how visitors interact with our site and improve user experience.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                      Advertising
                    </h3>
                    <p className="text-sm text-sandhu-muted">To deliver personalized ads through Google AdSense and measure ad performance.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Personalization
                    </h3>
                    <p className="text-sm text-sandhu-muted">To remember your preferences and provide a customized experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Cookie Types Tabs */}
          <AnimatedSection delay={200}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
              
              {/* Tab Buttons */}
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(cookieTypes).map(([key, type]) => {
                  const colors = colorClasses[type.color]
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        activeTab === key
                          ? `${colors.bg} ${colors.border} ${colors.text} border`
                          : 'bg-white/5 border border-white/10 text-sandhu-muted hover:text-white hover:border-white/20'
                      }`}
                    >
                      <span>{type.icon}</span>
                      <span>{type.title}</span>
                    </button>
                  )
                })}
              </div>

              {/* Active Tab Content */}
              {(() => {
                const type = cookieTypes[activeTab]
                const colors = colorClasses[type.color]
                return (
                  <div className={`${colors.bg} border ${colors.border} rounded-2xl p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{type.icon}</span>
                      <div>
                        <h3 className="text-white font-bold text-lg">{type.title}</h3>
                        <p className="text-sandhu-muted text-sm">{type.description}</p>
                      </div>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-3 px-4 text-sandhu-muted font-medium">Cookie Name</th>
                            <th className="text-left py-3 px-4 text-sandhu-muted font-medium">Purpose</th>
                            <th className="text-left py-3 px-4 text-sandhu-muted font-medium">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {type.cookies.map((cookie, i) => (
                            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                              <td className="py-3 px-4">
                                <code className="bg-white/10 px-2 py-1 rounded text-xs text-white">{cookie.name}</code>
                              </td>
                              <td className="py-3 px-4 text-sandhu-text">{cookie.purpose}</td>
                              <td className="py-3 px-4">
                                <span className={`inline-flex items-center gap-1.5 ${colors.text}`}>
                                  <span className={`w-1.5 h-1.5 ${colors.dot} rounded-full`}></span>
                                  {cookie.duration}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )
              })()}
            </div>
          </AnimatedSection>

          {/* Google AdSense Cookies */}
          <AnimatedSection delay={250}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-lg border border-amber-500/30 rounded-3xl p-8 hover:border-amber-500/50 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 text-lg">G</span>
                  <h2 className="text-2xl font-bold text-white">Google AdSense Cookies</h2>
                </div>
                
                <div className="text-sandhu-text leading-relaxed space-y-4">
                  <p>
                    SandhuNews uses <strong className="text-white">Google AdSense</strong> to display advertisements. Google and its partners use cookies to serve ads based on your prior visits to our website and other websites on the Internet.
                  </p>
                  
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 space-y-3">
                    <h3 className="text-amber-400 font-semibold">How Google Uses Cookies for Advertising</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>Google uses cookies to determine which ads to show you based on your interests and browsing history.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>Cookies help measure ad performance, such as how many times an ad was shown and whether it was clicked.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>Google may combine information from cookies with other data it has about you from other Google services.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website.</span>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-white font-semibold mt-4">Google's Advertising Cookies Include:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { name: '__gads', desc: 'Measures ad performance and frequency capping' },
                      { name: '__gpi', desc: 'Stores user preferences for ad personalization' },
                      { name: 'IDE', desc: 'Used by Google DoubleClick for ad delivery' },
                      { name: 'NID', desc: 'Stores user preferences and settings' },
                      { name: 'test_cookie', desc: 'Checks if browser accepts cookies' },
                      { name: '1P_JAR', desc: 'Gathers website statistics and conversion rates' },
                    ].map((c, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3">
                        <code className="text-amber-400 text-xs">{c.name}</code>
                        <p className="text-sandhu-muted text-xs mt-1">{c.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mt-4">
                    <p className="text-sm text-sandhu-text">
                      <strong className="text-white">Opt Out:</strong> You can opt out of personalized advertising by visiting{' '}
                      <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Google Ads Settings</a>{' '}
                      or the{' '}
                      <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Network Advertising Initiative Opt-Out Page</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Third-Party Cookies */}
          <AnimatedSection delay={300}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and improve our services. These include:
                </p>
                <div className="space-y-3">
                  {[
                    { name: 'Google Analytics', purpose: 'Website traffic analysis and user behavior tracking', link: 'https://policies.google.com/privacy' },
                    { name: 'Google AdSense', purpose: 'Ad serving, personalization, and performance measurement', link: 'https://policies.google.com/technologies/ads' },
                    { name: 'Google DoubleClick', purpose: 'Ad delivery and conversion tracking', link: 'https://policies.google.com/privacy' },
                  ].map((tp, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                      <span className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
                      <div>
                        <h3 className="text-white font-semibold">{tp.name}</h3>
                        <p className="text-sandhu-muted text-sm">{tp.purpose}</p>
                        <a href={tp.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs underline mt-1 inline-block">
                          View Privacy Policy →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Managing Cookies */}
          <AnimatedSection delay={350}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">How to Manage Your Cookies</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="text-lg">🌐</span>
                      Browser Settings
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                          Google Chrome
                        </a>
                      </li>
                      <li>
                        <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                          Mozilla Firefox
                        </a>
                      </li>
                      <li>
                        <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                          Apple Safari
                        </a>
                      </li>
                      <li>
                        <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                          Microsoft Edge
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="text-lg">🚫</span>
                      Opt-Out Tools
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                          Google Ads Settings
                        </a>
                      </li>
                      <li>
                        <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                          NAI Opt-Out
                        </a>
                      </li>
                      <li>
                        <a href="https://optout.aboutads.info/?c=2&lang=EN" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                          Your Online Choices
                        </a>
                      </li>
                      <li>
                        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                          Google Analytics Opt-Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 mt-4">
                  <p className="text-sm text-sandhu-text">
                    <strong className="text-white">⚠️ Note:</strong> If you disable cookies, some features of our website may not function properly. Essential cookies cannot be disabled as they are necessary for the website to operate.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Cookie Consent */}
          <AnimatedSection delay={400}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">Your Cookie Consent</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  When you first visit SandhuNews, you will see a cookie consent banner asking for your permission to use non-essential cookies. You can:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">✓</div>
                    <h3 className="text-white font-semibold text-sm mb-1">Accept All</h3>
                    <p className="text-sandhu-muted text-xs">Allow all cookies including analytics and advertising</p>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">⚙️</div>
                    <h3 className="text-white font-semibold text-sm mb-1">Customize</h3>
                    <p className="text-sandhu-muted text-xs">Choose which cookie types you want to allow</p>
                  </div>
                  <div className="bg-sandhu-red/10 border border-sandhu-red/30 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">✕</div>
                    <h3 className="text-white font-semibold text-sm mb-1">Essential Only</h3>
                    <p className="text-sandhu-muted text-xs">Only allow cookies necessary for the site to function</p>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  You can change your cookie preferences at any time by clearing your browser cookies and revisiting our site, or by using the browser settings described above.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Changes to Policy */}
          <AnimatedSection delay={450}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Cookie Policy</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. When we make changes, we will:
                </p>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Update the "Last Updated" date at the top of this page</li>
                  <li>Post a notice on our website for significant changes</li>
                  <li>Request renewed cookie consent if necessary</li>
                </ul>
                <p>
                  We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection delay={500}>
            <div className="relative bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us About Cookies</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-sm">✉</span>
                    <span className="text-white">Email: <a href="mailto:alphaapkstore@gmail.com" className="text-blue-400 hover:text-blue-300 underline">alphaapkstore@gmail.com</a></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 text-sm">📍</span>
                    <span className="text-white">Address: Lakkarwala, Ludhiana District, Punjab, India</span>
                  </div>
                </div>
                <p className="text-sm text-sandhu-muted">
                  We will respond to your cookie-related inquiries within 48 hours.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Related Policies */}
          <AnimatedSection delay={550}>
            <div className="text-center py-8 border-t border-white/10">
              <p className="text-sandhu-muted text-sm mb-4">
                This Cookie Policy is part of our broader legal framework. Please also review:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline text-sm">Privacy Policy</a>
                <span className="text-sandhu-muted">•</span>
                <a href="/terms-of-service" className="text-blue-400 hover:text-blue-300 underline text-sm">Terms of Service</a>
                <span className="text-sandhu-muted">•</span>
                <a href="/disclaimer" className="text-blue-400 hover:text-blue-300 underline text-sm">Disclaimer</a>
              </div>
              <p className="text-sandhu-muted text-sm mt-4">
                © 2025-2026 SandhuNews. All rights reserved.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}