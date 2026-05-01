import { useState, useEffect } from 'react'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ServicesSection } from './sections/ServicesSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { ContactSection } from './sections/ContactSection'
import { FooterSection } from './sections/FooterSection'

import { CustomCursor } from './components/CustomCursor'

function App() {
  const navLinks = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Services', '#services'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
  ]

  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setIsDarkMode(true)
    }
  }

  return (
    <div className="min-h-screen bg-[#fffdf8] text-slate-900 transition-colors duration-300 dark:bg-[#0f172a] dark:text-slate-100">
      <CustomCursor />
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-10 top-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute right-0 top-48 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#0f172a]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <a 
            href="#home" 
            className="text-2xl font-bold tracking-wider text-[#e27a1b]"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Sourabh Joshi
          </a>
          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-8 text-[15px] font-medium text-slate-900 dark:text-slate-200 md:flex">
              {navLinks.map(([label, href]) => (
                <a key={label} href={href} className={label === 'Contact' ? 'text-[#e27a1b] transition hover:opacity-80' : 'transition hover:text-[#e27a1b]'}>
                  {label}
                </a>
              ))}
            </nav>

            <button
              onClick={toggleDarkMode}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              aria-label="Menu"
              className="flex h-12 w-12 items-center justify-center text-3xl text-slate-950 transition hover:text-[#e27a1b] dark:text-slate-200 md:hidden"
            >
              ×
            </button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  )
}

export default App
