import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function ClothNavbar() {
  const clothRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Silk Cloth Lifting Animation (Rolls Royce Style)
    tl.to(clothRef.current, {
      yPercent: -100,
      duration: 2,
      ease: "power4.inOut",
      delay: 0.5
    })
    // 2. Text Reveal
    .from(contentRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=1"); // Starts before cloth finishes lifting

  }, []);

  return (
    <>
      {/* The "Silk" Cloth Overlay */}
      <div 
        ref={clothRef}
        className="fixed inset-0 z-[2000] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
      >
        {/* Subtle Texture or Logo on the cloth */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="text-[20vw] font-black italic text-white select-none whitespace-nowrap"
        >
          RAHUL PATLE
        </motion.div>
        
        {/* The "Glint" on the silk cloth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent skew-y-12 translate-y-[-100%] animate-[shine_3s_infinite]" />
      </div>

      {/* The Actual Navbar (Revealed underneath) */}
      <nav className="fixed top-0 left-0 w-full z-[1001] p-8 flex justify-between items-center mix-blend-difference text-white">
        <div ref={contentRef} className="flex w-full justify-between items-center">
          <div className="font-black italic text-2xl tracking-tighter">
            RP_SYSTEMS <span className="text-[10px] not-italic font-mono ml-2 opacity-50">V.2.0.26</span>
          </div>
          
          <div className="hidden md:flex gap-12 font-mono text-[10px] tracking-[0.3em] uppercase">
            <a href="#work" className="hover:text-[#14F195] transition-colors cursor-pointer">Archive</a>
            <a href="#lab" className="hover:text-[#14F195] transition-colors cursor-pointer">The_Lab</a>
            <a href="#vault" className="hover:text-[#14F195] transition-colors cursor-pointer">Vault</a>
          </div>
        </div>
      </nav>
    </>
  );
}