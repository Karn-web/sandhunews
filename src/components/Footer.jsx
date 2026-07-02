import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-sandhu-dark/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-black text-white tracking-tight">
              Sandhu<span className="text-sandhu-red">News</span>
            </Link>
            <p className="text-sandhu-muted text-sm mt-3 leading-relaxed">
              Your trusted source for Punjab and India news.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a 
                href="https://youtube.com/@alphaapkstore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-sandhu-muted hover:text-red-400 hover:border-red-400/30 transition-all"
              >
                YT
              </a>
              <a 
                href="mailto:alphaapkstore@gmail.com"
                className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-sandhu-muted hover:text-blue-400 hover:border-blue-400/30 transition-all"
              >
                EM
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sandhu-muted text-sm hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sandhu-muted text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sandhu-muted text-sm hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-sandhu-muted text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Topics</h4>
            <ul className="space-y-2">
              <li><Link to="/topic/punjab-farmers-protest" className="text-sandhu-muted text-sm hover:text-white transition-colors">Punjab Farmers</Link></li>
              <li><Link to="/topic/isro-missions" className="text-sandhu-muted text-sm hover:text-white transition-colors">ISRO Missions</Link></li>
              <li><Link to="/topic/indian-cricket" className="text-sandhu-muted text-sm hover:text-white transition-colors">Indian Cricket</Link></li>
              <li><Link to="/topic/indian-economy" className="text-sandhu-muted text-sm hover:text-white transition-colors">Indian Economy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-sandhu-muted text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-sandhu-muted text-sm hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sandhu-muted text-sm hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-sandhu-muted text-sm hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sandhu-muted text-sm">
            &copy; 2025-2026 <span className="text-white">SandhuNews</span>. All rights reserved.
          </p>
          <p className="text-sandhu-muted text-sm">
            Founded by <span className="text-white">Karandeep Singh Sandhu</span> - Lakkarwala, Punjab, India
          </p>
        </div>
      </div>
    </footer>
  )
}