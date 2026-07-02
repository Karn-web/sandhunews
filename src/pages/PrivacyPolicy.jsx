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

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHelmet 
        title="Privacy Policy - SandhuNews"
        description="SandhuNews Privacy Policy. Learn how we collect, use, and protect your personal information. Includes Google AdSense cookie disclosures and GDPR compliance."
        keywords="SandhuNews privacy policy, cookie policy, Google AdSense privacy, data protection, GDPR"
      />
      
      <BackButton />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[128px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <Breadcrumb />
          
          <AnimatedSection>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-purple-400 font-medium">Legal</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
                Privacy <span className="text-purple-400">Policy</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-sandhu-muted max-w-3xl mx-auto">
                Your privacy matters to us. Learn how we collect, use, and protect your information.
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
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  Welcome to <strong className="text-white">SandhuNews</strong> ("we," "our," or "us"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong className="text-white">sandhunews.com</strong> (the "Site").
                </p>
                <p>
                  By accessing or using our Site, you agree to the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our Site.
                </p>
                <p>
                  This Privacy Policy complies with the <strong className="text-white">General Data Protection Regulation (GDPR)</strong>, the <strong className="text-white">California Consumer Privacy Act (CCPA)</strong>, and other applicable privacy laws. It also meets all requirements set forth by <strong className="text-white">Google AdSense</strong> for publishers.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Information We Collect */}
          <AnimatedSection delay={150}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>We may collect the following types of information:</p>
                
                <h3 className="text-white font-semibold mt-4 mb-2">2.1 Personal Information You Provide</h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li><strong className="text-white">Name:</strong> When you contact us via our contact form</li>
                  <li><strong className="text-white">Email Address:</strong> For responding to your inquiries</li>
                  <li><strong className="text-white">Message Content:</strong> The details you provide in contact forms</li>
                </ul>

                <h3 className="text-white font-semibold mt-4 mb-2">2.2 Automatically Collected Information</h3>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li><strong className="text-white">IP Address:</strong> Used for analytics and security purposes</li>
                  <li><strong className="text-white">Browser Type & Version:</strong> To optimize your experience</li>
                  <li><strong className="text-white">Device Information:</strong> Operating system, screen resolution</li>
                  <li><strong className="text-white">Usage Data:</strong> Pages visited, time spent, click patterns</li>
                  <li><strong className="text-white">Location Data:</strong> General geographic location (country/region)</li>
                  <li><strong className="text-white">Referral Source:</strong> How you arrived at our Site</li>
                </ul>

                <h3 className="text-white font-semibold mt-4 mb-2">2.3 Cookies and Similar Technologies</h3>
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and serve personalized advertisements. For detailed information, please see our <strong className="text-white">Cookie Policy</strong> section below.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* How We Use Your Information */}
          <AnimatedSection delay={200}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <span><strong className="text-white">Provide and Maintain Services:</strong> To operate our website and deliver the content you request.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <span><strong className="text-white">Communicate With You:</strong> To respond to your inquiries, feedback, or contact form submissions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <span><strong className="text-white">Analytics:</strong> To understand how visitors use our Site and improve our content and user experience.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                    <span><strong className="text-white">Advertising:</strong> To display relevant advertisements through Google AdSense and other third-party advertising networks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0 mt-0.5">5</span>
                    <span><strong className="text-white">Security:</strong> To detect and prevent fraud, spam, and unauthorized access.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0 mt-0.5">6</span>
                    <span><strong className="text-white">Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Google AdSense Disclosure */}
          <AnimatedSection delay={250}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-lg border border-amber-500/30 rounded-3xl p-8 hover:border-amber-500/50 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 text-lg">G</span>
                  <h2 className="text-2xl font-bold text-white">4. Google AdSense & Advertising</h2>
                </div>
                
                <div className="text-sandhu-text leading-relaxed space-y-4">
                  <p>
                    SandhuNews uses <strong className="text-white">Google AdSense</strong> to serve advertisements on our website. Google AdSense is a program run by Google that allows publishers to serve automatic text, image, video, or interactive media advertisements targeted to site content and audience.
                  </p>
                  
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
                    <h3 className="text-amber-400 font-semibold mb-3">How Google Uses Your Data for Advertising</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>Third-party vendors, including <strong className="text-white">Google</strong>, use cookies to serve ads based on a user's prior visits to our website or other websites.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>Google may use <strong className="text-white">DoubleClick cookies</strong> (also known as DART cookies) to serve ads based on your visit to our Site and other sites on the Internet.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>Google AdSense may collect your <strong className="text-white">IP address</strong>, browser information, device information, and browsing behavior to deliver personalized advertisements.</span>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-white font-semibold mt-4">Opting Out of Personalized Advertising</h3>
                  <p>
                    You can opt out of personalized advertising by Google by visiting the following links:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                        Google Ads Settings
                      </a>
                    </li>
                    <li>
                      <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                        Network Advertising Initiative Opt-Out Page
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/policies/technologies/ads/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                        Google Advertising Technologies
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-white font-semibold mt-4">Third-Party Advertising Partners</h3>
                  <p>
                    We may partner with other third-party advertising networks in addition to Google AdSense. These partners may use cookies, web beacons, and similar technologies to collect information about your visits to our Site and other websites to provide targeted advertisements.
                  </p>
                  <p className="text-sm">
                    We do not have access to or control over cookies or other tracking technologies used by third-party advertisers. We encourage you to review the privacy policies of these third parties for more information.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Cookie Policy */}
          <AnimatedSection delay={300}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">5. Cookie Policy</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  Cookies are small text files stored on your device when you visit a website. We use cookies for various purposes, including:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Essential Cookies
                    </h3>
                    <p className="text-sm text-sandhu-muted">Necessary for the website to function properly. These cannot be disabled.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Analytics Cookies
                    </h3>
                    <p className="text-sm text-sandhu-muted">Help us understand how visitors interact with our website.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                      Advertising Cookies
                    </h3>
                    <p className="text-sm text-sandhu-muted">Used by Google AdSense to deliver relevant ads and measure ad performance.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Functional Cookies
                    </h3>
                    <p className="text-sm text-sandhu-muted">Enable enhanced functionality and personalization.</p>
                  </div>
                </div>

                <h3 className="text-white font-semibold mt-4">Managing Your Cookie Preferences</h3>
                <p>
                  You can manage your cookie preferences through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality of our Site.
                </p>
                <ul className="space-y-2 ml-4 mt-2">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline text-sm">
                      Google Chrome Cookie Settings
                    </a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline text-sm">
                      Mozilla Firefox Cookie Settings
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline text-sm">
                      Safari Cookie Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Data Sharing */}
          <AnimatedSection delay={350}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">6. How We Share Your Information</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-sandhu-red/20 rounded-full flex items-center justify-center text-sandhu-red text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <span><strong className="text-white">Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website (e.g., hosting providers, analytics services).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-sandhu-red/20 rounded-full flex items-center justify-center text-sandhu-red text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <span><strong className="text-white">Advertising Partners:</strong> As described in Section 4, we share information with Google AdSense and other advertising networks for targeted advertising purposes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-sandhu-red/20 rounded-full flex items-center justify-center text-sandhu-red text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <span><strong className="text-white">Legal Requirements:</strong> We may disclose information if required by law, court order, or government regulation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-sandhu-red/20 rounded-full flex items-center justify-center text-sandhu-red text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                    <span><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Data Security */}
          <AnimatedSection delay={400}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">7. Data Security</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Secure hosting infrastructure</li>
                </ul>
                <p>
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Your Rights */}
          <AnimatedSection delay={450}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">8. Your Privacy Rights</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2">Right to Access</h3>
                    <p className="text-sm text-sandhu-muted">Request a copy of the personal information we hold about you.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2">Right to Rectification</h3>
                    <p className="text-sm text-sandhu-muted">Request correction of inaccurate or incomplete information.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2">Right to Erasure</h3>
                    <p className="text-sm text-sandhu-muted">Request deletion of your personal information ("right to be forgotten").</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2">Right to Object</h3>
                    <p className="text-sm text-sandhu-muted">Object to processing of your personal information, including for direct marketing.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2">Right to Restrict</h3>
                    <p className="text-sm text-sandhu-muted">Request restriction of processing under certain circumstances.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-2">Right to Portability</h3>
                    <p className="text-sm text-sandhu-muted">Receive your data in a structured, machine-readable format.</p>
                  </div>
                </div>

                <p className="mt-4">
                  To exercise any of these rights, please contact us at <a href="mailto:alphaapkstore@gmail.com" className="text-blue-400 hover:text-blue-300 underline">alphaapkstore@gmail.com</a>. We will respond to your request within 30 days.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Children's Privacy */}
          <AnimatedSection delay={500}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <a href="mailto:alphaapkstore@gmail.com" className="text-blue-400 hover:text-blue-300 underline">alphaapkstore@gmail.com</a>.
                </p>
                <p>
                  If we become aware that we have collected personal information from a child under 13 without verification of parental consent, we will take steps to remove that information from our servers.
                </p>
                <p>
                  <strong className="text-white">Note for Google AdSense:</strong> We do not run targeted advertisements aimed at minors. Our content is intended for a general audience aged 13 and above.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Changes to Policy */}
          <AnimatedSection delay={550}>
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational reasons. When we make changes, we will:
                </p>
                <ul className="space-y-2 ml-4 list-disc list-inside">
                  <li>Update the "Last Updated" date at the top of this page</li>
                  <li>Post a notice on our homepage for significant changes</li>
                  <li>Notify you via email if you have provided us with your email address</li>
                </ul>
                <p>
                  We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection delay={600}>
            <div className="relative bg-gradient-to-br from-sandhu-red/10 to-purple-500/10 border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <div className="text-sandhu-text leading-relaxed space-y-4">
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 text-sm">👤</span>
                    <span className="text-white">Data Protection Officer: Karandeep Singh Sandhu</span>
                  </div>
                </div>
                <p className="text-sm text-sandhu-muted mt-4">
                  We will make every effort to resolve your concerns. If you are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Legal Compliance Footer */}
          <AnimatedSection delay={650}>
            <div className="text-center py-8 border-t border-white/10">
              <p className="text-sandhu-muted text-sm">
                This Privacy Policy is compliant with the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and Google AdSense Program Policies. 
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