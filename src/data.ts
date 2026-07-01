import { Skill, Project, Stat, Experience, Education } from './types';

export const statsData: Stat[] = [
  {
    id: 'skills',
    value: '21',
    label: 'Verified Skills',
    icon: 'verified'
  },
  {
    id: 'projects',
    value: '16',
    label: 'Professional Projects',
    icon: 'terminal'
  },
  {
    id: 'dsa',
    value: '100+',
    label: 'DSA Problems Solved',
    icon: 'school'
  }
];

export const skillsData: Skill[] = [
  {
    id: 'http',
    name: 'HTTP',
    iconName: 'Network',
    category: 'tooling',
    level: 'Expert',
    description: 'Deep understanding of RESTful state transfer, HTTP status codes, headers, cookies, API lifecycle, and modern security standards.'
  },
  {
    id: 'html',
    name: 'HTML',
    iconName: 'FileCode',
    category: 'frontend',
    level: 'Expert',
    description: 'Semantic markup structure, modern accessibility conformance (WCAG), SEO optimizations, and standard responsive document structures.'
  },
  {
    id: 'css',
    name: 'CSS',
    iconName: 'Palette',
    category: 'frontend',
    level: 'Expert',
    description: 'Expertise in responsive CSS grids, flexbox, CSS custom properties, complex typography layouts, custom responsive breakpoints, and animations.'
  },
  {
    id: 'git',
    name: 'Git',
    iconName: 'GitBranch',
    category: 'tooling',
    level: 'Advanced',
    description: 'Distributed version control management, complex branch merging, rebase patterns, pull request reviews, and GitHub Actions orchestration.'
  },
  {
    id: 'js',
    name: 'JS',
    iconName: 'Code2',
    category: 'frontend',
    level: 'Expert',
    description: 'Vanilla JavaScript core runtime, event loop, asynchronous promises/async-await queues, lexical scoping, closures, and ES6+ modules.'
  },
  {
    id: 'rest',
    name: 'REST',
    iconName: 'Cpu',
    category: 'backend',
    level: 'Expert',
    description: 'Designing clean and performant REST APIs with standard HTTP protocols, robust query parameters, structured payloads, and version control.'
  },
  {
    id: 'react',
    name: 'React',
    iconName: 'Atom',
    category: 'frontend',
    level: 'Expert',
    description: 'Modern functional component patterns, Custom Hooks design, React 19 concurrent state updates, optimization using memo/useCallback, and clean context mechanisms.'
  },
  {
    id: 'mongodb',
    name: 'Mongo DB',
    iconName: 'Database',
    category: 'database',
    level: 'Advanced',
    description: 'NoSQL database design, complex structural aggregation modeling, connection pooling, and seamless Node.js database mapping.'
  },
  // Extra verified skills to make it 15 verified skills total
  {
    id: 'node',
    name: 'Node.js',
    iconName: 'Server',
    category: 'backend',
    level: 'Advanced',
    description: 'Server environment runtime operations, file streams architecture, server building, microservices scalability.'
  },
  {
    id: 'express',
    name: 'Express',
    iconName: 'Terminal',
    category: 'backend',
    level: 'Expert',
    description: 'Highly performant middleware design, structured backend routes orchestrator, rate-limiting, and standard CORS authorization configs.'
  },
  {
    id: 'mongoose',
    name: 'Mongoose',
    iconName: 'Layers',
    category: 'database',
    level: 'Advanced',
    description: 'Structured database object modeling validation schema hooks, safe index setups, and complex query builder operations.'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    iconName: 'ShieldAlert',
    category: 'tooling',
    level: 'Advanced',
    description: 'Compile-time strict typing configurations, complex interfaces, mapped generics definitions, and robust code typing guards.'
  },
  {
    id: 'joi',
    name: 'JOI',
    iconName: 'CheckCircle2',
    category: 'tooling',
    level: 'Advanced',
    description: 'High-fidelity dynamic request payloads checking, standard parameters schemas validations matching, and robust server defense-in-depth.'
  },
  {
    id: 'swiper',
    name: 'Swiper',
    iconName: 'Sliders',
    category: 'frontend',
    level: 'Advanced',
    description: 'Seamless mobile touch carousel movements, custom sliders transitions layouts, and elegant responsive user scroll flows.'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    iconName: 'Sparkles',
    category: 'frontend',
    level: 'Expert',
    description: 'Fully responsive atomic utility-first CSS assemblies, design tokens configurations, fluid typography, and dark mode layouts.'
  },
  {
    id: 'ai-agents',
    name: 'AI & Agents',
    iconName: 'Bot',
    category: 'tooling',
    level: 'Expert',
    description: 'Applying cutting-edge prompt engineering and AI coding systems like GitHub Co-pilot, Cursor, Windsurf, Bolt, Emergent, Lovable, Gemini, and GPT-4 to accelerate development cycles.'
  },
  {
    id: 'c-cpp',
    name: 'C & C++',
    iconName: 'Laptop',
    category: 'backend',
    level: 'Advanced',
    description: 'Core software engineering foundation, standard algorithms execution, storage behaviors, pointers, objects classes configurations, and compiled state speed.'
  },
  {
    id: 'java',
    name: 'Core Java',
    iconName: 'Coffee',
    category: 'backend',
    level: 'Advanced',
    description: 'Object-oriented architectural patterns, safe collections data mappings, multi-threaded operations, structured packages design, and solid class loaders.'
  },
  {
    id: 'angular',
    name: 'Angular',
    iconName: 'Component',
    category: 'frontend',
    level: 'Advanced',
    description: 'Component structure patterns, reactive forms lifecycle states, dependency injection blocks, routing, modules, and web applications services orchestration.'
  },
  {
    id: 'gis-maps',
    name: 'GIS & Maps',
    iconName: 'Map',
    category: 'tooling',
    level: 'Expert',
    description: 'Mapping expertise with QGIS, ArcGIS, Mapbox, Leaflet, GeoServer, and OGC data specifications (WMS, WFS) to generate layered interactive geoportals.'
  },
  {
    id: 'azure',
    name: 'Azure',
    iconName: 'Cloud',
    category: 'tooling',
    level: 'Advanced',
    description: 'Orchestrating Azure cloud portal parameters, automation pipelines, continuous delivery/CI, and dynamic system hosting environments.'
  }
];

export const projectsData: Project[] = [
  {
    id: 'Almora-GIS-Viewer',
    title: 'District Almora UK GIS Portal',
    category: 'National Geospatial Portal',
    period: 'Apr 26 – July 26',
    verified: true,
    tags: [
      'React-JS',
      'Tailwind CSS',
      'Leaflet',
      'MongoDB',
      'ArcGIS',
      'QGIS',
      'Google Earth',
      'GitHub'
    ],
    description: 'Centralized, real-time geospatial data hub for District Almora Uttarakhand India planners with live Geo-Spatial data.',
    demoUrl: 'https://district-almora-production.up.railway.app/',
    githubUrl: 'https://github.com/RawatGitLab/District-Almora/',
    details: {
      overview: 'District Almora is a live, real-time Geographic Information System (GIS) visualization platform built specifically for district planners and administrators of Almora, Uttarakhand India',
      keyFeatures: [
        'Assembled a centralized catalog processing 50+ national spatial layers, slashing cross-agency lookup efforts by 20%.',
        'Standardized spatial records profiles metadata, raising map coordinate query speeds by 25%.',
        'Built 7+ distinct target modules (Administrative, Education, Health, Police, River, Nagar Nigam, Municipality).'
      ],
      technicalArchitecture: [
        'Implemented GeoJSON data on open Leaflet canvas layouts.',
        'Secured portal client views with Github- Actions user groups privileges.'
      ],
      roleAndImpact: 'Architected and deployed an integrated GIS web platform that modernized public service delivery, boosting operational efficiency in spatial data handling and citizen engagement by 20%.'
    }
  },
  {
    id: 'springshed',
    title: 'Hydrological Assessment & Springshed Management',
    category: 'Geospatial Web App',
    period: 'Sep 25 – Apr 26',
    verified: true,
    tags: [
      'React-JS',
      'Tailwind CSS',
      'Leaflet',
      'Google Earth Pro',
      'WASH',
      'Geospatial Archive',
      'Groundwater Tracking',
      'Field Survey Data-Integration'
    ],
    description: 'A web-based digital archive and spatial dashboard mapping traditional water sources across 7 Gram Panchayats.',
    demoUrl: 'https://spring-naula-rejuvenation.netlify.app/',
    githubUrl: 'https://github.com/RawatGitLab/Integrated_Hydrological_and_Geomorphological_Assessment_and_Springshed_Management',
    details: {
      overview: 'Conducted geo-spatial assessment of seasonal traditional water sources or springsheds to record, manage, and model discharge fluctuations in Himalayan communities.',
      keyFeatures: [
        'Mapped and surveyed 12 traditional water sources (springs/naulas) compiling precise GPS, elevation, and flow discharge data.',
        'Tracked discharge thresholds ranging from 0.0167 to 0.455 L/s, helping pinpoint low-yield vs persistent reservoirs.',
        'Maintained full photos and detailed geological metadata profiles for each localized water source.'
      ],
      technicalArchitecture: [
        'Coded interactive front-end visual mapping components in React paired with Tailwind grids.',
        'Integrated Leaflet map layouts with custom popup overlays showing seasonal flow attributes.'
      ],
      roleAndImpact: 'Framer & GIS Lead. Partnered directly with National Geo-Spatial Chair Dr. J.S. Rawat, Aman NGO, and local Gram Panchayats to provide authoritative data supporting spring rejuvenation strategies.'
    }
  },
  {
    id: 'water-mgmt',
    title: 'Natural Resource Water Management',
    category: 'Regional Water Resources Portal',
    period: 'Feb 24 – Aug 25',
    verified: true,
    tags: [
      'React JS',
      'Mapbox',
      'ESRI ArcGIS API',
      'Leaflet',
      'QGIS',
      'WMS',
      'WFS',
      'Microsoft Azure'
    ],
    description: 'A regional dashboard showcasing 200+ infiltration well village sites, WASH metrics, and rainwater calculators.',
    demoUrl: 'https://grassrootsindia.org/water-resources-management/',
    details: {
      overview: 'Integrated broad geospatial datasets to optimize site selections and monitor domestic water systems across rugged rural communities.',
      keyFeatures: [
        'Dynamic state-wise filters showcasing 200+ infiltration wells throughout Uttarakhand and Himachal Pradesh.',
        'Designed real-time impact dashboards showing community-level metrics serving over 55,000+ citizens.',
        'Developed a beautiful "Blue Schools" interactive micro-calculator for matching rainwater harvests with school curriculums.'
      ],
      technicalArchitecture: [
        'Utilized Mapbox and ArcGIS ESRI APIs for seamless layer maps overlaying hydrography datasets.',
        'Orchestrated Azure web app hosting, slicing mobile client load delays by 35% under poor remote bandwidths.'
      ],
      roleAndImpact: 'Full-Stack Developer & GIS Specialist. Created donation/grant modules monitoring funds for over 2,000+ local families.'
    }
  },
  {
    id: 'michigan-spatial',
    title: 'Michigan Land Authority GIS Portal',
    category: 'State-Level Geospatial Catalog',
    period: 'Feb 22 – Jan 24',
    verified: true,
    tags: [
      'React JS',
      'Mapbox',
      'ESRI ArcGIS API',
      'Leaflet',
      'QGIS',
      'WMS',
      'WFS',
      'Microsoft Azure'
    ],
    description: 'A powerful state geospatial catalog aggregating 1,200+ spatial layers from over 20+ government agencies.',
    demoUrl: 'https://gis-michigan.opendata.arcgis.com/',
    details: {
      overview: 'Engineered an enterprise-grade ArcGIS Open Data gateway enabling secure public downloads and interactive maps modeling for state infrastructure, roads, and environment items.',
      keyFeatures: [
        'Merged huge directories containing 1,200+ spatial data assets, making discovery 35% faster across departments.',
        'Supported flexible multi-format shapefiles downloads including GeoJSON, KML, and standard CSV blocks.',
        'Published 86 interactive maps, 5 detailed storyboards, and 65 comprehensive data records built on Michigan EGLE standards.'
      ],
      technicalArchitecture: [
        'Utilized robust OGC-compliant map requests (WMS, WFS) mapping roads, hydrography, and civil divisions.',
        'Integrated faceted text search libraries to filter agency assets dynamically.'
      ],
      roleAndImpact: 'Senior GIS Software Engineer. Implemented high-performance spatial aggregations, increasing community engagement metrics by 20%.'
    }
  },
  {
    id: 'singapore-gis',
    title: 'Singapore Land Authority Geoportal',
    category: 'National Land Information Service',
    period: 'Feb 21 – Jan 22',
    verified: true,
    tags: [
      'React-JS',
      'ArcGIS API',
      'MapGL',
      'Leaflet',
      'Microsoft Azure'
    ],
    description: 'An authoritative national map platform aggregating spatial land assets from 65+ Singapore public agencies.',
    demoUrl: 'https://www.sla.gov.sg/',
    details: {
      overview: 'Designed a high-throughput geospatial platform serving thousands of monthly transactions for cadastral calculations and property searches.',
      keyFeatures: [
        'Aggregated spatial maps from 65+ government agencies, supporting version histories since 2010.',
        'Optimized site coordinates and boundary assets for 11,000 hectares of state territory and 2,600 properties, including 600 heritage bungalows.'
      ],
      technicalArchitecture: [
        'Engineered responsive web layout using React-JS paired with Mapbox GL (MapGL) vector engines.',
        'Created high-performance data pipelines to serve transactional land searches instantly.'
      ],
      roleAndImpact: 'Frontend Specialist. Engineered robust spatial boundaries modeling, raising overall data accuracy and tenant lease conversion speeds.'
    }
  },
  {
    id: 'c4i-system',
    title: 'Command Control Communication Computer (C4I)',
    category: 'Defense Tactical Dashboard',
    period: 'Feb 20 – Oct 20',
    verified: true,
    tags: [
      'React-JS',
      'Leaflet',
      'GDAL',
      'ArcGIS-Online',
      'Google Earth Pro',
      'Microsoft Azure'
    ],
    description: 'A tactical mapping dashboard deployed to support defense coordination operations, managing 64 tactical targets real-time.',
    demoUrl: 'https://www.ecil.co.in/defence_c4i_projects',
    details: {
      overview: 'Engineered high-security interactive defense dashboard blocks visualizing weapon targets coordinates, missile trajectories, and mobile command shelters.',
      keyFeatures: [
        'Designed dashboard widgets tracking telemetry feeds from radar modules to four discrete troop control stations.',
        'Automated real-time position updates for 5 critical weapons systems, demonstrating fast data processing.',
        'Created responsive screen layouts for 4 multi-terrain mobile military command vehicles (TATRA 8x8 shelter models).'
      ],
      technicalArchitecture: [
        'Utilized Leaflet libraries and GDAL data translators to render geospatial elevation meshes perfectly.',
        'Used Azure secure services to lock down operational weapon feeds and data-streaming sockets.'
      ],
      roleAndImpact: 'GIS System Architect & Lead Developer. Programmed custom mapping controls representing the ₹980 Cr Akash Missile tactical command system with absolute zero-lag rendering.'
    }
  },
  {
    id: 'sri-lanka-sdi',
    title: 'Sri Lanka National Spatial Data Infrastructure',
    category: 'National Geospatial Portal',
    period: 'Jul 18 – May 19',
    verified: true,
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'Leaflet',
      'ArcGIS',
      'QGIS',
      'Google Earth',
      'Microsoft Azure',
      'GitHub'
    ],
    description: 'A multi-agency national geoportal serving 5 domain use-case web-maps across tourism, agriculture, and urban planning.',
    demoUrl: 'https://geoportal.nsdi.gov.lk/',
    details: {
      overview: 'Created an OGC-compliant spatial portal to enable distributed GIS layers sharing among 27+ Sri Lankan government organizations.',
      keyFeatures: [
        'Assembled a centralized catalog processing 130+ national spatial layers, slashing cross-agency lookup efforts by 20%.',
        'Standardized spatial records profiles metadata, raising map coordinate query speeds by 25%.',
        'Built 5 distinct target modules (Urban zoning, Disaster mitigation, Archaeology, Tourism, Agriculture).'
      ],
      technicalArchitecture: [
        'Implemented WMS/WFS map queries on open Leaflet canvas layouts.',
        'Secured portal client views with Azure user groups privileges.'
      ],
      roleAndImpact: 'Trainee GIS & Web Analyst. Deployed unified maps frameworks, accelerating public GIS operations and citizen-focused information services by 20%.'
    }
  },
  {
    id: 'qkart',
    title: 'QKart Backend',
    category: 'Backend REST API & Database Integration',
    period: 'May 2026',
    verified: true,
    tags: [
      'Mongoose ODM',
      'JOI data validation',
      'Postman',
      'REST',
      'ES6',
      'MONGO QUERIES',
      'Express JS',
      'Node JS',
      'Mongo DB',
      'Hashing',
      'Token authentication',
      'JWT Token',
      'Password authentication',
      'Test Driven Development',
      'Unit testing',
      'Integration testing',
      'Jest framework',
      'Deployment',
      'Heroku',
      'Netlify',
      'MongoDB Atlas'
    ],
    description: 'Fully functional, industry-standard E-Commerce backend service supporting robust user authentication, shopping carts, transactional order histories, and structured search optimizations.',
    githubUrl: 'https://github.com/RawatGitLab/varunrawatmailbox2507-ME_QKART_FRONTEND_V2/tree/master/backend',
    details: {
      overview: 'QKart Backend is a production-ready shopping platform core serving checkout processing, relational database modeling over NoSQL collections, and dynamic request parameters validations.',
      keyFeatures: [
        'Secure token-based JWT credentials storage and password protection via bcrypt hashing patterns.',
        'High-fidelity payload defense checking utilizing JOI frameworks validations on all registration/order routes.',
        'Seamless integration with Mongoose database schemas matching cart validation triggers on products inventory lookup.'
      ],
      technicalArchitecture: [
        'Built with Node.js and the Express framework optimized for low request response times.',
        'Utilized MongoDB with optimized indexes and safe query parameters blocks to prevent database bottlenecks.',
        'Thorough integration and unit testing suites written with Jest with 85%+ code verification coverage.'
      ],
      roleAndImpact: 'Sole Software Engineer and Backend Architect. Spearheaded the database architecture transformation from simple static nodes to fully relational-like aggregate queries, boosting transaction processing speeds by 40%.'
    }
  },
  {
    id: 'qkart-frontend',
    title: 'QKart Frontend',
    category: 'Frontend E-Commerce Web Application',
    period: 'Feb 2026',
    verified: true,
    tags: [
      'React Hooks',
      'Forms',
      'Controlled Components',
      'REST',
      'JSON',
      'Error Handling',
      'Developer Tools',
      'ES6',
      'Conditional Rendering',
      'React State & Props',
      'React',
      'Event Handling',
      'LIFECYCLE METHODS',
      'React Router',
      'Material UI',
      'Responsive Design',
      'localStorage',
      'Material UI Grid',
      'Keyword Search',
      'Debouncing',
      'Deployment',
      'Netlify',
      'Axios',
      'JWT'
    ],
    description: 'A feature-rich e-commerce frontend supporting rich product catalogs, real-time checkout, shopping carts, and shipping address setup.',
    demoUrl: 'https://varunrawatmailbox2507-me-qkart-fron.vercel.app/',
    githubUrl: 'https://github.com/RawatGitLab/varunrawatmailbox2507-ME_QKART_FRONTEND_V2',
    details: {
      overview: 'Developed a responsive frontend replica of an e-commerce giant with search-as-you-type and custom checkout flows.',
      keyFeatures: [
        'Seamless integration with REST APIs to query product catalogues under 100ms.',
        'Custom animated panels for shopping cart addition, retrieval, and inventory check indicators.',
        'Secure login and registration flows checking active user-auth state.'
      ],
      technicalArchitecture: [
        'Designed standard modular components with React functional structures styled in Tailwind and MUI.',
        'Employed LocalStorage logic to persist cart state dynamically across sessions.'
      ],
      roleAndImpact: 'Front-End Engineer. Designed fluid shopping cart drawers and secure routing structures, decreasing cart drop-off rates by 15%.'
    }
  },
  {
    id: 'expense',
    title: 'Expense Tracker',
    category: 'Full-Stack Dashboard Web app',
    period: 'Apr 2026',
    verified: true,
    tags: [
      'ReactJS',
      'JavaScript',
      'State Management',
      'localStorage',
      'Responsive Design',
      'Git',
      'Tailwind',
      'Recharts'
    ],
    description: 'A beautiful personal budget planner featuring micro-interactions, rich charts dashboard reports, categorical filters, and continuous client-side local data storage.',
    demoUrl: 'https://buildout-xexpensetracker.netlify.app/',
    githubUrl: 'https://github.com/RawatGitLab/XExpenseTracker',
    details: {
      overview: 'Expense Tracker transforms daily personal finance journaling into visually striking graphic logs. Users can effortlessly input, verify, search, and delete expenditures dynamically.',
      keyFeatures: [
        'Custom interactive charts tracking structural spends dynamically across food, housing, entertainment, and utilities.',
        'Flexible real-time keyword search parameters supporting instant item sorting and pagination controls.',
        'Beautiful modern feedback overlays showing monthly savings targets and safety buffer status indicators.'
      ],
      technicalArchitecture: [
        'Engineered key component modules in custom React Hooks to separate transaction calculations from DOM paint-ups.',
        'Utilized Tailwind CSS utility grids for elegant, desktop-precise configurations, yielding absolute pixel parity.',
        'Incorporated Recharts for visual bar patterns, line distributions, and customized responsive canvas graphs.'
      ],
      roleAndImpact: 'Full-stack UI designer & developer. Designed the interactive canvas dashboard from high-fidelity Figma drawings to standard functional components, achieving 100% mobile responsive touch parity.'
    }
  },
  {
    id: 'qtify',
    title: 'QTIFY',
    category: 'High-Fidelity Audio Streaming Portal',
    period: 'Mar 2026',
    verified: true,
    tags: [
      'ReactJS',
      'Swiper Library usage',
      'Module-scoped CSS',
      'Flexbox',
      'CSS variables',
      'Condition Rendering',
      'Component Reusability',
      'Material UI',
      'Customizing Third-Party Components',
      'Deployment'
    ],
    description: 'An elegant music browsing web application. Includes nested visual carousels, responsive slider bars, custom song library tabs, and standard audio player control configurations.',
    demoUrl: 'https://qtify-nishchay.vercel.app/',
    githubUrl: 'https://github.com/RawatGitLab/Qtify',
    details: {
      overview: 'QTIFY replicates premium music client systems using custom layout carousels. Users browse, expand cards, and listen to sample playlists without experiencing page reloads.',
      keyFeatures: [
        'Touch-enabled Swiper carousels allowing horizontal playlist browsing.',
        'Custom library filtering tags enabling instant genre switches (Rock, Pop, Jazz, Electronic).',
        'Fully integrated audio playback systems managing timeline sliders, volumes, and play/pause key states.'
      ],
      technicalArchitecture: [
        'Designed modular custom grids utilizing React CSS Module properties to contain styling layouts precisely.',
        'Handled external HTTP REST API requests recursively using Axios with high-performance memory cache-holders.',
        'Utilized Material-UI (MUI) custom slider buttons styled inside responsive Tailwind containers.'
      ],
      roleAndImpact: 'UI Developer & Performance Specialist. Tuned horizontal carousels to load song album asset lists asynchronously, slashing initial bundle download weights and accelerating image render speeds.'
    }
  },
  {
    id: 'xboard',
    title: 'XBoard',
    category: 'News Aggregation Dashboard',
    period: 'Jan 2026',
    verified: true,
    tags: [
      'HTML',
      'CSS',
      'Figma',
      'Bootstrap Accordion',
      'Bootstrap',
      'ES6',
      'JavaScript',
      'DOM Manipulation',
      'Developer Tools',
      'REST',
      'JSON',
      'Netlify',
      'Netlify CLI',
      'Deployment',
      'VS Code Live Server',
      'Bootstrap Carousel'
    ],
    description: 'An elegant news presentation portal displaying articles, categories, search, and detail overlays using external RSS / Flipboard backend APIs.',
    githubUrl: 'https://github.com/RawatGitLab/Xboard',
    details: {
      overview: 'XBoard displays real-time international and domestic headlines utilizing robust API proxy endpoints.',
      keyFeatures: [
        'Dynamic news sorting with carousel animations.',
        'Clean search filters and responsive grid modules for smooth article reading.',
        'Integration of rich media image attachments loaded asynchronously.'
      ],
      technicalArchitecture: [
        'Built using Bootstrap 5 grid systems and client-side JavaScript DOM manipulation.',
        'Implemented caching middleware to prevent payload request overhead.'
      ],
      roleAndImpact: 'Core UI Developer. Transformed wireframes into high-fidelity component blocks, achieving high Lighthouse performance scores.'
    }
  },
  {
    id: 'qtrip-dynamic',
    title: 'QTrip Dynamic',
    category: 'Dynamic Travel Booking Web App',
    period: 'Dec 2025',
    verified: true,
    tags: [
      'HTML',
      'CSS',
      'ES6',
      'JavaScript',
      'Developer Tools',
      'Bootstrap',
      'HTTP',
      'REST',
      'Responsive Design',
      'VS Code Live Server',
      'DOM Manipulation',
      'cURL',
      'JSON',
      'Event Handling',
      'localStorage',
      'Conditional Rendering',
      'Bootstrap Carousel',
      'Netlify CLI',
      'Deployment',
      'Heroku',
      'Netlify'
    ],
    description: 'A dynamic multi-city travel discovering and reservation dashboard managing adventures, custom filters, and booking forms.',
    demoUrl: 'https://frontend-rho-dun-59.vercel.app/',
    githubUrl: 'https://github.com/RawatGitLab/varunrawatmailbox2507-ME_QTRIPDYNAMIC',
    details: {
      overview: 'QTrip Dynamic makes booking flights, activities, and hotel stays incredibly responsive and intuitive through location-specific API requests.',
      keyFeatures: [
        'Loads adventure itineraries dynamically matching chosen cities.',
        'Configured complex filter combinations by category and duration simultaneously.',
        'Validates active booking reservations through integrated forms validation.'
      ],
      technicalArchitecture: [
        'Utilized standard ES6 Fetch APIs to perform asynchronous page routing updates on the fly.',
        'Managed persistent reservation listings tracking active cart indicators.'
      ],
      roleAndImpact: 'Web Application Engineer. Engineered deep logic mapping city metadata to custom booking layouts, accelerating reservation load times by 25%.'
    }
  },
  {
    id: 'qtrip-static',
    title: 'QTrip Static',
    category: 'Static Travel Landing Portal',
    period: 'Nov 2025',
    verified: true,
    tags: [
      'HTML',
      'CSS',
      'Developer Tools',
      'Bootstrap',
      'CSS Flexbox',
      'Responsive Design',
      'VS Code Live Server',
      'Bootstrap Responsive Images',
      'Bootstrap Flex',
      'Bootstrap Spacing',
      'Bootstrap Display',
      'CSS Positioning',
      'Deployment',
      'Netlify',
      'Netlify CLI'
    ],
    description: 'A beautifully responsive multi-page static portal designed to showcase global travel destinations with interactive sliders.',
    demoUrl: 'https://travel-qtripstatic.netlify.app/',
    githubUrl: 'https://github.com/RawatGitLab/QTRIPSTATIC',
    details: {
      overview: 'Developed a high-fidelity static landing site with pixel-perfect layouts matching Figma wireframes across mobile, tablet, and desktop screens.',
      keyFeatures: [
        'Created responsive navigation bars, search rails, and landing cards.',
        'Designed fluid grid systems displaying adventure locations with shadow hover effects.'
      ],
      technicalArchitecture: [
        'Fully built using pure semantic HTML5, custom CSS3, and Bootstrap layout frames.',
        'Ensured 100% responsive conformity using viewport parameters testing.'
      ],
      roleAndImpact: 'HTML/CSS Specialist. Authored semantic structural files conforming to modern accessibility and optimization requirements.'
    }
  },
  {
    id: 'xcruise',
    title: 'XCruise',
    category: 'Cruise Liner Itinerary Planner',
    period: 'Oct 2025',
    verified: true,
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap API'],
    description: 'A clean booking systems explorer visualizing cruise line paths, pricing models, schedule logs, and cabins booking setups.',
    demoUrl: 'https://criodo-xcruise-project.netlify.app/',
    githubUrl: 'https://github.com/RawatGitLab/Crio.do-Xcruise-Project',
    details: {
      overview: 'XCruise streamlines sea vacation discovery with interactive itinerary maps and responsive pricing tables.',
      keyFeatures: [
        'Dynamic cabin tier cards selection updating prices reactively.',
        'Seamless filters managing path routes and schedule listings.'
      ],
      technicalArchitecture: [
        'Leveraged pure JavaScript modules for client state calculations styled with responsive classes.',
        'Implemented smooth scroll-to-section navigations.'
      ],
      roleAndImpact: 'Front-End Developer. Architected the cabins selection matrix, boosting bookings throughput in simulation runs.'
    }
  },
  {
    id: 'xprofile',
    title: 'XProfile',
    category: 'Interactive Developer Profile Matrix',
    period: 'Sep 2025',
    verified: true,
    tags: ['React', 'CSS Flexbox', 'Responsive Design', 'Local API'],
    description: 'A professional portfolio web dashboard consolidating skills verification levels, projects logs, and live contact widgets.',
    demoUrl: 'https://criodo-xprofile-project.netlify.app/',
    githubUrl: 'https://github.com/RawatGitLab/Crio.do-XProfile-Project',
    details: {
      overview: 'XProfile is a comprehensive developer resume portal displaying verified professional metrics.',
      keyFeatures: [
        'Real-time guestbook messaging integrations.',
        'Beautiful filter tags updating profile categories instantly.',
        'High-contrast themes supporting responsive views.'
      ],
      technicalArchitecture: [
        'Built in React utilizing modular state management and custom Hooks.',
        'Styled with high-performance CSS and Tailwind.'
      ],
      roleAndImpact: 'Lead Architect & Designer. Designed the interactive layout, showcasing verified credential records directly.'
    }
  }
];

export const experienceData: Experience[] = [
  {
    id: 'exp1',
    role: 'Senior Software Engineer',
    company: 'Tech Mahindra Pvt. Ltd',
    period: '09/2021 – 08/2025',
    duration: '3 years 11 months',
    location: 'Hyderabad, TS, India',
    bullets: [
      'Built 15+ responsive dashboards and web applications using Angular, React, Vue, and TypeScript, improving user engagement by 30% and reducing page load time by 25%.',
      'Integrated 20+ RESTful APIs with backend and database teams, enabling real-time data sync and reducing data retrieval errors by 40%.',
      'Automated deployment pipelines using GitHub Actions, cutting release time by 50% and achieving 99.9% deployment success across 4 major releases.',
      'Delivered 8 high-priority projects on time with zero post-production critical bugs, contributing to a 15% increase in customer satisfaction scores.'
    ]
  },
  {
    id: 'exp2',
    role: 'Sr. GIS Consultant',
    company: 'Global Techno Smart Solution Pvt Ltd',
    period: '07/2021 – 09/2021',
    duration: '3 months',
    location: 'Ahmedabad, GJ, India',
    bullets: [
      'Led the end-to-end development of a geospatial portal displaying 10+ interactive map layers, improving data visualization efficiency by 35% for end users.',
      'Utilized Quantum GIS (QGIS) and ArcGIS to process and analyze spatial data, reducing map rendering time by 20% through optimized layer management.',
      'Managed procurement and integration of 2 third-party GIS applications, enabling advanced mapping features and saving 15% in licensing costs.',
      'Coordinated with internal teams and stakeholders to define portal requirements; delivered the project 1 week ahead of schedule with zero critical defects.'
    ]
  },
  {
    id: 'exp3',
    role: 'Software Engineer',
    company: 'Excel Technologies Pvt Ltd',
    period: '06/2019 – 07/2021',
    duration: '2 years 2 months',
    location: 'Hyderabad, TS, India',
    bullets: [
      'Successfully delivered 12+ software modules across 4 major projects, maintaining 100% on-time delivery with zero schedule overruns.',
      'Worked as a core team player in a 6-member agile squad, contributing to full software development lifecycle (SDLC) and reducing bug resolution time by 25% through proactive code reviews.',
      'Identified and resolved 30+ critical production issues independently, improving system stability by 20% and reducing customer escalations by 40%.',
      'Optimized existing database queries and front-end logic, cutting average page load time by 15% and enhancing user satisfaction scores by 18%.'
    ]
  },
  {
    id: 'exp4',
    role: 'Software Engineer Intern',
    company: 'Avineon India Pvt. Ltd',
    period: '11/2017 – 06/2019',
    duration: '1 year 9 months',
    location: 'Hyderabad, TS, India',
    bullets: [
      'Contributed to 2 large-scale national SDI projects (Uttarakhand & Sri Lanka), processing over 5,000+ spatial data layers and enabling seamless data sharing across government agencies.',
      'Used FME (Feature Manipulation Engine) to automate conversion of 10+ different data formats, reducing manual processing time by 40% and improving data accuracy by 25%.',
      'Configured OGC-compliant map services (WMS/WFS) for 3 geoportals, managed 150+ active users, and updated 200+ content pages using Drupal CMS, increasing portal engagement by 30%.',
      'Set up data collection mobile apps for field teams, supporting 50+ field surveyors; prepared 15+ technical presentations for stakeholders, enhancing project visibility and decision-making.'
    ]
  }
];

export const educationData: Education[] = [
  {
    id: 'edu1',
    degree: 'Master in Computer Application (MCA)',
    school: 'Graphic Era Hill University Bhimtal',
    period: '2013 – 2015',
    location: 'Bhimtal, Nainital, India',
    specialization: 'Computer Application',
    details: 'Two-year postgraduate master\'s program focused on advanced software engineering, object-oriented concepts, and enterprise applications architecture.'
  },
  {
    id: 'edu2',
    degree: 'Master in Technology (M.Tech) in C.S.E',
    school: 'Dehradun Institute of Technology',
    period: '2015 – 2017',
    location: 'Dehradun, Uttarakhand, India',
    specialization: 'Remote Sensing and GIS',
    details: 'Two-year postgraduate master\'s program, specializing in advanced Computer Science and Engineering, remote sensing coordinates interpolation, and GIS platforms integration.'
  }
];
