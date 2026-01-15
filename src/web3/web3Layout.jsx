import React, { useState, useEffect } from 'react'; // React Hooks add kiye
import { motion } from 'framer-motion';
import TerminalConsole from './components/TerminalConsole';
import AIAgentCore from './components/AIAgentCore';
import VaultSocials from './components/VaultSocial';
import HeroWeb3 from './components/HeroWeb3'; 
import ConnectProtocol from './components/ConnectProtocol'; 
import ProjectNodes from './components/ProjectNodes';
import NFTVault from './components/NFTVault';
import Web3Loader from '../shared/Web3Loader'; // Import Loader

export default function Web3Layout() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    // Web3 transition thoda slow aur "heavy" feel hona chahiye
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 2000); // 2 seconds for that "fetching blocks" feel

    return () => clearTimeout(timer);
  }, []);

  // 1. Loading State (The Loader UI)
  if (isBooting) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-[#14F195]">
        <Web3Loader />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-4 font-mono text-[10px] tracking-[0.5em] uppercase"
        >
          Establishing_Secure_Node...
        </motion.p>
      </div>
    );
  }

  // 2. Final Web3 Content
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#14F195] font-mono selection:bg-[#9945FF] selection:text-white overflow-x-hidden transition-opacity duration-1000">
      
      {/* 1. Top Navigation Bar */}
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

        {/* Row 3: The Vault */}
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
        <NFTVault/>
        <AIAgentCore />
      </main>

      {/* 3. Ultra-Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-scanline opacity-[0.03]"></div>
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#14F195 0.5px, transparent 0.5px), linear-gradient(90deg, #14F195 0.5px, transparent 0.5px)', backgroundSize: '50px 50px' }} />
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,1)]"></div>
      </div>
    </div>
  );
}