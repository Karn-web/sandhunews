import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('sandhunews-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('sandhunews-cookie-consent', JSON.stringify({
      essential: true,
      analytics: true,
      advertising: true,
      functional: true,
      timestamp: new Date().toISOString()
    }))
    setShow(false)
  }

  const acceptEssential = () => {
    localStorage.setItem('sandhunews-cookie-consent', JSON.stringify({
      essential: true,
      analytics: false,
      advertising: false,
      functional: false,
      timestamp: new Date().toISOString()
    }))
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-sandhu-card/95 backdrop-blur-xl border-t border-white/10 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">[🍪]</span>
          <div>
            <p className="text-white text-sm font-medium mb-1">
              We value your privacy
            </p>
            <p className="text-sandhu-muted text-xs leading-relaxed">
              We use cookies to enhance your experience and serve personalized ads via Google AdSense.
              By clicking "Accept All", you consent to our use of cookies.
              <a href="/cookie-policy" className="text-blue-400 hover:text-blue-300 underline ml-1">
                Learn more
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button 
            onClick={acceptEssential}
            className="text-sandhu-muted hover:text-white text-xs px-3 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-all"
          >
            Essential Only
          </button>
          <button 
            onClick={acceptAll}
            className="bg-sandhu-red hover:bg-red-600 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}