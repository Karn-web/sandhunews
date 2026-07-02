import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Home from './pages/Home'
import TopicPage from './pages/TopicPage'
import PersonPage from './pages/PersonPage'
import PlacePage from './pages/PlacePage'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import TermsOfService from './pages/TermsOfService'
import Disclaimer from './pages/Disclaimer'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-black text-white/10 mb-4">404</h1>
        <p className="text-sandhu-muted text-xl mb-6">Page not found</p>
        <a href="/" className="inline-flex items-center gap-2 bg-sandhu-red text-white px-6 py-3 rounded-xl font-medium hover:bg-red-600 transition-colors">
          Go Home
        </a>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-sandhu-dark text-sandhu-text">
      <CookieConsent />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/cookies" element={<Navigate to="/cookie-policy" replace />} />
          <Route path="/terms" element={<Navigate to="/terms-of-service" replace />} />
          <Route path="/tos" element={<Navigate to="/terms-of-service" replace />} />
          <Route path="/topic/:slug" element={<TopicPage />} />
          <Route path="/person/:slug" element={<PersonPage />} />
          <Route path="/place/:slug" element={<PlacePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App