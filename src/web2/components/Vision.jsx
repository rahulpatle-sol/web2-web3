import { motion } from 'framer-motion';

const beliefs = [
  { id: "01", title: "Ultra Performance", desc: "100ms latency or it's legacy. Engineering speed into every pixel." },
  { id: "02", title: "Spatial Immersion", desc: "Moving beyond 2D. Crafting three-dimensional digital ecosystems." },
  { id: "03", title: "Protocol Design", desc: "Architecting the sovereign financial layer of the future web." },
  { id: "04", title: "Degen Systems", desc: "Chaos governed by code. High-end shaders meets blockchain logic." }
];

export default function Vision() {
  return (
    <section className="w-full bg-[#050505] py-20 md:py-40 px-6 md:px-20 relative overflow-hidden">
      
      {/* 1. HORIZONTAL MARQUEE (Chalta hua text) */}
      <div className="absolute top-0 left-0 w-full py-4 border-b border-white/5 overflow-hidden flex whitespace-nowrap opacity-20">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 font-mono text-[10px] tracking-[1em] text-white uppercase"
        >
          <span>BUILDING_THE_VOID</span>
          <span>SOLANA_MAINNET_ACTIVE</span>
          <span>RUST_ENGINEERING</span>
          <span>RAHUL_PATLE_SYSTEMS</span>
          {/* Repeat for loop */}
          <span>BUILDING_THE_VOID</span>
          <span>SOLANA_MAINNET_ACTIVE</span>
          <span>RUST_ENGINEERING</span>
        </motion.div>
      </div>

      <div className="relative z-10 mt-10">
        <h3 className="text-white/40 font-light text-xs tracking-[0.5em] mb-20 uppercase">
          Manifesto // 01
        </h3>

        <div className="flex flex-col">
          {beliefs.map((item) => (
            <motion.div 
              key={item.id}
              initial="initial"
              whileHover="hover"
              className="group relative py-10 md:py-16 border-b border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between cursor-none"
            >
              {/* Ultra Thin Hover Line */}
              <motion.div 
                variants={{ hover: { scaleX: 1 } }}
                initial={{ scaleX: 0 }}
                className="absolute bottom-0 left-0 w-full h-[1px] bg-[#14F195] origin-left transition-transform duration-500"
              />

              <div className="flex items-baseline gap-6 z-10">
                <span className="text-[10px] font-mono text-[#9945FF]">{item.id}</span>
                {/* Font light and Tracking wide for premium look */}
                <h4 className="text-4xl md:text-6xl font-extralight text-white/90 group-hover:text-white transition-all tracking-tight uppercase italic">
                  {item.title}
                </h4>
              </div>

              <div className="mt-4 md:mt-0 max-w-[280px] z-10 text-right">
                <p className="text-gray-500 font-light text-[11px] leading-relaxed uppercase tracking-wider group-hover:text-gray-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. BOTTOM HORIZONTAL TEXT (Scroll Based or Auto) */}
      <div className="mt-20 overflow-hidden">
        <motion.h2 
          animate={{ x: [-500, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="text-[15vw]  text-lime-300 stroke-text opacity-100 whitespace-nowrap italic"
        >
          PROOF OF WORK — SOLANA ARCHITECT — RUST DEVELOPER — 
        </motion.h2>
      </div>
    </section>
  );
}