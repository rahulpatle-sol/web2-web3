import { motion } from 'framer-motion';

const items = [
  { title: "SaaS Platforms", type: "Fullstack", tech: "Next.js / PostgreSQL" },
  { title: "dApp Ecosystems", type: "Web3", tech: "Solana / Anchor" },
  { title: "3D Immersive UI", type: "Creative", tech: "R3F / Three.js" },
  { title: "AI Integrations", type: "Automation", tech: "OpenAI / LangChain" }
];

export default function Capabilities() {
  return (
    <section className="min-h-screen w-full bg-white text-black p-10 flex flex-col justify-center">
      <h2 className="text-6xl md:text-[8vw] font-black font-clash leading-none mb-20 italic underline decoration-blue-600">CAPABILITIES_</h2>
      <div className="flex flex-col border-t border-black">
        {items.map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ x: 20 }}
            className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-black cursor-none"
          >
            <div className="flex items-center gap-8">
              <span className="font-mono text-gray-400">0{index + 1}</span>
              <h3 className="text-4xl md:text-6xl font-black font-clash group-hover:italic transition-all">{item.title}</h3>
            </div>
            <div className="mt-4 md:mt-0 text-left md:text-right">
              <p className="font-mono text-sm font-bold text-blue-600">{item.type}</p>
              <p className="font-mono text-xs text-gray-500 uppercase tracking-tighter">{item.tech}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}