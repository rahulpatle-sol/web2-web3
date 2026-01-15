import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send } from 'lucide-react';

export default function AIAgentCore() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'ai', text: 'Identity verified. Ask me about the Architect.' }]);

  const handleChat = () => {
    if (!input) return;
    setMessages([...messages, { role: 'user', text: input }]);
    // Yahan API call aayegi
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: 'Processing on-chain data... He is a Level 99 Dev.' }]);
    }, 1000);
    setInput('');
  };

  return (
    <>
      {/* Floating Toggle Icon */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-10 w-16 h-16 bg-[#9945FF] rounded-full flex items-center justify-center shadow-[0_0_30px_#9945FF] hover:scale-110 transition z-50"
      >
        <Bot color="white" size={32} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-10 right-10 w-80 md:w-96 h-[500px] bg-black border-2 border-[#9945FF] z-[60] flex flex-col overflow-hidden rounded-tr-3xl"
          >
            <div className="bg-[#9945FF] p-4 flex justify-between items-center text-white">
              <span className="font-black italic">ORACLE_AI_V1</span>
              <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={`p-3 rounded-lg text-sm ${m.role === 'ai' ? 'bg-[#14F195]/10 border border-[#14F195]/20 text-[#14F195]' : 'bg-[#9945FF]/10 border border-[#9945FF]/20 text-white ml-8'}`}>
                  {m.text}
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-white/10 flex gap-2">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border border-white/20 p-2 outline-none text-xs" 
                placeholder="Ask Oracle..."
              />
              <button onClick={handleChat} className="bg-[#14F195] text-black p-2"><Send size={16} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}