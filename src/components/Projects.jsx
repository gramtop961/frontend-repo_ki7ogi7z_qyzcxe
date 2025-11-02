import React from 'react';
import { motion } from 'framer-motion';
import { Code, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Neon Dashboard',
    description: 'A high-performance analytics dashboard with buttery animations and real-time data.',
    tags: ['React', 'Framer Motion', 'WebSockets'],
  },
  {
    title: '3D Product Showcase',
    description: 'An immersive 3D experience for product exploration and configuration.',
    tags: ['Spline', 'Three.js', 'UX'],
  },
  {
    title: 'Portfolio Engine',
    description: 'A modular portfolio system with content blocks and theming support.',
    tags: ['Vite', 'Tailwind CSS', 'SPA'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-md bg-gradient-to-tr from-purple-500 to-blue-500">
            <Sparkles size={18} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Projects</h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-white/10">
                    <Code size={18} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                </div>
                <p className="mt-3 text-white/80 text-sm leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-gradient-to-tr from-purple-600/20 to-blue-600/20 border border-white/10 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
