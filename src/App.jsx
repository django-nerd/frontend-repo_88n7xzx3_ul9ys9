import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white relative">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-24 -left-16 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-16 right-10 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-fuchsia-500/10 blur-[80px] rounded-full" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between text-white/60">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="text-xs">Crafted with React · Framer Motion · Tailwind</p>
        </div>
      </footer>
    </div>
  )
}

export default App
