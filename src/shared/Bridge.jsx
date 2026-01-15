import { motion } from 'framer-motion';

export default function Bridge() {
  return (
    <section className="h-[70vh] flex flex-col items-center justify-center bg-white dark:bg-[#050505] text-black dark:text-white transition-colors duration-1000">
      
      {/* Visual Anchor */}
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: 150 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="w-[1px] bg-gradient-to-b from-black to-transparent dark:from-[#14F195] mb-12"
      />

      <div className="text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          className="font-mono text-[10px] uppercase tracking-[0.8em] mb-6"
        >
          End_of_Centralized_Layer
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-6xl font-extralight italic uppercase tracking-tighter"
        >
          Ready to <span className="font-black not-italic text-[#9945FF]">Ascend?</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <div className="flex gap-2">
             <div className="w-2 h-2 rounded-full bg-black dark:bg-white animate-bounce" />
             <div className="w-2 h-2 rounded-full bg-black dark:bg-white animate-bounce [animation-delay:0.2s]" />
             <div className="w-2 h-2 rounded-full bg-black dark:bg-white animate-bounce [animation-delay:0.4s]" />
          </div>
          <p className="text-gray-400 font-mono text-[9px] uppercase tracking-[0.3em]">
            Toggle Universe to Initialize Web3_Mainnet
          </p>
        </motion.div>
      </div>

      {/* Decorative Side Text */}
      <div className="absolute left-10 bottom-10 hidden md:block opacity-10 font-mono text-[10px] rotate-90 origin-left">
        PROTOCOL_TRANSITION_v2.0
      </div>
    </section>
  );
}