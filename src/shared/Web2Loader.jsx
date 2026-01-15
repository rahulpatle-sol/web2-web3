import { motion } from 'framer-motion';

export default function Web2Loader() {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white dark:bg-zinc-900 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-zinc-100 dark:border-zinc-800">
      
      <div className="relative flex items-center justify-center w-20 h-20 mb-6">
        {/* Soft Modern Spinner */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.1, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-blue-500/20"
          />
        ))}
        
        {/* Central Clean Dot */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-4 h-4 bg-blue-600 rounded-full shadow-lg shadow-blue-500/40"
        />
      </div>

      <div className="text-center space-y-1">
        <h4 className="text-zinc-800 dark:text-zinc-100 font-semibold text-sm tracking-tight">
          Crafting Experience
        </h4>
        <p className="text-zinc-400 dark:text-zinc-500 text-[11px] font-medium">
          Optimizing for your device...
        </p>
      </div>
    </div>
  );
}