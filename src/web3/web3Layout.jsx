import { motion } from 'framer-motion';
import TerminalConsole from './components/TerminalConsole';
import AIAgentCore from './components/AIAgentCore';
import VaultSocials from './components/VaultSocial';
import HeroWeb3 from './components/HeroWeb3'; // Naya component
import ConnectProtocol from './components/ConnectProtocol'; // Wallet Button
import ProjectNodes from './components/ProjectNodes';

export default function Web3Layout() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#14F195] font-mono selection:bg-[#9945FF] selection:text-white overflow-x-hidden">
      
      {/* 1. Top Navigation Bar (Premium Feel) */}
      <nav className="fixed top-0 w-full z-[100] p-6 flex justify-between items-center backdrop-blur-md border-b border-[#14F195]/10">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="font-black italic text-xl tracking-tighter"
        >
          RAHUL_PATLE.SYS
        </motion.div>
        <ConnectProtocol />
      </nav>

      {/* 2. Main Content */}
      <main className="relative z-10 container mx-auto px-6">
        
        {/* Row 1: The Liquid Hero Section */}
        <section className="min-h-screen flex flex-col justify-center">
          <HeroWeb3 /> 
        </section>

        {/* Row 2: Terminal & Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-32 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-[10vw] lg:text-[7vw] font-black leading-[0.85] uppercase italic glitch-text-effect">
                Shadow <br /> Architect
              </h2>
              <div className="h-1 w-20 bg-[#9945FF] my-6"></div>
              <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
                Developing high-performance decentralized protocols. Specializing in Solana Core, 
                Rust, and Advanced Web3 UI/UX for the next billion degens.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5">
            <TerminalConsole />
          </div>
        </div>

        {/* Row 3: The Vault (Paywall) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-32 border-t border-[#14F195]/10"
        >
           <div className="text-center mb-16">
              <span className="text-[#9945FF] text-xs font-bold tracking-[0.5em] uppercase">Security Protocol</span>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mt-2">The Vault</h3>
              <p className="text-gray-500 font-mono text-xs mt-4">Required: 0.1 SOL [DEVNET] to access encrypted social links</p>
           </div>
           <VaultSocials />
        </motion.div>
 <ProjectNodes/>
        {/* Floating AI Oracle */}
        <AIAgentCore />
      </main>

      {/* 3. Ultra-Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated Scanline */}
        <div className="absolute inset-0 bg-scanline opacity-[0.03]"></div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#14F195 0.5px, transparent 0.5px), linear-gradient(90deg, #14F195 0.5px, transparent 0.5px)', backgroundSize: '50px 50px' }} />
        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,1)]"></div>
      </div>
    </div>
  );
}