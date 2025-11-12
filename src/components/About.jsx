import { motion } from 'framer-motion'

const skills = ['React', 'TypeScript', 'Node.js', 'Three.js', 'Framer Motion', 'Tailwind', 'Design Systems']

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_10%_20%,rgba(255,255,255,0.05),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-white/20 shadow-xl shadow-black/30">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="absolute -left-8 -bottom-8 blur-2xl w-40 h-40 rounded-full bg-amber-500/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">About Me</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            I'm a developer and designer crafting premium, immersive interfaces. I blend clear UX with refined motion and modern web tech to deliver digital products that feel effortless.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="px-3 py-1.5 rounded-full text-sm border border-white/15 bg-white/5 text-white/80 backdrop-blur"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
