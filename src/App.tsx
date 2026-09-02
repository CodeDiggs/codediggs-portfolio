import { useEffect, useState } from 'react'
import './index.css'
import profilePhoto from './assets/profile_photo.jpg'
import { skillGroups, softwareExperience } from './data/resume'

type GitHubProject = {
  name: string
  description: string | null
  html_url: string
  language: string | null
  fork: boolean
}

const githubProfile = 'https://github.com/diggty66'
const repositoriesUrl = `${githubProfile}?tab=repositories`

const fallbackProjects: GitHubProject[] = [
  {
    name: 'codediggs-portfolio',
    description: 'The React and TypeScript portfolio behind CodeDiggs.',
    html_url: `${githubProfile}/codediggs-portfolio`,
    language: 'TypeScript',
    fork: false,
  },
  {
    name: 'jobboard',
    description: 'A public job board web project.',
    html_url: `${githubProfile}/jobboard`,
    language: 'HTML',
    fork: false,
  },
  {
    name: 'Food-API-Website',
    description: 'A Django website that brings together multiple food-related APIs.',
    html_url: `${githubProfile}/Food-API-Website`,
    language: 'JavaScript',
    fork: false,
  },
  {
    name: 'GetMowed2',
    description: 'A Flask application with posts, profiles, a dashboard, and database support.',
    html_url: `${githubProfile}/GetMowed2`,
    language: 'Python',
    fork: false,
  },
  {
    name: 'getmowed3',
    description: 'The third iteration of the Get Mowed application.',
    html_url: `${githubProfile}/getmowed3`,
    language: 'JavaScript',
    fork: false,
  },
  {
    name: 'context-tree-nn-layer',
    description: 'A context-tree neural-network layer for managing and corroborating context across nodes.',
    html_url: `${githubProfile}/context-tree-nn-layer`,
    language: 'Python',
    fork: false,
  },
  {
    name: 'AiPersonalityGenerator',
    description: 'A public C++ project exploring AI personality generation.',
    html_url: `${githubProfile}/AiPersonalityGenerator`,
    language: 'C++',
    fork: false,
  },
  {
    name: 'donationsPage',
    description: 'A donation-page interface project.',
    html_url: `${githubProfile}/donationsPage`,
    language: 'SCSS',
    fork: false,
  },
  {
    name: 'Project3',
    description: 'A Java group project implementing the List abstract data type.',
    html_url: `${githubProfile}/Project3`,
    language: 'Java',
    fork: false,
  },
  {
    name: 'tensorenv',
    description: 'A Python tutorial and experimentation repository.',
    html_url: `${githubProfile}/tensorenv`,
    language: 'Python',
    fork: false,
  },
  {
    name: 'Pizza-App',
    description: 'A public Java application project.',
    html_url: `${githubProfile}/Pizza-App`,
    language: 'Java',
    fork: false,
  },
  {
    name: 'PythonApplication1',
    description: 'A Python and Flask tutorial application.',
    html_url: `${githubProfile}/PythonApplication1`,
    language: 'JavaScript',
    fork: false,
  },
  {
    name: 'JPMC-tech-task-2',
    description: 'A public fork completed for a JPMorgan Chase technical task.',
    html_url: `${githubProfile}/JPMC-tech-task-2`,
    language: null,
    fork: true,
  },
]

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const displayName = (name: string) =>
  name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projects, setProjects] = useState<GitHubProject[]>(fallbackProjects)

  useEffect(() => {
    const controller = new AbortController()

    fetch('https://api.github.com/users/diggty66/repos?per_page=100&sort=updated', {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error('GitHub request failed')
        return response.json() as Promise<GitHubProject[]>
      })
      .then((repositories) => {
        const publicProjects = repositories.filter(
          (repository) => repository.name !== 'diggty66',
        )

        if (publicProjects.length > 0) setProjects(publicProjects)
      })
      .catch(() => {
        // The complete current list remains visible if GitHub is unavailable.
      })

    return () => controller.abort()
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
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
            <nav className="hidden items-center gap-5 text-slate-300 md:flex" aria-label="Primary navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-cyan-400">
                  {item.label}
                </a>
              ))}
            </nav>

            <img
              src={profilePhoto}
              alt="John portrait"
              className="h-11 w-11 rounded-full border-2 border-cyan-400 object-cover shadow-md transition-transform hover:scale-110 sm:h-12 sm:w-12"
            />

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
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
          className={`absolute right-4 top-full mt-2 w-56 rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-2xl transition-all duration-200 md:hidden ${
            menuOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-2 opacity-0'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-lg px-4 py-3 text-slate-200 transition hover:bg-slate-800 hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
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
            I’m a multidisciplinary engineer with experience spanning automotive diagnostics,
            full-stack web development, and AI-driven systems design. My approach combines
            real-world problem solving with structured, modular software design.
          </p>
        </section>

        <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <div className="mb-4 text-center">
            <a
              href={repositoriesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-3xl font-semibold text-cyan-400 transition hover:text-cyan-300"
              aria-label="View all projects on GitHub"
            >
              Projects <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="mx-auto mb-10 max-w-2xl text-center text-slate-400">
            Every public project currently available on my GitHub. Select a project to open its repository.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
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
                  {project.description || `Public repository for ${displayName(project.name)}.`}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  {project.language && (
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
                      {project.language}
                    </span>
                  )}
                  {project.fork && (
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-400">Fork</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
          <h2 className="mb-8 text-center text-3xl font-semibold text-cyan-400">
            Software Experience
          </h2>

          <div className="space-y-6">
            {softwareExperience.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-950/30"
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

        <section id="skills" className="scroll-mt-24 bg-slate-900 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-semibold text-cyan-400">Skills</h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <article
                  key={group.category}
                  className="rounded-xl border border-slate-700 bg-slate-950/60 p-6"
                >
                  <h3 className="text-lg font-semibold text-cyan-300">{group.category}</h3>
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
    </div>
  )
}
