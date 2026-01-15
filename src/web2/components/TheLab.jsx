import Editor from "@monaco-editor/react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { runCode } from "../../hooks/useCompiler";

const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "JS", color: "#f7df1e" },
  { id: "rust", name: "Rust", icon: "RS", color: "#dea584" },
  { id: "python", name: "Python", icon: "PY", color: "#3776ab" },
  { id: "go", name: "Golang", icon: "GO", color: "#00add8" },
  { id: "cpp", name: "C++", icon: "C+", color: "#00599c" }
];

export default function TheLab() {
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [code, setCode] = useState("// Welcome to the Lab, Rahul...");
  const [output, setOutput] = useState("System Standby...");
  const [isCompiling, setIsCompiling] = useState(false);

  const handleRun = async () => {
    setIsCompiling(true);
    setOutput(">> INITIALIZING_COMPILER...\n>> LINKING_LIBRARIES...\n>> EXECUTING...");
    try {
      const res = await runCode(selectedLang.id, code);
      setOutput(res);
    } catch (err) {
      setOutput(">> ERROR: Compilation failed.");
    } finally {
      setIsCompiling(false);
    }
  };

  return (
    <section className="min-h-screen w-full bg-[#050505] p-6 md:p-12 flex flex-col relative overflow-hidden">
      
      {/* 1. TOP HEADER & LANG PICKER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 z-10 gap-6">
        <div>
          <h2 className="text-white text-5xl font-black italic tracking-tighter uppercase">
            THE_<span className="text-[#14F195]">LAB</span>
          </h2>
          <p className="font-mono text-[10px] text-gray-500 mt-2 uppercase tracking-[0.3em]">Experimental_Execution_Environment_v2.0</p>
        </div>

        <div className="flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-xl">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setSelectedLang(lang)}
              className={`px-4 py-2 rounded-full font-mono text-[10px] uppercase transition-all duration-500 relative ${
                selectedLang.id === lang.id ? "text-black" : "text-gray-400 hover:text-white"
              }`}
            >
              {selectedLang.id === lang.id && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute inset-0 bg-[#14F195] rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {lang.name}
            </button>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRun}
          className="bg-white text-black px-10 py-3 font-black text-xs uppercase italic rounded-none hover:bg-[#14F195] transition-colors shadow-[0_0_20px_rgba(20,241,149,0.2)]"
        >
          {isCompiling ? "EXECUTING..." : "SHIP_CODE_"}
        </motion.button>
      </div>

      {/* 2. MAIN EDITOR GRID */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 z-10">
        
        {/* Editor Side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-2xl relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#14F195] to-transparent opacity-30" />
          <Editor 
            height="70vh" 
            theme="vs-dark" 
            language={selectedLang.id} 
            value={code} 
            onChange={setCode}
            options={{
              fontSize: 14,
              fontFamily: "'Fira Code', monospace",
              minimap: { enabled: false },
              padding: { top: 20 },
              smoothScrolling: true,
              cursorBlinking: "expand"
            }}
          />
        </motion.div>

        {/* Console Side */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#050505] p-8 font-mono text-sm rounded-2xl border border-white/5 relative overflow-hidden flex flex-col"
        >
          <div className="flex justify-between items-center mb-6 opacity-30">
            <span className="text-[10px] tracking-widest uppercase italic">Output_Log</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
          </div>
          
          <div className="flex-1 overflow-auto text-[#14F195] whitespace-pre-wrap leading-relaxed custom-scrollbar">
            {output}
          </div>

          {/* Decorative Terminal Overlay */}
          <div className="absolute inset-0 pointer-events-none border-[10px] border-white/[0.02]" />
        </motion.div>
      </div>

      {/* Background Grid Decoration */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
    </section>
  );
}