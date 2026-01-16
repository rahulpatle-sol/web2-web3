import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Twitter, Linkedin, MessageSquare, X, Menu, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

export default function ClothNavbar() {
  const clothRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.to(clothRef.current, {
      yPercent: -100,
      duration: 2.5,
      ease: "expo.inOut",
      delay: 0.8
    });
  }, []);

  const socials = [
    { name: "GitHub", link: "https://github.com/rahulpatle-sol", icon: <Github size={20} /> },
    { name: "Twitter", link: "https://x.com/PatleRahul239", icon: <Twitter size={20} /> },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/rahul-patle-sol/", icon: <Linkedin size={20} /> },
    { name: "Discord", link: "https://discord.com/users/rahulpatle_sol", icon: <MessageSquare size={20} /> }
  ];

  return (
    <>
      {/* 1. INITIAL SILK CLOTH REVEAL */}
      <div ref={clothRef} className="fixed inset-0 z-[3000] bg-[#050505] flex items-center justify-center pointer-events-none">
        <motion.div 
          initial={{ letterSpacing: "1.5em", opacity: 0 }}
          animate={{ letterSpacing: "0.5em", opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="text-[12vw] md:text-[10vw] font-black italic text-white uppercase font-clash text-center px-4"
        >
          RAHUL_PATLE
        </motion.div>
      </div>

      {/* 2. MAIN NAV BAR */}
      <nav className="fixed top-0 left-0 w-full z-[2001] p-5 md:p-10 flex justify-between items-center mix-blend-difference text-white">
        <div className="font-clash font-black italic text-xl md:text-2xl tracking-tighter">
          RP<span className="text-[#14F195]">_</span>SYS <span className="text-[8px] md:text-[10px] not-italic font-mono opacity-50 ml-1 md:ml-2 uppercase tracking-[0.2em] md:tracking-[0.4em]">v2.0.26</span>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="group flex items-center gap-2 md:gap-4 bg-white/5 hover:bg-white/10 p-2 md:p-2 px-3 md:px-4 rounded-full border border-white/10 transition-all backdrop-blur-md"
        >
          <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest hidden sm:block">
            {isOpen ? 'Close' : 'Menu'}
          </span>
          {isOpen ? <X size={20} md:size={24} strokeWidth={1.5} /> : <Menu size={20} md:size={24} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* 3. FULL SCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ clipPath: 'circle(0% at 90% 10%)' }}
            animate={{ clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ clipPath: 'circle(0% at 90% 10%)' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[2000] bg-[#050505] flex flex-col justify-center px-6 md:px-32 overflow-y-auto"
          >
            {/* MATRIX EFFECT LAYER - Optimized for mobile */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none font-mono text-[8px] md:text-[10px] leading-none overflow-hidden select-none break-all text-[#14F195]">
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, ease: "linear" }}
                  className="absolute"
                  style={{ left: `${i * 7}%` }}
                >
                  {Array.from({ length: 30 }).map(() => Math.random() > 0.5 ? "1" : "0").join("")}
                  SOLANA_SVM_ARCHITECT_
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 relative z-10 py-20 md:py-0">
              
              {/* Left: Navigation */}
              <div className="flex flex-col gap-2 md:gap-4">
                <p className="text-[#14F195] font-mono text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] uppercase mb-4 md:mb-8 border-l-2 border-[#14F195] pl-4">
                  // Nodes
                </p>
                {['Projects', 'The_Lab', 'Vault', 'Experience'].map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + (i * 0.1), ease: "circOut" }}
                    onClick={() => setIsOpen(false)}
                    className="group relative text-5xl md:text-[7vw] font-clash text-white italic tracking-tighter hover:text-[#14F195] transition-all uppercase leading-[1.1] md:leading-[0.9]"
                  >
                    <span className="relative z-10">{item}</span>
                    {/* Hover Glitch - Hidden on mobile for better perf */}
                    <span className="hidden md:block absolute left-0 top-0 text-[#9945FF] opacity-0 group-hover:opacity-50 group-hover:translate-x-1 transition-all pointer-events-none">{item}</span>
                    <span className="hidden md:block absolute left-0 top-0 text-[#14F195] opacity-0 group-hover:opacity-50 group-hover:-translate-x-1 transition-all pointer-events-none">{item}</span>
                  </motion.a>
                ))}
              </div>

              {/* Right: Social & Meta */}
              <div className="flex flex-col justify-end gap-10 md:gap-16">
                <div className="space-y-4 md:space-y-8">
                   <p className="text-gray-500 font-mono text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] uppercase">// Social_Grid</p>
                   <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-4 md:gap-x-12 gap-y-2">
                     {socials.map((social, i) => (
                       <motion.a 
                        key={i} 
                        href={social.link} 
                        target="_blank" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className="group flex items-center justify-between text-white hover:text-[#14F195] transition-all border-b border-white/5 py-3 md:py-4 font-clash text-sm md:text-lg italic font-bold"
                       >
                         <div className="flex items-center gap-2 md:gap-4">
                            <span className="font-mono text-[8px] md:text-xs opacity-40">0{i+1}</span>
                            {social.name}
                         </div>
                         <ArrowUpRight size={14} md:size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50 group-hover:opacity-100" />
                       </motion.a>
                     ))}
                   </div>
                </div>

                <div className="bg-white/5 p-4 md:p-6 rounded-lg border border-white/5 font-mono text-[8px] md:text-[9px] text-gray-400 uppercase tracking-[0.15em] md:tracking-[0.2em] space-y-2 backdrop-blur-sm">
                   <div className="flex justify-between items-center"><span className="text-[#14F195]">Location:</span> <span>India // MP</span></div>
                   <div className="flex justify-between items-center"><span className="text-[#14F195]">Status:</span> <span>Active_Dev</span></div>
                   <div className="flex justify-between items-center"><span className="text-[#14F195]">Engine:</span> <span>Vite + GSAP + Three</span></div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}