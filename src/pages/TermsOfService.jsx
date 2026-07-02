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

export default function TermsOfService() {
  return (
    <>
      <SEOHelmet 
        title="Terms of Service - SandhuNews"
        description="Terms of Service for SandhuNews. Read our terms and conditions for using our website, including content usage, disclaimers, and liability limitations."
        keywords="SandhuNews terms, terms of service, terms and conditions, website terms"
      />
      
      <BackButton />
      
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[128px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <Breadcrumb />
          
          <AnimatedSection>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-green-400 font-medium">Legal</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
                Terms of <span className="text-green-400">Service</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-sandhu-muted max-w-3xl mx-auto">
                Please read these terms carefully before using our website.
              </p>
              
              <div className="mt-6 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <span className="text-sandhu-muted text-sm">Effective Date:</span>
                <span className="text-white font-medium text-sm">July 1, 2026</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative max-w-4xl mx-auto px-4 pb-24">
        <div className="space-y-8">
          
          <AnimatedSection delay={100}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  By accessing or using <strong className="text-white">SandhuNews</strong> (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not access or use the Site.
                </p>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the Site. Your continued use of the Site after changes constitutes acceptance of the revised Terms.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">2. Use of the Site</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>You agree to use the Site only for lawful purposes and in accordance with these Terms. You must not:</p>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Use the Site in any way that violates applicable laws or regulations</li>
                  <li>Attempt to interfere with the proper working of the Site</li>
                  <li>Introduce malicious software, viruses, or harmful code</li>
                  <li>Scrape, crawl, or otherwise extract data from the Site without permission</li>
                  <li>Impersonate any person or entity</li>
                  <li>Engage in any activity that disrupts or interferes with the Site</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  All content on SandhuNews, including articles, images, graphics, logos, and software, is the property of SandhuNews or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may view, download, and print content from the Site for personal, non-commercial use only. You must not:
                </p>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Reproduce, distribute, or publicly display any content without written permission</li>
                  <li>Modify or create derivative works from any content</li>
                  <li>Use any content for commercial purposes without authorization</li>
                  <li>Remove any copyright or proprietary notices from content</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={250}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">4. User-Generated Content</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  If you submit any content to us (including comments, feedback, or suggestions), you grant SandhuNews a non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, modify, and distribute such content.
                </p>
                <p>
                  You represent and warrant that any content you submit does not violate the rights of any third party and complies with all applicable laws.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer of Warranties</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  The Site and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. SandhuNews does not warrant that:
                </p>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>The Site will be uninterrupted, timely, secure, or error-free</li>
                  <li>The content is accurate, complete, reliable, or current</li>
                  <li>Any errors in the Site will be corrected</li>
                </ul>
                <p>
                  While we strive for accuracy, news and information are subject to change. We are not responsible for any errors or omissions in the content.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={350}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  To the fullest extent permitted by law, SandhuNews and its founder shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Site.
                </p>
                <p>
                  This includes damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Links</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  The Site may contain links to third-party websites or services that are not owned or controlled by SandhuNews. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.
                </p>
                <p>
                  We strongly advise you to read the terms and conditions and privacy policies of any third-party sites you visit.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={450}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">8. Advertising</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  SandhuNews displays advertisements through Google AdSense and potentially other third-party advertising networks. These third parties may use cookies and similar technologies to serve ads based on your browsing history.
                </p>
                <p>
                  We are not responsible for the content of advertisements displayed on our Site. Clicking on advertisements is at your own risk, and we encourage you to review the advertiser's terms and policies.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Ludhiana, Punjab, India.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={550}>
            <div className="relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  If you have any questions about these Terms, please contact us:
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
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div className="text-center py-8 border-t border-white/10">
              <p className="text-sandhu-muted text-sm">
                © 2025-2026 SandhuNews. All rights reserved.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}