import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useUniverse } from '../../store/useUniverse';

gsap.registerPlugin(ScrollTrigger);

const items = [
  { title: "SaaS Platforms", type: "Fullstack Architecture", tech: "Next.js / PostgreSQL / Prisma", side: "left" },
  { title: "dApp Ecosystems", type: "Solana Smart Contracts", tech: "Rust / Anchor / SVM", side: "right" },
  { title: "3D Immersive UI", type: "Creative Engineering", tech: "R3F / Three.js / GLSL", side: "left" },
  { title: "AI Integrations", type: "Autonomous Systems", tech: "OpenAI / LangChain / VectorDB", side: "right" }
];

export default function Capabilities() {
  const containerRef = useRef(null);
  const { mode } = useUniverse();
  const isWeb3 = mode === 'web3';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Items reveal animation
      gsap.utils.toArray(".cap-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
            end: "top 70%",
            scrub: 1,
          },
          opacity: 0,
          scale: 0.9,
          y: 50,
          skewX: 5,
          filter: "blur(10px)",
        });
      });

      // Background Marquee
      gsap.to(".bg-marquee", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
        xPercent: -30,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className={`min-h-screen w-full py-32 relative overflow-hidden transition-colors duration-1000 ${
        isWeb3 ? 'bg-[#05050500] text-white' : 'bg-[#00000029] text-white'
      }`}
    >
      
      {/* Massive Background Text */}
      <h2 className={`bg-marquee absolute top-1/2 left-0 text-[30vw] font-black whitespace-nowrap pointer-events-none uppercase italic leading-none transition-opacity duration-700 ${
        isWeb3 ? 'text-white opacity-[0.03]' : 'text-black opacity-[0.02]'
      }`}>
        CAPABILITIES SYSTEMS ARCHITECTURE PROTOCOL DESIGN
      </h2>

      <div className="relative z-10 px-6 md:px-20">
        <div className="mb-40">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`font-mono text-[10px] tracking-[0.8em] uppercase ${isWeb3 ? 'text-[#14F195]' : 'text-gray-400'}`}
          >
            Modular_Skills
          </motion.span>
          <h2 className="text-6xl md:text-[10vw]  leading-none tracking-tighter uppercase mt-4">
            SYSTEM<br/>CAPS<span className={`${isWeb3 ? 'text-[#14F195]' : 'text-[#9945FF]'} font-light animate-pulse`}>_</span>
          </h2>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`cap-item flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                item.side === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Number Index */}
              <div className={`text-[15vw] font-lite  leading-none select-none italic transition-colors ${
                isWeb3 ? 'text-white/5' : 'text-black/5'
              }`}>
                0{index + 1}
              </div>

              {/* Text Content */}
              <div className={`flex-1 ${item.side === 'right' ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 hover:italic transition-all duration-300 cursor-default">
                  {item.title}
                </h3>
                <div className={`flex flex-col gap-2 ${item.side === 'right' ? 'md:items-end' : 'md:items-start'}`}>
                  <p className={`font-mono text-sm font-bold tracking-widest ${
                    isWeb3 ? 'text-[#14F195]' : 'text-[#9945FF]'
                  }`}>
                    {item.type}
                  </p>
                  <p className="max-w-md text-gray-500 font-mono text-[10px] uppercase leading-relaxed tracking-widest">
                    {item.tech}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Retro Bottom Decoration */}
      <div className={`mt-40 border-t ${isWeb3 ? 'border-white/10' : 'border-black/10'} pt-10 px-10 flex justify-between font-mono text-[8px] opacity-30 uppercase tracking-widest`}>
         <span className={isWeb3 ? 'text-[#14F195]' : ''}>Node_Integrity: 100%</span>
         <span>Architecture: Modular</span>
         <span>OS: Rahul_Systems_v2</span>
      </div>
    </section>
  );
}