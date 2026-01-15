import { motion } from 'framer-motion';

const experiences = [
  {
    role: "GRADUATE STUDENT / FREELANCE",
    company: "TURBINE",
    date: "DEC 2025 - PRESENT",
    desc: "Architecting decentralized solutions using Solana, Rust, and Anchor framework.",
    tech: ["Solana", "Rust", "Anchor"]
  },
  {
    role: "SOLANA RUST DEVELOPER",
    company: "ENCODE CLUB",
    date: "NOV 2025 - DEC 2025",
    desc: "Mastered SVM architecture, PDAs, CPIs, and Solana security mitigations. Shipped hackathon projects.",
    tech: ["SVM", "PDA", "CPI", "Security"]
  },
  {
    role: "STUDENT INTERN",
    company: "ACKEE BLOCKCHAIN SECURITY",
    date: "OCT 2025 - DEC 2025",
    desc: "Developed 'Tip Oracle' dApp for code ownership and SOL token distribution.",
    tech: ["Oracle", "dApp", "Solana Security"]
  },
  {
    role: "FULL STACK ENGINEER CONTRIBUTOR",
    company: "SOLANA FOUNDATION",
    date: "APR 2025 - MAY 2025",
    desc: "Built REW3VENT: The ultimate Core NFT collector for high-end event hosting.",
    tech: ["Core NFT", "TypeScript", "React"]
  }
];

export default function Experience() {
  return (
    <section className="min-h-screen bg-[#050505] py-32 px-6 md:px-20 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start mb-20">
        <div>
          <h2 className="text-white text-6xl font-black italic uppercase tracking-tighter">
            PROOFS<span className="text-[#14F195]">_OF_WORK</span>
          </h2>
          <p className="font-mono text-gray-500 text-xs mt-2">DECENTRALIZED EXPERIENCE LEDGER // VERSION 1.0</p>
        </div>
        <div className="hidden md:block text-right font-mono text-[10px] text-[#9945FF]">
          [NODE_STATUS: VALIDATED] <br /> [BLOCK_HEIGHT: 8242024]
        </div>
      </div>

      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-0 md:left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-[#14F195] to-transparent opacity-20" />

        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`relative flex flex-col ${i % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start'} w-full md:w-1/2 ${i % 2 !== 0 && 'md:ml-auto'}`}
            >
              {/* Point on Timeline */}
              <div className={`absolute top-2 w-4 h-4 bg-[#14F195] rounded-full border-4 border-black ${i % 2 === 0 ? 'md:-right-[10px]' : 'md:-left-[10px]'} -left-[8px] z-10`} />

              <div className="bg-[#0a0a0a] p-8 border border-white/5 hover:border-[#14F195]/30 transition-all group">
                <span className="font-mono text-[#9945FF] text-[10px] mb-2 block tracking-widest">{exp.date}</span>
                <h3 className="text-2xl font-black text-white mb-1 uppercase tracking-tighter">{exp.role}</h3>
                <h4 className="text-[#14F195] font-mono text-sm mb-4">@ {exp.company}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light max-w-sm">{exp.desc}</p>
                
                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  {exp.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 text-white font-mono text-[9px] uppercase border border-white/10 group-hover:border-[#14F195]/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}