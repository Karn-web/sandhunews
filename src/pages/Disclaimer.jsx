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

export default function Disclaimer() {
  return (
    <>
      <SEOHelmet 
        title="Disclaimer - SandhuNews"
        description="Disclaimer for SandhuNews. Read our legal disclaimers regarding content accuracy, financial advice, and third-party content."
        keywords="SandhuNews disclaimer, legal disclaimer, content accuracy, no liability"
      />
      
      <BackButton />
      
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[128px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <Breadcrumb />
          
          <AnimatedSection>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-amber-400 font-medium">Legal</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
                <span className="text-amber-400">Disclaimer</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-sandhu-muted max-w-3xl mx-auto">
                Important legal notices regarding the content on our website.
              </p>
              
              <div className="mt-6 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <span className="text-sandhu-muted text-sm">Last Updated:</span>
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
              <h2 className="text-2xl font-bold text-white mb-4">1. General Information Disclaimer</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  The information provided on <strong className="text-white">SandhuNews</strong> (the "Site") is for general informational and educational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the Site.
                </p>
                <p>
                  Any reliance you place on such information is strictly at your own risk. We encourage readers to verify information independently before making decisions based on content published on this Site.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">2. No Professional Advice</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  The content on SandhuNews does not constitute professional advice of any kind, including but not limited to:
                </p>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li><strong className="text-white">Financial Advice:</strong> Articles about the Indian economy, investments, or financial matters are for informational purposes only and should not be considered financial advice. Always consult a qualified financial advisor before making investment decisions.</li>
                  <li><strong className="text-white">Legal Advice:</strong> Content related to laws, regulations, or legal matters is not legal advice. Consult a licensed attorney for legal guidance.</li>
                  <li><strong className="text-white">Medical Advice:</strong> Any health-related information is not medical advice. Consult a healthcare professional for medical concerns.</li>
                  <li><strong className="text-white">Political Opinion:</strong> News coverage of political events is based on publicly available information and does not endorse any political party or candidate.</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">3. News Accuracy & Corrections</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  SandhuNews is committed to journalistic integrity and accuracy. However, news is dynamic and facts may change as events unfold. We:
                </p>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Make reasonable efforts to verify facts before publication</li>
                  <li>Clearly distinguish between news reporting and opinion/editorial content</li>
                  <li>Promptly correct errors when identified</li>
                  <li>Update articles when significant new information becomes available</li>
                </ul>
                <p>
                  Despite our best efforts, we cannot guarantee that all information is entirely accurate or current at all times. If you identify an error, please contact us at <a href="mailto:alphaapkstore@gmail.com" className="text-blue-400 hover:text-blue-300 underline">alphaapkstore@gmail.com</a>.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={250}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">4. External Links Disclaimer</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  The Site may contain links to external websites that are not provided or maintained by SandhuNews. We do not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party websites.
                </p>
                <p>
                  The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them. Visiting external links is at your own risk.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">5. Advertising Disclaimer</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  SandhuNews displays advertisements through Google AdSense and other third-party advertising networks. These advertisements are:
                </p>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Served by third-party vendors, including Google</li>
                  <li>Based on automated algorithms and user browsing behavior</li>
                  <li>Not necessarily endorsed or verified by SandhuNews</li>
                  <li>Subject to the advertiser's own terms and policies</li>
                </ul>
                <p>
                  We are not responsible for the content, accuracy, or practices of any advertisements displayed on our Site. Clicking on advertisements is at your own discretion and risk.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={350}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  In no event shall SandhuNews, its founder, or contributors be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from:
                </p>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Loss of data or profits arising from the use of this Site</li>
                  <li>Reliance on any information provided on the Site</li>
                  <li>Technical issues, viruses, or malware affecting your device</li>
                  <li>Actions taken based on content published on the Site</li>
                  <li>Third-party content, links, or advertisements</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">7. Fair Use & Copyright</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  SandhuNews respects intellectual property rights. We make every effort to:
                </p>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Use only content we have the right to publish</li>
                  <li>Provide proper attribution when referencing external sources</li>
                  <li>Comply with fair use guidelines for news reporting</li>
                  <li>Respond promptly to copyright concerns</li>
                </ul>
                <p>
                  If you believe your copyrighted material has been used improperly, please contact us with details and we will address the matter promptly.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={450}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Disclaimer</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  We may update this Disclaimer from time to time. Changes will be effective immediately upon posting on this page with an updated "Last Updated" date.
                </p>
                <p>
                  We encourage you to review this Disclaimer periodically to stay informed about our legal notices.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <div className="relative bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  If you have any questions or concerns about this Disclaimer, please contact us:
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

          <AnimatedSection delay={550}>
            <div className="text-center py-8 border-t border-white/10">
              <p className="text-sandhu-muted text-sm">
                By using SandhuNews, you acknowledge that you have read, understood, and agree to this Disclaimer.
              </p>
              <p className="text-sandhu-muted text-sm mt-2">
                © 2025-2026 SandhuNews. All rights reserved.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}