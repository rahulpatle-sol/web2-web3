import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-transparent overflow-hidden flex flex-col justify-between p-6 md:p-12 text-white">
      
      {/* 1. TOP NAV */}
      <div className="flex justify-between items-start z-50 font-mono text-[10px] tracking-widest uppercase opacity-70">
        <div className="flex flex-col">
          <span>RAHUL PATLE</span>
          <span className="text-[#14F195]">SYS_ARCHITECTURE</span>
        </div>
        <div className="flex gap-8">
          <span className="hover:line-through cursor-pointer italic">VAULT</span>
          <span className="hover:line-through cursor-pointer italic">PROJECTS</span>
        </div>
      </div>

      {/* 2. CENTER PIECE */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none overflow-hidden">
        <h1 className="absolute text-[22vw] font-black italic tracking-tighter text-white opacity-5 whitespace-nowrap z-0">
          CREATIVE DEVELOPER
        </h1>

        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[70vw] h-[60vh] md:w-[30vw] md:h-[70vh] z-10"
        >
          <div className="absolute -inset-4 border border-white/10 -z-10" />
          <img 
            src="https://media.istockphoto.com/id/2160850994/photo/asian-software-developers-working-on-multiple-screens-displaying-code-and-application.webp?a=1&b=1&s=612x612&w=0&k=20&c=IDY__FXpAaireo52edTqK9aEQSV9BqNaGjsZkLyf5xI="
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Rahul Patle"
          />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
          <motion.div 
             initial={{ y: 100, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.5, duration: 1.5 }}
             className="flex flex-col items-center"
          >
            <h1 className="text-[12vw] md:text-[14vw] leading-[0.75] font-black italic text-white mix-blend-difference">HELLO</h1>
            <h1 className="text-[12vw] md:text-[14vw] leading-[0.75] font-black italic text-[#14F195] mix-blend-difference">RAHUL</h1>
            <h1 className="text-[12vw] md:text-[14vw] leading-[0.75] font-black italic text-white mix-blend-difference ml-10">PATLE</h1>
          </motion.div>
        </div>
      </div>

      {/* 3. BOTTOM INFO */}
      <div className="flex flex-col md:flex-row justify-between items-end z-50 font-mono text-[9px] uppercase tracking-widest">
        <div className="max-w-[250px] opacity-50 mb-4 md:mb-0">
           BLOCKCHAIN ENGINEER / BUILDING <br /> HIGH-PERFORMANCE SMART CONTRACTS
        </div>
        <div className="flex flex-col items-center opacity-80">
          <div className="w-px h-12 bg-white mb-4" />
          <span>SCROLL TO ENTER</span>
        </div>
        <div className="text-right">
          <span className="text-[#14F195]">EST. 2024</span><br/>
          <span className="opacity-40">INDIA_NODE_01</span>
        </div>
      </div>
    </section>
  );
}