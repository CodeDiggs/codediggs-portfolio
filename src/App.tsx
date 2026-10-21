import { useEffect, useState } from 'react'
import './index.css'
import profilePhoto from './assets/profile_photo.jpg'
import {
  automotiveCareerHistory,
  businessVentures,
  certifications,
  education,
  militaryService,
  professionalExperience,
  skillGroups,
} from './data/resume'

type NavChild = {
  label: string
  href: string
}

type NavItem = NavChild & {
  children?: NavChild[]
}

type CredentialDocument = {
  src?: string
  alt?: string
  title: string
  details?: string[]
  downloadHref?: string
  downloadLabel?: string
}

type GitHubProject = {
  name: string
  description: string
  html_url: string
  technologies: string[]
}

type FeaturedProject = {
  name: string
  tagline: string
  description: string
  url: string
  technologies: string[]
}

type Publication = {
  title: string
  author: string
  issued: string
  version: string
  resourceType: string
  description: string
  doi: string
  url: string
  tags: string[]
}

const githubProfile = 'https://github.com/CodeDiggs'
const repositoriesUrl = `${githubProfile}?tab=repositories`

const featuredProjects: FeaturedProject[] = [
  {
    name: 'StatS',
    tagline: 'A living character sheet for your real life',
    description:
      'A real-life RPG personal-development app that turns lived experience into a persistent character sheet, tracking skills, attributes, talents, goals, activities, evidence, and deterministic XP rather than relying on streaks.',
    url: 'https://www.sagestatus.com/',
    technologies: ['React Native', 'Expo', 'FastAPI', 'MongoDB', 'AI-assisted discovery'],
  },
]

const publications: Publication[] = [
  {
    title:
      'Unified Quantum Consciousness Postulation: Conditional Physical-Mechanism Extension — Microtubule Excitation Transport as a Candidate Modulatory Substrate',
    author: 'John Giles',
    issued: 'October 2026',
    version: '1.3',
    resourceType: 'Publication',
    description:
      'A speculative theoretical extension that makes microtubule excitation transport a conditional candidate local substrate within UQCP, separating physical transport, biological relevance, and non-local field claims into distinct evidentiary stages with explicit falsification gates.',
    doi: '10.5281/zenodo.23147513',
    url: 'https://zenodo.org/records/23147513',
    tags: ['UQCP', 'Microtubules', 'Transport-State Modulation', 'Consciousness', 'Falsifiability'],
  },
  {
    title:
      'Axial Excitation-Energy Transport and Inter-Tube Hopping in Microtubules: A Falsifiable Experimental Framework for Molecular Transport, Crosstalk, ELF Modulation, and Array Feasibility',
    author: 'John Giles',
    issued: 'October 2026',
    version: '2.0',
    resourceType: 'Publication',
    description:
      'A theoretical framework and experimental program for testing axial excitation-energy transport, inter-tube hopping and crosstalk, fabrication preservation, and driven ELF modulation in microtubules, with explicit engineering thresholds and stop/falsification criteria.',
    doi: '10.5281/zenodo.23147287',
    url: 'https://zenodo.org/records/23147287',
    tags: ['Microtubules', 'Excitation Migration', 'Axial Transport', 'Inter-Tube Hopping', 'ELF Modulation'],
  },
  {
    title:
      'Unified Quantum Consciousness Postulation (UQCP) v8 — Driven Microtubular Near-Field Transduction Revision: A Field- and Frequency-Modulated Nanoscale Transport Hypothesis with Conditional Consciousness Extensions',
    author: 'John Giles',
    issued: 'October 2026',
    version: 'v1.1',
    resourceType: 'Publication',
    description:
      'A revised theoretical postulation and experimental proposal centered on a Driven Microtubular Near-Field Transduction Array, narrowing the physical model to chromophore-mediated transport through the tubulin lattice and treating electrical, mechanical/acoustic, and magnetic perturbations as testable modulation axes while keeping broader consciousness claims conditional.',
    doi: '10.5281/zenodo.23146512',
    url: 'https://zenodo.org/records/23146512',
    tags: ['UQCP', 'Microtubules', 'Near-Field Optics', 'Anisotropic Transport', 'Nanophotonics', 'Consciousness'],
  },
]

// Editorial selection, not an automatic dump of the public GitHub account.
// Each linked repository is public; the complete archive is linked below the gallery.
const selectedProjects: GitHubProject[] = [
  {
    name: 'context-tree-nn-layer',
    description:
      'Python research prototype for storing and prioritizing persistent context in a hierarchical neural-network layer, with CLI tools and tests.',
    html_url: `${githubProfile}/context-tree-nn-layer`,
    technologies: ['Python', 'Neural networks'],
  },
  {
    name: 'jobboard',
    description:
      'A job-board application with separate frontend and backend code, exploring a full-stack approach to job discovery.',
    html_url: `${githubProfile}/jobboard`,
    technologies: ['React', 'TypeScript', 'Flask'],
  },
  {
    name: 'Food-API-Website',
    description:
      'A Django web application integrating multiple food-related APIs.',
    html_url: `${githubProfile}/Food-API-Website`,
    technologies: ['Django', 'API integrations'],
  },
  {
    name: 'GetMowed2',
    description:
      'A Flask web application with articles, user profiles, dashboards, and Flask-SQLAlchemy-backed features.',
    html_url: `${githubProfile}/GetMowed2`,
    technologies: ['Flask', 'Flask-SQLAlchemy'],
  },
  {
    name: 'AiPersonalityGenerator',
    description:
      'An exploratory C++ project examining personality layers and behavior models for AI characters.',
    html_url: `${githubProfile}/AiPersonalityGenerator`,
    technologies: ['C++', 'Experimental AI'],
  },
]

// Keep the hamburger structure in sync with the headings rendered from résumé data.
const toAnchorId = (value: string) =>
  value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  {
    label: 'Projects',
    href: '#projects',
    children: [
      { label: 'Featured Project', href: '#featured-projects' },
      { label: 'Selected Repositories', href: '#github-repositories' },
    ],
  },
  { label: 'Publications', href: '#publications' },
  {
    label: 'Experience',
    href: '#experience',
    children: [
      ...professionalExperience.map((entry) => ({
        label: entry.role,
        href: '#experience-' + toAnchorId(entry.role),
      })),
      {
        label: 'Automotive Career History',
        href: '#automotive-career',
      },
    ],
  },
  {
    label: 'Entrepreneurship',
    href: '#entrepreneurship',
    children: businessVentures.map((entry) => ({
      label: entry.name,
      href: '#business-' + toAnchorId(entry.name),
    })),
  },
  {
    label: 'Education',
    href: '#education',
    children: education.map((entry) => ({
      label: entry.institution,
      href: '#education-' + toAnchorId(entry.institution),
    })),
  },
  {
    label: 'Certifications',
    href: '#certifications',
    children: certifications.map((entry) => ({
      label: entry.credential,
      href: '#certification-' + toAnchorId(entry.credential),
    })),
  },
  { label: 'Military', href: '#military' },
  {
    label: 'Skills',
    href: '#skills',
    children: skillGroups.map((group) => ({
      label: group.category,
      href: '#skill-' + toAnchorId(group.category),
    })),
  },
  { label: 'Contact', href: '#contact' },
]

const displayName = (name: string) =>
  name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null)
  const [selectedCredential, setSelectedCredential] = useState<CredentialDocument | null>(null)

  const closeMobileMenu = () => {
    setMenuOpen(false)
    setExpandedMobileSection(null)
  }

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setExpandedMobileSection(null)
        setSelectedCredential(null)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/95 shadow-md backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="text-xl font-bold text-cyan-400 sm:text-2xl">
            CodeDiggs
          </a>

          <div className="flex items-center gap-3 sm:gap-4">
            <nav className="hidden items-center gap-5 text-slate-300 xl:flex" aria-label="Primary navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-cyan-400">
                  {item.label}
                </a>
              ))}
            </nav>

            <div id="language-menu-root" className="flex shrink-0 items-center" />

            <img
              src={profilePhoto}
              alt="John portrait"
              className="h-11 w-11 rounded-full border-2 border-cyan-400 object-cover shadow-md transition-transform hover:scale-110 sm:h-12 sm:w-12"
            />

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400 xl:hidden"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => {
                setMenuOpen((open) => !open)
                setExpandedMobileSection(null)
              }}
            >
              <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
              <span aria-hidden="true" className="text-2xl leading-none">
                {menuOpen ? '×' : '☰'}
              </span>
            </button>
          </div>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`absolute right-4 top-full mt-2 max-h-[calc(100vh-5.5rem)] w-72 max-w-[calc(100vw-2rem)] overflow-y-auto overscroll-contain rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-2xl transition-all duration-200 xl:hidden ${
            menuOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-2 opacity-0'
          }`}
        >
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} className="border-b border-slate-800 last:border-b-0">
                <div className="flex items-stretch">
                  {expandedMobileSection === item.href ? (
                    <a
                      href={item.href}
                      className="flex min-w-0 flex-1 items-center rounded-lg px-4 py-3 font-medium text-cyan-300 transition hover:bg-slate-800"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                      <span className="ml-2 text-xs" aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="min-w-0 flex-1 rounded-lg px-4 py-3 text-left text-slate-200 transition hover:bg-slate-800 hover:text-cyan-400"
                      aria-expanded={false}
                      aria-controls={'submenu-' + item.href.slice(1)}
                      onClick={() => setExpandedMobileSection(item.href)}
                    >
                      {item.label}
                    </button>
                  )}
                  <button
                    type="button"
                    className="w-11 shrink-0 rounded-lg text-cyan-400 transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
                    aria-label={(expandedMobileSection === item.href ? 'Collapse ' : 'Expand ') + item.label + ' submenu'}
                    aria-expanded={expandedMobileSection === item.href}
                    aria-controls={'submenu-' + item.href.slice(1)}
                    onClick={() =>
                      setExpandedMobileSection((current) => current === item.href ? null : item.href)
                    }
                  >
                    <span aria-hidden="true">{expandedMobileSection === item.href ? '⌃' : '⌄'}</span>
                  </button>
                </div>
                <div
                  id={'submenu-' + item.href.slice(1)}
                  hidden={expandedMobileSection !== item.href}
                  className="mb-2 ml-3 border-l border-slate-700 pl-2"
                >
                  {item.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      className="block break-words rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400"
                      onClick={closeMobileMenu}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-slate-200 transition hover:bg-slate-800 hover:text-cyan-400"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      </header>

      <main>
        <section className="flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-24 text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-cyan-400 sm:text-5xl">
            Hi, I’m John
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
            I blend mechanical intuition with software precision — building systems that connect
            the physical and digital worlds.
          </p>
          <a
            href="#projects"
            className="mt-8 inline-block rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View My Work
          </a>
        </section>

        <section id="about" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20">
          <h2 className="mb-6 text-3xl font-semibold text-cyan-400">About Me</h2>
          <p className="text-lg leading-relaxed text-slate-300">
            I’m a multidisciplinary technologist, educator, and entrepreneur with experience
            across software engineering, automotive diagnostics, IT and network support,
            low-voltage electrical systems, and technical design. My background combines
            hands-on repair and systems troubleshooting with software development, automation,
            business operations, and classroom/lab instruction.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            I approach problems by understanding how the pieces interact, identifying root
            causes, and turning complex ideas into practical, maintainable solutions. That same
            curiosity informs my independent research and work with emerging AI technologies,
            connecting mechanical, electrical, and digital disciplines rather than treating them
            as separate fields.
          </p>
        </section>

        <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <h2 className="mb-4 text-center text-3xl font-semibold text-cyan-400">
            Projects
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-slate-400">
            Featured live work and a selection of software projects and experiments.
          </p>

          <h3 id="featured-projects" className="mb-5 scroll-mt-24 text-xl font-semibold text-slate-200">Featured Project</h3>
          <div className="mb-10 space-y-6">
            {featuredProjects.map((project) => (
              <a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-cyan-400/50 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-900 p-6 shadow-xl shadow-cyan-950/30 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-cyan-950/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:p-8"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-3xl">
                    <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                      Featured Live Project
                    </span>
                    <h3 className="mt-4 text-3xl font-semibold text-cyan-300 transition group-hover:text-cyan-200">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-lg font-medium text-slate-200">{project.tagline}</p>
                    <p className="mt-4 leading-relaxed text-slate-400">{project.description}</p>
                  </div>
                  <span className="shrink-0 text-cyan-400 transition group-hover:text-cyan-300">
                    Visit sagestatus.com <span aria-hidden="true">↗</span>
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <h3 id="github-repositories" className="mb-5 scroll-mt-24 text-xl font-semibold text-slate-200">Selected Repositories</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {selectedProjects.map((project) => (
              <a
                key={project.html_url}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-52 flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-950/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-medium text-cyan-300 group-hover:text-cyan-200">
                    {displayName(project.name)}
                  </h3>
                  <span aria-hidden="true" className="text-slate-500 transition group-hover:text-cyan-400">
                    ↗
                  </span>
                </div>
                <p className="mt-3 flex-1 leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-800 px-3 py-1 text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-slate-800 bg-slate-950/60 p-6">
            <h4 className="text-lg font-semibold text-cyan-300">Earlier Software Projects</h4>
            <p className="mt-2 text-sm text-slate-400">
              Historical work documented in an earlier résumé; these are not presented as current live deployments.
            </p>
            <div className="mt-5 space-y-4 text-slate-300">
              <div>
                <p className="font-semibold text-slate-200">Get Mowed / Gitermowed.com — December 2020</p>
                <p className="mt-1 leading-relaxed text-slate-400">
                  Designed and developed a Flask web application using Flask-SQLAlchemy and SQLite.
                </p>
              </div>
              <div className="border-t border-slate-800 pt-4">
                <p className="font-semibold text-slate-200">Task List — September 2020</p>
                <p className="mt-1 leading-relaxed text-slate-400">
                  Built a simple Flask and Python CRUD application, previously hosted on Heroku.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href={repositoriesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Browse all public GitHub repositories <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section id="publications" className="scroll-mt-24 bg-slate-900 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-semibold text-cyan-400">Publications</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-slate-400">
              Independent research and formal technical writing published with permanent citations.
            </p>

            <div className="mt-10 space-y-6">
              {publications.map((publication) => (
                <article
                  key={publication.doi}
                  className="rounded-xl border border-slate-700 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/30 sm:p-8"
                >
                  <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide">
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-300">
                      {publication.resourceType}
                    </span>
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
                      Open access
                    </span>
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
                      Version {publication.version}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold leading-snug text-cyan-300">
                    {publication.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400">
                    {publication.author} · {publication.issued}
                  </p>
                  <p className="mt-5 leading-relaxed text-slate-300">{publication.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {publication.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      View Publication <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all font-mono text-sm text-cyan-400 transition hover:text-cyan-300"
                    >
                      DOI: {publication.doi}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
          <h2 className="mb-8 text-center text-3xl font-semibold text-cyan-400">
            Professional Experience
          </h2>

          <div className="space-y-6">
            {professionalExperience.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                id={'experience-' + toAnchorId(experience.role)}
                className="scroll-mt-24 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-950/30"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-300">{experience.role}</h3>
                    <p className="mt-1 font-medium text-slate-200">{experience.company}</p>
                    <p className="text-sm text-slate-400">{experience.location}</p>
                  </div>
                  <p className="shrink-0 text-sm font-medium text-cyan-400">{experience.dates}</p>
                </div>

                <ul className="mt-5 space-y-2 pl-5 text-slate-300">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="list-disc leading-relaxed marker:text-cyan-400">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div id="automotive-career" className="mt-14 scroll-mt-24">
            <h3 className="mb-3 text-center text-2xl font-semibold text-cyan-400">
              Automotive Career History
            </h3>
            <p className="mx-auto mb-9 max-w-2xl text-center text-slate-400">
              Automotive technician, service, parts, and shop-operations positions from 2001–2019.
              Select an employer to view responsibilities.
            </p>

            <div className="ml-3 space-y-4 border-l-2 border-slate-700 pl-6">
              {automotiveCareerHistory.map((entry) => (
                <details
                  key={entry.id}
                  id={'career-' + entry.id}
                  className="group relative scroll-mt-24 rounded-xl border border-slate-700 bg-slate-900 shadow-lg shadow-slate-950/30 open:border-cyan-400/60"
                >
                  <summary className="cursor-pointer list-none rounded-xl p-5 transition hover:bg-slate-800/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 [&::-webkit-details-marker]:hidden">
                    <span aria-hidden="true" className="absolute -left-[2rem] top-7 h-3 w-3 rounded-full border-2 border-cyan-400 bg-slate-950" />
                    <span className="flex flex-wrap items-start justify-between gap-3">
                      <span>
                        <span className="block text-lg font-semibold text-cyan-300">{entry.company}</span>
                        <span className="mt-1 block font-medium text-slate-200">{entry.role}</span>
                        {entry.location && (
                          <span className="mt-1 block text-sm text-slate-400">{entry.location}</span>
                        )}
                        {entry.summary && (
                          <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-slate-300">
                            {entry.summary}
                          </span>
                        )}
                      </span>
                      <span className="flex shrink-0 items-center gap-3 text-sm text-cyan-400">
                        <span className="hidden sm:inline">View responsibilities</span>
                        <span>{entry.dates}</span>
                        <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-180">⌄</span>
                      </span>
                    </span>
                  </summary>
                  <ul className="space-y-2 border-t border-slate-800 px-6 py-5 pl-10 text-slate-300">
                    {entry.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="list-disc leading-relaxed marker:text-cyan-400">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Résumé (PDF)
            </a>
          </div>
        </section>

        <section id="entrepreneurship" className="scroll-mt-24 bg-slate-900 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-semibold text-cyan-400">
              Entrepreneurship
            </h2>

            <article className="overflow-hidden rounded-xl border border-slate-700 bg-slate-950/60 shadow-lg shadow-slate-950/30">
              {businessVentures.map((business, index) => (
                <section
                  key={business.name}
                  id={'business-' + toAnchorId(business.name)}
                  className={`scroll-mt-24 p-6 ${index > 0 ? 'border-t border-slate-800' : ''}`}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-300">{business.name}</h3>
                      <p className="mt-1 text-sm font-medium text-slate-400">{business.role}</p>
                    </div>
                    <p className="shrink-0 text-sm font-medium text-cyan-400">
                      {business.dates}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2 pl-5 text-slate-300">
                    {business.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="list-disc leading-relaxed marker:text-cyan-400"
                      >
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </article>
          </div>
        </section>

        <section id="education" className="scroll-mt-24 bg-slate-900 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-semibold text-cyan-400">Education</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {education.map((entry) => (
                <article
                  key={`${entry.institution}-${entry.credential}`}
                  id={'education-' + toAnchorId(entry.institution)}
                  className={`relative scroll-mt-24 flex h-full flex-col rounded-xl border border-slate-700 bg-slate-950/60 p-6 shadow-lg shadow-slate-950/30 ${
                    entry.documentImage
                      ? 'transition hover:-translate-y-1 hover:border-cyan-400'
                      : ''
                  }`}
                >
                  {entry.documentImage && (
                    <button
                      type="button"
                      className="absolute inset-0 z-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      aria-label={`View ${entry.credential} document`}
                      onClick={() =>
                        setSelectedCredential({
                          src: entry.documentImage!,
                          alt: entry.documentAlt || `${entry.credential} from ${entry.institution}`,
                          title: entry.credential,
                        })
                      }
                    />
                  )}
                  <p className="text-sm font-medium text-cyan-400">{entry.completed}</p>
                  <h3 className="mt-3 text-xl font-semibold text-cyan-300">{entry.credential}</h3>
                  <p className="mt-3 font-medium text-slate-200">{entry.institution}</p>
                  <p className="text-sm text-slate-400">{entry.location}</p>

                  {entry.details && (
                    <ul className="mt-5 space-y-2 pl-5 text-slate-300">
                      {entry.details.map((detail) => (
                        <li key={detail} className="list-disc leading-relaxed marker:text-cyan-400">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  {entry.documentImage && (
                    <p className="mt-6 text-sm font-medium text-cyan-400">
                      View degree <span aria-hidden="true">↗</span>
                    </p>
                  )}
                </article>
              ))}
            </div>

            <div id="certifications" className="mt-16 scroll-mt-24">
              <h3 className="mb-8 text-center text-2xl font-semibold text-cyan-400">
                Certifications
              </h3>

              <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                {certifications.map((certification) => (
                  <article
                    key={`${certification.issuer}-${certification.credential}`}
                    id={'certification-' + toAnchorId(certification.credential)}
                    className={`relative scroll-mt-24 flex h-full flex-col rounded-xl border border-slate-700 bg-slate-950/60 p-6 shadow-lg shadow-slate-950/30 sm:p-8 ${
                      certification.documentImage ||
                      certification.documentSummary ||
                      certification.documents?.length
                        ? 'transition hover:-translate-y-1 hover:border-cyan-400'
                        : ''
                    }`}
                  >
                    {(certification.documentImage || certification.documentSummary) && (
                      <button
                        type="button"
                        className="absolute inset-0 z-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        aria-label={`View ${certification.credential} certificate`}
                        onClick={() =>
                          setSelectedCredential({
                            src: certification.documentImage,
                            alt: certification.documentImage
                              ? certification.documentAlt ||
                                `${certification.credential} issued by ${certification.issuer}`
                              : undefined,
                            title: certification.credential,
                            details: certification.documentSummary,
                            downloadHref: certification.documentDownload,
                            downloadLabel: certification.documentDownload
                              ? 'Download certificate PDF'
                              : undefined,
                          })
                        }
                      />
                    )}

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div>
                        <h4 className="text-xl font-semibold text-cyan-300">
                          {certification.credential}
                        </h4>
                        <p className="mt-2 font-medium text-slate-200">{certification.issuer}</p>
                      </div>
                      <p className="shrink-0 text-sm font-medium text-cyan-400">
                        {certification.completed}
                      </p>
                    </div>

                    <ul className="mt-5 space-y-2 pl-5 text-slate-300">
                      {certification.details.map((detail) => (
                        <li key={detail} className="list-disc leading-relaxed marker:text-cyan-400">
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {certification.documents && (
                      <div className="relative z-20 mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap">
                        {certification.documents.map((document) => (
                          <button
                            key={document.image}
                            type="button"
                            className="rounded-lg border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                            onClick={() =>
                              setSelectedCredential({
                                src: document.image,
                                alt: document.alt,
                                title: document.label.replace(/^View /, ''),
                              })
                            }
                          >
                            {document.label}
                          </button>
                        ))}
                      </div>
                    )}

                    {(certification.documentImage || certification.documentSummary) &&
                      !certification.documents && (
                      <p className="mt-auto pt-6 text-sm font-medium text-cyan-400">
                        {certification.documentImage ? 'View certificate' : 'View record'}{' '}
                        <span aria-hidden="true">↗</span>
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="military" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
          <h2 className="mb-10 text-center text-3xl font-semibold text-cyan-400">
            Military Service
          </h2>

          <div className="space-y-6">
            {militaryService.map((service) => (
              <article
                key={`${service.organization}-${service.role}`}
                className={`relative rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-950/30 ${
                  service.documentImage
                    ? 'transition hover:-translate-y-1 hover:border-cyan-400'
                    : ''
                }`}
              >
                {service.documentImage && (
                  <button
                    type="button"
                    className="absolute inset-0 z-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    aria-label="View redacted proof of honorable service"
                    onClick={() =>
                      setSelectedCredential({
                        src: service.documentImage,
                        alt: service.documentAlt,
                        title: 'Proof of Honorable Service',
                        downloadHref: service.documentDownload,
                        downloadLabel: 'Download redacted PDF',
                      })
                    }
                  />
                )}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-300">{service.role}</h3>
                    <p className="mt-1 font-medium text-slate-200">{service.organization}</p>
                    <p className="text-sm text-slate-400">{service.location}</p>
                  </div>
                  <p className="shrink-0 text-sm font-medium text-cyan-400">{service.dates}</p>
                </div>

                <ul className="mt-5 space-y-2 pl-5 text-slate-300">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="list-disc leading-relaxed marker:text-cyan-400">
                      {highlight}
                    </li>
                  ))}
                </ul>

                {service.documentImage && (
                  <p className="mt-6 text-sm font-medium text-cyan-400">
                    View proof of service <span aria-hidden="true">↗</span>
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 bg-slate-900 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-semibold text-cyan-400">Skills</h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <article
                  key={group.category}
                  id={'skill-' + toAnchorId(group.category)}
                  className={`scroll-mt-24 rounded-xl border border-slate-700 bg-slate-950/60 p-6 ${
                    [
                      'Programming & Software Development',
                      'Additional Expertise',
                      'Automotive',
                      'IT Support & Systems',
                    ].includes(
                      group.category,
                    )
                      ? 'sm:col-span-2 lg:col-span-3'
                      : ''
                  }`}
                >
                  <h3 className="text-lg font-semibold text-cyan-300">{group.category}</h3>
                  {group.skills && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {group.subsections && (
                    <div className="mt-5 grid gap-5 lg:grid-cols-2">
                      {group.subsections.map((subsection) => (
                        <section
                          key={subsection.title}
                          id={'skill-' + toAnchorId(group.category) + '-' + toAnchorId(subsection.title)}
                          className="scroll-mt-24 rounded-lg border border-slate-800 bg-slate-900/70 p-5"
                        >
                          <h4 className="font-semibold text-slate-100">{subsection.title}</h4>
                          {subsection.skills && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {subsection.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}

                        </section>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-6 py-20 text-center">
          <h2 className="mb-6 text-3xl font-semibold text-cyan-400">Contact</h2>
          <p className="text-lg text-slate-300">
            Reach out at{' '}
            <a href="mailto:codediggs@gmail.com" className="text-cyan-400 hover:underline">
              codediggs@gmail.com
            </a>
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-slate-600">
        © {new Date().getFullYear()} CodeDiggs – Built with React + Tailwind CSS
      </footer>

      {selectedCredential && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="credential-document-title"
          onClick={() => setSelectedCredential(null)}
        >
          <div
            className="relative max-h-[calc(100vh-2rem)] w-fit max-w-full overflow-y-auto rounded-xl border border-slate-700 bg-slate-900 p-3 shadow-2xl sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-6 px-1">
              <h2 id="credential-document-title" className="font-semibold text-cyan-300">
                {selectedCredential.title}
              </h2>
              <button
                type="button"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700 text-xl text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
                aria-label="Close credential document"
                onClick={() => setSelectedCredential(null)}
              >
                ×
              </button>
            </div>
            {selectedCredential.src ? (
              <>
                <img
                  src={selectedCredential.src}
                  alt={selectedCredential.alt}
                  className="block h-auto max-h-[calc(100vh-8rem)] w-auto max-w-[calc(100vw-2rem)] rounded-lg object-contain"
                />
                {selectedCredential.downloadHref && (
                  <a
                    href={selectedCredential.downloadHref}
                    download
                    className="relative z-20 mt-3 block rounded-lg border border-cyan-400 px-4 py-2 text-center text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                  >
                    {selectedCredential.downloadLabel || 'Download PDF'}
                  </a>
                )}
              </>
            ) : (
              <div className="max-w-xl rounded-lg bg-slate-950/60 p-5 sm:p-7">
                <ul className="space-y-3 text-slate-200">
                  {selectedCredential.details?.map((detail) => (
                    <li key={detail} className="leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
