import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const skills = [
  { 
    name: "SOLANA / RUST", 
    level: "80%", 
    category: "BLOCKCHAIN", 
    icon: "01",
    details: "Anchor Framework, PDA Architecture, CPIs, SVM Optimization",
    status: "PROTOCOL_STABLE"
  },
  { 
    name: "REACT / NEXT.JS", 
    level: "80%", 
    category: "FRONTEND", 
    icon: "02",
    details: "Server Components, Framer Motion, State Orchestration",
    status: "UI_FLUID"
  },
  { 
    name: "THREE.JS / GSAP", 
    level: "60%", 
    category: "ANIMATION", 
    icon: "03",
    details: "Shader Materials, GLSL, Scroll-Triggered Narratives",
    status: "VISUAL_IMMERSIVE"
  },
  // Add more as needed...
];

export default function SkillVault() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="min-h-screen bg-[#0505051a] py-32 px-6 md:px-20 border-t border-white/5 relative overflow-hidden">
      
      {/* 1. SECTION HEADER (Sheryians Style) */}
      <div className="relative z-10 mb-32 flex flex-col md:flex-row justify-between items-end gap-10">
        <div>
          <h3 className="text-[#14F195] font-mono text-xs tracking-[1em] uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#14F195]"></span> Tech_Stack
          </h3>
          <h2 className="text-white text-7xl md:text-[10vw] font-extralight italic uppercase leading-none tracking-tighter">
            Skill<span className="font-black not-italic text-transparent stroke-text opacity-40">Vault</span>
          </h2>
        </div>
        <div className="font-mono text-[10px] text-gray-500 uppercase text-right leading-loose">
           [SCANNING_SYSTEM_INTEGRITY] <br />
           [DATA_ENCRYPTION: AES-256] <br />
           [USER_STATUS: ADMIN_ACCESS]
        </div>
      </div>

      {/* 2. THE VAULT LIST */}
      <div className="flex flex-col relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative border-b border-white/5 py-12 flex flex-col md:flex-row md:items-center justify-between cursor-none transition-all duration-500"
          >
            {/* Background Kinetic Fill */}
            <motion.div 
              className="absolute inset-0 bg-[#14F195] -z-10 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Left Side: Basic Info */}
            <div className="flex items-center gap-10 group-hover:pl-6 transition-all duration-500">
              <span className={`font-mono text-xs ${hoveredIndex === index ? 'text-black' : 'text-[#9945FF]'} transition-colors`}>
                [{skill.icon}]
              </span>
              <h4 className={`text-4xl md:text-7xl font-light uppercase tracking-tighter ${hoveredIndex === index ? 'text-black font-black italic' : 'text-white'} transition-all`}>
                {skill.name}
              </h4>
            </div>

            {/* Right Side: Hidden Detail Reveal */}
            <div className="mt-8 md:mt-0 flex items-center gap-20">
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="hidden lg:flex flex-col text-right font-mono"
                  >
                    <span className="text-black text-[10px] font-bold tracking-widest uppercase mb-1">
                      {skill.status}
                    </span>
                    <span className="text-black/60 text-[9px] uppercase max-w-[200px] leading-tight">
                      {skill.details}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col items-end">
                <span className={`text-xs font-mono mb-2 ${hoveredIndex === index ? 'text-black' : 'text-gray-500'}`}>
                  {skill.level}
                </span>
                <div className={`w-32 h-[2px] ${hoveredIndex === index ? 'bg-black' : 'bg-white/10'} relative overflow-hidden`}>
                   <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      className={`absolute inset-0 ${hoveredIndex === index ? 'bg-white' : 'bg-[#14F195]'}`}
                   />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Floating Blobs for Depth */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#9945FF] opacity-[0.05] blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#14F195] opacity-[0.05] blur-[150px] pointer-events-none" />
    </section>
  );
}