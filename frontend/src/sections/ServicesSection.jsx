import { motion as Motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const expertise = [
  {
    category: 'Backend Architecture',
    details: 'Building robust, scalable REST APIs and secure microservices using Python (FastAPI, Django) and complex database systems.',
  },
  {
    category: 'Generative AI Solutions',
    details: 'Developing custom intelligent chatbots, context-aware RAG pipelines, and integrating advanced LLMs directly into web applications.',
  },
  {
    category: 'Modern Frontend UI',
    details: 'Crafting responsive, high-performance, and beautiful user interfaces with React, Tailwind CSS, and Framer Motion.',
  },
]

const serviceCards = [
  {
    title: 'R & D',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 stroke-[#e27a1b]" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.6 2.6L16 9.2" />
      </svg>
    ),
  },
  {
    title: 'Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 stroke-[#e27a1b]" strokeWidth="1.7">
        <path d="M7 20h10" />
        <path d="M9 18h6" />
        <path d="M12 3c3 0 5 2.2 5 5.2 0 2-1 3.4-2.2 4.7-.7.8-1 1.4-1 2.1h-3.6c0-.7-.3-1.3-1-2.1C8 11.6 7 10.2 7 8.2 7 5.2 9 3 12 3Z" />
      </svg>
    ),
  },
  {
    title: 'Quality',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 stroke-[#e27a1b]" strokeWidth="1.7">
        <path d="M12 3l2.3 2.1 3 .3 1.1 2.8 2.4 1.7-1 2.8.4 3-2.5 1.6-1.1 2.8-3 .2L12 21l-2.6-1.7-3-.2-1.1-2.8-2.5-1.6.4-3-1-2.8 2.4-1.7 1.1-2.8 3-.3L12 3Z" />
        <path d="m9.5 12 1.8 1.8 3.2-3.8" />
      </svg>
    ),
  },
  {
    title: 'Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 stroke-[#e27a1b]" strokeWidth="1.7">
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="M8 9 5 12l3 3" />
        <path d="m16 9 3 3-3 3" />
      </svg>
    ),
  },
  {
    title: 'Maintain',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 stroke-[#e27a1b]" strokeWidth="1.7">
        <path d="m14.5 4.5 5 5" />
        <path d="m3.5 20.5 6.2-1.3L20.5 8.4l-5-5L4.7 14.2 3.5 20.5Z" />
        <path d="M13 6 18 11" />
      </svg>
    ),
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="End-to-End AI & Web Development Services"
              description="I deliver comprehensive solutions ranging from custom generative AI applications and smart chatbots to robust, scalable full-stack web architectures."
            />
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-500 transition-colors duration-300 dark:text-slate-400 sm:text-base">
              And also, I can provide you experts if you need support for a specific technology stack or product need.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {expertise.map((exp, index) => (
              <Reveal key={exp.category} delay={index * 0.04}>
                <div className="max-w-2xl rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-[#e27a1b]/50 dark:border-slate-800 dark:bg-slate-900/50">
                  <h4 className="text-lg font-bold text-slate-950 transition-colors duration-300 dark:text-slate-50">{exp.category}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-400">{exp.details}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {serviceCards.map((card, index) => {
            return (
              <Reveal key={card.title} delay={index * 0.06} className={index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <Motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="min-h-48 h-full rounded-[28px] border border-slate-100 bg-white p-8 shadow-[0_12px_35px_rgba(15,23,42,0.08)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#f3e3d4] bg-[#fff8f2] transition-colors duration-300 dark:border-transparent dark:bg-[#e27a1b]/10">
                      {card.icon}
                    </div>
                    <p className="mt-10 text-2xl font-semibold text-slate-950 transition-colors duration-300 dark:text-slate-50 sm:text-[1.7rem]">{card.title}</p>
                  </div>
                </Motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}