export type ExperienceEntry = {
  role: string
  company: string
  location: string
  dates: string
  highlights: string[]
}

export type CareerHistoryEntry = {
  id: string
  company: string
  role: string
  location?: string
  dates: string
  summary?: string
  responsibilities: string[]
}

export type SkillGroup = {
  category: string
  skills?: string[]
  subsections?: Array<{
    title: string
    skills?: string[]
  }>
}

export type BusinessVenture = {
  name: string
  role: string
  dates: string
  responsibilities: string[]
}

export type EducationEntry = {
  credential: string
  institution: string
  location: string
  completed: string
  details?: string[]
  documentImage?: string
  documentAlt?: string
}

export type CertificationEntry = {
  credential: string
  issuer: string
  completed: string
  details: string[]
  documentImage?: string
  documentAlt?: string
  documentDownload?: string
  documentSummary?: string[]
  documents?: Array<{
    label: string
    image: string
    alt: string
  }>
}

export type MilitaryServiceEntry = {
  role: string
  organization: string
  location: string
  dates: string
  highlights: string[]
  documentImage?: string
  documentAlt?: string
  documentDownload?: string
}

// This is the website's single source of truth for résumé content.
// Update these entries whenever the résumé changes; the Experience, Education,
// Certifications, Military Service, and Skills sections render from this file.
export const professionalExperience: ExperienceEntry[] = [
  {
    role: 'Automotive Instructor',
    company: 'Universal Technical Institute',
    location: 'Bloomfield, NJ',
    dates: 'Dec 8, 2025 – Present',
    highlights: [
      'Deliver classroom and hands-on lab instruction in automotive diagnostics, electrical systems, fuel systems, drivability, and professional shop practices.',
      'Coach evidence-led troubleshooting using service information, wiring diagrams, waveforms, compression testing, and fuel-system examples.',
      'Manage classroom/lab activities, student groups, safety, attendance, assessments, and differentiated instruction across multiple workstations.',
      'Use Blackboard to organize coursework, assignments, grades, feedback, and student progress while coaching diagnostic strategy, documentation, and professional communication.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Innovative Defense Technologies',
    location: 'Mount Laurel, NJ',
    dates: 'Feb 2023 – Jan 23, 2025',
    highlights: [
      'Collaborated with senior engineers on full-stack and CI/CD development supporting secure automation pipelines through Jenkins, Trivy, Coverity, and Jira/Confluence.',
      'Engineered and maintained secure React applications with TypeScript and JavaScript.',
      'Built CI/CD pipelines integrating security scans with Jenkins, Trivy, and Coverity.',
      'Directed Linux server administration and Dockerized environments for mission-critical systems.',
      'Migrated CentOS 7 infrastructure to RHEL 10 using Docker Compose and a bastion host; independently researched and resolved migration issues with limited documentation.',
      'Automated reporting workflows and supported Agile sprint planning with technical leads.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Innovative Defense Technologies',
    location: 'Mount Laurel, NJ',
    dates: 'May 2022 – Aug 2022',
    highlights: [
      'Integrated Java, C++, and TypeScript components into automated software testing systems.',
      'Resolved versioning, library, and reference-link conflicts during cross-language integration.',
      'Provided common functionality across different compilation environments.',
      'Worked closely with a mentor and technical experts in a team-oriented engineering environment.',
    ],
  },
  {
    role: 'IT Intern',
    company: 'EMD Electronics',
    location: 'Branchburg, NJ',
    dates: 'Jun 2021 – Aug 2021',
    highlights: [
      'Coordinated application packaging for 96 applications in 10 weeks and worked with users on packaging documentation.',
      'Worked with the SCCM team on technical processes and coordinated key parts of an IT audit.',
      'Remediated regional asset inventory and analyzed North American PC encryption status with endpoint-user-services teams.',
      'Assisted with two major site integrations; imaged approximately 170 machines in 10 weeks and deployed devices to manufacturing and sales HQ sites.',
    ],
  },
]

// Positions from the uploaded work history, plus the 2001 Labriola Nissan role supplied in chat.
export const automotiveCareerHistory: CareerHistoryEntry[] = [
  {
    id: 'princeton-audi-2017',
    company: 'Princeton Audi',
    role: 'Automotive Technician',
    dates: 'Jan 2017 – Feb 2019',
    responsibilities: [
      'Receive work orders; diagnose and repair customer concerns and complete requested services.',
      'Perform courtesy vehicle inspections and record recommendations in CDK Service Edge.',
      'Communicate with service advisors and, when necessary, directly with customers.',
      'Document warranty repairs with proper punch times and descriptions of work performed.',
    ],
  },
  {
    id: 'union-line-garage',
    company: 'Union Line Garage',
    role: 'Automotive Technician',
    location: 'Hopewell, NJ',
    dates: 'Oct 2015 – Dec 2016',
    responsibilities: [
      'Receive work orders; diagnose and repair customer concerns and complete requested services.',
      'Perform courtesy vehicle inspections and record recommendations in CDK Service Edge.',
      'Communicate with service advisors and, when necessary, directly with customers.',
      'Document warranty repairs with proper punch times and descriptions of work performed.',
    ],
  },
  {
    id: 'princeton-audi-2014',
    company: 'Princeton Audi',
    role: 'Automotive Technician',
    dates: 'Aug 2014 – Oct 2015',
    responsibilities: [
      'Receive work orders; diagnose and repair customer concerns and complete requested services.',
      'Perform courtesy vehicle inspections and record recommendations in CDK Service Edge.',
      'Communicate with service advisors and, when necessary, directly with customers.',
      'Document warranty repairs with proper punch times and descriptions of work performed.',
    ],
  },
  {
    id: 'als-auto-care',
    company: 'Al’s Auto Care',
    role: 'Automotive Technician',
    location: 'Brick, NJ',
    dates: 'Nov 2013 – Aug 2014',
    responsibilities: [
      'Perform requested tasks and inspect vehicles for additional service recommendations.',
      'Diagnose and repair European, Asian, and domestic vehicles and communicate findings to the service advisor.',
      'Carry out day-to-day shop operations.',
    ],
  },
  {
    id: 'dch-academy-honda',
    company: 'DCH Academy Honda',
    role: 'Service Advisor',
    dates: 'Jul 2013 – Sep 2013',
    responsibilities: [
      'Discuss service needs and concerns with customers; answer calls and schedule appointments.',
      'Explain estimates, obtain repair approval, and monitor work against promised completion times.',
      'Communicate expected delays; review repairs and multi-point inspections with customers.',
      'Handle repair documentation, follow-up calls, and service survey reviews.',
    ],
  },
  {
    id: 'firestone-complete-auto',
    company: 'Firestone Complete Auto',
    role: 'Sales Associate',
    dates: 'Feb 2013 – May 2013',
    responsibilities: [
      'Present tire products and automotive services and provide in-store and telephone customer service.',
      'Coordinate with the customer service manager and technicians on service timing.',
      'Explain warranty coverage and customer options.',
    ],
  },
  {
    id: 'auto-diagnostic-services',
    company: 'Auto Diagnostic Services LLC',
    role: 'Shop Manager / Technician',
    location: 'Little River, SC',
    dates: 'Mar 2011 – Dec 2012',
    responsibilities: [
      'Prepare work orders, estimates, invoices, and receipts.',
      'Receive customers, interpret vehicle concerns, and process payments.',
      'Carry out automotive repairs with a focus on diagnostics and testing.',
    ],
  },
  {
    id: 'advance-auto-parts',
    company: 'Advance Auto Parts',
    role: 'Night Closing Manager',
    location: 'North Myrtle Beach, SC',
    dates: 'Jul 2010 – Mar 2011',
    responsibilities: [
      'Close and count registers, count the safe, and prepare the next day’s deposit.',
      'Coordinate mail pickup and assign employee closing duties.',
      'Install batteries and wiper blades and handle stocking and inventory.',
    ],
  },
  {
    id: 'blacks-tire-service',
    company: 'Black’s Tire Service',
    role: 'A-Level Technician',
    location: 'Shallotte, NC',
    dates: 'Sep 2009 – Jun 2010',
    responsibilities: [
      'Diagnose and repair electrical, OBD I/OBD II, air-conditioning, and brake systems.',
      'Diagnose noise and drivability concerns; perform repairs and service.',
      'Remove and replace major components and complete major and minor preventive maintenance.',
    ],
  },
  {
    id: 'ads-automotive',
    company: 'ADS Automotive',
    role: 'B-Level Technician',
    location: 'Whippany, NJ',
    dates: 'Mar 2006 – Jun 2006',
    responsibilities: [
      'Diagnose and repair electrical, OBD I/OBD II, air-conditioning, and brake systems.',
      'Diagnose noise and drivability issues and replace major components.',
      'Perform major and minor preventive maintenance.',
    ],
  },
  {
    id: 'warnock-nissan',
    company: 'Warnock Nissan',
    role: 'C-Level Technician',
    location: 'Morristown, NJ',
    dates: 'Jun 2005 – Mar 2006',
    responsibilities: [
      'Diagnose and repair electrical, minor OBD II, steering and suspension, and brake systems; perform alignments.',
      'Address noise and drivability concerns and carry out preventive maintenance.',
      'Complete technical bulletins and campaigns, plus mechanical disassembly, repair, and rebuild work.',
    ],
  },
  {
    id: 'rs-strauss',
    company: 'R&S Strauss',
    role: 'Entry-Level Technician',
    location: 'Dover, NJ',
    dates: 'Dec 2004 – Jun 2005',
    responsibilities: [
      'Service brakes, alignments, steering and suspension systems, and minor OBD issues.',
      'Perform preventive maintenance and tire mounting and balancing.',
    ],
  },
  {
    id: 'labriola-nissan',
    company: 'Labriola Nissan',
    role: 'Lube Technician',
    location: 'Red Bank, NJ',
    dates: '2001',
    summary: 'Routine oil/lube service, fluid and tire checks, and basic preventive maintenance.',
    responsibilities: [
      'Performed routine oil and filter changes and vehicle lubrication services.',
      'Checked fluid levels and tire pressure as part of basic maintenance.',
      'Assisted with general preventive-maintenance checks and safe shop procedures.',
    ],
  },
]

export const businessVentures: BusinessVenture[] = [
  {
    name: 'CodeDiggs LLC',
    role: 'Founder',
    dates: '2026–present',
    responsibilities: [
      'Business formation and administration',
      'Software product strategy and planning',
      'Brand, website, and online-presence management',
    ],
  },
  {
    name: 'The Sudsy Hussie LLP',
    role: 'Co-owner/operator',
    dates: '2021',
    responsibilities: [
      'Designed, implemented, troubleshot, and maintained a WordPress and WooCommerce storefront backed by MySQL',
      'Managed product listings, payment processing, and site analytics',
      'Product branding, packaging, and marketing',
      'Manufacturing infrastructure and workflow setup',
      'Inventory, order-fulfillment, and shipping management',
    ],
  },
  {
    name: 'Auto Diagnostic Services LLC',
    role: 'Owner/operator',
    dates: '2011–2012',
    responsibilities: [
      'Mobile automotive-service business operations',
      'Customer intake, estimates, scheduling, and invoicing',
      'Client relationships and workflow management',
    ],
  },
  {
    name: 'Dezots Club Car Cafe',
    role: 'Co-owner/operator',
    dates: '2002',
    responsibilities: [
      'Daily deli and food-service business operations',
      'Staffing and workflow management',
      'Menu planning and design',
      'Purchasing, vendor coordination, and inventory control',
    ],
  },
  {
    name: 'John Giles Personal Training',
    role: 'Owner/operator',
    dates: '2000',
    responsibilities: [
      'Mobile personal-training business operations',
      'Client acquisition, scheduling, and retention',
      'Service planning and customer relations',
    ],
  },
]

export const education: EducationEntry[] = [
  {
    credential: 'Bachelor of Arts in Computing and Informatics',
    institution: 'Rowan University',
    location: 'Glassboro, NJ',
    completed: 'December 2022',
    details: [
      'Spring 2023 commencement',
      'Magna Cum Laude',
      'GPA: 3.83',
      'Dean’s List — Fall 2021 and Spring 2022',
      'President’s List — Fall 2022',
      '4.0 final semester',
      'Minor in Computer Science',
    ],
    documentImage: '/credentials/rowan-ba-computing-informatics-2022.jpg',
    documentAlt:
      'Rowan University Bachelor of Arts diploma in Computing and Informatics, Magna Cum Laude',
  },
  {
    credential: 'Associate of Science in Computer Science',
    institution: 'Brookdale Community College',
    location: 'Lincroft, NJ',
    completed: 'December 2020',
    details: ['GPA: 3.26', 'Dean’s List — Spring 2020', '4.0 Spring 2020 semester'],
    documentImage: '/credentials/brookdale-associate-science-2020.jpeg',
    documentAlt: 'Brookdale Community College Associate in Science diploma issued in 2020',
  },
  {
    credential: 'Automotive Technician Certificate',
    institution: 'Lincoln Technical Institute',
    location: 'Union, NJ',
    completed: 'December 2005',
    details: ['High Honors', 'GPA: 4.0', 'Lincoln Tech Race Team'],
  },
]

export const certifications: CertificationEntry[] = [
  {
    credential: '120-Hour Premier TEFL / TESOL Course',
    issuer: 'The TEFL Org',
    completed: 'September 30, 2026',
    details: [
      'Successfully completed and passed the 120-hour Premier TEFL course',
      '50-hour TEFL, 30-hour Grammar & Language Awareness, 20-hour Video Observation, 10-hour Teaching Online, and 10-hour Teaching Large Classes',
    ],
    documentImage: '/credentials/tefl-org-120-hour-certificate-preview.webp',
    documentAlt:
      'The TEFL Org certificate confirming successful completion of the 120-hour Premier TEFL course on September 30, 2026',
    documentDownload: '/credentials/tefl-org-120-hour-certificate.pdf',
  },
  {
    credential: 'Master Gardener Program',
    issuer: 'Rutgers Extension',
    completed: 'Completed',
    details: ['Completed Master Gardener training program'],
  },
  {
    credential: 'ASE Certifications & Current Designations',
    issuer: 'National Institute for Automotive Service Excellence (ASE)',
    completed: 'Status verified September 30, 2026',
    details: [
      'Current ASE designations — Automobile Technician; Maintenance and Light Repair Technician; Advanced Level Specialist',
      'A6R — Electrical/Electronic Systems Recert — Current through June 30, 2031',
      'A8R — Engine Performance Recert — Current through June 30, 2031; recertification examination passed January 28, 2026',
      'G1 — Auto Maintenance and Light Repair — Current through June 30, 2031',
      'L1 — Automobile Advanced Engine Performance — Current through June 30, 2031; examination passed April 15, 2026',
      'Historical expired certifications — A5R Brakes, A7R Heating & Air Conditioning, and P2 Automobile Parts; expired June 30, 2016',
    ],
    documents: [
      {
        label: 'View current ASE status',
        image: '/credentials/ase-current-status-2026.webp',
        alt: 'Privacy-cropped ASE certification status dated September 30, 2026 showing current designations and certification expiration dates',
      },
      {
        label: 'View A8 recertification report',
        image: '/credentials/ase-a8-redacted.png',
        alt: 'Privacy-redacted ASE A8 Engine Performance recertification passing report',
      },
      {
        label: 'View L1 examination report',
        image: '/credentials/ase-l1-redacted.png',
        alt: 'Privacy-redacted ASE L1 Advanced Engine Performance Specialist passing report',
      },
    ],
  },
  {
    credential: 'Audi Academy Technician Certifications',
    issuer: 'Audi Academy',
    completed: '2015 & 2018',
    details: [
      '2015 — Service Technician: Completed Audi Academy training requirements for service technicians',
      '2018 — Technician — Registered: Completed Audi Academy training requirements for registered technician status',
    ],
    documents: [
      {
        label: 'View 2015 Service Technician certificate',
        image: '/credentials/audi-service-technician-2015.jpg',
        alt: 'Audi Academy Service Technician certificate issued in 2015',
      },
      {
        label: 'View 2018 Technician — Registered certificate',
        image: '/credentials/audi-technician-registered-2018.jpg',
        alt: 'Audi Academy Technician Registered certificate issued in 2018',
      },
    ],
  },
  {
    credential: 'Inventor for Beginners',
    issuer: 'SolidProfessor',
    completed: 'March 2018',
    details: [
      'Autodesk Inventor fundamentals: parametric modeling, sketches, assemblies, 3D models, and production-ready 2D drawings',
    ],
    documentImage: '/credentials/inventor-for-beginners-2018.jpg',
    documentAlt: 'SolidProfessor Inventor for Beginners technical certificate issued in 2018',
  },
  {
    credential: 'Personal Fitness Trainer Certification',
    issuer:
      'American Aerobic Association International / International Sports Medicine Association',
    completed: 'October 2017 – October 2019',
    details: ['Previously certified; credential expired October 1, 2019'],
    documentImage: '/credentials/personal-fitness-trainer-redacted.webp',
    documentAlt:
      'AAAI/ISMA Personal Fitness Trainer certificate issued October 1, 2017 and expired October 1, 2019; membership ID redacted',
  },
  {
    credential: 'BMW Body Electronics IV',
    issuer: 'WORLDPAC Training Institute',
    completed: 'November 2015',
    details: ['Completed 16 hours of technical training in BMW body electronics'],
    documentImage: '/credentials/bmw-body-electronics-iv-2015.jpg',
    documentAlt: 'WORLDPAC Training Institute BMW Body Electronics IV certificate issued in 2015',
  },
]

export const militaryService: MilitaryServiceEntry[] = [
  {
    role: 'Avionics Mechanic (68N10)',
    organization: 'Army National Guard',
    location: 'Ewing, NJ',
    dates: '1995 – 1998',
    highlights: [
      'Trained in and performed electrical wiring diagnosis and repair on helicopter systems.',
    ],
    documentImage: '/credentials/proof-of-service-redacted.png',
    documentAlt: 'Redacted Department of Veterans Affairs proof of honorable Army service',
    documentDownload: '/credentials/proof-of-service-redacted.pdf',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Teaching',
    skills: [
      'Classroom/lab management',
      'Curriculum delivery',
      'Lesson planning',
      'Student engagement',
      'Assessment/grading',
      'Coaching/mentoring',
      'Safety',
      'Differentiated instruction',
    ],
  },
  {
    category: 'Programming & Software Development',
    subsections: [
      {
        title: 'Computer Science Foundations',
        skills: [
          'Object-oriented programming',
          'Data structures and algorithms',
          'Database systems',
          'SQL',
          'Computer networks and data communications',
          'Information security',
          'Human-computer interaction',
          'Web development',
          'Computer organization',
          'Computer architecture and assembly language',
          'Computer logic and design',
          'Operating systems',
          'Systems analysis and design',
          'Software project development',
          'Programming language concepts',
          'Scientific programming',
        ],
      },
      {
        title: 'Languages',
        skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'HTML/CSS', 'LaTeX'],
      },
      {
        title: 'Frameworks',
        skills: ['React', 'Flask', 'Django', 'Node.js', 'Bootstrap', 'WordPress'],
      },
      {
        title: 'DevOps',
        skills: ['Jenkins', 'Docker', 'Kubernetes', 'Trivy', 'Coverity', 'nginx', 'gunicorn'],
      },
      {
        title: 'Databases',
        skills: ['SQL', 'PostgreSQL', 'MySQL', 'SQLite'],
      },
      {
        title: 'Tools',
        skills: ['Git', 'GitHub Actions', 'Jira', 'Confluence', 'Blackboard'],
      },
      {
        title: 'Platforms',
        skills: ['RHEL', 'Ubuntu', 'CentOS', 'Windows'],
      },
      {
        title: 'AI Tools',
        skills: ['ChatGPT', 'Google Gemini', 'GitHub Copilot'],
      },
    ],
  },
  {
    category: 'IT Support & Systems',
    subsections: [
      {
        title: 'Endpoint Support & Deployment',
        skills: [
          'Workstation imaging and deployment',
          'Application packaging and software deployment',
          'Endpoint administration and asset tracking',
          'Peripheral installation and support',
          'Operating-system and software installation, configuration, and permissions management',
        ],
      },
      {
        title: 'Hardware & Custom Builds',
        skills: [
          'Desktop and laptop diagnosis, repair, and hardware upgrades',
          'Custom PC builds and hardware modifications',
        ],
      },
      {
        title: 'Networking',
        skills: [
          'Residential network installation and upgrades',
          'Wired and wireless network diagnosis, repair, and management',
        ],
      },
      {
        title: 'Systems Administration & Security',
        skills: [
          'Linux server administration',
          'Operating-system migrations',
          'Dockerized environment administration and troubleshooting',
          'Encryption compliance and IT audit remediation',
          'Vulnerability scanning and secure deployment workflows',
        ],
      },
    ],
  },
  {
    category: 'CAD & Technical Design',
    skills: [
      'Autodesk Inventor',
      'Parametric 3D modeling',
      'Assembly design',
      'Engineering graphics',
      'Production-ready 2D drawings',
    ],
  },
  {
    category: 'Automotive',
    subsections: [
      {
        title: 'Diagnostics & Performance',
        skills: [
          'Advanced diagnostics',
          'Engine performance',
          'Drivability diagnostics',
          'Fuel and ignition systems',
          'Scan-tool diagnostics',
          'Oscilloscope and waveform analysis',
          'Compression testing',
          'Fuel-injector testing',
          'Residual fuel-pressure testing',
        ],
      },
      {
        title: 'Electrical & Emerging Systems',
        skills: [
          'Electrical and electronic systems',
          'Wiring diagnosis and repair',
          'Hybrid vehicle systems',
        ],
      },
      {
        title: 'Mechanical Systems & Service',
        skills: [
          'Brake systems',
          'Steering and suspension',
          'Heating and air conditioning',
          'Preventive maintenance',
        ],
      },
      {
        title: 'Instruction & Shop Operations',
        skills: [
          'Shop safety and procedures',
          'Automotive technical instruction',
        ],
      },
    ],
  },
  {
    category: 'Additional Expertise',
    subsections: [
      {
        title: 'Knowledge & Analytical',
        skills: [
          'Oceanography and marine science fundamentals',
          'Geometry, trigonometry, and calculus',
          'Physics and mechanical principles',
          'Economics and analytical reasoning',
          'Psychology and human behavior fundamentals',
          'Research writing and composition',
          'Technical documentation and procedure development',
          'Diagnostic reporting and workflow documentation',
          'History and global studies',
          'Team leadership and mentoring',
        ],
      },
      {
        title: 'Practical & Hands-On',
        skills: [
          'Construction, maintenance, and hands-on problem-solving',
          'Residential framing',
          'High- and low-voltage electrical installation and trim-out',
          'Helicopter avionics electrical wiring diagnosis and repair',
          'Shop and lab setup, organization, and equipment maintenance',
          'Multi-station shop and lab workflow coordination',
          'Window and door installation',
          'Landscaping and garden design',
          'Planting, cultivation, and harvesting',
          'Landscape site and grounds maintenance',
          'Seasonal landscape maintenance',
          'Commercial-vehicle detailing, including dump-truck cleaning and polishing',
          'Tool and equipment operation',
          'Cooking, food preparation, and production',
          'Commercial kitchen cleaning and sanitation',
          'Table service and customer care',
          'Personal training, coaching, and motivation',
          'First aid and CPR fundamentals',
          'Workplace safety and compliance',
        ],
      },
    ],
  },
]
