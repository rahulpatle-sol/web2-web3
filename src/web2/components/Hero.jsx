import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);

  // Scroll Progress track karne ke liye
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax Logic: Alag alag speed ke liye transformations
  const yTextBack = useTransform(scrollYProgress, [0, 1], [0, -200]); // Piche wala text upar jayega
  const yTextFront = useTransform(scrollYProgress, [0, 1], [0, 200]); // Aage wala text niche jayega
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Image zoom hogi
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // Scroll pe fade out

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full bg-[#00000004] overflow-hidden flex flex-col justify-between p-8 md:p-12 text-white"
    >
      
      {/* 1. TOP NAV */}
      

      {/* 2. CENTER COMPOSITION (Parallax Heart) */}
      <div className="relative flex justify-center items-center flex-1">
        
        {/* Layer 1: Ghost Text (Background) */}
        <motion.div 
          style={{ y: yTextBack }}
          className="absolute z-0 flex flex-col items-center opacity-10 pointer-events-none"
        >
          <h1 className="text-[18vw] font-black italic tracking-tighter uppercase leading-none">SYSTEMS</h1>
        </motion.div>

        {/* Layer 2: Image Block (Middle) */}
        <motion.div 
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ scale: imageScale }}
          className="relative w-[280px] h-[380px] md:w-[400px] md:h-[500px] z-10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        >
          <img 
            src="https://ik.imagekit.io/y8vbhvt7s/persenal%20fun%20stuff%20/image.jpg?updatedAt=1768501411754" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
            alt="Rahul Patle"
          />
          {/* Subtle Scanline Overlay for Tech vibe */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
        </motion.div>

        {/* Layer 3: Main Bold Typography (Foreground) */}
        <motion.div 
          style={{ y: yTextFront }}
          className="absolute inset-0 flex flex-col justify-center items-center z-20 pointer-events-none mix-blend-difference"
        >
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[14vw] leading-[0.75] font-black italic tracking-tighter text-white"
          >
            HELLO
          </motion.h1>
          <motion.h1 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-[14vw] leading-[0.75] font-black italic tracking-tighter text-[#14F195]"
          >
            I'M RAHUL
          </motion.h1>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-[14vw] leading-[0.75] font-black italic tracking-tighter text-white md:ml-40"
          >
            PATLE
          </motion.h1>
        </motion.div>
      </div>

      {/* 3. BOTTOM INFO */}
      <motion.div style={{ opacity }} className="flex justify-between items-end z-30 font-mono text-[10px] uppercase tracking-widest">
        <div className="max-w-[250px] leading-relaxed opacity-50 flex flex-col gap-2">
          <div className="w-8 h-[1px] bg-white" />
          <span>CODE ARCHITECT & DESIGNER EXPLORING VIBRANT DIGITAL WORLDS.</span>
        </div>
        <div className="text-center hidden md:block">
          <span className="text-gray-500">BASED IN</span> <br /> 
          <span className="text-[#14F195]">MUMBAI, INDIA</span>
        </div>
        <div className="opacity-50 flex items-center gap-4">
           <span>VERIFIED_2024</span>
           <div className="w-2 h-2 rounded-full bg-[#14F195] animate-pulse" />
        </div>
      </motion.div>

      {/* Background Noise Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}