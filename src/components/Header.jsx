import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-sandhu-dark/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-sandhu-red/20 blur-xl rounded-full group-hover:bg-sandhu-red/40 transition-all duration-500"></div>
            <img src="/logo.png" alt="SandhuNews" className="h-10 w-auto relative z-10" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight group-hover:text-sandhu-red transition-colors duration-300">
              SANDHU<span className="text-sandhu-red">NEWS</span>
            </h1>
            <p className="text-xs text-sandhu-muted">By Karandeep Singh Sandhu</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex gap-8">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' }
          ].map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`relative text-sm font-medium transition-all duration-300 ${
                location.pathname === item.path 
                  ? 'text-sandhu-red' 
                  : 'text-sandhu-muted hover:text-white'
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sandhu-red rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}