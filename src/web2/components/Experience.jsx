import { motion } from 'framer-motion';
import { useUniverse } from '../../store/useUniverse'; 
import { Terminal, ShieldCheck, Cpu, Zap } from 'lucide-react'; // Icons for extra detail

const experiences = [
  {
    role: "FULL STACK DEVELOPER",
    company: "ECOAVENSTRA HR INFOTECH PVT LTD",
    date: "PRESENT",
    desc: "Engineering scalable enterprise solutions and full-stack architecture with modern web protocols.",
    tech: ["Fullstack", "React", "Node.js", "Enterprise_Architecture"],
    icon: <Cpu size={16} />
  },
  {
    role: "GRADUATE STUDENT / FREELANCE",
    company: "TURBINE",
    date: "DEC 2025 - JAN 2026",
    desc: "Architecting decentralized solutions using Solana, Rust, and Anchor framework.",
    tech: ["Solana", "Rust", "Anchor"],
    icon: <Zap size={16} />
  },
  {
    role: "SOLANA RUST DEVELOPER",
    company: "ENCODE CLUB",
    date: "NOV 2025 - DEC 2025",
    desc: "Mastered SVM architecture, PDAs, CPIs, and Solana security mitigations.",
    tech: ["SVM", "PDA", "CPI", "Security"],
    icon: <Terminal size={16} />
  },
  {
    role: "STUDENT INTERN",
    company: "ACKEE BLOCKCHAIN SECURITY",
    date: "OCT 2025 - DEC 2025",
    desc: "Developed 'Tip Oracle' dApp for code ownership and SOL token distribution.",
    tech: ["Oracle", "dApp", "Solana Security"],
    icon: <ShieldCheck size={16} />
  }
];

export default function Experience() {
  const { mode } = useUniverse();
  const isWeb3 = mode === 'web3';

  return (
    <section className={`relative min-h-screen py-32 px-6 md:px-20 border-t transition-colors duration-1000 overflow-hidden ${
      isWeb3 ? 'bg-transparent border-white/5' : 'bg-transparent border-black/5'
    }`}>
      
      {/* --- SOLANA BACKGROUND ELEMENTS --- */}
      {isWeb3 && (
        <>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#9945FF] rounded-full blur-[180px] opacity-[0.05] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#14F195] rounded-full blur-[180px] opacity-[0.05] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        </>
      )}

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start mb-24">
        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
          <h2 className={`text-7xl md:text-8xl font-black italic uppercase tracking-tighter transition-colors ${
            isWeb3 ? 'text-white' : 'text-black'
          }`}>
            PROOFS<span className={isWeb3 ? 'text-[#14F195] drop-shadow-[0_0_15px_rgba(20,241,149,0.5)]' : 'text-blue-600'}>_OF_WORK</span>
          </h2>
          <div className="flex items-center gap-3 mt-3">
             <div className={`h-[1px] w-12 ${isWeb3 ? 'bg-[#14F195]' : 'bg-blue-600'}`} />
             <p className="font-mono text-gray-500 text-[10px] tracking-[0.4em] uppercase">
                {isWeb3 ? 'LEDGER_VERIFIED_TRANSACTIONS' : 'Professional Journey'}
             </p>
          </div>
        </motion.div>
        
        <div className={`hidden md:block text-right font-mono text-[9px] uppercase tracking-[0.3em] ${isWeb3 ? 'text-[#9945FF]' : 'text-gray-400'}`}>
          {isWeb3 ? (
            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>
              ● NODE_772_CONNECTED <br /> 
              [TPS: 2,841] [BLOCK: 284..12]
            </motion.div>
          ) : 'EST. 2026 // INDIA'}
        </div>
      </div>

      <div className="relative z-10">
        {/* Central Vertical Line (Neon Glow) */}
        <div className={`absolute left-0 md:left-1/2 top-0 w-[1px] h-full transition-all ${
          isWeb3 ? 'bg-gradient-to-b from-[#14F195] via-[#9945FF] to-transparent' : 'bg-black/10'
        }`} />

        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col ${
                i % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start'
              } w-full md:w-1/2 ${i % 2 !== 0 && 'md:ml-auto'}`}
            >
              {/* Point on Timeline (The Node) */}
              <div className={`absolute top-2 w-4 h-4 rounded-full border-2 transition-all shadow-[0_0_15px] ${
                isWeb3 
                ? 'bg-black border-[#14F195] shadow-[#14F195]/50 md:-right-[8px] -left-[8px]' 
                : 'bg-white border-blue-600 shadow-blue-600/20 md:-right-[8px] -left-[8px]'
              } z-10`} />

              <div className={`group relative w-full max-w-xl p-8 transition-all overflow-hidden ${
                isWeb3 
                ? 'bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 hover:border-[#14F195]/40 shadow-2xl shadow-black' 
                : 'bg-white border border-black/5 hover:border-blue-600/20 shadow-sm'
              }`}>
                
                {/* Subtle Scanline Effect for Web3 */}
                {isWeb3 && <div className="absolute inset-0 bg-scanline opacity-[0.02] pointer-events-none" />}

                <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                   {isWeb3 && <span className="text-[#14F195]/50">{exp.icon}</span>}
                   <span className={`font-mono text-[10px] tracking-[0.3em] font-black italic ${
                     isWeb3 ? 'text-[#9945FF]' : 'text-blue-500'
                   }`}>
                     {exp.date}
                   </span>
                </div>

                <h3 className={`text-3xl font-black mb-1 uppercase tracking-tighter transition-colors leading-none ${
                  isWeb3 ? 'text-white group-hover:text-[#14F195]' : 'text-black'
                }`}>
                  {exp.role}
                </h3>

                <h4 className={`font-mono text-xs mb-6 flex items-center gap-2 ${
                  isWeb3 ? 'text-gray-400' : 'text-gray-600'
                } ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                   <span className={isWeb3 ? 'text-[#14F195]' : 'text-blue-600'}>@</span> {exp.company}
                </h4>

                <p className={`text-[13px] leading-relaxed mb-8 font-medium ${
                  isWeb3 ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  {exp.desc}
                </p>
                
                {/* Tech Grid */}
                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  {exp.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className={`px-3 py-1 font-mono text-[8px] uppercase tracking-tighter border transition-all ${
                        isWeb3 
                        ? 'bg-[#14F195]/5 text-[#14F195] border-[#14F195]/20 group-hover:bg-[#14F195]/20' 
                        : 'bg-black/5 text-black border-black/5'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Network Bar */}
      <div className={`mt-32 pt-10 border-t flex justify-between items-center ${
        isWeb3 ? 'border-white/5 text-gray-700' : 'border-black/5 text-gray-300'
      } font-mono text-[8px] uppercase tracking-[0.4em]`}>
         <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
            SECURE_CONNECTION_STABLE
         </span>
         <span className="hidden md:block">SOLANA_CORE_MAINNET_LATEST</span>
         <span>INDEX: 00{experiences.length}</span>
      </div>
    </section>
  );
}