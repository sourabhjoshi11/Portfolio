import { motion as Motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const projects = [
  {
    name: 'Yogpratha',
    type: 'Wellness Website',
    summary: 'A modern platform dedicated to yoga practices and wellness, promoting healthy living through beautiful design and seamless user experience.',
    image: '/yogpratha.webp',
    tags: ['Web', 'Health', 'UI'],
    liveLink: 'https://www.yogpratha.com',
    featured: true,
    accent: 'from-emerald-500 to-teal-600',
    accentLight: 'from-emerald-50 to-teal-50',
    accentDark: 'from-emerald-900/20 to-teal-900/20',
    accentColor: '#10b981',
    number: '01',
  },
  {
    name: 'Medicos Buddy',
    type: 'Medical Study Platform',
    summary: 'All-in-one medical exam companion with smart notes and previous year question papers for MBBS & BPT students.',
    image: '/medicosebuddy.webp',
    tags: ['EdTech', 'Healthcare', 'React'],
    liveLink: 'https://medicosebuddy.online',
    featured: false,
    accent: 'from-blue-500 to-indigo-600',
    accentLight: 'from-blue-50 to-indigo-50',
    accentDark: 'from-blue-900/20 to-indigo-900/20',
    accentColor: '#3b82f6',
    number: '02',
  },
  {
    name: 'Internal Knowledge Assessment',
    type: 'Enterprise System',
    summary: 'A comprehensive system designed for internal team knowledge evaluation and tracking, enabling data-driven decisions.',
    image: '/assement.webp',
    tags: ['Dashboard', 'Assessment', 'Enterprise'],
    liveLink: null,
    featured: false,
    accent: 'from-violet-500 to-purple-600',
    accentLight: 'from-violet-50 to-purple-50',
    accentDark: 'from-violet-900/20 to-purple-900/20',
    accentColor: '#8b5cf6',
    number: '03',
  },
  {
    name: 'ClaimGuard AI',
    type: 'AI System',
    summary: 'Detects vehicle damage from photos, scores severity and estimates repair costs instantly using computer vision AI.',
    image: '/claimguard.webp',
    tags: ['AI', 'Insurance', 'Computer Vision'],
    liveLink: 'https://tanstack-start-app.sourabhjoshi2906.workers.dev',
    featured: true,
    accent: 'from-orange-500 to-rose-600',
    accentLight: 'from-orange-50 to-rose-50',
    accentDark: 'from-orange-900/20 to-rose-900/20',
    accentColor: '#e27a1b',
    number: '04',
  },
]

function ProjectCard({ project, index, layoutClass }) {
  const isFeatured = project.featured

  return (
    <Reveal delay={index * 0.1}>
      <Motion.article
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300 dark:bg-slate-900
          border-slate-200/80 dark:border-slate-800
          hover:shadow-[0_20px_60px_rgba(15,23,42,0.15)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          ${layoutClass}`}
        style={{
          '--accent': project.accentColor,
        }}
      >
        {/* Top accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

        {/* Glow effect on hover */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: `inset 0 0 0 1.5px ${project.accentColor}40` }}
        />

        {/* Image */}
        <div className={`relative w-full overflow-hidden bg-slate-100 dark:bg-slate-800 ${isFeatured ? 'h-64 sm:h-72' : 'h-52'}`}>
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            decoding="async"
            onError={(e) => { e.target.style.opacity = '0' }}
          />

          {/* Fallback gradient */}
          <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${project.accentLight} dark:${project.accentDark}`} />

          {/* Strong gradient overlay for text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Project number - large watermark */}
          <div className="absolute right-5 top-4 font-black text-white/10 text-7xl leading-none select-none transition-all duration-300 group-hover:text-white/20">
            {project.number}
          </div>

          {/* Featured badge */}
          {isFeatured && (
            <div className={`absolute top-4 left-5 rounded-full bg-gradient-to-r ${project.accent} px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg`}>
              Featured
            </div>
          )}

          {/* Title area */}
          <div className="absolute bottom-5 left-6 right-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em]" style={{ color: project.accentColor }}>
              {project.type}
            </p>
            <h3 className={`mt-1.5 font-black text-white drop-shadow-lg ${isFeatured ? 'text-3xl' : 'text-2xl'}`}>
              {project.name}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">{project.summary}</p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-xs font-medium border transition-colors duration-300"
                style={{
                  borderColor: `${project.accentColor}30`,
                  backgroundColor: `${project.accentColor}0d`,
                  color: project.accentColor,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-auto pt-6 flex gap-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                style={{ '--hover-color': project.accentColor }}
              >
                GitHub
              </a>
            )}
            {project.liveLink ? (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="group/btn flex-1 rounded-full px-4 py-2.5 text-center text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}cc)` }}
              >
                Visit Site
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            ) : (
              <div className="flex-1 rounded-full bg-slate-100 px-4 py-2.5 text-center text-sm font-semibold text-slate-400 cursor-not-allowed dark:bg-slate-800 dark:text-slate-500">
                Private
              </div>
            )}
          </div>
        </div>
      </Motion.article>
    </Reveal>
  )
}

export function ProjectsSection() {
  const [featured1, regular1, regular2, featured2] = projects

  return (
    <section id="projects" className="py-24 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Portfolio"
          title="Each project is a unique piece of development"
          description=""
        />
      </Reveal>

      {/* Bento-style grid: featured + regular cards */}
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {/* Row 1: featured (2 cols) + regular (1 col) */}
        <div className="lg:col-span-2">
          <ProjectCard project={featured1} index={0} layoutClass="h-full" />
        </div>
        <div className="lg:col-span-1">
          <ProjectCard project={regular1} index={1} layoutClass="h-full" />
        </div>

        {/* Row 2: regular (1 col) + featured (2 cols) */}
        <div className="lg:col-span-1">
          <ProjectCard project={regular2} index={2} layoutClass="h-full" />
        </div>
        <div className="lg:col-span-2">
          <ProjectCard project={featured2} index={3} layoutClass="h-full" />
        </div>
      </div>
    </section>
  )
}
