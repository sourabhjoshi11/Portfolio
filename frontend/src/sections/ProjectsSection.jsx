import { motion as Motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const projects = [
  {
    name: 'Yogpratha',
    type: 'Wellness Website',
    summary: 'A modern platform dedicated to yoga practices and wellness, promoting healthy living.',
    image: '/yogpratha.webp',
    tags: ['Web', 'Health', 'UI'],
    liveLink: 'https://www.yogpratha.com',
  },
  {
    name: 'Moody Player IO',
    type: 'Web Application',
    summary: 'An interactive music player application with dynamic UI and mood-based features.',
    image: '/moody.webp',
    tags: ['React', 'Music', 'Interactive'],
    liveLink: 'https://moody-player-io.vercel.app',
  },
  {
    name: 'Internal Knowledge Assessment',
    type: 'Enterprise System',
    summary: 'A comprehensive system designed for internal team knowledge evaluation and tracking.',
    image: '/assement.webp',
    tags: ['Dashboard', 'Assessment', 'Enterprise'],
    liveLink: null,
  },
  {
    name: 'ClaimGuard AI',
    type: 'AI System (Coming Soon)',
    summary: 'An AI-powered claim processor designed to automate and streamline insurance claims.',
    image: '/claimguard.webp',
    tags: ['AI', 'Automation', 'Processing'],
    liveLink: null,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Portfolio"
          title="Each project is a unique piece of development"
          // description="Card-led project previews keep the page easy to scan while still feeling premium and interactive."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.08}>
            <Motion.article
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 210, damping: 18 }}
                className="group flex h-full flex-col overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.target.style.opacity = '0'; }}
                />
                
                {/* Fallback gradient if image fails to load */}
                <div className="absolute inset-0 -z-10 bg-linear-to-br from-orange-50 via-white to-amber-50 dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-800/50" />
                
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e27a1b] drop-shadow-md">{project.type}</p>
                    <h3 className="mt-2 text-2xl font-black text-white drop-shadow-md">{project.name}</h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="text-sm leading-7 text-slate-500 transition-colors duration-300 dark:text-slate-400">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-7 flex gap-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-[#e27a1b] hover:text-[#e27a1b] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-[#e27a1b]"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-full bg-[#e27a1b] px-4 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#cf6f17]"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <div className="flex-1 rounded-full bg-slate-100 px-4 py-3 text-center text-sm font-semibold text-slate-400 cursor-not-allowed dark:bg-slate-800 dark:text-slate-500">
                      {project.name.includes('Coming Soon') || project.type.includes('Coming Soon') ? 'Coming Soon' : 'Private'}
                    </div>
                  )}
                </div>
              </div>
            </Motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}