import { motion } from 'framer-motion';
import TerminalConsole from './components/TerminalConsole';
import AIAgentCore from './components/AIAgentCore';
import VaultSocials from './components/VaultSocials';

export default function Web3Layout() {
  return (
    <div className="relative overflow-hidden">
      {/* 3D Background Elements should be here via SharedCanvas */}
      
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        {/* Row 1: Hero & Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-32">
          <div className="lg:col-span-7">
            <motion.h2 
              initial={{ opacity: 0, skewX: 20 }}
              whileInView={{ opacity: 1, skewX: 0 }}
              className="text-[12vw] lg:text-[8vw] font-black leading-none uppercase italic text-transparent stroke-text"
              style={{ WebkitTextStroke: '1px #14F195' }}
            >
              DEGEN <br /> ARCHITECT
            </motion.h2>
            <p className="mt-8 text-xl text-[#9945FF] font-mono uppercase tracking-[0.5em]">
              The Ledger never lies.
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <TerminalConsole />
          </div>
        </div>

        {/* Row 2: Vault Section */}
        <div className="mb-32">
           <div className="text-center mb-10">
              <h3 className="text-4xl font-black uppercase tracking-tighter italic">Secured Assets</h3>
              <p className="text-gray-500 font-mono text-sm">Transfer 0.1 SOL to decrypt social coordinates</p>
           </div>
           <VaultSocials />
        </div>

        {/* AI Agent Floating component */}
        <AIAgentCore />
      </main>

      {/* Grid Overlay for Web3 vibe */}
      <div className="fixed inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#14F195 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
    </div>
  );
}