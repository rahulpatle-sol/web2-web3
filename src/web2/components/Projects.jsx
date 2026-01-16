import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal, Cpu, Zap, Box } from "lucide-react";

const MASTER_PROJECTS = [
  {
    id: "01",
    title: "CODEMAPERS_IDE",
    category: "SYSTEMS",
    desc: "A futuristic cloud-based execution environment with multi-language support and real-time terminal output.",
    tech: ["React", "Monaco", "Node.js"],
    icon: <Terminal className="text-[#14F195]" />,
    color: "from-green-500/20",
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000"
  },
  {
    id: "02",
    title: "PHOTOFOLIO_VAULT",
    category: "WEB3 / SEC",
    desc: "Military-grade digital vault for assets. Leveraging Solana for immutable security and IPFS for storage.",
    tech: ["Solana", "Rust", "IPFS"],
    icon: <Cpu className="text-purple-500" />,
    color: "from-purple-500/20",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000"
  },
  {
    id: "03",
    title: "IPOD_MUSIC_PRO",
    category: "UX_ARCHIVE",
    desc: "A nostalgic journey into the early 2000s. Fully functional click-wheel navigation and haptic feedback.",
    tech: ["Framer Motion", "React", "State"],
    icon: <Zap className="text-yellow-500" />,
    color: "from-yellow-500/20",
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000"
  },
  {
    id: "04",
    title: "NODE_CLI_MANAGER",
    category: "TOOLING",
    desc: "Advanced terminal-based file management system for power users. Built for speed and raw performance.",
    tech: ["Node.js", "CLI", "Shell"],
    icon: <Box className="text-blue-500" />,
    color: "from-blue-500/20",
    img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000"
  }
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#050505] min-h-screen pt-40 pb-20 px-6 md:px-12 font-clash">
      {/* Background Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,241,149,0.05),transparent)] pointer-events-none" />

      {/* Header Section */}
      <div className="relative z-10 mb-32 border-l-4 border-[#14F195] pl-8">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[#14F195] font-mono text-sm tracking-[0.4em] uppercase"
        >
          Engineering_Excellence
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-none mt-4"
        >
          THE_WORKS<span className="text-white/10">.</span>
        </motion.h1>
      </div>

      {/* Projects Grid - Standard but with Luxury Polish */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
        {MASTER_PROJECTS.map((p, i) => (
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative flex flex-col gap-8"
          >
            {/* Project Image Box */}
            <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.color} rounded-sm`}>
              <img 
                src={p.img} 
                alt={p.title}
                className="w-full h-full object-cover mix-blend-overlay grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-40 group-hover:opacity-100"
              />
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">{p.category}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#14F195]" />
              </div>
            </div>

            {/* Project Content */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10">{p.icon}</div>
                <h3 className="text-white text-3xl md:text-5xl font-black italic tracking-tighter uppercase group-hover:text-[#14F195] transition-colors">
                  {p.title}
                </h3>
              </div>
              
              <p className="text-white/40 font-mono text-sm max-w-lg leading-relaxed">
                {p.desc}
              </p>

              {/* Tech Stack List */}
              <div className="flex flex-wrap gap-2 mt-2">
                {p.tech.map(t => (
                  <span key={t} className="text-[9px] font-mono text-[#14F195] border border-[#14F195]/30 px-3 py-1 rounded-full uppercase">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-8 mt-6">
                 <button className="flex items-center gap-2 text-white font-black text-xs uppercase italic hover:tracking-widest transition-all group/link">
                   Live_View <ExternalLink size={14} className="group-hover/link:text-[#14F195]" />
                 </button>
                 <button className="flex items-center gap-2 text-white/30 font-black text-xs uppercase italic hover:text-white transition-all">
                   Source <Github size={14} />
                 </button>
              </div>
            </div>

            {/* Background Number */}
            <span className="absolute -top-12 -left-6 text-[120px] font-black text-white/[0.02] -z-10 group-hover:text-[#14F195]/10 transition-colors">
              {p.id}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA (The Final Boss Move) */}
      <div className="mt-64 text-center border-t border-white/5 pt-32">
         <h2 className="text-white/20 text-[10vw] font-black italic leading-none mb-10">NEXT_LEVEL?</h2>
         <button className="bg-[#14F195] text-black px-16 py-6 font-black text-xl uppercase italic hover:scale-110 transition-transform shadow-[0_0_50px_rgba(20,241,149,0.4)]">
           LET'S_TALK_
         </button>
      </div>
    </main>
  );
}