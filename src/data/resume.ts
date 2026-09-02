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

// This is the website's single source of truth for résumé content.
// Update these entries whenever the résumé changes; the Experience and Skills
// sections are rendered directly from this file.
export const softwareExperience: ExperienceEntry[] = [
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

export const skillGroups: SkillGroup[] = [
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
    skills: ['Git', 'GitHub Actions', 'Jira', 'Confluence'],
  },
  {
    category: 'Platforms',
    skills: ['RHEL', 'Ubuntu', 'CentOS', 'Windows'],
  },
  {
    category: 'AI Tools',
    skills: ['ChatGPT', 'Google Gemini', 'GitHub Copilot'],
  },
]
