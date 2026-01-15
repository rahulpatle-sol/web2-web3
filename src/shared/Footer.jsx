import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: "Twitter / X", link: "https://x.com/rahulpatle" },
    { name: "LinkedIn", link: "https://linkedin.com/in/rahulpatle" },
    { name: "GitHub", link: "https://github.com/rahulpatle-sol" },
    { name: "Instagram", link: "https://instagram.com/rahul" }
  ];

  return (
    <footer className="relative w-full bg-white text-black py-20 px-6 md:px-20 overflow-hidden">
      
      {/* 1. HUGE CONTACT TRIGGER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase italic"
          >
            Let's build <br /> 
            <span className="text-transparent stroke-text-black">the future.</span>
          </motion.h2>
          <p className="mt-10 font-mono text-xs uppercase tracking-[0.4em] text-gray-400">
            Available for worldwide collaboration // 2026
          </p>
        </div>

        <motion.a 
          href="mailto:hello@rahulpatle.com"
          whileHover={{ scale: 1.1, rotate: -5 }}
          className="mt-10 md:mt-0 w-32 h-32 md:w-48 md:h-48 bg-black text-[#14F195] rounded-full flex items-center justify-center font-black text-center text-sm md:text-xl leading-none uppercase italic cursor-pointer shadow-2xl"
        >
          GET IN <br /> TOUCH
        </motion.a>
      </div>

      {/* 2. DYNAMIC SOCIAL LINKS */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-black/10 pt-10 gap-10">
        {socials.map((social, i) => (
          <a 
            key={i} 
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col gap-2"
          >
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">0{i + 1}</span>
            <span className="text-xl font-bold uppercase tracking-tight group-hover:pl-4 transition-all duration-300 flex items-center gap-2">
              {social.name} <span className="opacity-0 group-hover:opacity-100">↗</span>
            </span>
          </a>
        ))}
      </div>

      {/* 3. BOTTOM BAR (The Signature) */}
      <div className="mt-40 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-black/5 pt-8 font-mono text-[9px] uppercase tracking-[0.2em] opacity-40">
        <div>© {currentYear} RAHUL PATLE SYSTEMS</div>
        <div className="hidden md:block italic">Designed & Engineered in India</div>
        <div className="flex gap-10 italic">
          <span>Local Time: {new Date().toLocaleTimeString()}</span>
          <span>Latency: 14ms</span>
        </div>
      </div>

      {/* 4. MASSIVE BACKGROUND TEXT (Sheryians Signature) */}
      <div className="absolute -bottom-10 left-0 w-full opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[25vw] font-black whitespace-nowrap leading-none tracking-tighter italic">
          RAHUL PATLE RAHUL PATLE RAHUL PATLE
        </h1>
      </div>

    </footer>
  );
}