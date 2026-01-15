import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-black">
      {/* Background Large Text (Marquee Style) */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full opacity-10 whitespace-nowrap overflow-hidden select-none pointer-events-none">
        <motion.h1 
          animate={{ x: [0, -1000] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[30vw] font-black uppercase font-clash leading-none"
        >
          CREATIVE DEVELOPER • SOLANA DEGEN • UI ARCHITECT • 
        </motion.h1>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-7xl md:text-9xl font-black font-clash tracking-tighter leading-tight">
            I BUILD <br /> <span className="text-blue-500 italic">CHAOS.</span>
          </h2>
          <p className="mt-6 text-xl font-mono text-gray-400 max-w-lg mx-auto uppercase tracking-widest">
            Transforming raw logic into immersive digital universes.
          </p>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce font-mono text-xs uppercase tracking-tighter opacity-50">
        Scroll to Enter the Void ↓
      </div>
    </section>
  );
}