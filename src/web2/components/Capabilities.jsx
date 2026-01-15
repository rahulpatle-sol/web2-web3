import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  { title: "SaaS Platforms", type: "Fullstack Architecture", tech: "Next.js / PostgreSQL / Prisma", side: "left" },
  { title: "dApp Ecosystems", type: "Solana Smart Contracts", tech: "Rust / Anchor / SVM", side: "right" },
  { title: "3D Immersive UI", type: "Creative Engineering", tech: "R3F / Three.js / GLSL", side: "left" },
  { title: "AI Integrations", type: "Autonomous Systems", tech: "OpenAI / LangChain / VectorDB", side: "right" }
];

export default function Capabilities() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Har item scroll pe "Pop-up" aur "Scale" hoga
      gsap.utils.toArray(".cap-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
          opacity: 0,
          scale: 0.8,
          y: 100,
          filter: "blur(10px)",
        });
      });

      // Background chalta hua text (Marquee)
      gsap.to(".bg-marquee", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        xPercent: -50,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full bg-[#fafafa] py-32 relative overflow-hidden">
      
      {/* Massive Background Text (Scroll Based) */}
      <h2 className="bg-marquee absolute top-1/2 left-0 text-[30vw] font-black text-black opacity-[0.02] whitespace-nowrap pointer-events-none uppercase italic leading-none">
        CAPABILITIES SYSTEMS ARCHITECTURE PROTOCOL DESIGN
      </h2>

      <div className="relative z-10 px-6 md:px-20">
        <div className="mb-40">
          <span className="font-mono text-[10px] tracking-[0.8em] text-gray-400 uppercase">Modular_Skills</span>
          <h2 className="text-6xl md:text-[10vw] font-black leading-none tracking-tighter text-black uppercase">
            SYSTEM<br/>CAPS<span className="text-[#14F195] font-light">_</span>
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`cap-item flex flex-col md:flex-row items-center gap-10 md:gap-20 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Number Index */}
              <div className="text-[15vw] font-black text-black/5 leading-none select-none font-clash italic">
                0{index + 1}
              </div>

              {/* Text Content */}
              <div className={`flex-1 ${item.side === 'right' ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                  {item.title}
                </h3>
                <div className={`flex flex-col gap-2 ${item.side === 'right' ? 'md:items-end' : 'md:items-start'}`}>
                  <p className="font-mono text-sm font-bold text-[#9945FF] tracking-widest">{item.type}</p>
                  <p className="max-w-md text-gray-400 font-mono text-[10px] uppercase leading-relaxed tracking-widest">
                    {item.tech}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Retro Bottom Decoration */}
      <div className="mt-40 border-t border-black/10 pt-10 px-10 flex justify-between font-mono text-[8px] opacity-30 uppercase tracking-widest">
         <span>Node_Integrity: 100%</span>
         <span>Latency: 0.2ms</span>
         <span>Architecture: Modular</span>
      </div>
    </section>
  );
}