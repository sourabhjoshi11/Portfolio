import instagramIcon from '../assets/instagram-svgrepo-com.svg'
import linkedinIcon from '../assets/linkedin-svgrepo-com.svg'
import githubIcon from '../assets/github-svgrepo-com.svg'

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/_sourabbh/', icon: instagramIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sourabh-joshi-3b35b7292/', icon: linkedinIcon },
  { label: 'GitHub', href: 'https://github.com/11Sourabh11', icon: githubIcon },
 
]

export function FooterSection() {
  return (
    <footer className="mt-32 border-t border-black/5 py-12 transition-colors duration-300 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-slate-400">
          © {new Date().getFullYear()} Sourabh Joshi. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              {link.icon ? <img src={link.icon} alt={link.label} className="h-4 w-4 brightness-0 invert" /> : link.label[0]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}