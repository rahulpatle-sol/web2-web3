import Editor from "@monaco-editor/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LANGUAGES = [
  { id: "html", name: "HTML/CSS", icon: "🌐" },
  { id: "javascript", name: "JS", icon: "JS" },
  { id: "rust", name: "Rust", icon: "RS" },
  { id: "python", name: "Python", icon: "PY" }
];

const BOILERPLATE = {
  html: `<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { background: #111; color: #14F195; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }\n  .box { border: 2px solid #14F195; padding: 30px; border-radius: 12px; box-shadow: 0 0 30px rgba(20,241,149,0.2); text-align: center; }\n</style>\n</head>\n<body>\n  <div class="box">\n    <h1>RAHUL_LAB_v2</h1>\n    <p>Live Code Execution Active</p>\n  </div>\n</body>\n</html>`,
  javascript: `console.log(">> NODE_INITIALIZED");\nconst user = "RAHUL";\nconsole.log(\`HELLO \${user}, SYSTEM IS STABLE\`);`,
  rust: `fn main() {\n    println!(">> DEPLOYING_CONTRACT_v1");\n    println!(">> NETWORK: SOLANA_MAINNET");\n}`,
  python: `print(">> INITIALIZING_AI_MODEL...")\nprint(">> ACCURACY: 99.8%")`
};

export default function TheLab() {
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [code, setCode] = useState(BOILERPLATE.html);
  const [output, setOutput] = useState(">> Ready for uplink...");
  const [isCompiling, setIsCompiling] = useState(false);

  // Sync boilerplate when language changes
  useEffect(() => {
    setCode(BOILERPLATE[selectedLang.id]);
    setOutput(`>> Environment switched to ${selectedLang.name}`);
  }, [selectedLang]);

  const handleRun = () => {
    setIsCompiling(true);
    if (selectedLang.id === 'javascript') {
      try {
        let logs = [];
        const runner = new Function("console", `
          const originalLog = console.log;
          console.log = (...args) => logs.push(args.join(" "));
          ${code}
          console.log = originalLog;
        `);
        runner({ log: (msg) => logs.push(msg) });
        setOutput(logs.length > 0 ? logs.map(l => `> ${l}`).join("\n") : ">> Code Executed (No Log)");
      } catch (err) {
        setOutput(`>> RUNTIME_ERROR: ${err.message}`);
      }
    } else {
      setOutput(`>> Executing ${selectedLang.name}...\n>> Successfully Deployed to Node_01.`);
    }
    setTimeout(() => setIsCompiling(false), 800);
  };

  return (
    <section className="min-h-screen w-full bg-[#050505] p-4 md:p-10 flex flex-col relative overflow-hidden">
      
      {/* 1. HEADER (Responsive Stack) */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6 z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#14F195]/10 border border-[#14F195]/20 flex items-center justify-center rounded-xl">
            <span className="text-[#14F195] font-bold text-xl">/</span>
          </div>
          <div>
            <h2 className="text-white text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">THE_<span className="text-[#14F195]">LAB</span></h2>
            <p className="font-mono text-[8px] md:text-[10px] text-gray-500 mt-1 uppercase tracking-[0.2em]">Experimental_v2.0_Compiler</p>
          </div>
        </div>

        {/* Tab Switcher - Scrollable on mobile */}
        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-3xl overflow-x-auto w-full lg:w-auto no-scrollbar">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setSelectedLang(lang)}
              className={`px-5 py-2 rounded-lg font-mono text-[9px] md:text-[10px] uppercase transition-all whitespace-nowrap relative ${
                selectedLang.id === lang.id ? "text-black font-bold" : "text-gray-400 hover:text-white"
              }`}
            >
              {selectedLang.id === lang.id && (
                <motion.div layoutId="labTab" className="absolute inset-0 bg-[#14F195] rounded-lg -z-10" />
              )}
              {lang.name}
            </button>
          ))}
        </div>

        <button 
          onClick={handleRun}
          className="w-full lg:w-auto bg-white text-black px-10 py-3 font-black text-xs uppercase italic active:scale-95 transition-all hover:bg-[#14F195]"
        >
          {isCompiling ? "EXECUTING..." : "RUN_SYSTEM_"}
        </button>
      </div>

      {/* 2. MAIN GRID (Responsive Layout) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 z-10 min-h-0">
        
        {/* Editor Side (8 Columns on Desktop, Full on Mobile) */}
        <div className="lg:col-span-8 flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] h-[400px] lg:h-[70vh] shadow-2xl">
          <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: main.{selectedLang.id}</span>
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500/20" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/20" />
              <span className="w-2 h-2 rounded-full bg-green-500/20" />
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <Editor 
              height="100%" 
              theme="vs-dark" 
              language={selectedLang.id === 'html' ? 'html' : 'javascript'} 
              value={code} 
              onChange={setCode}
              options={{
                fontSize: 14,
                fontFamily: "'Fira Code', monospace",
                minimap: { enabled: false },
                padding: { top: 20 },
                lineNumbers: "on",
                cursorBlinking: "smooth",
                smoothScrolling: true,
              }}
            />
          </div>
        </div>

        {/* Output/Preview Side (4 Columns on Desktop) */}
        <div className="lg:col-span-4 flex flex-col h-[300px] lg:h-[70vh] gap-4">
          <div className="flex-1 bg-[#050505] rounded-2xl border border-white/10 overflow-hidden flex flex-col relative group">
            <div className="bg-white/5 px-4 py-2 border-b border-white/10 text-[9px] font-mono text-gray-400 flex justify-between uppercase">
              <span>{selectedLang.id === 'html' ? 'Browser_Live_Preview' : 'System_Console'}</span>
              <div className="w-2 h-2 rounded-full bg-[#14F195] animate-pulse" />
            </div>

            <div className="flex-1 p-4 overflow-auto">
              {selectedLang.id === 'html' ? (
                /* --- THE HTML PREVIEW --- */
                <iframe 
                  srcDoc={code} 
                  className="w-full h-full bg-white rounded-lg border-none shadow-inner" 
                  title="live-preview" 
                />
              ) : (
                /* --- THE CONSOLE OUTPUT --- */
                <div className="font-mono text-xs text-[#14F195] whitespace-pre-wrap leading-relaxed animate-in fade-in duration-500">
                  {output}
                </div>
              )}
            </div>
          </div>

          {/* Mini Status Box (Only visible on Desktop or large screens) */}
          <div className="hidden lg:flex flex-col justify-center p-6 border border-[#14F195]/20 bg-[#14F195]/5 rounded-2xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-gray-500 uppercase font-mono">Process_Status:</span>
              <span className="text-[10px] text-[#14F195] font-mono italic">ACTIVE</span>
            </div>
            <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
               <motion.div initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ repeat: Infinity, duration: 2 }} className="h-full w-1/3 bg-[#14F195]" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
}