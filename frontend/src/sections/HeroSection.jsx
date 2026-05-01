import { motion as Motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { TypingText } from '../components/TypingText'
import portraitImage from '../assets/profile-photo.png'

const softwareStack = [
  ['PY', 'Python'],
  ['AI', 'Gen AI & RAG'],
  ['RE', 'React'],
  ['FA', 'FastAPI'],
  ['DJ', 'Django'],
  ['JS', 'JavaScript'],
]

export function HeroSection() {
  return (
    <section id="home" className="relative pt-10 sm:pt-14">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="max-w-4xl pt-10 sm:pt-16">
          <Reveal>
            <p className="text-lg font-semibold text-[#e27a1b] sm:text-xl">AI & Full-Stack Developer</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight text-slate-950 transition-colors duration-300 dark:text-slate-50 sm:text-6xl lg:text-7xl">
              Hi, I&apos;m Sourabh Joshi. An AI & Full-Stack Developer based in Indore, India.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 text-xl font-semibold text-slate-700 transition-colors duration-300 dark:text-slate-300 sm:text-2xl">
              <TypingText phrases={['AI & RAG Specialist', 'Python Backend Engineer', 'Frontend React Developer']} />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[#e27a1b] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-[#cf6f17]"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-[#e27a1b] hover:text-[#e27a1b] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-[#e27a1b]"
              >
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>

        <div className="space-y-8 pt-4 lg:pt-16">
          <Reveal delay={0.12}>
            <Motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-[420px]"
            >
              <div className="absolute inset-6 rounded-full bg-[#e27a1b]/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.75rem] border border-white/70 bg-white p-3 shadow-[0_30px_90px_rgba(15,23,42,0.22)] ring-1 ring-black/5 transition-colors duration-300 dark:border-slate-800 dark:bg-[#0f172a] dark:ring-white/10">
                <img
                  src={portraitImage}
                  alt="Sourabh Joshi portrait"
                  className="h-[420px] w-full rounded-[2.25rem] object-cover object-top"
                />
              </div>
            </Motion.div>
          </Reveal>

          <Reveal delay={0.18} className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
            <div className="rounded-[28px] bg-linear-to-br from-orange-50 via-white to-amber-50 p-8 transition-colors duration-300 dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-800/50">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e27a1b] opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e27a1b]"></span>
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Core Tech Stack</p>
              </div>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {[
                  'Python',
                  'FastAPI',
                  'Django',
                  'React',
                  'Next.js',
                  'Flutter',
                  'Generative AI',
                  'RAG Systems',
                  'PostgreSQL',
                  'Tailwind CSS',
                ].map((tech, index) => (
                  <Motion.span 
                    key={tech} 
                    initial={{ opacity: 0, scale: 0.8, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.06, type: "spring", stiffness: 260, damping: 20 }}
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e27a1b]/50 hover:bg-[#fffdf8] hover:text-[#e27a1b] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-[#e27a1b]/50 dark:hover:bg-slate-800/80"
                  >
                    {tech}
                  </Motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}