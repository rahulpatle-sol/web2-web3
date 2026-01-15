import { useUniverse } from '../store/useUniverse'
import { motion } from 'framer-motion'

export default function UniverseToggle() {
  const { mode, toggleMode } = useUniverse()

  return (
    <button 
      onClick={toggleMode}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 px-8 py-3 rounded-full border border-white/20 backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all"
    >
      <span className="flex items-center gap-3 font-clash uppercase tracking-tighter">
        <span className={mode === 'web2' ? 'text-blue-400 font-bold' : 'text-gray-500'}>Web2</span>
        <div className="w-12 h-6 bg-gray-800 rounded-full relative">
          <motion.div 
            animate={{ x: mode === 'web2' ? 2 : 26 }}
            className="absolute top-1 w-4 h-4 bg-white rounded-full"
          />
        </div>
        <span className={mode === 'web3' ? 'text-solana-green font-bold' : 'text-gray-500'}>Web3</span>
      </span>
    </button>
  )
}