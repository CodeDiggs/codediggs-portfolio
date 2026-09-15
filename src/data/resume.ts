export type ExperienceEntry = {
  role: string
  company: string
  location: string
  dates: string
  highlights: string[]
}

export type SkillGroup = {
  category: string
  skills: string[]
}

export type EducationEntry = {
  credential: string
  institution: string
  location: string
  completed: string
  details?: string[]
}

export type MilitaryServiceEntry = {
  role: string
  organization: string
  location: string
  dates: string
  highlights: string[]
}

// This is the website's single source of truth for résumé content.
// Update these entries whenever the résumé changes; the Experience, Education,
// Military Service, and Skills sections are rendered directly from this file.
export const professionalExperience: ExperienceEntry[] = [
  {
    role: 'Automotive Instructor',
    company: 'Universal Technical Institute',
    location: 'Bloomfield, NJ',
    dates: 'Dec 2025 – Present',
    highlights: [
      'Deliver classroom and hands-on lab instruction in automotive diagnostics, electrical systems, fuel systems, drivability, and professional shop practices.',
      'Manage classroom/lab activities, student groups, safety, attendance, assessments, and differentiated instruction across multiple workstations.',
      'Use Blackboard to organize coursework, assignments, grades, feedback, and student progress while coaching diagnostic strategy, documentation, and professional communication.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Innovative Defense Technologies',
    location: 'Mount Laurel, NJ',
    dates: 'Feb 2023 – Jan 2025',
    highlights: [
      'Collaborated with senior engineers on full-stack and CI/CD development supporting secure automation pipelines through Jenkins, Trivy, Coverity, and Jira/Confluence.',
      'Engineered and maintained secure React applications with TypeScript and JavaScript.',
      'Built CI/CD pipelines integrating security scans with Jenkins, Trivy, and Coverity.',
      'Directed Linux server administration and Dockerized environments for mission-critical systems.',
      'Migrated infrastructure from CentOS 7 to RHEL 10, improving reliability and patch compliance.',
      'Automated reporting workflows and supported Agile sprint planning with technical leads.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Innovative Defense Technologies',
    location: 'Mount Laurel, NJ',
    dates: 'May 2022 – Aug 2022',
    highlights: [
      'Integrated Java, C++, and TypeScript components into automated testing systems.',
      'Solved versioning and library conflicts across compilation environments.',
      'Collaborated with senior engineers and mentors in a team-oriented Agile workflow.',
    ],
  },
  {
    role: 'IT Intern',
    company: 'EMD Electronics',
    location: 'Branchburg, NJ',
    dates: 'Jun 2021 – Aug 2021',
    highlights: [
      'Coordinated packaging for 96 software applications in 10 weeks.',
      'Imaged and deployed 170+ workstations across manufacturing and HQ sites.',
      'Analyzed encryption compliance and supported IT audit remediation efforts.',
      'Collaborated with SCCM and EUS teams to improve asset tracking and deployment.',
    ],
  },
]

export const education: EducationEntry[] = [
  {
    credential: 'Bachelor of Arts in Computing and Informatics',
    institution: 'Rowan University',
    location: 'Glassboro, NJ',
    completed: 'January 2023',
    details: ['Minor in Computer Science'],
  },
  {
    credential: 'Associate of Science in Computer Science',
    institution: 'Brookdale Community College',
    location: 'Lincroft, NJ',
    completed: 'January 2021',
  },
  {
    credential: 'Automotive Technician Certificate',
    institution: 'Lincoln Technical Institute',
    location: 'Union, NJ',
    completed: 'December 2005',
  },
]

export const militaryService: MilitaryServiceEntry[] = [
  {
    role: 'Avionics Mechanic (68N10)',
    organization: 'Army National Guard',
    location: 'Ewing, NJ',
    dates: 'June 1996 – 1999',
    highlights: [
      'Trained in and performed electrical wiring diagnosis and repair on helicopter systems.',
    ],
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
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'HTML/CSS', 'LaTeX'],
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Flask', 'Django', 'Node.js', 'Bootstrap', 'WordPress'],
  },
  {
    category: 'DevOps',
    skills: ['Jenkins', 'Docker', 'Kubernetes', 'Trivy', 'Coverity', 'nginx', 'gunicorn'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub Actions', 'Jira', 'Confluence', 'Blackboard'],
  },
  {
    category: 'Platforms',
    skills: ['RHEL', 'Ubuntu', 'CentOS', 'Windows'],
  },
  {
    category: 'AI Tools',
    skills: ['ChatGPT', 'Google Gemini', 'GitHub Copilot'],
  },
  {
    category: 'Automotive',
    skills: [
      'Advanced diagnostics',
      'Electrical and electronic systems',
      'Wiring diagnosis and repair',
      'Hybrid vehicle systems',
      'Engine performance',
      'Drivability diagnostics',
      'Fuel and ignition systems',
      'Brake systems',
      'Steering and suspension',
      'Heating and air conditioning',
      'Scan-tool diagnostics',
      'Oscilloscope and waveform analysis',
      'Compression testing',
      'Fuel-injector testing',
      'Residual fuel-pressure testing',
      'Preventive maintenance',
      'Shop safety and procedures',
      'Automotive technical instruction',
    ],
  },
]
