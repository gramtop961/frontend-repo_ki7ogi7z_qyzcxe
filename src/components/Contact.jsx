import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-md bg-gradient-to-tr from-purple-500 to-blue-500">
            <Mail size={18} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Let’s create something amazing</h2>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          action="mailto:you@example.com"
          method="post"
          encType="text/plain"
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-white/80">Name</label>
              <input id="name" name="name" required className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-white/80">Email</label>
              <input id="email" type="email" name="email" required className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-white/80">Message</label>
            <textarea id="message" name="message" rows="5" required className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-white/60">I’ll get back to you within 24–48 hours.</p>
            <button type="submit" className="rounded-md bg-gradient-to-tr from-purple-600 to-blue-600 px-5 py-2.5 font-medium shadow-lg shadow-blue-500/20 hover:shadow-purple-500/30 transition-shadow">
              Send message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
