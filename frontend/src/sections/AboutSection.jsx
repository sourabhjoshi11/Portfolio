import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Introduction"
          title="About Me"
          description="AI & Full-Stack Developer - I'm a passionate developer focused on building intelligent, scalable web applications that combine modern React frontends with powerful Python backends and Generative AI."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <Reveal delay={0.05} className="rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <p className="text-lg leading-8 text-slate-600 transition-colors duration-300 dark:text-slate-400">
            I specialize in full-stack development with a strong focus on Python ecosystems like FastAPI and Django. My goal is to build seamless applications where robust backend logic meets intuitive frontend design using React.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600 transition-colors duration-300 dark:text-slate-400">
            Recently, I have expanded my expertise into Generative AI, creating intelligent chatbots and implementing Retrieval-Augmented Generation (RAG) systems. I thrive on solving complex problems by integrating cutting-edge AI features into reliable web architectures.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['Python & APIs', 'FastAPI, Django, and robust services'],
              ['Gen AI & RAG', 'Smart chatbots and data retrieval systems'],
              ['Frontend', 'Interactive UIs with React and JavaScript'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-[#fff9f2] p-5 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#e27a1b]">{title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-4xl border border-slate-200 bg-linear-to-br from-[#fff7ed] via-white to-[#fdf2e8] p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition-colors duration-300 dark:border-slate-800 dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-800/50 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">What I focus on</p>
          <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
            {[
              'Building highly scalable backends with FastAPI and Django',
              'Integrating Generative AI and RAG for smart applications',
              'Crafting responsive and interactive frontends with React',
              'Ensuring performance, security, and clean architecture',
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-3xl border border-white bg-white/90 p-4 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#e27a1b]" />
                <p className="text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>

          
        </Reveal>
      </div>

    </section>
  )
}