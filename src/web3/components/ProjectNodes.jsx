import { motion } from 'framer-motion';

const projects = [
  { id: '0x1A', name: 'DeFi Dashboard', status: 'CONFIRMED', tx: 'sol...4f2' },
  { id: '0x2B', name: 'NFT Market Engine', status: 'MINED', tx: 'sol...9a1' },
  { id: '0x3C', name: 'AI Oracle Protocol', status: 'ACTIVE', tx: 'sol...e5e' },
];

export default function ProjectNodes() {
  return (
    <section className="py-20 overflow-x-auto scrollbar-hide">
      <div className="flex gap-10 px-10 items-center">
        {projects.map((p, i) => (
          <div key={p.id} className="flex items-center gap-10 shrink-0">
            <motion.div 
              whileHover={{ scale: 1.05, borderColor: '#14F195' }}
              className="w-72 p-6 border-2 border-[#14F195]/20 bg-[#0a0a0a] rounded-sm relative"
            >
              <div className="absolute -top-3 -left-3 bg-[#14F195] text-black px-2 py-1 text-[10px] font-black italic">
                BLOCK_{p.id}
              </div>
              <h4 className="text-xl font-black mt-4 uppercase italic">{p.name}</h4>
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-gray-500 font-mono">HASH: {p.tx}</p>
                  <p className="text-[10px] text-[#14F195] font-mono font-bold tracking-widest">{p.status}</p>
                </div>
                <button className="text-[10px] border border-white/20 px-3 py-1 hover:bg-white hover:text-black uppercase">View_SRC</button>
              </div>
            </motion.div>
            
            {/* Connection Wire (Chain link) */}
            {i !== projects.length - 1 && (
              <div className="w-20 h-[2px] bg-gradient-to-r from-[#14F195] to-[#9945FF] opacity-30"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}