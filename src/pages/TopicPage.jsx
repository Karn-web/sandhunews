import { useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import SEOHelmet from '../components/SEOHelmet'
import Breadcrumb from '../components/Breadcrumb'
import BackButton from '../components/BackButton'

const topicsData = {
  'tamil-nadu-govt-moves-sc-against-madras-hc-order-banning-cow-1782979977024': {
    title: 'Tamil Nadu govt moves SC against Madras HC order banning cow slaughter',
    summary: 'Tamil Nadu has approached the Supreme Court challenging the Madras High Court\'s sweeping ban on cow and calf slaughter',
    image: 'https://source.unsplash.com/800x600/?news,headlines',
    category: 'Top News',
    tag: 'Hot',
    sources: ["Times of India"],
    stats: [{"value":"2026","label":"Year"},{"value":"24/7","label":"Coverage"}],
    content: `Tamil Nadu govt moves SC against Madras HC order banning cow slaughter has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.

Reports indicate that Tamil Nadu has approached the Supreme Court challenging the Madras High Court's sweeping ban on cow and calf slaughter.

According to sources, The state argues the High Court's order, based on a 1976 ruling, contradicts the Tamil Nadu Animal Preservation Act, 1958.

It has been revealed that This Act permits the slaughter of older, unfit cows under specific conditions, a provision the state contends was ignored by the blanket prohibition.

As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'demography-panel-to-study-population-changes-post-2011-censu-1782979967526': {
    title: 'Demography panel to study population changes post 2011 Census, prepares detailed questionnaire for States',
    summary: 'The High-Level Committee on Demographic Changes will seek details of population changes and increase in settlements since the 2011 Census; it will also ask the ECI for data on SIR deletions',
    image: 'https://source.unsplash.com/800x600/?india,news',
    category: 'India',
    tag: 'Trending',
    sources: ["The Hindu"],
    stats: [{"value":"1.4B","label":"Population"},{"value":"28","label":"States"}],
    content: `Demography panel to study population changes post 2011 Census, prepares detailed questionnaire for States has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.

Reports indicate that The High-Level Committee on Demographic Changes will seek details of population changes and increase in settlements since the 2011 Census; it will also ask the ECI for data on SIR deletions.

As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'in-telangana-congress-brs-faceoff-over-gurukul-tenders-and-s-1782979960300': {
    title: 'In Telangana, Congress, BRS Face-Off Over Gurukul Tenders And State Debt',
    summary: 'Congress challenges BRS on Gurukul school tenders worth Rs 1143 crore in Telangana',
    image: 'https://source.unsplash.com/800x600/?news,headlines',
    category: 'Top News',
    tag: 'Hot',
    sources: ["NDTV"],
    stats: [{"value":"2026","label":"Year"},{"value":"24/7","label":"Coverage"}],
    content: `In Telangana, Congress, BRS Face-Off Over Gurukul Tenders And State Debt has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.

Reports indicate that Congress challenges BRS on Gurukul school tenders worth Rs 1143 crore in Telangana.

As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'demography-panel-to-study-population-changes-post-2011-censu-1782979783092': {
    title: 'Demography panel to study population changes post 2011 Census, prepares detailed questionnaire for States',
    summary: 'The High-Level Committee on Demographic Changes will seek details of population changes and increase in settlements since the 2011 Census; it will also ask the ECI for data on SIR deletions',
    image: 'https://source.unsplash.com/800x600/?india,news',
    category: 'India',
    tag: 'Trending',
    sources: ["The Hindu"],
    stats: [{"value":"1.4B","label":"Population"},{"value":"28","label":"States"}],
    content: `Demography panel to study population changes post 2011 Census, prepares detailed questionnaire for States has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.

Reports indicate that The High-Level Committee on Demographic Changes will seek details of population changes and increase in settlements since the 2011 Census; it will also ask the ECI for data on SIR deletions.

As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  '7-killed-5-injured-as-boulder-collapses-in-bengaluru-stone-q-1782979782981': {
    title: '7 Killed, 5 Injured As Boulder Collapses In Bengaluru Stone Quarry',
    summary: 'The incident took place when excavation work was underway using an excavator at the top of the quarry owned by Kaveri Company',
    image: 'https://source.unsplash.com/800x600/?news,headlines',
    category: 'Top News',
    tag: 'Hot',
    sources: ["NDTV"],
    stats: [{"value":"2026","label":"Year"},{"value":"24/7","label":"Coverage"}],
    content: `7 Killed, 5 Injured As Boulder Collapses In Bengaluru Stone Quarry has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.

Reports indicate that The incident took place when excavation work was underway using an excavator at the top of the quarry owned by Kaveri Company.

As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'kashmir-faces-mutton-crisis-over-punjab-transit-fee-row-amid-1782979782772': {
    title: 'Kashmir Faces Mutton Crisis Over Punjab \'Transit Fee\' Row Amid Wedding Season',
    summary: 'Mutton dealers allege the contractors on Punjab highways impose a transit fee of Rs 20,000-25,000 on each truck carrying the livestock',
    image: 'https://source.unsplash.com/800x600/?news,headlines',
    category: 'Top News',
    tag: 'Hot',
    sources: ["NDTV"],
    stats: [{"value":"2026","label":"Year"},{"value":"24/7","label":"Coverage"}],
    content: `Kashmir Faces Mutton Crisis Over Punjab 'Transit Fee' Row Amid Wedding Season has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.

Reports indicate that Mutton dealers allege the contractors on Punjab highways impose a transit fee of Rs 20,000-25,000 on each truck carrying the livestock.

As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'deeply-distressing-india-slams-demolition-of-125yearold-gurd-1782979110197': {
    title: '‘Deeply distressing’: India slams demolition of 125-year-old gurdwara in Pakistan',
    summary: '‘Deeply distressing’: India slams demolition of 125-year-old gurdwara in Pakistan',
    image: 'https://source.unsplash.com/800x600/?india,news',
    category: 'India',
    tag: 'Trending',
    sources: ["Indian Express"],
    stats: [{"value":"1.4B","label":"Population"},{"value":"28","label":"States"}],
    content: `‘Deeply distressing’: India slams demolition of 125-year-old gurdwara in Pakistan has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.



As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'water-vapour-not-smoke-bpcls-response-to-meghalaya-ethanol-u-1782979110073': {
    title: '‘Water vapour, not smoke’: BPCL’s response to Meghalaya ethanol unit pollution claim',
    summary: '‘Water vapour, not smoke’: BPCL’s response to Meghalaya ethanol unit pollution claim',
    image: 'https://source.unsplash.com/800x600/?india,news',
    category: 'India',
    tag: 'Trending',
    sources: ["Indian Express"],
    stats: [{"value":"1.4B","label":"Population"},{"value":"28","label":"States"}],
    content: `‘Water vapour, not smoke’: BPCL’s response to Meghalaya ethanol unit pollution claim has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.



As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'how-a-mans-fatal-fall-at-a-fort-in-india-sparked-a-trial-by--1782979109944': {
    title: 'How a man\'s fatal fall at a fort in India sparked a trial by media',
    summary: 'A young woman\'s arrest after her fiance\'s death has dominated headlines and set off a flurry of speculation',
    image: 'https://source.unsplash.com/800x600/?world,global',
    category: 'World',
    tag: 'Popular',
    sources: ["BBC India"],
    stats: [{"value":"8B","label":"Global Pop"},{"value":"195","label":"Countries"}],
    content: `How a man's fatal fall at a fort in India sparked a trial by media has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.

Reports indicate that A young woman's arrest after her fiance's death has dominated headlines and set off a flurry of speculation.

As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'in-telangana-congress-brs-faceoff-over-gurukul-tenders-and-s-1782978418689': {
    title: 'In Telangana, Congress, BRS Face-Off Over Gurukul Tenders And State Debt',
    summary: 'Congress challenges BRS on Gurukul school tenders worth Rs 1143 crore in Telangana',
    image: 'https://source.unsplash.com/800x600/?news,headlines',
    category: 'Top News',
    tag: 'Hot',
    sources: ["NDTV"],
    stats: [{"value":"2026","label":"Year"},{"value":"24/7","label":"Coverage"}],
    content: `In Telangana, Congress, BRS Face-Off Over Gurukul Tenders And State Debt has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.

Reports indicate that Congress challenges BRS on Gurukul school tenders worth Rs 1143 crore in Telangana.

As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'in-peak-wedding-season-kashmirs-wazwan-menu-could-face-a-mut-1782978415826': {
    title: 'In peak wedding season, Kashmir’s wazwan menu could face a mutton crisis',
    summary: 'In peak wedding season, Kashmir’s wazwan menu could face a mutton crisis',
    image: 'https://source.unsplash.com/800x600/?india,news',
    category: 'India',
    tag: 'Trending',
    sources: ["Indian Express"],
    stats: [{"value":"1.4B","label":"Population"},{"value":"28","label":"States"}],
    content: `In peak wedding season, Kashmir’s wazwan menu could face a mutton crisis has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.



As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'india-news-live-updates-2-july-2026-former-aiadmk-ministers--1782978413067': {
    title: 'India news LIVE updates, 2 July 2026: Former AIADMK ministers to join TVK, say party became ‘self-centred organisation’',
    summary: 'India news LIVE updates, 2 July 2026: Former AIADMK ministers to join TVK, say party became ‘self-centred organisation’',
    image: 'https://source.unsplash.com/800x600/?india,news',
    category: 'India',
    tag: 'Trending',
    sources: ["Indian Express"],
    stats: [{"value":"1.4B","label":"Population"},{"value":"28","label":"States"}],
    content: `India news LIVE updates, 2 July 2026: Former AIADMK ministers to join TVK, say party became ‘self-centred organisation’ has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.



As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'india-news-live-updates-2-july-2026-former-aiadmk-ministers--1782978064918': {
    title: 'India news LIVE updates, 2 July 2026: Former AIADMK ministers to join TVK, say party became ‘self-centred organisation’',
    summary: 'India news LIVE updates, 2 July 2026: Former AIADMK ministers to join TVK, say party became ‘self-centred organisation’',
    image: 'https://source.unsplash.com/800x600/?india,news',
    category: 'India',
    tag: 'Trending',
    sources: ["Indian Express"],
    stats: [{"value":"1.4B","label":"Population"},{"value":"28","label":"States"}],
    content: `India news LIVE updates, 2 July 2026: Former AIADMK ministers to join TVK, say party became ‘self-centred organisation’ has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.



As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  '1st-he-cheats-then-calls-old-clip-shows-siya-in-heated-call--1782978063482': {
    title: '\'1st he cheats, then calls\': Old clip shows Siya in heated call at nightclub',
    summary: 'An old video of Siya Goyal, accused in her fiancé Ketan Agarwal\'s murder, has resurfaced, showing her in a nightclub using abusive language',
    image: 'https://source.unsplash.com/800x600/?news,headlines',
    category: 'Top News',
    tag: 'Hot',
    sources: ["Times of India"],
    stats: [{"value":"2026","label":"Year"},{"value":"24/7","label":"Coverage"}],
    content: `'1st he cheats, then calls': Old clip shows Siya in heated call at nightclub has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.

Reports indicate that An old video of Siya Goyal, accused in her fiancé Ketan Agarwal's murder, has resurfaced, showing her in a nightclub using abusive language.

According to sources, Another clip shows her at a family function weeks before the alleged crime.

It has been revealed that Investigators are now scrutinizing Goyal's handling of Agarwal's mobile phone post-death, suspecting evidence tampering.

Analysts suggest that The couple allegedly planned the murder, with a crime scene recreation underway.

As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'madras-high-court-dismisses-savukku-shankars-plea-for-a-cbi--1782978062102': {
    title: 'Madras High Court dismisses ’Savukku’ Shankar’s plea for a CBI probe against former Chennai Police Commissioner Arun',
    summary: 'Chief Justice Sushrut Arvind Dharmadhikari and Justice G',
    image: 'https://source.unsplash.com/800x600/?india,news',
    category: 'India',
    tag: 'Trending',
    sources: ["The Hindu"],
    stats: [{"value":"1.4B","label":"Population"},{"value":"28","label":"States"}],
    content: `Madras High Court dismisses ’Savukku’ Shankar’s plea for a CBI probe against former Chennai Police Commissioner Arun has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.

Reports indicate that Chief Justice Sushrut Arvind Dharmadhikari and Justice G.

According to sources, Arul Murugan say court’s jurisdiction must not be abused by individuals who pretend to fight for justice while acting on personal or hidden motives.

As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'in-peak-wedding-season-kashmirs-wazwan-menu-could-face-a-mut-1782977747746': {
    title: 'In peak wedding season, Kashmir’s wazwan menu could face a mutton crisis',
    summary: 'In peak wedding season, Kashmir’s wazwan menu could face a mutton crisis',
    image: 'https://source.unsplash.com/800x600/?india,news',
    category: 'India',
    tag: 'Trending',
    sources: ["Indian Express"],
    stats: [{"value":"1.4B","label":"Population"},{"value":"28","label":"States"}],
    content: `In peak wedding season, Kashmir’s wazwan menu could face a mutton crisis has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.



As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'how-a-mans-fatal-fall-at-a-fort-in-india-sparked-a-trial-by--1782977746302': {
    title: 'How a man\'s fatal fall at a fort in India sparked a trial by media',
    summary: 'A young woman\'s arrest after her fiance\'s death has dominated headlines and set off a flurry of speculation',
    image: 'https://source.unsplash.com/800x600/?world,global',
    category: 'World',
    tag: 'Popular',
    sources: ["BBC India"],
    stats: [{"value":"8B","label":"Global Pop"},{"value":"195","label":"Countries"}],
    content: `How a man's fatal fall at a fort in India sparked a trial by media has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.

Reports indicate that A young woman's arrest after her fiance's death has dominated headlines and set off a flurry of speculation.

As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'first-englandindia-t20-abandoned-because-of-rain-1782977744780': {
    title: 'First England-India T20 abandoned because of rain',
    summary: 'England’s attempt to move on from a dreadful start to the summer is hit by the weather as their first T20 against India is abandoned because of rain',
    image: 'https://source.unsplash.com/800x600/?world,global',
    category: 'World',
    tag: 'Popular',
    sources: ["BBC India"],
    stats: [{"value":"8B","label":"Global Pop"},{"value":"195","label":"Countries"}],
    content: `First England-India T20 abandoned because of rain has become a major talking point across the nation. The developments in this story continue to unfold rapidly, with significant implications for the public.

Reports indicate that England’s attempt to move on from a dreadful start to the summer is hit by the weather as their first T20 against India is abandoned because of rain.

As this story develops, SandhuNews will continue to provide updates and in-depth analysis. Stay tuned for more coverage on this and other important topics affecting India and Punjab.`
  },
  'punjab-farmers-protest': {
    title: 'Punjab Farmers Protest 2020-2021',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUcdBNahmOg6nlNx8Aw-dQXUeD694T6Y7hyL-HBQE1KUklf4r3egWnNA&s=10',
    category: 'Current Affairs',
    tag: 'Hot',
    summary: 'Ongoing protests by farmers in Punjab regarding agricultural policies, MSP guarantees, and farmer welfare schemes.',
    content: `The Punjab farmers protest continues to be one of the most significant social and political movements in contemporary India. What began as localized demonstrations has evolved into a nationwide agitation that has captured international attention and reshaped India's agricultural policy discourse.

Historical Context and Background
Agriculture has been the backbone of Punjab's economy since the Green Revolution of the 1960s. The state, once known as the "Granary of India," transformed from a food-deficit region to the country's primary wheat and rice producer. However, this transformation came with significant costs:

- Depleting groundwater tables due to paddy cultivation
- Soil degradation from intensive farming
- Mounting farmer debts
- Increasing input costs (seeds, fertilizers, pesticides)
- Climate change impacts on crop yields

The three controversial farm laws introduced by the central government in 2020 sparked unprecedented protests across the nation.

Key Demands of the Movement
The farmers' unions have put forward several core demands:

1. LEGAL GUARANTEE OF MSP
The Minimum Support Price (MSP) system ensures farmers receive a predetermined price for their crops. Protesters demand:
- Legal framework making MSP mandatory for all crops
- MSP calculation based on the Swaminathan Commission formula (C2+50%)
- Expansion beyond wheat and rice to include pulses, oilseeds, and other crops

2. DEBT WAIVER
Punjab farmers face crippling debt:
- Average farm household debt exceeding Rs. 1 lakh
- Over 20,000 farmer suicides in Punjab in the past two decades
- High-interest loans from private moneylenders

3. WITHDRAWAL OF FARM LAWS
Although the three central farm laws were repealed in November 2021, farmers demand:
- Legal assurance against future similar legislation
- Protection of state agricultural marketing systems (APMCs)

4. ELECTRICITY AMENDMENTS
Opposition to the Electricity Amendment Bill 2022:
- Fear of privatization leading to increased tariffs
- Impact on free/subsidized agricultural electricity

5. STUBBLE BURNING SOLUTIONS
Environmental concerns versus farmer realities:
- Need for affordable stubble management machinery
- Alternative cropping patterns to reduce paddy cultivation

Key Leaders and Organizations
The movement is led by various farmer unions:
- Samyukta Kisan Morcha (SKM) - Umbrella organization of 40+ unions
- Rakesh Tikait - National spokesperson, Bharatiya Kisan Union
- Balbir Singh Rajewal - Punjab farmer leader
- Joginder Singh Ugrahan - BKU (Ugrahan) president

Impact on Society and Economy
The protests have had far-reaching consequences:
- Disrupted food supply chains
- Blocked national highways affecting trade
- Renewed focus on rural distress
- International diaspora support

International Attention
The protests gained global visibility:
- Support from international Sikh diaspora
- Comments by international celebrities
- UN human rights observations

Government Response
Various government measures:
- Formation of committee to discuss MSP
- Promise to form committee on natural farming
- Withdrawal of farm laws

Challenges Ahead
Despite partial victories, challenges remain:
- Implementation of MSP guarantees
- Sustainable agricultural transition
- Climate change adaptation
- Youth migration from farming

Future Outlook
The movement continues to evolve with ongoing negotiations with the central government, electoral political implications, and the need for comprehensive agricultural reforms.

The Punjab farmers protest represents a pivotal moment in India's democratic history, demonstrating the power of peaceful, sustained civil disobedience in shaping policy.`,
    sources: ['Wikipedia', 'The Hindu', 'Indian Express', 'BBC News', 'Economic Times'],
    stats: [
      { label: 'Duration', value: 'Ongoing' },
      { label: 'Key States', value: 'Punjab, Haryana' },
      { label: 'Peak Protesters', value: 'Millions' }
    ]
  },

  'isro-missions': {
    title: 'ISRO Missions 2026',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgU2hp4jycgvWMpZuPxcTrer-bMpuBjRHaMDncacmvw&s=10',
    category: 'Space & Science',
    tag: 'Trending',
    summary: 'Indian Space Research Organisation continues its ambitious space program with new missions planned for 2026.',
    content: `The Indian Space Research Organisation (ISRO) stands as one of the world's most accomplished and cost-effective space agencies. As India enters 2026, ISRO continues to push the boundaries of space exploration with ambitious missions that reflect the nation's growing technological prowess and scientific ambition.

History and Evolution of ISRO
ISRO was established in 1969, replacing the Indian National Committee for Space Research (INCOSPAR) formed in 1962. Under the visionary leadership of Dr. Vikram Sarabhai, India's space program began with humble beginnings:

- 1963: First sounding rocket launched from Thumba Equatorial Rocket Launching Station
- 1975: Aryabhata - India's first satellite
- 1980: Rohini satellite - first successful launch by SLV-3
- 1984: Rakesh Sharma becomes first Indian in space
- 2008: Chandrayaan-1 - India's first lunar mission
- 2013: Mars Orbiter Mission (Mangalyaan) - historic success
- 2019: Chandrayaan-2 - partial success, orbiter operational
- 2023: Chandrayaan-3 - first landing on lunar south pole

Key 2026 Missions and Programs

1. GAGANYAAN - India's First Human Spaceflight
The Gaganyaan program represents India's most ambitious space endeavor:
- Crewed spacecraft capable of carrying 3 astronauts
- Low Earth Orbit mission (400 km altitude)
- 5-7 day mission duration
- Developed by ISRO and Indian industry partners

Preparations include test vehicle flights for crew escape system, unmanned missions before crewed flight, astronaut training at ISRO's Human Space Flight Centre, and international cooperation for astronaut training.

Significance: India becoming 4th nation with independent human spaceflight capability, boost to domestic aerospace industry, inspiration for STEM education, and technology spin-offs for civilian applications.

2. CHANDRAYAAN-4
Following the success of Chandrayaan-3, the next lunar mission aims for:
- Sample return capability
- Rover with enhanced mobility
- In-situ resource utilization experiments
- International collaboration opportunities

3. ADITYA-L2 (ADITYA-L1 MISSION CONTINUATION)
India's solar observatory mission:
- Study of solar corona, chromosphere, and photosphere
- Understanding space weather
- Early warning system for solar storms
- Impact on satellite operations and communications

4. NISAR (NASA-ISRO SAR)
Joint mission with NASA:
- Dual-frequency synthetic aperture radar
- Earth observation for climate change studies
- Disaster monitoring and management
- Agricultural and forest monitoring

5. SMALL SATELLITE LAUNCH VEHICLE (SSLV)
ISRO's dedicated small satellite launcher:
- Cost-effective launches for small satellites
- Quick turnaround time
- Support for commercial satellite market
- Boost to India's private space sector

Major Achievements

Cost-Effective Space Missions:
ISRO is globally recognized for frugal engineering:
- Mars Orbiter Mission: $74 million (cheaper than Gravity movie)
- Chandrayaan-3: ~$75 million
- PSLV launches: Among world's most cost-effective

Record-Breaking Launches:
- PSLV-C37 (2017): 104 satellites in single mission (world record)
- Consistent PSLV success rate over 95%
- GSLV Mk III development for heavier payloads

Technology Development:
- Cryogenic engine technology
- Reusable launch vehicle (RLV) program
- Scramjet engine testing
- Autonomous navigation systems

Space Applications
ISRO's work benefits daily life:

Communication:
- INSAT series for telecommunications
- GSAT satellites for broadband connectivity
- Support for Digital India initiative

Navigation:
- NavIC (Navigation with Indian Constellation)
- Regional GPS alternative
- Strategic independence in navigation

Earth Observation:
- Resourcesat for agricultural monitoring
- Cartosat for mapping and planning
- Oceansat for marine studies
- Disaster management support

Weather Forecasting:
- INSAT-3D and 3DR for weather imaging
- Improved cyclone prediction
- Agricultural weather advisory

Future Vision 2030 and Beyond

Space Station:
- Bharatiya Antariksha Station (BAS) planned
- Modular design for gradual expansion
- Microgravity research capabilities
- International collaboration potential

Lunar Exploration:
- Chandrayaan-4 and beyond
- Potential lunar base concepts
- In-situ resource utilization
- International Artemis program participation

Planetary Missions:
- Shukrayaan (Venus mission)
- Mars orbiter follow-up
- Asteroid studies

Reusable Launch Vehicles:
- RLV-TD program advancement
- Space plane concepts
- Reduced launch costs

Private Sector Engagement:
- IN-SPACe (Indian National Space Promotion and Authorization Centre)
- NSIL (NewSpace India Limited)
- Startup ecosystem development
- Commercial launch services

Challenges and Opportunities

Budget Constraints:
- ISRO budget (~$1.5 billion) compared to NASA ($25+ billion)
- Need for increased funding for human spaceflight
- Balancing multiple mission priorities

Technology Gaps:
- Heavy-lift launch vehicle development
- Deep space communication
- Advanced propulsion systems
- Long-duration life support systems

International Competition:
- Growing space programs in China, UAE, South Korea
- Commercial space sector (SpaceX, Blue Origin)
- Need for strategic partnerships

Workforce Development:
- Need for specialized talent
- Brain drain to private sector
- International collaboration for training

Impact on India
ISRO's contributions extend beyond space:

Economic:
- Rs. 20,000+ crore space economy
- Employment generation
- Technology exports
- Startup ecosystem growth

Strategic:
- Independent satellite navigation
- Military communication capabilities
- Border surveillance
- Strategic deterrence

Social:
- Telemedicine in remote areas
- Distance education via satellite
- Disaster early warning
- Agricultural advisory services

Inspirational:
- National pride and identity
- STEM education motivation
- Scientific temper promotion
- International prestige

ISRO's journey from launching sounding rockets from a church in Kerala to planning human spaceflights and space stations exemplifies India's technological determination.`,
    sources: ['ISRO Official', 'Wikipedia', 'Space.com', 'The Times of India', 'NASA'],
    stats: [
      { label: 'Founded', value: '1969' },
      { label: 'Budget', value: '~$1.5B' },
      { label: 'Satellites', value: '400+' }
    ]
  },

  
 
  'punjabi-music': {
    title: 'Punjabi Music Industry 2026',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZkxfSpNRbSZeD3-BaeTdm11pzXwnNdzqODwFup2-og&s=10',
    category: 'Entertainment',
    tag: 'Culture',
    summary: 'Punjabi music continues to dominate Indian and global charts with its unique blend of folk and modern sounds.',
    content: `The Punjabi music industry is one of the most vibrant and influential music scenes in India and globally. It has evolved from traditional folk music to a modern industry that blends Bhangra, hip-hop, pop, and R&B, creating a distinctive sound that resonates with millions worldwide.

Historical Roots
Punjabi music has deep roots in the cultural traditions of Punjab:
- Folk music (Giddha, Bhangra)
- Sufi music (Nusrat Fateh Ali Khan, Abida Parveen)
- Qawwali traditions
- Traditional instruments (Dhol, Tumbi, Algoza)

Evolution and Modernization
The industry transformed in the 2000s with:
- Digital music platforms
- Music videos on YouTube
- Collaboration with international artists
- Fusion of traditional and modern sounds

Key Genres:
- Bhangra - Traditional Punjabi folk dance music
- Punjabi Pop - Modern pop with Punjabi lyrics
- Punjabi Hip-Hop - Urban Punjabi rap
- Romantic Ballads - Soft, melodic songs
- Sufi Rock - Fusion of Sufi poetry with rock

Major Artists:
- Sidhu Moosewala (Late) - Revolutionized Punjabi hip-hop
- Diljit Dosanjh - Global Punjabi icon
- Karan Aujla - Leading contemporary artist
- AP Dhillon - Canadian-Punjabi sensation
- Shubh - UK-based Punjabi rapper
- Guru Randhawa - Pop sensation
- Harrdy Sandhu - Actor and singer
- B Praak - Playback singer and composer
- Jubin Nautiyal - Bollywood playback
- Neha Kakkar - Playback singer

Global Impact
Punjabi music has achieved global recognition:
- Coachella performances (Diljit Dosanjh)
- Billboard chart entries
- YouTube billions of views
- International collaborations
- Festival appearances worldwide

Music Production
Major music labels:
- Speed Records
- White Hill Music
- T-Series Punjabi
- Famous Studios
- 5911 Records

Digital Platforms
- Spotify - Punjabi music among most streamed
- Apple Music - Dedicated Punjabi playlists
- YouTube - Billions of views
- JioSaavn, Gaana - Indian platforms

Challenges:
- Copyright issues
- Royalty disputes
- Piracy
- Need for better industry infrastructure
- Artist exploitation concerns

Future Trends:
- More international collaborations
- AI in music production
- Virtual concerts
- NFTs and blockchain for royalties
- Regional language expansion

Economic Impact:
- Multi-billion dollar industry
- Employment for thousands
- Tourism boost
- Cultural export
- Brand endorsements

Punjabi music has become a cultural ambassador for India, representing the vibrancy and energy of Punjab to the world.`,
    sources: ['Rolling Stone India', 'BBC Asian Network', 'Spotify Data', 'YouTube Trends'],
    stats: [
      { label: 'Global Reach', value: 'Billions' },
      { label: 'Top Genre', value: 'Bhangra/Hip-Hop' },
      { label: 'Major Labels', value: '10+' }
    ]
  },

  'digital-india': {
    title: 'Digital India Initiative 2026',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4JSTeZc8CpWys6vsNcBDGuwQusKWTu2tJ2nWRTqYFg&s=10',
    category: 'Technology',
    tag: 'Future',
    summary: 'Digital India continues to transform the country into a digitally empowered society and knowledge economy.',
    content: `Digital India is a flagship programme of the Government of India with a vision to transform India into a digitally empowered society and knowledge economy. Launched in 2015 by Prime Minister Narendra Modi, the programme has made significant strides in digital infrastructure, e-governance, and digital literacy.

Pillars of Digital India:
1. Digital Infrastructure as a Utility to Every Citizen
2. Governance and Services on Demand
3. Digital Empowerment of Citizens

Key Achievements by 2026:

Digital Infrastructure:
- BharatNet - Connecting 250,000+ gram panchayats with broadband
- 5G rollout across major cities
- Public Wi-Fi hotspots in thousands of locations
- Common Service Centres (CSCs) in rural areas

E-Governance:
- UMANG app - Unified platform for government services
- DigiLocker - 150+ million users, paperless governance
- e-Hospital - Online hospital management
- e-Courts - Digital court proceedings
- MyGov - Citizen engagement platform

Financial Inclusion:
- UPI (Unified Payments Interface) - World's largest real-time payment system
- 10+ billion monthly transactions
- BHIM app for digital payments
- Aadhaar-enabled payment system
- Digital banking penetration in rural areas

Digital Literacy:
- PMGDISHA - Pradhan Mantri Gramin Digital Saksharta Abhiyan
- Training rural citizens in digital skills
- Digital literacy in schools and colleges
- Women-focused digital empowerment programs

Startups and Innovation:
- India has the 3rd largest startup ecosystem globally
- 100+ unicorns by 2026
- Digital India Startup Hub
- Atal Innovation Mission
- T-Hub and other incubators

E-Education:
- SWAYAM - Massive open online courses
- DIKSHA - Digital infrastructure for school education
- National Digital Education Architecture (NDEAR)
- Online degree programs
- Virtual labs for science education

Telemedicine:
- e-Sanjeevani - National telemedicine service
- Online consultations during COVID-19
- AI-powered health diagnostics
- Digital health records

Agriculture Technology:
- e-NAM - Electronic National Agriculture Market
- KisanSuvidha app for farmers
- Precision agriculture using IoT
- AI-based crop monitoring

Challenges:
- Digital divide between urban and rural areas
- Cybersecurity threats
- Data privacy concerns
- Need for better digital literacy
- Infrastructure gaps in remote areas

Future Goals:
- 100% digital literacy
- Universal broadband access
- AI and blockchain integration
- Smart cities expansion
- Quantum computing research
- 6G technology development

Impact on Economy:
- Digital economy contributing significantly to GDP
- Job creation in IT and digital sectors
- E-commerce growth
- Fintech revolution
- Gig economy expansion

Digital India has fundamentally transformed how Indians interact with technology, government, and each other. The programme continues to evolve with emerging technologies, positioning India as a global digital leader.`,
    sources: ['Digital India Official', 'MeitY', 'NITI Aayog', 'World Bank Digital Report'],
    stats: [
      { label: 'UPI Monthly', value: '10B+' },
      { label: 'DigiLocker Users', value: '150M+' },
      { label: 'Unicorns', value: '100+' }
    ]
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

// Helper function to render content with proper line breaks
function RenderContent({ text }) {
  const paragraphs = text.split('\n\n').filter(p => p.trim())

  return (
    <div className="space-y-4">
      {paragraphs.map((para, i) => {
        const lines = para.split('\n').filter(l => l.trim())
        const firstLine = lines[0]

        // Check if it's a heading (no bullet, short, all caps or title case)
        const isHeading = firstLine && 
          firstLine.length < 60 && 
          !firstLine.startsWith('-') && 
          !firstLine.startsWith('1.') &&
          !firstLine.startsWith('2.') &&
          !firstLine.startsWith('3.') &&
          !firstLine.startsWith('4.') &&
          !firstLine.startsWith('5.') &&
          (firstLine === firstLine.toUpperCase() || 
           /^[A-Z][a-z]+(\s+[A-Z][a-z]+)*$/.test(firstLine))

        if (isHeading) {
          return (
            <h3 key={i} className="text-xl font-bold text-white mt-6 mb-2">
              {firstLine}
            </h3>
          )
        }

        // Check if it's a list
        const isList = lines.some(l => l.trim().startsWith('-'))

        if (isList) {
          return (
            <ul key={i} className="space-y-1 ml-4">
              {lines.map((line, j) => {
                const trimmed = line.trim()
                if (trimmed.startsWith('-')) {
                  return (
                    <li key={j} className="text-sandhu-text flex items-start gap-2">
                      <span className="text-sandhu-red mt-1.5 w-1.5 h-1.5 rounded-full bg-sandhu-red flex-shrink-0"></span>
                      <span>{trimmed.substring(1).trim()}</span>
                    </li>
                  )
                }
                return <li key={j} className="text-sandhu-text">{trimmed}</li>
              })}
            </ul>
          )
        }

        // Regular paragraph
        return (
          <p key={i} className="text-sandhu-text leading-relaxed">
            {lines.join(' ')}
          </p>
        )
      })}
    </div>
  )
}

export default function TopicPage() {
  const { slug } = useParams()
  const topic = topicsData[slug]

  if (!topic) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-black text-white/10 mb-4">404</h1>
        <p className="text-sandhu-muted text-xl">Topic not found</p>
      </div>
    </div>
  )

  const tagColors = {
    'Hot': 'from-red-500/20 to-orange-500/20 text-red-400 border-red-500/30',
    'Trending': 'from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30',
    'Popular': 'from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30',
    'Analysis': 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30',
    'Culture': 'from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/30',
    'Future': 'from-indigo-500/20 to-violet-500/20 text-indigo-400 border-indigo-500/30'
  }

  const tagColor = tagColors[topic.tag] || tagColors['Trending']

  return (
    <>
      <SEOHelmet 
        title={`${topic.title} - SandhuNews`}
        description={topic.summary}
        keywords={`${topic.title}, Punjab, India, news`}
      />

      <BackButton />

      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sandhu-red/10 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-sandhu-red/5 to-purple-500/5 rounded-full blur-[128px]"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <Breadcrumb />

        <AnimatedSection>
  {/* === HERO WITH IMAGE — START === */}
  <div className="relative overflow-hidden min-h-[300px] md:min-h-[400px] rounded-3xl">
    
    {/* Gradient overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-sandhu-dark via-sandhu-dark/90 to-transparent z-10" />
    
    {/* Faded image on right */}
    {topic.image && (
      <img 
        src={topic.image} 
        alt=""
        className="absolute right-0 top-0 h-full w-full md:w-1/2 object-cover opacity-40"
      />
    )}
    
    {/* Text content */}
    <div className="relative z-20 px-6 py-12 md:px-12 text-center md:text-left">
      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${tagColor} rounded-full px-4 py-1.5 mb-6 border`}>
        <span className="w-2 h-2 bg-sandhu-red rounded-full animate-pulse"></span>
        <span className="text-sm font-medium">{topic.tag} - {topic.category}</span>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
        {topic.title}
      </h1>

      <p className="text-xl md:text-2xl text-sandhu-muted max-w-3xl mx-auto md:mx-0 mb-8">
        {topic.summary}
      </p>

      {topic.stats && (
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {topic.stats.map(stat => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-sandhu-muted uppercase tracking-wider">{stat.label}</div>
            </div>
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
                    Overview
                  </h2>
                  <div className="text-lg">
                    <RenderContent text={topic.content} />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 text-sm">02</span>
                    Key Highlights
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {topic.content.split('\n\n').slice(0, 6).map((section, i) => {
                      const lines = section.split('\n').filter(l => l.trim())
                      const title = lines[0]
                      if (!title || title.length > 50 || title.startsWith('-')) return null
                      return (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-amber-500/30 transition-all duration-300">
                          <h3 className="text-white font-semibold mb-2 text-sm">{title}</h3>
                          <div className="text-sandhu-muted text-sm line-clamp-3">
                            {lines.slice(1).join(' ').slice(0, 100)}...
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="space-y-6">
            <AnimatedSection delay={150}>
              <div className="sticky top-24">
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-500 mb-6">
                  <h3 className="text-lg font-bold text-white mb-6">Topic Info</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sandhu-muted text-sm">Category</span>
                      <span className="text-white font-medium">{topic.category}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sandhu-muted text-sm">Status</span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-green-400 text-sm font-medium">Active</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sandhu-muted text-sm">Tag</span>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${tagColor} border`}>
                        {topic.tag}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sandhu-muted text-sm">Last Updated</span>
                      <span className="text-white font-medium">July 2026</span>
                    </div>
                  </div>
                </div>

                <div className="relative bg-gradient-to-br from-sandhu-red/10 to-purple-500/10 border border-white/10 rounded-3xl p-6 mb-6">
                  <h3 className="text-white font-bold mb-4">Sources</h3>
                  <div className="flex flex-wrap gap-2">
                    {topic.sources.map(s => (
                      <span key={s} className="bg-white/10 border border-white/20 text-sandhu-text px-3 py-1.5 rounded-lg text-sm hover:bg-white/20 transition-all">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6">
                  <h4 className="text-white font-bold mb-3">Related Topics</h4>
                  <p className="text-sandhu-muted text-sm mb-4">
                    Explore more topics about India and Punjab on SandhuNews.
                  </p>
                  <div className="space-y-2">
                    {Object.values(topicsData)
                      .filter(t => t.title !== topic.title)
                      .slice(0, 3)
                      .map(t => (
                        <div key={t.title} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                          <span className="w-2 h-2 bg-sandhu-red rounded-full"></span>
                          <span className="text-sm text-sandhu-text">{t.title}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
