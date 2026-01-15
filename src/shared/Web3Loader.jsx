import { motion } from 'framer-motion';
import { Terminal, Cpu, Database } from 'lucide-react';

export default function Web3Loader() {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-[#050505] border border-[#14F195]/20 rounded-2xl relative overflow-hidden group">
      {/* Background Animated Scanning Line */}
      <motion.div 
        animate={{ y: [-100, 400] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#14F195]/30 to-transparent z-0"
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* The Core Node Animation */}
        <div className="relative w-24 h-24 mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-[#14F195]/40 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 border-2 border-[#9945FF] border-t-transparent border-b-transparent rounded-full shadow-[0_0_20px_#9945FF55]"
          />
          <div className="absolute inset-0 flex items-center justify-center text-[#14F195]">
            <Cpu size={32} className="animate-pulse" />
          </div>
        </div>

        {/* Status Logs */}
        <div className="space-y-2 font-mono text-center">
          <h4 className="text-[#14F195] text-xs font-black tracking-[0.3em] uppercase italic">
            Initializing_Protocol
          </h4>
          <div className="flex gap-2 justify-center">
             <motion.span 
               animate={{ opacity: [0, 1, 0] }} 
               transition={{ duration: 1, repeat: Infinity, delay: 0.1 }}
               className="w-1 h-1 bg-[#14F195]" 
             />
             <motion.span 
               animate={{ opacity: [0, 1, 0] }} 
               transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
               className="w-1 h-1 bg-[#14F195]" 
             />
             <motion.span 
               animate={{ opacity: [0, 1, 0] }} 
               transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
               className="w-1 h-1 bg-[#14F195]" 
             />
          </div>
          <p className="text-[8px] text-white/30 tracking-widest uppercase mt-4">
            Auth: 0xRahul_Node_Active
          </p>
        </div>
      </div>
    </div>
  );
}