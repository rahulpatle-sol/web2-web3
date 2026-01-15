import React from 'react';
import { motion } from 'framer-motion';
import { useUniverse } from '../store/useUniverse'; // Global Mode
import { Twitter, Linkedin, Github, MessageSquare, FileText, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { mode } = useUniverse();
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: "Twitter / X", link: "https://x.com/PatleRahul239", icon: <Twitter size={14} /> },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/rahul-patle-sol/", icon: <Linkedin size={14} /> },
    { name: "GitHub", link: "https://github.com/rahulpatle-sol", icon: <Github size={14} /> },
    { name: "Discord", link: "https://discord.com/users/rahulpatle_sol", icon: <MessageSquare size={14} />, handle: "rahulpatle_sol" },
    { name: "Resume", link: "https://ik.imagekit.io/y8vbhvt7s/rahulpatleresume.pdf?updatedAt=1761980827319", icon: <FileText size={14} /> }
  ];

  // Dynamic Colors based on Mode
  const isWeb3 = mode === 'web3';
  const bgColor = isWeb3 ? 'bg-[#050505]' : 'bg-transparent';
  const textColor = isWeb3 ? 'text-white' : 'text-white';
  const borderColor = isWeb3 ? 'border-white/10' : 'border-black/10';
  const accentColor = isWeb3 ? 'text-white' : 'text-blue-600';

  return (
    <footer className={`relative w-full ${bgColor} ${textColor} py-20 px-6 md:px-20 overflow-hidden transition-colors duration-700`}>
      
      {/* 1. HUGE CONTACT TRIGGER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 relative z-10">
        <div className="max-w-3xl">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-[9vw] font-black leading-[0.85] tracking-tighter uppercase italic"
          >
            Let's build <br /> 
            <span className={`text-transparent ${isWeb3 ? 'stroke-text-white' : 'stroke-text-black'}`}>the future.</span>
          </motion.h2>
          <p className={`mt-10 font-mono text-[10px] uppercase tracking-[0.4em] ${isWeb3 ? 'text-gray-500' : 'text-gray-400'}`}>
            Available for worldwide collaboration // SYSTEM_READY_{currentYear}
          </p>
        </div>

        <motion.a 
          href="mailto:rahulpatle.dev@gmail.com" // Update your email here
          whileHover={{ scale: 1.05, rotate: -3 }}
          className={`mt-10 md:mt-0 w-36 h-36 md:w-56 md:h-56 ${isWeb3 ? 'bg-[#14F195] text-black' : 'bg-black text-white'} rounded-full flex flex-col items-center justify-center font-black text-center text-sm md:text-xl leading-none uppercase italic cursor-pointer shadow-[0_0_50px_rgba(20,241,149,0.2)]`}
        >
          GET IN <br /> TOUCH
          <ArrowUpRight className="mt-2" />
        </motion.a>
      </div>

      {/* 2. DYNAMIC SOCIAL LINKS */}
      <div className={`grid grid-cols-1 md:grid-cols-5 border-t ${borderColor} pt-12 gap-10 relative z-10`}>
        {socials.map((social, i) => (
          <motion.a 
            key={i} 
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ x: 10 }}
            className="group flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 font-mono text-[10px] text-gray-500 uppercase tracking-widest">
              <span>0{i + 1}</span>
              {social.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold uppercase tracking-tight flex items-center gap-2 group-hover:text-[#14F195] transition-colors">
                {social.name}
              </span>
              {social.handle && (
                <span className="text-[10px] font-mono text-gray-500 lowercase opacity-0 group-hover:opacity-100 transition-opacity">
                  @{social.handle}
                </span>
              )}
            </div>
          </motion.a>
        ))}
      </div>

      {/* 3. BOTTOM BAR */}
      <div className={`mt-40 flex flex-col md:flex-row justify-between items-center gap-8 border-t ${borderColor} pt-8 font-mono text-[9px] uppercase tracking-[0.2em] opacity-40`}>
        <div>© {currentYear} RAHUL PATLE SYSTEMS</div>
        <div className="hidden md:block italic">Designed & Engineered in India</div>
        <div className="flex gap-10 italic">
          <span>Local Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <span className={accentColor}>Network: Solana_Mainnet</span>
        </div>
      </div>

      {/* 4. MASSIVE BACKGROUND TEXT */}
      <div className={`absolute -bottom-10 left-0 w-full ${isWeb3 ? 'opacity-[0.05]' : 'opacity-[0.03]'} pointer-events-none select-none transition-opacity duration-700`}>
        <h1 className="text-[25vw] font-black whitespace-nowrap leading-none tracking-tighter italic uppercase">
          RAHUL PATLE RAHUL PATLE
        </h1>
      </div>

      {/* CSS for Outline Text */}
      <style jsx>{`
        .stroke-text-black { -webkit-text-stroke: 1px black; }
        .stroke-text-white { -webkit-text-stroke: 1px white; }
      `}</style>
    </footer>
  );
}