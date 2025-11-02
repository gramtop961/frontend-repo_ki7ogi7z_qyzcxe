import React from 'react';
import { Rocket, Github, Linkedin } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" onClick={(e) => handleClick(e, 'hero')} className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-gradient-to-tr from-purple-500 to-blue-500">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight">Futuric Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={(e) => handleClick(e, 'projects')} className="text-white/80 hover:text-white text-sm transition-colors">Projects</button>
            <button onClick={(e) => handleClick(e, 'contact')} className="text-white/80 hover:text-white text-sm transition-colors">Contact</button>
            <div className="h-6 w-px bg-white/20" />
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
              <Linkedin size={20} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
