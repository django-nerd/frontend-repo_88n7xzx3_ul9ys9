import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      {/* Background gradient glow layers */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_400px_at_10%_10%,rgba(244,244,245,0.15),transparent)]" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_1px_20px_rgba(99,102,241,0.35)]"
          >
            Hi, I'm Your Name
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
            className="mt-5 text-lg md:text-xl text-white/80 max-w-xl"
          >
            Building elegant digital experiences — minimalist design, premium motion, and meaningful interactions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#projects" className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-xl hover:bg-white/15 transition-colors">
              View Work
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-shadow">
              Let's Connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-16 flex items-center gap-2 text-white/70"
          >
            <span className="inline-block h-[1px] w-10 bg-white/30" />
            <span className="text-sm">Scroll down</span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20">
              <span className="h-2 w-2 rounded-full bg-white/70 animate-bounce" />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
