import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Luxury Ecommerce',
    description: 'Headless commerce UI with animated product storytelling.',
    image: 'https://images.unsplash.com/photo-1760804876422-7efb73b58048?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMdXh1cnklMjBFY29tbWVyY2V8ZW58MHwwfHx8MTc2MjkyNjkyOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Interactive 3D Landing',
    description: 'React Three Fiber hero with parallax and spatial audio.',
    image: 'https://images.unsplash.com/photo-1567101399388-cb656ef306d0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnRlcmFjdGl2ZSUyMDNEJTIwTGFuZGluZ3xlbnwwfDB8fHwxNzYyOTI2OTI4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Design System',
    description: 'Tokenized component library with motion recipes.',
    image: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXNpZ24lMjBTeXN0ZW18ZW58MHwwfHx8MTc2MjkyNjkyOXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_300px_at_80%_10%,rgba(17,24,39,0.2),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-semibold text-white mb-10"
        >
          Selected Work
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm" />
              <div className="p-4">
                <h3 className="text-white text-lg font-medium">{p.title}</h3>
                <p className="text-white/70 text-sm mt-1">{p.description}</p>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border border-transparent group-hover:border-white/20 transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
