import { useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import SEOHelmet from '../components/SEOHelmet'
import Breadcrumb from '../components/Breadcrumb'
import BackButton from '../components/BackButton'

const placesData = {
  'lakkarwala': {
    name: 'Lakkarwala',
    image: '',
    state: 'Punjab',
    country: 'India',
    description: 'Lakkarwala is a village in Punjab, India. It is the hometown of Karandeep Singh Sandhu, founder of SandhuNews and Alpha APK Store. The village represents the typical rural Punjabi lifestyle with agriculture as the primary occupation.',
    knownFor: ['Hometown of Karandeep Singh Sandhu', 'Punjabi Culture', 'Agriculture', 'Rural Lifestyle'],
    population: 'Small Village',
    language: 'Punjabi',
    district: 'Muktsar'
  },
  
  'amritsar': {
    name: 'Amritsar',
    image: 'https://amritsartourism.org.in/images/places-to-visit/headers/places-to-visit-in-amritsar-header-amritsar-tourism.jpg.jpg',
    state: 'Punjab',
    country: 'India',
    description: `Amritsar is a city in the northwestern Indian state of Punjab, 28 kilometers from the border with Pakistan. It is the spiritual and cultural centre of the Sikh religion. The city is home to the Golden Temple (Harmandir Sahib), the holiest shrine of Sikhism.

Historical Significance
Amritsar was founded in 1577 by the fourth Sikh guru, Guru Ram Das. The city was strategically planned with the Golden Temple at its center. It has witnessed some of the most significant events in Indian history, including the Jallianwala Bagh massacre in 1919, where British troops fired on unarmed Indian protesters, killing hundreds.

The Golden Temple (Harmandir Sahib)
The Golden Temple is the most sacred shrine of Sikhism. It was built by the fifth Sikh guru, Guru Arjan Dev, in the 16th century. The temple is known for its stunning golden dome and the Amrit Sarovar (Pool of Nectar) that surrounds it. The temple complex also houses the Akal Takht, the highest temporal seat of Sikh authority.

The temple serves free meals (langar) to over 100,000 people daily, regardless of religion, caste, or creed. This tradition of community kitchen represents the Sikh principle of equality and service.

Jallianwala Bagh
Jallianwala Bagh is a public garden that houses a memorial of national importance. On April 13, 1919, British troops under General Reginald Dyer opened fire on a peaceful gathering of Indians, killing at least 379 people and injuring over 1,200. The memorial preserves the bullet marks and the well where many jumped to escape the firing.

Wagah Border
The Wagah Border is the only road border crossing between India and Pakistan. It is famous for the elaborate "Beating Retreat" ceremony held every evening before sunset. The ceremony involves synchronized marching, flag-lowering, and aggressive posturing by border guards from both countries. It attracts thousands of spectators daily.

Culture and Cuisine
Amritsar is known as the culinary capital of Punjab. Famous dishes include:
• Amritsari Kulcha — Stuffed bread served with chole
• Amritsari Fish (Amritsari Machhi) — Spicy fried fish
• Lassi — Thick yogurt drink
• Sarson da Saag and Makki di Roti — Traditional Punjabi meal
• Jalebi and Gulab Jamun — Popular sweets

The city is also famous for its phulkari embroidery, traditional Punjabi footwear (juttis), and woolen textiles.

Education and Institutions
Amritsar is home to several prestigious institutions:
• Guru Nanak Dev University
• Khalsa College
• Government Medical College
• DAV College

Economy
Amritsar's economy is based on:
• Tourism (millions visit the Golden Temple annually)
• Textile industry
• Food processing
• Handicrafts and embroidery
• Educational services

Transportation
The city is well-connected by:
• Sri Guru Ram Dass Jee International Airport
• Amritsar Junction railway station (major rail hub)
• National Highway 3 and 54
• Bus services to major North Indian cities

Modern Development
Amritsar has seen significant development in recent years, including:
• Heritage Street project (pedestrian plaza leading to Golden Temple)
• Urban renewal projects
• Smart City initiatives
• Improved infrastructure and sanitation

Religious Harmony
Despite being a Sikh-majority city, Amritsar is known for religious harmony. The city has significant Hindu, Muslim, and Christian populations. The Golden Temple itself welcomes people of all faiths, embodying the Sikh principle of universal brotherhood.

Notable People from Amritsar
• Bhagat Singh (Freedom fighter)
• Madan Lal Dhingra (Revolutionary)
• Saadat Hasan Manto (Writer)
• Gulzar (Poet and filmmaker)
• Rajesh Khanna (Actor)

Tourism Statistics
Amritsar attracts over 30 million visitors annually, making it one of the most visited cities in India. The Golden Temple alone sees over 100,000 visitors daily.`,
    knownFor: ['Golden Temple', 'Jallianwala Bagh', 'Wagah Border', 'Amritsari Kulcha', 'Spiritual Capital of Sikhism'],
    population: '1.2 Million',
    language: 'Punjabi',
    district: 'Amritsar'
  },
  
  'ludhiana': {
    name: 'Ludhiana',
    image: 'https://t3.ftcdn.net/jpg/07/01/26/06/360_F_701260650_czsTgfHazu2sCqm2j6osR0NNflbtAZ4B.jpg',
    state: 'Punjab',
    country: 'India',
    description: `Ludhiana is the most populous and largest city in the Indian state of Punjab. It is an industrial center of northern India, often referred to as India's Manchester. The city is famous for its hosiery and bicycle industries.

Historical Background
Ludhiana was founded in 1480 by the Lodhi dynasty, from which it derives its name. The city has a rich history dating back to the medieval period. During British rule, it became an important cantonment town and trading center.

The city played a significant role during the Anglo-Sikh Wars and was the site of the first battle of the First Anglo-Sikh War in 1845.

Industrial Hub
Ludhiana is the industrial capital of Punjab and one of the major industrial cities in India:

Hosiery Industry:
• Largest hosiery manufacturing hub in India
• Produces 95% of India's woolen hosiery
• Major exporter of woolen garments
• Famous brands manufactured here

Bicycle Industry:
• Produces over 50% of India's bicycles
• Major exporter to Africa, Middle East, and Southeast Asia
• Companies like Hero Cycles started here

Sewing Machine Industry:
• Major manufacturing center
• Both domestic and industrial machines produced

Auto Parts Industry:
• Supplies components to major automobile manufacturers
• Hub for tractor parts manufacturing

Hand Tools and Machine Tools:
• Significant production capacity
• Export-oriented units

Agriculture and Education
Ludhiana is home to the Punjab Agricultural University (PAU), established in 1962. PAU is one of the leading agricultural universities in Asia and played a crucial role in India's Green Revolution.

Key agricultural contributions:
• Research on high-yield wheat and rice varieties
• Training for farmers
• Agricultural extension services
• Development of farm machinery

Education Institutions
• Punjab Agricultural University
• Guru Nanak Dev Engineering College
• Ludhiana College of Engineering and Technology
• Christian Medical College (nearby)
• Punjab University Regional Centre

Culture and Lifestyle
Ludhiana represents the modern, urban face of Punjab:
• Vibrant shopping malls and markets
• Growing IT and software industry
• Modern healthcare facilities
• Active nightlife and entertainment

Famous markets:
• Ghumar Mandi
• Chaura Bazaar
• Mall Road
• Feroze Gandhi Market

Food Culture
Ludhiana is known for its diverse food scene:
• Traditional Punjabi dhabas
• Modern cafes and restaurants
• Street food culture
• Fine dining options

Famous food items:
• Ludhiana-style chole bhature
• Butter chicken
• Tandoori dishes
• Street food at Pavilion Mall

Sports and Recreation
Ludhiana has produced several sports personalities:
• Hockey players
• Wrestlers
• Cricketers

Sports facilities:
• Guru Nanak Stadium
• Punjab Agricultural University sports complex
• Various cricket academies

Transportation
• Ludhiana Junction (major railway station)
• Sahnewal Airport (domestic flights)
• Well-connected by national highways
• Bus services to all major North Indian cities

Challenges
Despite its prosperity, Ludhiana faces several challenges:
• Air pollution from industries
• Traffic congestion
• Water scarcity
• Need for better urban planning
• Industrial waste management

Future Development
The city is undergoing:
• Smart City initiatives
• Metro rail project (planned)
• Industrial corridor development
• Improved infrastructure
• Better waste management systems

Notable People from Ludhiana
• Diljit Dosanjh (Actor and singer)
• Various industrialists and entrepreneurs
• Sports personalities
• Academic leaders`,
    knownFor: ['Industrial Hub', 'Punjab Agricultural University', 'Nehru Rose Garden', 'Hosiery Industry', 'Bicycle Manufacturing'],
    population: '1.6 Million',
    language: 'Punjabi',
    district: 'Ludhiana'
  },
  
  'chandigarh': {
    name: 'Chandigarh',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA3_lrJyWJzyoEStacTBZIZBqVMss4bDtvdBlVS_dsew&s=10',
    state: 'Union Territory',
    country: 'India',
    description: `Chandigarh is a city, district and union territory in India that serves as the shared capital of two neighbouring states, Punjab and Haryana. It is known as one of the best experiments in urban planning and modern architecture in the twentieth century in India.

Planned City
Chandigarh was one of the early planned cities in post-independence India. It was designed by the Swiss-French architect Le Corbusier, along with Pierre Jeanneret, Jane Drew, and Maxwell Fry. The city is known for its modernist architecture and urban design.

The city's master plan was based on:
• Grid-iron road pattern
• Sector-based organization (each sector is self-contained)
• Abundant green spaces
• Pedestrian-friendly design
• Modernist architecture

Architecture and Design
Le Corbusier's vision for Chandigarh included:
• Capitol Complex (UNESCO World Heritage Site)
• Open Hand Monument (symbol of peace and reconciliation)
• Secretariat Building
• High Court
• Legislative Assembly

The city is divided into sectors, each measuring 800m x 1200m. Each sector has its own market, school, and recreational areas.

Capitol Complex
The Capitol Complex is a UNESCO World Heritage Site, recognized in 2016. It includes:
• Secretariat Building — Largest of the Capitol buildings
• Legislative Assembly — Houses the state legislatures
• High Court — Distinctive modernist design
• Open Hand Monument — Rotating sculpture symbolizing peace

Rock Garden
The Rock Garden is a sculpture garden created by Nek Chand Saini. It features:
• Over 2,000 sculptures
• Made from industrial and home waste
• Interlinked courtyards
• Waterfalls and pathways
• One of India's most visited tourist attractions

Sukhna Lake
Sukhna Lake is a reservoir at the foothills of the Shivalik Hills. It was created in 1958 by damming the Sukhna Choe stream. The lake is popular for:
• Boating
• Walking and jogging
• Bird watching
• Sunset viewing
• Regatta events

Rose Garden (Zakir Hussain Rose Garden)
Asia's largest rose garden, featuring:
• Over 50,000 rose bushes
• 1,600 different species of roses
• Annual Rose Festival
• Musical fountains

Education and Research
Chandigarh is an educational hub:
• Panjab University (one of India's oldest universities)
• Punjab Engineering College
• Post Graduate Institute of Medical Education and Research (PGIMER)
• Chandigarh College of Architecture
• Government College of Art

Economy
Chandigarh has a diverse economy:
• Government services (major employer)
• IT and software industry (Rajiv Gandhi Chandigarh Technology Park)
• Banking and finance
• Tourism
• Education services
• Real estate

IT Industry
The Rajiv Gandhi Chandigarh Technology Park houses:
• Major IT companies (Infosys, Tech Mahindra, Wipro)
• Startups and incubators
• BPO and KPO centers
• Emerging as a Tier-2 IT hub

Quality of Life
Chandigarh consistently ranks among India's best cities for:
• Cleanliness (often India's cleanest city)
• Quality of life
• Green cover
• Low crime rate
• Infrastructure
• Education facilities

Cultural Scene
The city has a vibrant cultural life:
• Tagore Theatre
• Punjab Kala Bhawan
• Museum and Art Gallery
• Various cultural festivals
• Music and dance performances

Food Culture
Chandigarh offers diverse cuisine:
• Traditional Punjabi food
• Modern cafes and restaurants
• Sector 26 (food hub)
• Elante Mall dining
• Street food culture

Transportation
• Chandigarh International Airport (Mohali)
• Chandigarh Railway Station
• Well-connected by national highways
• Local bus service (CTU)
• Auto-rickshaws and taxis

Green City
Chandigarh is known as "The City Beautiful" due to:
• Abundant tree cover
• Well-maintained parks
• Clean streets
• Planned green spaces
• Urban forest areas

Notable People Associated with Chandigarh
• Le Corbusier (Architect)
• Pierre Jeanneret (Architect)
• Nek Chand (Artist)
• Various politicians and administrators

Future Development
• Metro rail project (planned)
• Smart City initiatives
• IT park expansion
• Better connectivity with Mohali and Panchkula
• Sustainable development projects`,
    knownFor: ['Rock Garden', 'Sukhna Lake', 'Capitol Complex', 'Planned City', 'Cleanest City in India'],
    population: '1.2 Million',
    language: 'Hindi, Punjabi, English',
    district: 'Chandigarh'
  },
  
  'delhi': {
    name: 'Delhi',
    image: 'https://media.istockphoto.com/id/510795912/photo/india-gate.jpg?s=612x612&w=0&k=20&c=kZkdrEDXEtoLK6Qh8XPywc9VYV95mJXXcWLBxHftN_U=',
    state: 'National Capital Territory',
    country: 'India',
    description: `Delhi, officially the National Capital Territory (NCT) of Delhi, is a city and union territory that contains New Delhi, the capital of India. It is the second-most populous city in India after Mumbai and one of the most populous metropolitan areas in the world.

Historical Significance
Delhi has been continuously inhabited since the 6th century BCE and has served as the capital of various kingdoms and empires throughout Indian history. It has been destroyed and rebuilt seven times, earning the nickname "City of Seven Cities."

Historical periods:
• Ancient Delhi (Indraprastha from Mahabharata)
• Tomar dynasty (736 CE)
• Delhi Sultanate (1206-1526)
• Mughal Empire (1526-1857)
• British colonial period (1857-1947)
• Independent India (1947-present)

Architectural Heritage
Delhi is home to numerous UNESCO World Heritage Sites:
• Red Fort (Lal Qila) — Mughal emperor Shah Jahan's palace
• Qutub Minar — Tallest brick minaret in the world
• Humayun's Tomb — Precursor to Taj Mahal
• Jama Masjid — One of India's largest mosques
• India Gate — War memorial
• Lotus Temple — Bahá'í House of Worship
• Akshardham Temple — Modern architectural marvel

Government and Politics
As India's capital, Delhi houses:
• Rashtrapati Bhavan (President's residence)
• Parliament House (Sansad Bhavan)
• Supreme Court of India
• Various ministries and government offices
• Embassies and high commissions

The city has its own legislative assembly and government, with limited statehood under the NCT of Delhi.

Economy
Delhi has one of India's largest economies:
• Service sector dominant
• IT and telecommunications
• Banking and finance
• Real estate
• Tourism
• Retail
• Manufacturing

Connaught Place is a major commercial and financial center.

Education
Delhi is a major educational hub:
• University of Delhi (one of India's largest universities)
• Jawaharlal Nehru University (JNU)
• Indian Institute of Technology Delhi (IIT Delhi)
• All India Institute of Medical Sciences (AIIMS)
• Indian Institute of Mass Communication
• National Law University

Culture and Arts
Delhi has a rich cultural scene:
• National Museum
• National Gallery of Modern Art
• India Habitat Centre
• Siri Fort Auditorium
• Various theaters and cultural centers
• Diverse festivals celebrated

Food Culture
Delhi is famous for its diverse cuisine:
• Old Delhi street food (Chandni Chowk)
• Paranthe Wali Gali
• Mughlai cuisine
• Modern restaurants and cafes
• International cuisine
• Dhaba culture

Famous dishes:
• Butter chicken (invented in Delhi)
• Chole bhature
• Biryani
• Kebabs
• Jalebi
• Daulat ki chaat

Transportation
Delhi has extensive transportation:
• Indira Gandhi International Airport (busiest in India)
• Delhi Metro (one of world's largest metro networks)
• Indian Railways (major hub)
• Bus services (DTC)
• Auto-rickshaws and taxis
• App-based cab services

Challenges
Delhi faces significant challenges:
• Air pollution (among world's most polluted cities)
• Traffic congestion
• Water scarcity
• Slum areas and poverty
• Crime rates
• Infrastructure strain

Future Plans
• Regional Rapid Transit System (RRTS)
• Smart City initiatives
• Pollution control measures
• Metro expansion
• Better waste management
• Water conservation projects

Notable People from Delhi
• Various prime ministers and presidents
• Artists and writers
• Business leaders
• Sports personalities

Tourism
Delhi attracts millions of tourists annually:
• Historical monuments
• Religious sites
• Shopping (Sarojini Nagar, Janpath, Dilli Haat)
• Cultural experiences
• Food tourism`,
    knownFor: ['Red Fort', 'Qutub Minar', 'India Gate', 'Parliament House', 'Street Food', 'Capital of India'],
    population: '32 Million (NCT)',
    language: 'Hindi, English, Punjabi',
    district: 'New Delhi'
  },
  
  'mumbai': {
    name: 'Mumbai',
    image: 'https://t4.ftcdn.net/jpg/01/46/43/87/360_F_146438747_3XYwVkfnYZuukBZYmDM8xeoqENzyhAqa.jpg',
    state: 'Maharashtra',
    country: 'India',
    description: `Mumbai, formerly known as Bombay, is the capital city of the Indian state of Maharashtra. It is the most populous city in India and the seventh most populous city in the world. Mumbai is the financial, commercial, and entertainment capital of India.

Historical Background
Mumbai was originally a group of seven islands inhabited by Koli fishing communities. The islands were ruled by various indigenous dynasties before being ceded to Portugal in 1534. In 1661, the islands were given to England as part of the dowry of Catherine of Braganza.

The city grew significantly under British rule, becoming a major trading port. The Hornby Vellard project in the 18th century joined the islands into a single landmass.

Financial Capital
Mumbai is India's financial powerhouse:
• Reserve Bank of India headquarters
• Bombay Stock Exchange (Asia's oldest stock exchange)
• National Stock Exchange of India
• Headquarters of major banks and financial institutions
• Corporate headquarters of numerous Indian and multinational companies

The city contributes significantly to India's:
• Income tax revenue
• Customs duty
• Corporate taxes
• GDP

Bollywood and Entertainment
Mumbai is the heart of India's film industry, popularly known as Bollywood:
• Produces the largest number of films globally
• Major film studios in Andheri and Goregaon
• Film City in Goregaon
• Celebrity homes in Bandra and Juhu
• Various TV production houses

The city also has a vibrant theater scene, music industry, and nightlife.

Architecture and Landmarks
Mumbai's architecture reflects its diverse history:
• Chhatrapati Shivaji Maharaj Terminus (UNESCO World Heritage Site)
• Gateway of India — Iconic monument
• Taj Mahal Palace Hotel — Historic luxury hotel
• Marine Drive — "Queen's Necklace"
• Bandra-Worli Sea Link — Engineering marvel
• Siddhivinayak Temple — Famous temple
• Haji Ali Dargah — Mosque and tomb on an islet

Transportation
Mumbai has extensive transportation:
• Chhatrapati Shivaji Maharaj International Airport
• Mumbai Metro (expanding network)
• Suburban railway (one of world's busiest)
• BEST buses
• Auto-rickshaws and taxis
• Monorail
• Ferries and water transport

The local train system is the lifeline of Mumbai, carrying millions daily.

Culture and Lifestyle
Mumbai is known for its fast-paced lifestyle:
• "City that never sleeps"
• Diverse population from all over India
• Cosmopolitan culture
• Street food culture
• Ganesh Chaturthi celebrations
• Various religious festivals

Famous areas:
• South Mumbai (heritage area)
• Bandra (hip and trendy)
• Juhu (beach and celebrity homes)
• Andheri (commercial hub)
• Dharavi (one of world's largest slums)

Food Culture
Mumbai is famous for its street food:
• Vada pav — Mumbai's signature snack
• Pav bhaji
• Bhel puri and sev puri
• Bombay sandwich
• Frankie rolls
• Irani cafes

Education
Mumbai has prestigious institutions:
• University of Mumbai
• IIT Bombay
• Tata Institute of Social Sciences
• Narsee Monjee Institute
• Various medical and law colleges

Challenges
Mumbai faces significant challenges:
• Overcrowding
• Housing shortage
• Traffic congestion
• Flooding during monsoons
• Slum areas (Dharavi)
• High cost of living
• Environmental concerns

Future Development
• Coastal Road project
• Metro expansion
• Navi Mumbai development
• Smart City initiatives
• Better waste management
• Affordable housing projects

Notable People from Mumbai
• Bollywood actors and directors
• Business tycoons
• Sports personalities
• Artists and writers

Tourism
Mumbai attracts tourists for:
• Bollywood tours
• Historical sites
• Beaches
• Shopping
• Food experiences
• Nightlife

Economic Impact
Mumbai's economy is diverse:
• Finance and banking
• Entertainment
• Information technology
• Manufacturing
• Textiles
• Shipping and port activities

The Mumbai Port is one of India's major ports, handling significant cargo traffic.

Quality of Life
Despite challenges, Mumbai offers:
• Career opportunities
• Cultural diversity
• Entertainment options
• Educational institutions
• Healthcare facilities
• Public transportation`,
    knownFor: ['Bollywood', 'Gateway of India', 'Marine Drive', 'Financial Capital', 'Street Food', 'Local Trains'],
    population: '20+ Million',
    language: 'Marathi, Hindi, English',
    district: 'Mumbai'
  }
}

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

export default function PlacePage() {
  const { slug } = useParams()
  const place = placesData[slug]

  if (!place) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-black text-white/10 mb-4">404</h1>
        <p className="text-sandhu-muted text-xl">Place not found</p>
      </div>
    </div>
  )

  return (
    <>
      <SEOHelmet 
        title={`${place.name} - SandhuNews`}
        description={place.description.slice(0, 160)}
        keywords={`${place.name}, Punjab, India, places`}
      />
      
      <BackButton />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <Breadcrumb />
          
         <AnimatedSection>
  {/* === HERO WITH IMAGE — START === */}
  <div className="relative overflow-hidden min-h-[300px] md:min-h-[400px] rounded-3xl">
    
    {/* Gradient overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-sandhu-dark via-sandhu-dark/90 to-transparent z-10" />
    
    {/* Faded image on right */}
    {place.image && (
      <img 
        src={place.image} 
        alt=""
        className="absolute right-0 top-0 h-full w-full md:w-1/2 object-cover opacity-40"
      />
    )}
    
    {/* Text content */}
    <div className="relative z-20 px-6 py-12 md:px-12 text-center md:text-left">
      
      {/* Tag badge */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 rounded-full px-4 py-1.5 mb-6">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        <span className="text-sm font-medium">{place.category || 'Place'}</span>
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
        {place.name}
      </h1>

      {/* Location */}
      <p className="text-xl md:text-2xl text-sandhu-muted max-w-3xl mx-auto md:mx-0 mb-8">
        {place.location}
      </p>

      {/* Stats if any */}
      {place.stats && (
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {place.stats.map(stat => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-sandhu-muted uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Tags / Known For */}
      {place.tags && (
        <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-6">
          {place.tags.map(tag => (
            <span key={tag} className="bg-white/10 border border-white/20 text-sandhu-text px-3 py-1.5 rounded-lg text-sm">
              {tag}
            </span>
          ))}
        </div>
      )}
      
    </div>
    
  </div>
  {/* === HERO WITH IMAGE — END === */}
</AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="relative max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            
            {/* Description */}
            <AnimatedSection delay={100}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-sm">01</span>
                    About {place.name}
                  </h2>
                  <div className="text-sandhu-text leading-relaxed whitespace-pre-line text-lg">
                    {place.description}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Known For */}
            <AnimatedSection delay={200}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 text-sm">02</span>
                    Known For
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {place.knownFor.map(k => (
                      <span key={k} className="bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-xl text-sm font-medium hover:bg-amber-500/20 transition-all duration-300">
                        {k}
                      </span>
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
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-500">
                  <h3 className="text-lg font-bold text-white mb-6">Quick Facts</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sandhu-muted text-sm">State</span>
                      <span className="text-white font-medium">{place.state}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sandhu-muted text-sm">Country</span>
                      <span className="text-white font-medium">{place.country}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sandhu-muted text-sm">District</span>
                      <span className="text-white font-medium">{place.district}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sandhu-muted text-sm">Population</span>
                      <span className="text-white font-medium">{place.population}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sandhu-muted text-sm">Language</span>
                      <span className="text-white font-medium">{place.language}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-6">
                  <h4 className="text-white font-bold mb-3">Explore More</h4>
                  <p className="text-sandhu-muted text-sm">
                    Discover more places, people, and topics about India and Punjab on SandhuNews.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}