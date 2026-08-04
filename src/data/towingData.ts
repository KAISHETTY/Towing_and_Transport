import { ServiceItem, ServiceCity, Testimonial, FAQItem, RescueStory, GalleryPhoto, PricingPlan } from '../types';
import heroTowTruckImg from '../assets/images/hero_tow_truck_1785432491037.jpg';
import winchOutImg from '../assets/images/winch_out_rescue_1785432503347.jpg';
import lockoutImg from '../assets/images/lockout_roadside_1785432515017.jpg';

export const BUSINESS_INFO = {
  name: 'Zacks Towing & Transportation',
  owner: 'Ali',
  phoneDisplay: '(945) 444-5446',
  phoneRaw: '9454445446',
  phoneTel: 'tel:9454445446',
  whatsappLink: 'https://wa.me/19454445446?text=Hi%20Ali,%20I%20need%20roadside%20assistance%20right%20now!',
  smsLink: 'sms:9454445446?body=Hi%20Ali,%20I%20need%20roadside%20assistance%20at%20my%20current%20location.',
  experience: '10+ Years',
  coverageMain: 'All over North Texas (Dallas, Collin, Grayson Counties & surrounding areas)',
  logoUrl: 'https://i.imgur.com/15YVRj6.jpg',
  heroTruckImage: heroTowTruckImg,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'towing',
    title: 'Emergency Towing',
    shortDesc: '24/7 Flatbed and wheel-lift towing for sedans, SUVs, trucks, and luxury vehicles.',
    fullDesc: 'When your vehicle breaks down on the highway or in your driveway, our state-of-the-art flatbed tow trucks deliver fast, damage-free transport anywhere in North Texas.',
    iconName: 'Truck',
    image: heroTowTruckImg,
    startingPrice: '$75',
    features: ['Flatbed Towing', 'Wheel-Lift Towing', 'Damage-Free Loading', '24/7 Rapid Response']
  },
  {
    id: 'flat-tire',
    title: 'Flat Tire Change',
    shortDesc: 'On-site tire swap with your spare or air pressure top-off in under 20 minutes.',
    fullDesc: 'Got a blow-out on I-35 or US-75? Ali and our team arrive quickly with high-torque tools to safely replace your blown tire with your spare.',
    iconName: 'Disc',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&q=80&w=1000',
    startingPrice: '$55',
    features: ['On-Site Tire Swap', 'Spare Tire Installation', 'Air Pressure Check', 'Lug Nut Removal']
  },
  {
    id: 'jump-start',
    title: 'Battery Jump Start',
    shortDesc: 'Instant high-amp battery booster jump starts to get your car running immediately.',
    fullDesc: 'Dead battery in a parking garage or cold driveway? We use commercial heavy-duty battery boosters to safely jump start cars, diesel trucks, and hybrids.',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000',
    startingPrice: '$45',
    features: ['Commercial Boosters', 'Alternator Testing', 'Hybrid & Diesel Safe', 'Instant Arrival']
  },
  {
    id: 'lockout',
    title: 'Car Lockout Service',
    shortDesc: 'Fast, non-destructive vehicle door unlocking for all makes and models.',
    fullDesc: 'Keys locked inside your running car or trunk? We use soft air-wedges and specialized lockout tools to gain entry without scratching paint or damaging glass.',
    iconName: 'KeyRound',
    image: lockoutImg,
    startingPrice: '$50',
    features: ['Zero Scratch Entry', 'Trunk Unlocking', 'Keyless Entry Safe', 'All Makes & Models']
  },
  {
    id: 'key-maker',
    title: 'Key Maker & Locksmith',
    shortDesc: 'On-the-spot replacement, transponder fob programming, and key cutting.',
    fullDesc: 'Lost your car keys completely? Our mobile automotive locksmith cut new physical keys and program smart key fobs right at your breakdown location.',
    iconName: 'Key',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000',
    startingPrice: '$85',
    features: ['Transponder Keys', 'Smart Fob Programming', 'Ignition Repair', 'Lost Key Replacement']
  },
  {
    id: 'fuel-delivery',
    title: 'Fuel Delivery Service',
    shortDesc: 'Gasoline and diesel fuel brought directly to your stalled location.',
    fullDesc: 'Ran out of gas on the highway before reaching the station? We deliver 2 to 5 gallons of premium gasoline or diesel fuel directly to your tank.',
    iconName: 'Fuel',
    image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&q=80&w=1000',
    startingPrice: '$45',
    features: ['Unleaded & Diesel', 'Direct Tank Filling', 'Safety Flares Set Up', 'Highway Rescue']
  },
  {
    id: 'winch-out',
    title: 'Winch-Out & Off-Road Recovery',
    shortDesc: 'Heavy hydraulic winching for vehicles stuck in mud, sand, ditches, or snow.',
    fullDesc: 'Slid off the road or bogged down in Texas mud? Our heavy-duty winch trucks extract your vehicle safely without chassis strain.',
    iconName: 'ShieldAlert',
    image: winchOutImg,
    startingPrice: '$85',
    features: ['50ft Heavy Cable', 'Ditch Extraction', 'Mud & Sand Recovery', 'Rollover Assistance']
  },
  {
    id: 'motorcycle-towing',
    title: 'Motorcycle Towing',
    shortDesc: 'Specialized soft-strap motorcycle tie-down cradles on flatbed trailers.',
    fullDesc: 'We transport cruisers, sports bikes, custom choppers, and trikes using dedicated wheel chocks and soft-synthetic harness straps.',
    iconName: 'Bike',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000',
    startingPrice: '$80',
    features: ['Wheel-Chock Cradles', 'Soft-Strap Harnesses', 'Enclosed & Flatbed', 'Scratch-Free Lock']
  },
  {
    id: 'long-distance',
    title: 'Long-Distance Transport',
    shortDesc: 'Inter-city and state-wide vehicle transport across Texas and neighboring states.',
    fullDesc: 'Need a vehicle moved between Dallas, Houston, Austin, San Antonio, or interstate? We offer dedicated single-car haulage with full insurance.',
    iconName: 'Navigation',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000',
    startingPrice: '$150',
    features: ['State-Wide Coverage', 'GPS Live Tracking', 'Full Insurance Included', 'Door-To-Door Delivery']
  }
];

export const SERVICE_CITIES: ServiceCity[] = [
  {
    name: 'Dallas',
    counties: 'Dallas County',
    blurb: 'Fast 15-minute response across Downtown Dallas, Uptown, Highland Park, Oak Cliff, and all major freeways (I-35E, I-75, I-30, I-635, DNT).',
    popularServices: ['Emergency Towing', 'Jump Start', 'Lockout Service']
  },
  {
    name: 'Van Alstyne',
    counties: 'Collin County | Grayson County',
    blurb: 'Local priority dispatch along US-75 corridor in Van Alstyne, Anna, Howe, and surrounding rural Collin/Grayson farmland areas.',
    popularServices: ['Winch-Out Recovery', 'Flat Tire Change', 'Fuel Delivery']
  },
  {
    name: 'Plano',
    counties: 'Collin County',
    blurb: 'Comprehensive roadside coverage across West Plano, Legacy West, East Plano, and PSH, 24 hours a day, 7 days a week.',
    popularServices: ['Flatbed Towing', 'Key Maker / Locksmith', 'Jump Start']
  },
  {
    name: 'Prosper / Celina',
    counties: 'Collin County',
    blurb: 'Rapid dispatch along US-380, Preston Road, and new residential developments across Prosper and Celina.',
    popularServices: ['Winch-Out Recovery', 'Emergency Towing', 'Lockout Service']
  },
  {
    name: 'Allen',
    counties: 'Collin County',
    blurb: 'Prompt roadside assistance at Allen Premium Outlets, Exchange Parkway, Stacy Road, and neighborhood streets.',
    popularServices: ['Flat Tire Change', 'Jump Start', 'Fuel Delivery']
  },
  {
    name: 'Fairview / Lucas',
    counties: 'Collin County',
    blurb: 'Dedicated service for Fairview Town Center, Lucas acreage properties, and Lake Lavon access roads.',
    popularServices: ['Emergency Towing', 'Motorcycle Towing', 'Lockout Service']
  },
  {
    name: 'Richardson',
    counties: 'Dallas County | Collin County',
    blurb: 'Rapid towing and service around UTD campus, Telecom Corridor, Bush Turnpike, and Central Expressway.',
    popularServices: ['Jump Start', 'Flatbed Towing', 'Key Maker / Locksmith']
  },
  {
    name: 'Wimberly Place',
    counties: 'Collin County',
    blurb: 'VIP residential towing and luxury transport for Wimberly Place and exclusive North Texas estates.',
    popularServices: ['Luxury Vehicle Towing', 'Lockout Service', 'Battery Replacement']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Vance',
    location: 'Plano, TX',
    rating: 5,
    comment: 'Stranded on US-75 with a completely blown tire during rush hour. Ali arrived in under 18 minutes, changed the tire safely on the shoulder, and had me back on the road. Best roadside service in North Texas!',
    service: 'Flat Tire Change',
    date: '2 days ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    location: 'Prosper, TX',
    rating: 5,
    comment: 'Accidentally locked my keys and phone inside my running SUV at the grocery store. Called Zacks Towing from a cashier phone. Ali unlocked my car in less than 2 minutes without a single scratch on the door frame.',
    service: 'Lockout Service',
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '3',
    name: 'David Rodriguez',
    location: 'Dallas, TX',
    rating: 5,
    comment: 'My truck battery died in a parking garage downtown at 11:30 PM. Other companies refused or gave a 2 hour wait. Zacks Towing showed up in 15 minutes with a high-capacity jumper. Saved my night!',
    service: 'Jump Start',
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '4',
    name: 'Emily Thornton',
    location: 'Van Alstyne, TX',
    rating: 5,
    comment: 'Got bogged down in wet clay near our farm road after heavy rain. Ali used his heavy winch truck and pulled my vehicle out smoothly. Professional, upfront pricing, and super polite!',
    service: 'Winch-Out Recovery',
    date: '1 month ago',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  }
];

export const RECENT_RESCUES: RescueStory[] = [
  {
    id: 'rescue-1',
    title: 'Highway 75 Tire Blowout',
    location: 'Richardson, TX',
    service: 'Flat Tire Swap',
    responseTime: '14 Mins',
    description: 'Sedan experienced a sidewall rupture during evening commute on Central Expressway. Quick safety setup and spare tire swap completed safely on shoulder.',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'rescue-2',
    title: 'Off-Road SUV Recovery',
    location: 'Prosper, TX',
    service: 'Winch-Out',
    responseTime: '19 Mins',
    description: 'Pickup truck stuck in deep mud near new neighborhood construction site. Extracted cleanly using soft Synthetic rope without bumper stress.',
    image: winchOutImg
  },
  {
    id: 'rescue-3',
    title: 'Late Night Lockout Rescue',
    location: 'Dallas (Uptown)',
    service: 'Car Unlocking',
    responseTime: '12 Mins',
    description: 'Driver locked smart fob inside luxury convertible outside restaurant. Air-wedge soft entry performed in under 90 seconds.',
    image: lockoutImg
  },
  {
    id: 'rescue-4',
    title: 'Long Distance Flatbed Haul',
    location: 'Dallas to Houston',
    service: 'Long Distance Transport',
    responseTime: 'Scheduled',
    description: 'Classic sports vehicle transported on enclosed/flatbed safely across Texas with live GPS tracking provided to owner.',
    image: heroTowTruckImg
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    service: 'Local Flatbed Towing',
    priceRange: '$75 - $125',
    includes: ['First 5 miles included', 'Damage-free flatbed loading', 'Full vehicle inspection', '24/7 priority dispatch'],
    recommendedFor: 'Breakdowns, accidents, non-running vehicles'
  },
  {
    service: 'Battery Jump Start',
    priceRange: '$45 - $65',
    includes: ['Heavy-duty booster pack', 'Alternator/battery check', 'Immediate dispatch', 'Zero garage clearance fee'],
    recommendedFor: 'Dead batteries, cold starts, parking garage stalls'
  },
  {
    service: 'Car Lockout Unlocking',
    priceRange: '$50 - $75',
    includes: ['Non-destructive door entry', 'Soft air-wedge protection', 'Trunk opening if needed', 'All car models covered'],
    recommendedFor: 'Locked keys in car, trunk locks, smart fob trapped'
  },
  {
    service: 'Flat Tire Swap',
    priceRange: '$55 - $80',
    includes: ['On-site spare tire mounting', 'Torque wrench tightening', 'Air pressure adjustment', 'Highway safety setup'],
    recommendedFor: 'Flat tires, blowouts, low tire pressure emergency'
  },
  {
    service: 'Winch-Out & Recovery',
    priceRange: '$85 - $160',
    includes: ['Heavy hydraulic winch cable', 'Soft rigging attachments', 'Ditch / mud extraction', 'Chassis safety check'],
    recommendedFor: 'Vehicles stuck in mud, sand, ditches, embankments'
  },
  {
    service: 'Key Maker & Locksmith',
    priceRange: '$85 - $180',
    includes: ['On-site key cutting', 'Transponder fob programming', 'Smart key generation', 'Ignition code decoding'],
    recommendedFor: 'Lost keys, stolen fobs, broken key blades'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How fast can Zacks Towing arrive at my location?',
    answer: 'Our average arrival time across Dallas, Plano, Prosper, Celina, Allen, Richardson, and Van Alstyne is between 15 and 25 minutes depending on traffic. We dispatch the closest flatbed truck immediately upon your call.',
    category: 'general'
  },
  {
    question: 'How much does a tow or roadside service cost?',
    answer: 'Our local service calls start at $45 to $75. We provide transparent upfront quotes right over the phone or WhatsApp before dispatching — no hidden mileage fees or surprise charges.',
    category: 'pricing'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Cash, Debit/Credit Cards (Visa, MasterCard, Amex, Discover), Apple Pay, Google Pay, Zelle, and Venmo right at the truck via mobile card terminals.',
    category: 'payment'
  },
  {
    question: 'Are you licensed and insured in Texas?',
    answer: 'Yes! Zacks Towing & Transportation is 100% fully licensed, bonded, and insured in the State of Texas with $1,000,000+ commercial liability coverage for complete peace of mind.',
    category: 'general'
  },
  {
    question: 'Can you unlock my vehicle without scratching or damaging it?',
    answer: 'Absolutely. We use professional automotive soft air-wedges and rubberized reach tools that open car doors without putting any pressure on window glass or scratching vehicle paint.',
    category: 'coverage'
  },
  {
    question: 'Do you tow motorcycles and low-clearance luxury cars?',
    answer: 'Yes! Our modern flatbed trucks are equipped with extra-wide aluminum loading ramps, low-angle tilt beds, soft-strap harnesses, and motorcycle wheel chocks specifically built for luxury sedans, sports cars, and motorcycles.',
    category: 'coverage'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Modern Flatbed Fleet',
    category: 'Equipment',
    image: heroTowTruckImg,
    caption: 'State-of-the-art aluminum flatbed tow truck with low-clearance tilt bed.'
  },
  {
    id: 'g2',
    title: 'Off-Road Winch Recovery',
    category: 'Rescue',
    image: winchOutImg,
    caption: 'Heavy winch cable extraction for trucks and SUVs stranded in Texas mud.'
  },
  {
    id: 'g3',
    title: 'Damage-Free Door Lockout',
    category: 'Roadside',
    image: lockoutImg,
    caption: 'Soft wedge precision door unlocking for smart-key luxury vehicles.'
  },
  {
    id: 'g4',
    title: 'On-Site Battery Booster',
    category: 'Roadside',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000',
    caption: 'Commercial 3000-amp battery jump starter for instant vehicle start.'
  },
  {
    id: 'g5',
    title: 'Motorcycle Transport Setup',
    category: 'Transport',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000',
    caption: 'Dedicated wheel chock and soft tie-down harness for motorcycles.'
  },
  {
    id: 'g6',
    title: 'Emergency Fuel Delivery',
    category: 'Roadside',
    image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&q=80&w=1000',
    caption: 'Fresh gasoline & diesel delivered directly to highway shoulders.'
  }
];

export const TICKER_UPDATES = [
  'Just dispatched flatbed truck to Plano, TX',
  'Battery jump start completed on US-75 in Richardson',
  'Winch-out recovery successful near Prosper, TX',
  'Car lockout resolved in Dallas (Uptown) in 11 minutes',
  'Flat tire replacement completed in Van Alstyne, TX',
  'Fuel delivery dispatched on I-35 in Allen, TX',
  'Motorcycle flatbed transport completed to Celina, TX'
];
