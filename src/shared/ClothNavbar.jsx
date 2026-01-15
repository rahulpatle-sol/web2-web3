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
          initial={{ letterSpacing: "2em", opacity: 0 }}
          animate={{ letterSpacing: "0.5em", opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="text-[10vw] font-black italic text-white uppercase font-clash"
        >
          RAHUL_PATLE
        </motion.div>
      </div>

      {/* 2. MAIN NAV BAR */}
      <nav className="fixed top-0 left-0 w-full z-[2001] p-6 md:p-10 flex justify-between items-center mix-blend-difference text-white">
        <div className="font-clash font-black italic text-2xl tracking-tighter">
          RP<span className="text-[#14F195]">_</span>SYS <span className="text-[10px] not-italic font-mono opacity-50 ml-2 uppercase tracking-[0.4em]">v2.0.26</span>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 p-2 px-4 rounded-full border border-white/10 transition-all"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest hidden md:block">
            {isOpen ? 'Close_System' : 'Open_Menu'}
          </span>
          {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
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
            className="fixed inset-0 z-[2000] bg-[#050505] flex flex-col justify-center px-10 md:px-32 overflow-hidden"
          >
            {/* MATRIX EFFECT LAYER */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none font-mono text-[10px] leading-none overflow-hidden select-none break-all text-[#14F195]">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, ease: "linear" }}
                  className="absolute"
                  style={{ left: `${i * 5}%` }}
                >
                  {Array.from({ length: 50 }).map(() => Math.random() > 0.5 ? "1" : "0").join("")}
                  SOLANA_SVM_RAHUL_PATLE_ARCHITECT_0x71C_PROTOCOL_INIT_
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
              {/* Left: Navigation with Glitch Effect on Hover */}
              <div className="flex flex-col gap-4">
                <p className="text-[#14F195] font-mono text-[10px] tracking-[0.6em] uppercase mb-8 border-l-2 border-[#14F195] pl-4">
                  // Main_Access_Nodes
                </p>
                {['Projects', 'The_Lab', 'Vault', 'Experience'].map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + (i * 0.1), ease: "circOut" }}
                    onClick={() => setIsOpen(false)}
                    className="group relative text-6xl md:text-[7vw] font-clash text-white italic tracking-tighter hover:text-[#14F195] transition-all uppercase leading-[0.9]"
                  >
                    <span className="relative z-10">{item}</span>
                    {/* Hover Glitch Shadow */}
                    <span className="absolute left-0 top-0 text-[#9945FF] opacity-0 group-hover:opacity-50 group-hover:translate-x-1 transition-all pointer-events-none">{item}</span>
                    <span className="absolute left-0 top-0 text-[#14F195] opacity-0 group-hover:opacity-50 group-hover:-translate-x-1 transition-all pointer-events-none">{item}</span>
                  </motion.a>
                ))}
              </div>

              {/* Right: Social Connect & Meta Data */}
              <div className="flex flex-col justify-end gap-16">
                <div className="space-y-8">
                   <p className="text-gray-500 font-mono text-[10px] tracking-[0.6em] uppercase">// Global_Social_Grid</p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                     {socials.map((social, i) => (
                       <motion.a 
                        key={i} 
                        href={social.link} 
                        target="_blank" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="group flex items-center justify-between text-white hover:text-[#14F195] transition-all border-b border-white/5 py-4 font-clash text-lg italic font-bold"
                       >
                         <div className="flex items-center gap-4">
                            <span className=" font-mono text-xs italic t">0{i+1}</span>
                            {social.name}
                         </div>
                         <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                       </motion.a>
                     ))}
                   </div>
                </div>

                <div className="bg-white/5 p-6 rounded-lg border border-white/5 font-mono text-[9px] text-gray-400 uppercase tracking-[0.2em] space-y-2">
                   <div className="flex justify-between"><span className="text-[#14F195]">Location:</span> <span>India // MP</span></div>
                   <div className="flex justify-between"><span className="text-[#14F195]">Status:</span> <span>Available_for_Work</span></div>
                   <div className="flex justify-between"><span className="text-[#14F195]">Engine:</span> <span>React + GSAP + Three.js</span></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}