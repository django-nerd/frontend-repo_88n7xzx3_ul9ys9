import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_300px_at_50%_10%,rgba(253,230,138,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-semibold text-white mb-10"
        >
          Let's Connect
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/40" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/40" placeholder="you@email.com" />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-white/70">Message</label>
            <textarea rows={5} className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/40" placeholder="Tell me about your project..." />
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/70">
              <Mail size={18} />
              <span>hello@example.com</span>
            </div>
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-shadow">
              <Send size={18} /> Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
