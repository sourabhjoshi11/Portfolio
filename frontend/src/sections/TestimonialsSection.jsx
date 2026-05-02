import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const testimonials = [
  {
    name: 'Vijay Sardhara',
    role: 'Product Manager',
    content: 'The result felt polished, lightweight, and easy to navigate on every screen.',
    rating: 5,
    image: '/testimonials/vijay.jpg',
  },
  {
    name: 'Nishi Patel',
    role: 'UI Designer',
    content: 'The spacing, hierarchy, and hover states created a premium visual feel.',
    rating: 5,
    image: '/testimonials/nishi.jpg',
  },
  {
    name: 'Piyush Nathani',
    role: 'Software Engineer',
    content: 'The presentation stayed clean and the interactions felt smooth and deliberate.',
    rating: 5,
    image: '/testimonials/piyush.jpg',
  },
  {
    name: 'Hiren Gohel',
    role: 'Tech Lead',
    content: 'The overall structure made the portfolio feel organized and modern.',
    rating: 5,
    image: '/testimonials/hiren.jpg',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Testimonials"
          title="Testimonials"
          description="Here is what people have to say about my ability to deliver quality solutions, and my technical expertise."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.06} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex gap-1 text-[#e27a1b]">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="mt-6 text-lg leading-8 text-slate-600 transition-colors duration-300 dark:text-slate-300">&quot;{testimonial.content}&quot;</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e27a1b]/15 text-sm font-bold text-[#e27a1b]">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 transition-colors duration-300 dark:text-slate-50">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}