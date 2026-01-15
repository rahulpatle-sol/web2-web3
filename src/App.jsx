import React, { Suspense, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';

import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';

import { useUniverse } from './store/useUniverse';
import Web2Layout from './web2/web2Layout'; 
import Web3Layout from './web3/web3Layout';

import SharedCanvas from './shared/SharedCanvas';
import UniverseToggle from './shared/UIniversToggle';
import AudioManager from './shared/AudioManger';
import ClothNavbar from './shared/ClothNavbar';
import LiquidCursor from './shared/LiquideCursor';
import CustomCursor from './shared/CustomCursor';

import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- STUDIO FIX: Sirf Dev mode mein initialize hoga aur hidden rahega ---
if (import.meta.env.DEV) {
  studio.initialize();
  studio.extend(extension);
  // Default hidden rakhte hain taaki UI na block ho. 
  // Browser mein 'H' dabao panel dikhne lagega.
  studio.ui.hide(); 
}

function App() {
  const { mode } = useUniverse();
  
  // Solana Setup
  const endpoint = useMemo(() => clusterApiUrl('devnet'), []);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  // Smooth Scroll (Lenis) setup
  useEffect(() => {
    const lenis = new Lenis({ 
      duration: 1.2, 
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time) { 
      lenis.raf(time); 
      requestAnimationFrame(raf); 
    }
    
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className={`relative min-h-screen ${
            mode === 'web3' ? 'bg-[#050505] text-white' : 'bg-[#fafafa] text-black'
          } transition-colors duration-1000 overflow-x-hidden`}>
            
            {/* Audio Management */}
            <AudioManager /> 

            {/* Global 3D Canvas */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <SharedCanvas>
                  <Suspense fallback={null}>
                      <LiquidCursor />
                      
                      {/* --- Safe 3D Mesh --- */}
                      <mesh position={[2, 0, 0]} rotation={[0.5, 0.5, 0]}>
                        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                        <meshStandardMaterial 
                          color={mode === 'web3' ? "#14F195" : "#4A90E2"} 
                          metalness={0.8} 
                          roughness={0.1} 
                        />
                      </mesh>
                      <ambientLight intensity={0.5} />
                      <directionalLight position={[10, 10, 5]} intensity={1} />
                  </Suspense>
              </SharedCanvas>
            </div>

            {/* Navigation & Toggle */}
            <ClothNavbar />
            <div className="fixed top-8 right-8 z-[1000]">
                <UniverseToggle />
            </div>

            {/* Layout Switching with Animation */}
            <AnimatePresence mode="wait">
              <motion.main
                key={mode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="relative z-10"
              >
                {mode === 'web2' ? <Web2Layout /> : <Web3Layout />}
              </motion.main>
            </AnimatePresence>

            {/* UI Polish */}
            <CustomCursor />
            {/* Overlay Gradient for depth */}
            <div className={`fixed inset-0 pointer-events-none z-[9998] ${
                mode === 'web3' 
                ? 'shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]' 
                : 'shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]'
            }`} />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;