import { motion } from 'framer-motion';

const projects = [
  { id: '0x1A', name: 'DeFi Dashboard', status: 'CONFIRMED', tx: 'sol...4f2', desc: 'Real-time liquidity aggregator' },
  { id: '0x2B', name: 'NFT Market Engine', status: 'MINED', tx: 'sol...9a1', desc: 'High-throughput minting protocol' },
  { id: '0x3C', name: 'AI Oracle Protocol', status: 'ACTIVE', tx: 'sol...e5e', desc: 'Neural network on-chain data' },
];

export default function ProjectNodes() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#14F195]/20 to-transparent z-0" />

      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-[#14F195] font-mono text-sm tracking-[0.3em] uppercase">
          // Deployment_History
        </h2>
      </div>

      <div className="flex gap-0 px-10 items-center overflow-x-auto scrollbar-hide pb-10 relative z-10">
        {projects.map((p, i) => (
          <div key={p.id} className="flex items-center shrink-0">
            
            {/* Project Card (The Node) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative w-80 p-1 bg-gradient-to-br from-[#14F195]/20 to-[#9945FF]/20 hover:from-[#14F195] hover:to-[#9945FF] transition-all duration-500"
            >
              <div className="bg-[#0a0a0a] p-6 h-full relative overflow-hidden">
                {/* Scanline Animation Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(20,241,149,0.05)_50%,transparent_100%)] bg-[length:100%_4px] animate-pulse pointer-events-none" />

                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    Node_{p.id}
                  </span>
                  <div className={`h-2 w-2 rounded-full animate-ping ${p.status === 'ACTIVE' ? 'bg-[#14F195]' : 'bg-purple-500'}`} />
                </div>

                <h4 className="text-2xl font-black text-white group-hover:text-[#14F195] transition-colors uppercase italic mb-2">
                  {p.name}
                </h4>
                
                <p className="text-xs text-gray-400 font-mono mb-6 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.desc}
                </p>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-gray-600">SIGNATURE:</span>
                    <span className="text-gray-300">{p.tx}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${
                      p.status === 'ACTIVE' ? 'bg-[#14F195]/10 text-[#14F195]' : 'bg-purple-500/10 text-purple-400'
                    }`}>
                      {p.status}
                    </span>
                    
                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      className="text-[10px] bg-white text-black font-bold px-4 py-2 uppercase skew-x-[-10deg] hover:bg-[#14F195] transition-colors"
                    >
                      Inspect_Node
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Connector - Premium Wire Look */}
            {i !== projects.length - 1 && (
              <div className="flex flex-col items-center">
                <div className="w-24 h-[1px] bg-gradient-to-r from-[#14F195] via-[#9945FF] to-[#14F195] opacity-40 relative">
                  {/* Moving Light Particle on the wire */}
                  <motion.div 
                    animate={{ x: [0, 96, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[2px] w-2 h-[5px] bg-white blur-[2px]"
                  />
                </div>
                <span className="text-[8px] font-mono text-gray-700 mt-2 uppercase tracking-tighter">
                  Data_Link_{i+1}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}