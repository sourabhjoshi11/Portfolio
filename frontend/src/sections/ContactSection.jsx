import { Reveal } from '../components/Reveal'
import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'

const contactItems = [
  {
    title: 'Location',
    value: 'Indore, M.P, India',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 stroke-[#e27a1b]" strokeWidth="1.8">
        <path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.2" />
      </svg>
    ),
  },
  {
    title: 'Phone',
    value: '+91 6266287021',
    href: 'tel:+916266287021',
    icon: (
      <svg className="h-6 w-6 text-slate-700 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    value: 'sourabhjoshi2906@gmail.com',
    href: 'mailto:sourabhjoshi2906@gmail.com',
    icon: (
      <svg className="h-6 w-6 text-slate-700 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formData = new FormData(e.target)
    
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      const data = await response.json()
      
      if (data.success) {
        setSubmitStatus('success')
        e.target.reset()
      } else {
        console.error("Form error:", data)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Feel free to contact me if any assistance is needed in the future"
          description="Quick contact details are set up below so it stays easy to reach out without cluttering the page."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
        <Reveal delay={0.05} className="rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <h3 className="text-2xl font-black text-slate-950 transition-colors duration-300 dark:text-slate-50">Get in touch</h3>
          <p className="mt-4 text-sm leading-7 text-slate-500 transition-colors duration-300 dark:text-slate-400">
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="mt-8 space-y-6">
            {contactItems.map((item) => (
              <div key={item.title} className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-xl transition-colors duration-300 dark:bg-slate-800">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{item.title}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block font-medium text-slate-950 transition-colors duration-300 hover:text-[#e27a1b] dark:text-slate-200 dark:hover:text-[#e27a1b]">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-medium text-slate-950 transition-colors duration-300 dark:text-slate-200">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-950 transition-colors duration-300 dark:text-slate-300">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  placeholder="Your Name" 
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#e27a1b] focus:ring-1 focus:ring-[#e27a1b] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#e27a1b]" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-950 transition-colors duration-300 dark:text-slate-300">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  placeholder="Your Email" 
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#e27a1b] focus:ring-1 focus:ring-[#e27a1b] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#e27a1b]" 
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-950 transition-colors duration-300 dark:text-slate-300">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows={4}
                placeholder="How can I help you?" 
                className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#e27a1b] focus:ring-1 focus:ring-[#e27a1b] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#e27a1b]"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-2 w-full rounded-2xl bg-[#e27a1b] px-8 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d86f15] hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="mt-2 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-2 text-center text-sm font-medium text-red-600 dark:text-red-400">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}