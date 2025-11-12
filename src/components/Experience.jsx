import { motion } from 'framer-motion'

const items = [
  { year: '2025', role: 'Senior Frontend Engineer', company: 'Studio Nova', desc: 'Leading motion-first design systems and high-performance UI.' },
  { year: '2023', role: 'Product Designer / Engineer', company: 'Freelance', desc: 'Shipped premium marketing sites and internal tools.' },
  { year: '2021', role: 'Frontend Engineer', company: 'Aperture Labs', desc: 'Built component libraries and interactive data viz.' },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-semibold text-white mb-12"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-12">
            {items.map((e, i) => (
              <motion.div
                key={e.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative md:grid md:grid-cols-2 gap-8"
              >
                <div className="md:text-right pr-8">
                  <span className="inline-block text-amber-400/90 font-semibold">{e.year}</span>
                </div>
                <div className="pl-8">
                  <h3 className="text-white text-lg font-medium">{e.role} · <span className="text-white/70">{e.company}</span></h3>
                  <p className="text-white/70 mt-2">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
