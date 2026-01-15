import React, { Suspense, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Store & Layouts
import { useUniverse } from './store/useUniverse';
import Web2Layout from './web2/web2Layout'; // Corrected case (web2Layout -> Web2La
import Web3Layout from './web3/web3Layout';

// Shared Components
import SharedCanvas from './shared/SharedCanvas';
import UniverseToggle from './shared/UIniversToggle';

import AudioManager from './shared/AudioManger';// 

// Animation & Interaction
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { mode } = useUniverse();

  // 1. Initialize Smooth Scroll (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    
    // GSAP Ticker synchronization
    const gsapTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(gsapTicker);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(gsapTicker);
    };
  }, []);

  // 2. Custom Cursor Logic (Adding movement)
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.5,
        ease: "power3.out"
      });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className={`relative min-h-screen ${mode === 'web3' ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-700`}>
      
      {/* Background Music Controller */}
      <AudioManager /> 

      {/* Global Canvas */}
      <SharedCanvas />

      {/* Universe Switcher UI */}
      <UniverseToggle />

      <AnimatePresence mode="wait">
        <motion.main
          key={mode}
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Main Layouts */}
          {mode === 'web2' ? <Web2Layout /> : <Web3Layout />}
        </motion.main>
      </AnimatePresence>

      {/* Custom Cursor */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 border-2 border-current rounded-full pointer-events-none z-[999] mix-blend-difference" 
        id="custom-cursor" 
      />
    </div>
  );
}

export default App;