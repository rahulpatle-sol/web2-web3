import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Zap, Hash, Terminal } from 'lucide-react';

export default function AIAgentCore() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'CONNECTION_SECURE. I am the Architect\'s Oracle. Analyzing your neural patterns...' }
  ]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // SMARTER LOGIC: Ye random nahi, user ke words pe kaam karega
  const getOracleResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes('who') || q.includes('architect')) return "The Architect is Rahul Patle. A Level 99 Dev building the future of Solana.";
    if (q.includes('solana') || q.includes('sol')) return "Solana is the backbone of this ecosystem. Speed: 65k TPS. Status: OPERATIONAL.";
    if (q.includes('project')) return "I see DeFi Dashboards, AI Oracles, and NFT Engines in the deployment pipeline.";
    if (q.includes('gm') || q.includes('hello')) return "GM, Builder. The sun never sets on the blockchain.";
    
    return "Analyzing data points for '" + query + "'... The Oracle suggests you keep building on-chain.";
  };

  const handleChat = () => {
    if (!input) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    // Simulated Thinking
    setTimeout(() => {
      const aiResponse = getOracleResponse(input);
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
      setLoading(false);
      setInput('');
    }, 800);
  };

  return (
    <>
      {/* Bot Icon */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 w-14 h-14 bg-[#14F195] rounded-full flex items-center justify-center shadow-[0_0_20px_#14F195] z-50 hover:scale-110 transition-transform"
      >
        <Bot color="black" size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-0 right-0 w-full md:w-[400px] h-[600px] bg-black border-l border-[#14F195]/20 z-[60] flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-[#14F195]/20 flex justify-between items-center bg-[#050505]">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-[#14F195]" />
                <span className="font-mono text-[10px] text-[#14F195] tracking-[0.2em]">ORACLE_v4.0_ONLINE</span>
              </div>
              <X className="cursor-pointer text-white hover:text-red-500" onClick={() => setIsOpen(false)} />
            </div>
            
            {/* Chat Body */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
              {messages.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: m.role === 'ai' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex flex-col ${m.role === 'ai' ? 'items-start' : 'items-end'}`}
                >
                  <div className={`p-3 font-mono text-xs leading-relaxed max-w-[80%] ${
                    m.role === 'ai' 
                    ? 'bg-[#14F195]/5 text-[#14F195] border-l-2 border-[#14F195]' 
                    : 'bg-white/5 text-white border-r-2 border-purple-500 text-right'
                  }`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {loading && <div className="text-[#14F195] font-mono text-[10px] animate-pulse">PROCESSING_QUERY...</div>}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-black border-t border-[#14F195]/10 flex gap-2">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleChat()}
                className="flex-1 bg-transparent border border-white/10 p-2 text-[#14F195] font-mono text-xs outline-none focus:border-[#14F195]/50" 
                placeholder="Query Oracle..."
              />
              <button onClick={handleChat} className="bg-[#14F195] text-black px-4"><Zap size={14} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}