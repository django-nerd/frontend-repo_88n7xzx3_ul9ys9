import { motion } from 'framer-motion'
import { Menu, Mail, Github, Linkedin } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 backdrop-blur-xl bg-white/5 dark:bg-black/30 border border-white/10 rounded-2xl shadow-lg shadow-black/20 flex items-center justify-between px-4 py-3"
        >
          <a href="#hero" className="font-semibold tracking-tight text-white">
            <span className="text-white/70">@</span> YourName
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="mailto:hello@example.com" aria-label="Email" className="text-white/70 hover:text-white transition-colors">
              <Mail size={18} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/70 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <button className="md:hidden text-white/70 hover:text-white">
              <Menu size={20} />
            </button>
          </div>
        </motion.nav>
      </div>
    </div>
  )
}
