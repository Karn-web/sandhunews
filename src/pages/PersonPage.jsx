import SEOHelmet from '../components/SEOHelmet'
import Breadcrumb from '../components/Breadcrumb'
import BackButton from '../components/BackButton'
import { useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const peopleData = {
'karandeep-singh-sandhu': {
  name: 'Karandeep Singh Sandhu',
  title: 'Founder, Web Developer & Digital Entrepreneur',
  age: '16',
  location: 'Lakkarwala, Punjab, India',
  born: '2010, Lakkarwala, Punjab, India',
  nationality: 'Indian',
  education: 'Self-taught Web Developer',
  occupation: 'Web Developer, Entrepreneur, Content Creator',
  yearsActive: '2024–present',
  knownFor: ['Alpha APK Store', 'SandhuNews',  'YouTube Content'],
  
  bio: `Karandeep Singh Sandhu is a 16-year-old self-taught web developer, digital entrepreneur, and content creator from Lakkarwala, a small village in Punjab, India. Despite his young age and rural background, Karandeep has built multiple successful web projects and is rapidly establishing himself as one of India's youngest tech entrepreneurs.

Early Life and Background
Karandeep was born in 2010 in Lakkarwala, Muktsar district, Punjab. Growing up in a rural environment with limited access to advanced technology, he developed an early fascination with computers and the internet. At the age of 14, he began teaching himself web development through online resources, YouTube tutorials, and documentation.

His journey was not easy — working on a 2017 laptop with no dedicated graphics card, he faced numerous technical challenges. However, his determination to learn and build kept him going. He spent countless nights coding, debugging, and learning new technologies.

Career and Projects

Alpha APK Store (2024-2026)
Karandeep's first major project was Alpha APK Store, a 49-page React-based Android app discovery platform. Built over 1.5 years, the platform featured:
• Complete admin dashboard for managing app listings
• User authentication system with Supabase
• Blog system for SEO content
• Glassmorphism UI design
• Amazon affiliate integration
• Google AdSense and Monetag monetization
• SEO-optimized pages with structured data schemas

The platform gained approximately 50 organic daily visitors and demonstrated Karandeep's ability to build production-ready applications. In 2026, he decided to sell Alpha APK Store to pivot toward web development services.

SandhuNews (2026-present)
Following the sale of Alpha APK Store, Karandeep launched SandhuNews, a comprehensive knowledge platform covering people, places, and topics related to India and Punjab. The platform showcases his growth as a developer with:
• Modern React + Vite architecture
• Tailwind CSS with custom design system
• Advanced SEO implementation
• Glassmorphism and animation effects
• 80-100 planned pages for maximum Google indexing


YouTube Presence
Karandeep runs the YouTube channel @alphaapkstore, where he shares his journey as a young developer. His first YouTube Short gained 5,453 views, demonstrating his ability to create engaging content.

Technical Skills
• Frontend: React, JavaScript, HTML, CSS, Tailwind CSS
• Backend: Node.js, Express
• Database: Supabase (PostgreSQL), Firebase
• DevOps: Cloudflare, Render, GitHub
• SEO: Structured data, meta tags, Google Search Console
• Design: Glassmorphism, responsive design, UI/UX principles

Philosophy and Vision
Karandeep believes that age and location should not limit one's potential. His motto is to build, learn, and grow continuously. He aims to:
• Establish a successful web development agency in Punjab
• Create platforms that provide value to millions
• Inspire other young Indians from rural areas to pursue technology
• Build a personal brand that ranks #1 on Google

Future Plans
• Expand SandhuNews to 100+ pages
• Launch web development agency serving Punjab businesses
• Create SaaS products for global markets
• Build a YouTube channel focused on tech education
• Achieve financial independence by age 20

Personal Life
Karandeep balances his tech pursuits with his studies and family life in Lakkarwala. He is known for his discipline, work ethic, and willingness to help others learn web development.

Recognition
While still early in his career, Karandeep has been recognized in local tech communities for his initiative and rapid skill development. His projects demonstrate professional-level quality despite his self-taught background.

Contact and Social Media
• Email: alphaapkstore@gmail.com
• YouTube: @alphaapkstore
• Website: sandhunews.com
• Location: Lakkarwala, Punjab, India`,

  projects: ['Alpha APK Store', 'SandhuNews',  'YouTube Channel @alphaapkstore'],
  
  skills: ['React', 'Node.js', 'Supabase', 'Cloudflare', 'SEO', 'JavaScript', 'Tailwind CSS', 'Express', 'GitHub', 'UI/UX Design'],
  
  achievements: [
    'Built 49-page React platform at age 15',
    'First YouTube Short: 5,453 views',  
    'Self-taught web developer from rural Punjab',
    'Launched SandhuNews knowledge platform'
  ],
  
  social: {
    youtube: '@alphaapkstore',
    email: 'alphaapkstore@gmail.com',
    website: 'sandhunews.com'
  }
},
    'sidhu-moosewala': {
    name: 'Sidhu Moosewala',
    title: 'Punjabi Singer, Rapper, Songwriter & Actor',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcPnKj14kg1-bEN9E1nJxmXN-AUk1-UzPa592C7owWA&s=10',
    age: 'Deceased (June 11, 1993 – May 29, 2022)',
    location: 'Mansa, Punjab, India',
    born: 'June 11, 1993, Moosa, Mansa, Punjab, India',
    died: 'May 29, 2022, Jawaharke, Mansa, Punjab, India',
    causeOfDeath: 'Assassination (gunshot wounds)',
    nationality: 'Indian',
    education: 'Guru Nanak Dev Engineering College, Ludhiana (B.Tech in Electrical Engineering)',
    occupation: 'Singer, Rapper, Songwriter, Actor, Politician',
    yearsActive: '2016–2022',
    knownFor: ['Punjabi Music', 'Controversial Lyrics', 'Social Commentary', 'Unique Vocal Style'],
    genres: ['Punjabi', 'Hip Hop', 'R&B', 'Gangsta Rap'],
    labels: ['5911 Records', 'Sidhu Moose Wala'],
    bio: `Shubhdeep Singh Sidhu, known professionally as Sidhu Moosewala, was an Indian singer, rapper, actor, and politician associated with Punjabi music and Punjabi cinema. He is widely regarded as one of the greatest and most influential Punjabi artists of his generation, leaving an indelible mark on the music industry before his tragic death at the age of 28.

Early Life and Education
Sidhu Moosewala was born on June 11, 1993, in the village of Moosa in Mansa district, Punjab, India. He was born into a Sikh family to Balkaur Singh Sidhu, an ex-serviceman, and Charan Kaur Sidhu, a sarpanch (village head). He showed an early interest in music and began singing folk songs during his school years.

He attended Guru Nanak Dev Engineering College in Ludhiana, where he earned a Bachelor of Technology degree in Electrical Engineering in 2016. During his college years, he developed a passion for hip-hop music and began writing lyrics. His stage name "Moosewala" was derived from his village name "Moosa," a common practice in Punjabi culture.

Musical Career Beginnings
Sidhu Moosewala began his music career by writing lyrics for other artists. His breakthrough came when he wrote the song "License" for Ninja, which became a hit. He then collaborated with Brown Boyz on tracks released by Humble Music.

In 2017, he released his debut track "G Wagon," which gained moderate success. However, his real breakthrough came with the song "So High" in collaboration with Byg Byrd, released under the label Brown Boyz. The song was a massive hit and established him as a rising star in the Punjabi music industry.

Rise to Stardom
Sidhu Moosewala's career skyrocketed with a series of hit songs that dominated the Punjabi music charts. His unique style combined traditional Punjabi folk music with modern hip-hop and rap elements, creating a distinctive sound that resonated with millions of listeners worldwide.

Some of his most popular tracks include:
• "Legend" (2019) — A tribute to Punjabi legends and his own journey
• "295" (2021) — A controversial song addressing social and political issues, which became the first Punjabi song to chart on the Billboard Global 200
• "The Last Ride" (2022) — Released shortly before his death, eerily prophetic
• "Levels" (2022) — Collaboration with Sunny Malton
• "Everybody Hurts" (2022) — Another posthumous hit
• "Old Skool" (2020) — Featuring Prem Dhillon and Nseeb
• "Brown Boys" — Early collaboration that gained attention
• "Dhakka" (2019) — Featuring Afsana Khan
• "Doctor" (2019) — Addressing social issues
• "Bambiha Bole" (2020) — Featuring Amrit Maan

His debut album "PBX 1" was released in 2018 and peaked at number 66 on the Billboard Canadian Albums chart. His second album "Snitches Get Stitches" (2020) and "Moosetape" (2021) further cemented his status as a global Punjabi music icon.

Controversies and Legal Issues
Sidhu Moosewala's career was not without controversy. His lyrics often glorified gun culture and violence, which drew criticism from various quarters. He faced multiple legal cases related to his songs and public statements.

In May 2020, he was booked under two sections of the Arms Act after a video showing him firing an AK-47 rifle at a firing range went viral. He was also criticized for promoting gun culture through his music videos and lyrics.

Despite the controversies, his fan base continued to grow exponentially. His songs often addressed social issues, caste discrimination, and the struggles of Punjabi youth, making him a voice for many.

Political Career
In December 2021, Sidhu Moosewala joined the Indian National Congress party and contested the 2022 Punjab Legislative Assembly election from the Mansa constituency. However, he lost to Vijay Singla of the Aam Aadmi Party (AAP).

His political career was short-lived but demonstrated his desire to bring change to Punjab. He often spoke about issues affecting farmers, youth unemployment, and drug addiction in Punjab through his music and public appearances.

Tragic Death
On May 29, 2022, Sidhu Moosewala was shot dead in his car in Jawaharke village, Mansa district, Punjab. The attack was carried out by unidentified assailants who fired multiple rounds at his vehicle. He was rushed to the hospital but was declared dead on arrival.

His death sent shockwaves across India and the global Punjabi diaspora. Fans, fellow artists, and political leaders expressed their grief and demanded justice. The investigation revealed connections to gang rivalry, with Canadian-based gangster Goldy Brar claiming responsibility.

Legacy and Impact
Sidhu Moosewala's legacy continues to grow even after his death. He is credited with revolutionizing Punjabi music and bringing it to global audiences. His songs have billions of views on YouTube, and his music continues to top charts worldwide.

Posthumous releases like "SYL" (addressing the Sutlej-Yamuna Link canal issue) and various collaborations have kept his memory alive. His fans, known as "Moosewala fans," continue to celebrate his music and legacy.

He received numerous awards during his career, including:
• Brit Asia TV Music Awards
• PTC Punjabi Music Awards
• Filmfare Awards Punjabi
• Gaana User's Choice Icons

His influence extends beyond music — he became a cultural icon representing Punjabi pride, resilience, and the struggle of rural youth aspiring for greatness.`,
    projects: ['PBX 1 (Album)', 'Snitches Get Stitches (Album)', 'Moosetape (Album)', 'Legend', '295', 'The Last Ride', 'Levels', 'Old Skool', 'Bambiha Bole', 'SYL'],
    skills: ['Singing', 'Rapping', 'Songwriting', 'Acting', 'Music Production', 'Social Commentary'],
    achievements: [
      'First Punjabi song on Billboard Global 200 (295)',
      'Billboard Canadian Albums Chart (PBX 1)',
      'Billions of YouTube views',
      'Revolutionized Punjabi music globally',
      'Cultural icon for Punjabi youth'
    ],
    social: {
      youtube: '@SidhuMooseWala',
      instagram: '@sidhu_moosewala'
    }
  },

  'bhagwant-mann': {
    name: 'Bhagwant Singh Mann',
    title: 'Chief Minister of Punjab',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-uXn784Q0BpOgIjqUzXjwH6PTzipm_bKb4f66ocn_cyCJv4spT-Q6IZs&s=10',
    age: '50',
    location: 'Punjab, India',
    born: 'October 17, 1973, Satoj, Sangrur, Punjab, India',
    nationality: 'Indian',
    education: 'Punjab University, Chandigarh',
    occupation: 'Politician, Comedian, Former Actor',
    yearsActive: '1992–present (comedy), 2011–present (politics)',
    knownFor: ['Chief Minister of Punjab', 'Comedy Career', 'Aam Aadmi Party'],
    party: 'Aam Aadmi Party (AAP)',
    bio: `Bhagwant Singh Mann is an Indian politician, comedian, and former actor who is currently serving as the 18th Chief Minister of Punjab since March 2022. He is a member of the Aam Aadmi Party (AAP) and represents the Dhuri constituency in the Punjab Legislative Assembly. Before entering politics, Mann was one of the most popular comedians in Punjab, known for his satirical comedy and social commentary.

Early Life and Education
Bhagwant Mann was born on October 17, 1973, in the village of Satoj in Sangrur district, Punjab, India. He completed his schooling in his village and later pursued higher education at Punjab University, Chandigarh. From a young age, he showed a flair for comedy and performance, often entertaining his classmates and teachers with his wit.

Comedy Career
Mann began his career as a comedian in the early 1990s, performing at college functions and local events. His unique style of political satire and social commentary quickly gained popularity. He released numerous comedy albums and VCDs that became massive hits across Punjab.

Some of his most popular comedy works include:
• "Jugnu Hazir Hai" — His flagship comedy show
• "Kulfi Garma Garam" — Comedy album series
• Various live stage performances across Punjab, India, and international tours

His comedy often targeted political corruption, social evils, and the hypocrisy of society. He was known for his sharp wit, Punjabi folk humor, and ability to connect with common people. His popularity as a comedian made him a household name in Punjab.

Entry into Politics
Bhagwant Mann entered politics in 2011 by joining the People's Party of Punjab (PPP), founded by Manpreet Singh Badal. He contested the 2012 Punjab Assembly elections from the Lehragaga constituency but lost.

In 2014, he joined the Aam Aadmi Party (AAP) and contested the Lok Sabha elections from the Sangrur constituency. He won the election, becoming a Member of Parliament (MP) in the 16th Lok Sabha. He was re-elected in 2019 from the same constituency.

As an MP, Mann raised various issues concerning Punjab, including:
• Farmer distress and agricultural crisis
• Drug addiction problem in Punjab
• Unemployment among youth
• Corruption in government
• Education and healthcare reforms

Chief Minister of Punjab
In the 2022 Punjab Legislative Assembly election, AAP won a historic majority, securing 92 out of 117 seats. Bhagwant Mann was sworn in as the Chief Minister of Punjab on March 16, 2022, succeeding Charanjit Singh Channi.

As Chief Minister, Mann has focused on:
• Anti-corruption measures and transparency in government
• Education reforms — "Schools of Eminence" program
• Healthcare improvements — "Mohalla Clinics" inspired by Delhi model
• Farmer welfare and MSP guarantees
• Industrial development and employment generation
• Drug de-addiction campaigns
• Electricity reforms — providing 300 units of free electricity

His governance style is often described as accessible and people-centric. He has maintained an image of simplicity, often seen traveling without heavy security and interacting directly with citizens.

Controversies
Mann's career has not been without controversies. During his comedy days, he faced criticism for some jokes that were deemed offensive. As a politician, he has been criticized for:
• His past struggles with alcoholism, which he openly acknowledged and overcame
• Some of his comedy content that was seen as derogatory
• Allegations of being a "proxy" for Delhi CM Arvind Kejriwal

Despite controversies, his popularity among common Punjabis remains high due to his approachable nature and anti-corruption stance.

Personal Life
Bhagwant Mann was previously married to Inderpreet Kaur, with whom he has two children. The couple divorced in 2015. In July 2022, he married Dr. Gurpreet Kaur in a private ceremony.

He is known for his simple lifestyle and connection with rural Punjab. He often speaks in colloquial Punjabi, making him relatable to the masses.

Legacy and Impact
Bhagwant Mann represents a new wave of politicians in India who come from non-political backgrounds. His journey from a comedian to Chief Minister is seen as an inspiration for many who wish to enter public service without traditional political lineage.

His governance is being closely watched as a test of AAP's model in a full state, with expectations of clean administration and people-friendly policies.`,
    projects: ['Chief Minister of Punjab', 'AAP Punjab President', 'Member of Parliament (2014-2022)', 'Comedy Shows', 'Schools of Eminence', 'Mohalla Clinics'],
    skills: ['Politics', 'Public Speaking', 'Comedy', 'Leadership', 'Social Commentary', 'Governance'],
    achievements: [
      '18th Chief Minister of Punjab',
      'Two-time Member of Parliament',
      'Most popular Punjabi comedian of 1990s-2000s',
      'Led AAP to historic 92-seat majority in Punjab',
      'Implemented anti-corruption measures'
    ],
    social: {
      twitter: '@BhagwantMann',
      instagram: '@bhagwantmann'
    }
  },

  'diljit-dosanjh': {
    name: 'Diljit Dosanjh',
    title: 'Actor, Singer, Songwriter & Television Personality',
    image: 'https://i.scdn.co/image/ab6761610000e5ebfc043bea91ac91c222d235c9',
    age: '40',
    location: 'Ludhiana, Punjab, India',
    born: 'January 6, 1984, Dosanjh Kalan, Jalandhar, Punjab, India',
    nationality: 'Indian',
    education: 'Alma Mater: Shri Guru Harkrishan Public School, Ludhiana',
    occupation: 'Singer, Actor, Songwriter, Television Host',
    yearsActive: '2002–present',
    knownFor: ['Punjabi Music', 'Bollywood Films', 'Coachella Performance', 'Fashion Icon'],
    genres: ['Bhangra', 'Pop', 'Romantic', 'Folk'],
    labels: ['Famous Studios', 'Speed Records', 'T-Series', 'Coke Studio'],
    bio: `Diljit Dosanjh is an Indian singer, actor, and television personality who works in Punjabi and Hindi cinema. He is one of the most prominent and influential figures in Punjabi entertainment and has successfully crossed over to Bollywood and international markets. Known for his versatile talent, charming personality, and unique fashion sense, Diljit has become a global icon representing Punjabi culture.

Early Life and Background
Diljit Dosanjh was born on January 6, 1984, in the village of Dosanjh Kalan in Jalandhar district, Punjab, India. He was born into a humble family to Sukhwinder Kaur and Balbir Singh Dosanjh. His father worked as a bus driver for Punjab Roadways, and the family lived modestly.

He attended Shri Guru Harkrishan Public School in Ludhiana. From a young age, Diljit showed interest in music and began singing at local gurudwaras (Sikh temples). His early musical influences included traditional Punjabi folk music and contemporary artists.

Musical Career
Diljit began his professional music career in 2002 with his debut album "Ishq Da Uda Ada." However, his breakthrough came with the album "Smile" (2005) and "Chocolate" (2008), which established him as a rising star in Punjabi music.

His discography includes numerous hit albums and singles:
• "Ishq Da Uda Ada" (2002) — Debut album
• "Smile" (2005) — Breakthrough album
• "Chocolate" (2008) — Established his romantic ballad style
• "The Next Level" (2009) — Featuring Yo Yo Honey Singh
• "Back 2 Basics" (2012) — Return to folk roots
• "G.O.A.T." (2020) — International breakthrough, charted on Billboard
• "Moonchild Era" (2021) — Featuring international producers
• "Ghost" (2023) — Continued global success

Some of his most popular songs include:
• "Lak 28 Kudi Da" — Collaboration with Yo Yo Honey Singh
• "Proper Patola" — Featuring Badshah
• "5 Taara" — Wedding anthem
• "Do You Know" — International hit
• "Clash" — Featuring Gurlez Akhtar
• "G.O.A.T." — Title track of breakthrough album
• "Lover" — Romantic hit
• "Chauffeur" — International collaboration
• "Born to Shine" — From G.O.A.T. album
• "Hass Hass" — International collaboration with Sia

Bollywood Career
Diljit made his Bollywood debut with "Udta Punjab" (2016), where he played a police officer alongside Shahid Kapoor, Alia Bhatt, and Kareena Kapoor. His performance was critically acclaimed, and he won the Filmfare Award for Best Male Debut.

His Bollywood filmography includes:
• "Udta Punjab" (2016) — Filmfare Best Male Debut
• "Phillauri" (2017) — Romantic comedy with Anushka Sharma
• "Welcome to New York" (2018) — Comedy film
• "Soorma" (2018) — Biopic of hockey player Sandeep Singh
• "Good Newwz" (2019) — Comedy with Akshay Kumar, Kareena Kapoor, Kiara Advani
• "Suraj Pe Mangal Bhari" (2020)
• "Honsla Rakh" (2021) — Punjabi film
• "Jogi" (2022) — Netflix film about 1984 anti-Sikh riots
• "Crew" (2024) — With Tabu, Kareena Kapoor, Kriti Sanon

Television and Other Ventures
Diljit has hosted several television shows, including:
• "Awaaz Punjab Di" — Punjabi music reality show
• "Rising Star" — Hindi singing reality show (judge)
• "Dance Deewane" — Dance reality show appearances

He is also known for his:
• YouTube cooking show "Diljit Dosanjh: Cooking with Diljit"
• Collaboration with international artists
• Fashion brand "Diljit Dosanjh x" collaborations
• Philanthropic work in Punjab

Coachella 2023 — Historic Performance
In April 2023, Diljit Dosanjh made history by becoming the first Punjabi artist to perform at the Coachella Valley Music and Arts Festival in California, USA. His performance was widely praised and marked a significant milestone for Punjabi music on the global stage.

His Coachella set included:
• Punjabi folk songs
• Bhangra performances
• Collaborations with international musicians
• A celebration of Punjabi culture before a global audience

Fashion and Style
Diljit is known for his unique fashion sense, often blending traditional Punjabi attire with high-end international brands. He is a fan of:
• Nike sneakers (has a massive collection)
• Gucci and Versace
• Traditional Punjabi turbans and outfits
• Designer watches

His fashion choices have made him a style icon for young Punjabis worldwide.

Personal Life
Diljit is extremely private about his personal life. He has never publicly discussed his family or relationships, maintaining a strict separation between his public persona and private life. He is known to be close to his mother and often mentions her in interviews.

He currently resides in Ludhiana, Punjab, and also has a home in Mumbai for his Bollywood work.

Philanthropy
Diljit has been involved in various charitable activities, including:
• Donating to farmer protests
• Supporting education initiatives in Punjab
• Contributing to COVID-19 relief efforts
• Helping underprivileged communities

Legacy and Impact
Diljit Dosanjh represents the global face of Punjabi entertainment. His ability to seamlessly transition between Punjabi and Hindi cinema, collaborate with international artists, and maintain his cultural roots has made him a unique figure in Indian entertainment.

He has won numerous awards, including:
• Filmfare Award for Best Male Debut
• PTC Punjabi Film Awards
• Brit Asia TV Music Awards
• Mirchi Music Awards

His journey from a small village in Punjab to international stardom inspires millions of young Indians to pursue their dreams while staying connected to their roots.`,
    projects: ['Udta Punjab', 'Good Newwz', 'Crew', 'Coachella 2023', 'G.O.A.T. Album', 'Moonchild Era', 'Jogi', 'Soorma', 'Honsla Rakh'],
    skills: ['Singing', 'Acting', 'Dancing', 'Comedy', 'Songwriting', 'Television Hosting', 'Fashion'],
    achievements: [
      'First Punjabi artist at Coachella (2023)',
      'Filmfare Best Male Debut (Udta Punjab)',
      'Billboard charting artist (G.O.A.T.)',
      'Global Punjabi music icon',
      'Successful Bollywood crossover'
    ],
    social: {
      instagram: '@diljitdosanjh',
      youtube: '@diljitdosanjh',
      twitter: '@diljitdosanjh'
    }
  },

  'apj-abdul-kalam': {
    name: 'Dr. APJ Abdul Kalam',
    title: 'Former President of India, Scientist & Author',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkXdptrCCHA15jXfV7T31V5MZ1M0A0gbDULj4QOzENw&s=10',
    age: 'Deceased (October 15, 1931 – July 27, 2015)',
    location: 'Rameswaram, Tamil Nadu, India',
    born: 'October 15, 1931, Rameswaram, Tamil Nadu, India',
    died: 'July 27, 2015, Shillong, Meghalaya, India',
    nationality: 'Indian',
    education: 'St. Joseph\'s College, Tiruchirappalli (Physics), Madras Institute of Technology (Aerospace Engineering)',
    occupation: 'Scientist, Engineer, Professor, Author, President',
    yearsActive: '1958–2015',
    knownFor: ['Missile Man of India', 'People\'s President', 'Wings of Fire', 'IGNITE Award'],
    bio: `Avul Pakir Jainulabdeen Abdul Kalam, popularly known as APJ Abdul Kalam, was an Indian aerospace scientist and statesman who served as the 11th President of India from 2002 to 2007. He was born and raised in Rameswaram, Tamil Nadu, and studied physics and aerospace engineering. He spent the next four decades as a scientist and science administrator, mainly at the Defence Research and Development Organisation (DRDO) and Indian Space Research Organisation (ISRO).

Early Life and Education
Kalam was born on October 15, 1931, in a Tamil Muslim family in Rameswaram. His father, Jainulabdeen Marakayar, was a boat owner and imam of a local mosque. His mother, Ashiamma, was a housewife. Kalam was the youngest of five siblings.

Despite humble beginnings, Kalam was a bright student. He sold newspapers to supplement his family's income during his school years. He graduated in Physics from St. Joseph's College, Tiruchirappalli, in 1954, and then studied aerospace engineering at the Madras Institute of Technology.

Career as a Scientist
After graduating, Kalam joined the Aeronautical Development Establishment of the Defence Research and Development Organisation (DRDO) as a scientist. In 1969, he was transferred to the Indian Space Research Organisation (ISRO), where he was the project director of India's first Satellite Launch Vehicle (SLV-III).

His contributions to India's space program include:
• Project director of SLV-III, India's first indigenous satellite launch vehicle
• Development of Polar Satellite Launch Vehicle (PSLV)
• Chief Executive of Integrated Guided Missile Development Program (IGMDP)
• Development of Agni and Prithvi missiles

He became known as the "Missile Man of India" for his work on the development of ballistic missile and launch vehicle technology.

Pokhran-II Nuclear Tests
Kalam played a pivotal organizational, technical, and political role in India's Pokhran-II nuclear tests in 1998. As the Chief Project Coordinator, he worked with the Department of Atomic Energy and other Indian government departments to make the tests successful.

Presidency (2002-2007)
Kalam was elected as the 11th President of India in 2002 with the support of both the ruling Bharatiya Janata Party and the opposition Indian National Congress. He became known as the "People's President" due to his approachable nature and connection with the common people.

During his presidency:
• He was the first scientist to occupy Rashtrapati Bhavan
• He was the third President to receive the Bharat Ratna
• He visited numerous schools and universities, inspiring students
• He donated his presidential salary to charity
• He initiated the PURA (Providing Urban Amenities in Rural Areas) concept

Post-Presidency
After leaving office, Kalam became a visiting professor at several universities, including:
• Indian Institute of Management Shillong
• Indian Institute of Management Ahmedabad
• Indian Institute of Management Indore
• Banaras Hindu University
• Anna University

He continued to inspire students through lectures and interactions. He authored several books, including:
• "Wings of Fire" — His autobiography
• "India 2020: A Vision for the New Millennium"
• "Ignited Minds: Unleashing the Power Within India"
• "My Journey: Transforming Dreams into Actions"

Awards and Honors:
• Bharat Ratna (1997) — India's highest civilian award
• Padma Bhushan (1981)
• Padma Vibhushan (1990)
• Hoover Medal (2009)
• National Space Society's Von Braun Award
• Honorary doctorates from 40+ universities

Death
Kalam collapsed while delivering a lecture at the Indian Institute of Management Shillong on July 27, 2015. He was rushed to the hospital but was declared dead from a cardiac arrest. His last words were reportedly about his lecture topic.

His death was mourned nationwide, and he was buried with full state honors in his hometown Rameswaram. Over 350,000 people attended his funeral.

Legacy
Kalam remains one of India's most beloved figures. He is remembered for:
• His vision for India's development
• His inspirational speeches to youth
• His simplicity and integrity
• His contributions to science and technology
• His books that continue to inspire millions

The Government of India declared his birthday (October 15) as "World Students' Day" in his honor. Various educational institutions, awards, and programs are named after him.

His famous quotes include:
• "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."
• "You have to dream before your dreams can come true."
• "If you want to shine like a sun, first burn like a sun."
• "Failure will never overtake me if my determination to succeed is strong enough."

APJ Abdul Kalam remains an eternal inspiration for Indians, especially the youth, representing the power of education, hard work, and dedication.`,
    projects: ['SLV-III', 'Polar Satellite Launch Vehicle', 'Agni Missile', 'Prithvi Missile', 'Pokhran-II', 'PURA', 'Wings of Fire'],
    skills: ['Aerospace Engineering', 'Nuclear Physics', 'Leadership', 'Public Speaking', 'Writing', 'Teaching'],
    achievements: [
      '11th President of India (2002-2007)',
      'Bharat Ratna (1997)',
      'Missile Man of India',
      'People\'s President',
      'Author of 15+ books'
    ],
    social: {
      legacy: 'apjabdulkalam.com'
    }
  },

  'virat-kohli': {
    name: 'Virat Kohli',
    title: 'Indian Cricketer & Former Captain',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-Vd-XQwwdnhs-jHMD_mcC9rgZSixju60A2pW8yUXgw&s=10',
    age: '36',
    location: 'Delhi, India',
    born: 'November 5, 1988, Delhi, India',
    nationality: 'Indian',
    education: 'Vishal Bharti Public School, Saviour Convent Senior Secondary School',
    occupation: 'Cricketer',
    yearsActive: '2008–present',
    knownFor: ['Run Machine', 'Chase Master', 'Aggressive Captain', 'Fitness Icon'],
    role: 'Batsman (Top-order)',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm medium',
    teams: ['India', 'Royal Challengers Bangalore', 'Delhi'],
    bio: `Virat Kohli is an Indian international cricketer and the former captain of the India national cricket team. He is widely regarded as one of the greatest batsmen in the history of cricket. He plays for Delhi in domestic cricket and Royal Challengers Bangalore in the Indian Premier League (IPL) as a right-handed batsman.

Early Life and Background
Virat Kohli was born on November 5, 1988, in Delhi into a Punjabi Hindu family. His father, Prem Kohli, was a criminal lawyer, and his mother, Saroj Kohli, is a homemaker. He has an older brother, Vikas, and an older sister, Bhavna.

Kohli showed an early interest in cricket. He was enrolled at the West Delhi Cricket Academy when he was nine years old. His father supported his cricket training and took him to practice sessions regularly.

Tragedy struck when Kohli was 18 — his father died of a heart attack in 2006. Despite the personal loss, Kohli continued to play cricket, scoring 90 runs in a Ranji Trophy match against Karnataka on the day of his father's funeral.

Domestic Career
Kohli made his first-class debut for Delhi in 2006. He captained the Indian Under-19 team to victory in the 2008 Under-19 Cricket World Cup in Malaysia. His performance in the tournament caught the attention of selectors and IPL franchises.

International Career
Kohli made his ODI debut against Sri Lanka in August 2008. His Test debut came in 2011 against the West Indies. He made his T20I debut in 2010.

Key milestones:
• First ODI century: 107 against Sri Lanka (2009)
• First Test century: 116 against Australia (2012)
• Fastest ODI century by an Indian: 52 balls against Australia (2013)
• Fastest to 8,000, 9,000, 10,000, 11,000 ODI runs
• Most centuries in ODI run-chases
• Most runs in T20I cricket
• Most centuries across all formats

Captaincy
Kohli became India's Test captain in 2014 and limited-overs captain in 2017. Under his captaincy:
• India became the top-ranked Test team
• India won Test series in Australia (2018-19, 2020-21)
• India reached the 2019 World Cup semi-finals
• India won the 2021 Border-Gavaskar Trophy
• India reached the 2021 World Test Championship final

He stepped down as T20I captain in 2021, ODI captain in 2021, and Test captain in 2022.

Indian Premier League
Kohli has played for Royal Challengers Bangalore (RCB) since the inception of IPL in 2008. He captained RCB from 2013 to 2021.

IPL achievements:
• Most runs in IPL history
• Most centuries in IPL
• Led RCB to finals in 2016
• Retained by RCB for record amounts

Batting Records
Kohli holds numerous batting records:
• Most runs in T20I cricket
• Fastest to 10,000 ODI runs (205 innings)
• Most centuries in ODI run-chases (26)
• Most double centuries by an Indian in Tests
• Highest run-scorer in IPL
• Most centuries across all formats in international cricket

He has scored 80+ international centuries, second only to Sachin Tendulkar.

Fitness Revolution
Kohli transformed Indian cricket's fitness culture:
• Strict diet and training regime
• Yo-Yo test benchmark
• Inspired teammates to prioritize fitness
• Set new standards for athleticism in cricket

His fitness transformation inspired millions of Indians to adopt healthier lifestyles.

Personal Life
Kohli married Bollywood actress Anushka Sharma in December 2017 in a private ceremony in Italy. The couple has two children:
• Vamika (daughter, born January 2021)
• Akaay (son, born February 2024)

He is known for his aggressive on-field persona and emotional celebrations. Off the field, he is involved in various charitable activities through the Virat Kohli Foundation.

Brand Endorsements
Kohli is one of the most marketable athletes globally. His endorsements include:
• Puma
• MRF
• Audi India
• Manyavar
• Wrogn (his own brand)
• MPL
• Vivo
• Myntra

Business Ventures
• Wrogn: Clothing brand
• One8: Lifestyle brand with Puma
• Nueva: Restaurant chain
• Stepathlon Kids: Fitness venture

Awards and Honors:
• Padma Shri (2017)
• Rajiv Gandhi Khel Ratna (2018)
• ICC ODI Player of the Year (2012, 2017, 2018)
• ICC Test Player of the Year (2018)
• Sir Garfield Sobers Trophy (2017, 2018)
• Wisden Leading Cricketer in the World (2016, 2017, 2018)

Challenges and Comeback
Kohli faced a slump in form between 2020-2022, going over 1,000 days without an international century. He made a remarkable comeback:
• 71st international century against Afghanistan in Asia Cup 2022
• 72nd century against Bangladesh in December 2022
• 73rd century against Australia in March 2023
• 74th century against Sri Lanka in January 2023
• 75th century against Australia in November 2023
• 76th century against West Indies in July 2023
• 77th century against New Zealand in November 2023
• 78th century against South Africa in January 2024
• 79th century against England in February 2024
• 80th century against Bangladesh in September 2024

Legacy
Virat Kohli is considered one of the greatest cricketers of all time. His legacy includes:
• Transforming Indian cricket's fitness culture
• Setting new benchmarks for batting consistency
• Inspiring a generation of cricketers
• Elevating India's status in world cricket
• Being a role model for millions

His aggressive captaincy, passionate celebrations, and relentless pursuit of excellence have made him a global sporting icon. Even after stepping down as captain, he remains India's batting mainstay and one of the most followed athletes on social media.`,
    projects: ['Indian Cricket Team', 'Royal Challengers Bangalore', 'Virat Kohli Foundation', 'One8', 'Wrogn'],
    skills: ['Batting', 'Captaincy', 'Fielding', 'Fitness', 'Mental Toughness', 'Leadership'],
    achievements: [
      '80+ International Centuries',
      'Padma Shri (2017)',
      'Rajiv Gandhi Khel Ratna (2018)',
      'ICC Cricketer of the Year (multiple times)',
      'Most runs in IPL history'
    ],
    social: {
      instagram: '@virat.kohli',
      twitter: '@imVkohli'
    }
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

export default function PersonPage() {
  const { slug } = useParams()
  const person = peopleData[slug]

  if (!person) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-black text-white/10 mb-4">404</h1>
        <p className="text-sandhu-muted text-xl">Person not found</p>
      </div>
    </div>
  )

  return (
    <>
      <SEOHelmet 
        title={`${person.name} - SandhuNews`}
        description={person.bio?.slice(0, 160)}
        keywords={`${person.name}, Punjab, India, SandhuNews`}
      />
      
      <BackButton />
      
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sandhu-red/10 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-sandhu-red/5 rounded-full blur-[128px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <Breadcrumb />
          
       <AnimatedSection>
  {/* === HERO WITH IMAGE — START === */}
  <div className="relative overflow-hidden min-h-[300px] md:min-h-[400px] rounded-3xl">
    
    {/* Gradient overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-sandhu-dark via-sandhu-dark/90 to-transparent z-10" />
    
    {/* Faded image on right */}
    {person.image && (
      <img 
        src={person.image} 
        alt=""
        className="absolute right-0 top-0 h-full w-full md:w-1/2 object-cover opacity-40"
      />
    )}
    
    {/* Text content */}
    <div className="relative z-20 px-6 py-12 md:px-12 text-center md:text-left">
      
      {/* Tag badge */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-500/30 rounded-full px-4 py-1.5 mb-6">
        <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
        <span className="text-sm font-medium">{person.category || 'Profile'}</span>
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
        {person.name}
      </h1>

      {/* Role/Title */}
      <p className="text-xl md:text-2xl text-sandhu-muted max-w-3xl mx-auto md:mx-0 mb-8">
        {person.role}
      </p>

      {/* Stats if any */}
      {person.stats && (
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {person.stats.map(stat => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-sandhu-muted uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      {person.tags && (
        <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-6">
          {person.tags.map(tag => (
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

      <section className="relative max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            
            <AnimatedSection delay={100}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-sandhu-red/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-sandhu-red/20 rounded-lg flex items-center justify-center text-sandhu-red text-sm">01</span>
                    Biography
                  </h2>
                  <div className="text-sandhu-text leading-relaxed whitespace-pre-line text-lg">
                    {person.bio}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {person.projects && (
              <AnimatedSection delay={200}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-sm">02</span>
                      Projects & Works
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {person.projects.map(p => (
                        <span key={p} className="bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 px-4 py-2 rounded-xl text-sandhu-text transition-all duration-300 cursor-default">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}

            {person.skills && (
              <AnimatedSection delay={300}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 text-sm">03</span>
                      Skills & Expertise
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {person.skills.map(s => (
                        <span key={s} className="bg-sandhu-red/10 border border-sandhu-red/30 text-sandhu-red px-4 py-2 rounded-xl text-sm font-medium hover:bg-sandhu-red/20 transition-all duration-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}

            {person.achievements && (
              <AnimatedSection delay={400}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 text-sm">04</span>
                      Key Achievements
                    </h2>
                    <div className="space-y-4">
                      {person.achievements.map((a, i) => (
                        <div key={a} className="flex items-start gap-4 group/item">
                          <span className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 text-xs font-bold flex-shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <p className="text-sandhu-text group-hover/item:text-white transition-colors">{a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>

          <div className="space-y-6">
            <AnimatedSection delay={150}>
              <div className="sticky top-24">
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-500">
                  <h3 className="text-lg font-bold text-white mb-6">Quick Info</h3>
                  
                  <div className="space-y-4">
                    {person.age && (
                      <div className="flex justify-between items-center py-3 border-b border-white/5">
                        <span className="text-sandhu-muted text-sm">Age</span>
                        <span className="text-white font-medium">{person.age}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sandhu-muted text-sm">Location</span>
                      <span className="text-white font-medium text-right">{person.location}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sandhu-muted text-sm">Category</span>
                      <span className="text-sandhu-red font-medium">Person</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sandhu-muted text-sm">Last Updated</span>
                      <span className="text-white font-medium">July 2026</span>
                    </div>
                  </div>

                  {person.social && (
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h4 className="text-sm font-medium text-sandhu-muted mb-4">Connect</h4>
                      <div className="space-y-2">
                        {Object.entries(person.social).map(([platform, handle]) => (
                          <div key={platform} className="flex items-center gap-3 text-sm">
                            <span className="w-2 h-2 bg-sandhu-red rounded-full"></span>
                            <span className="text-sandhu-muted capitalize">{platform}:</span>
                            <span className="text-white">{handle}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 bg-gradient-to-br from-sandhu-red/10 to-purple-500/10 border border-white/10 rounded-3xl p-6">
                  <h4 className="text-white font-bold mb-3">Related Topics</h4>
                  <p className="text-sandhu-muted text-sm">
                    Explore more people, places, and topics about Punjab and India on SandhuNews.
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