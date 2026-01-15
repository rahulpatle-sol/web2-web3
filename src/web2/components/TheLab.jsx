import { editor } from "monaco-editor";
import { useState } from "react";
import { runCode } from "../../hooks/useCompiler";

export default function TheLab() {
  const [code, setCode] = useState("// Type something crazy...");
  const [output, setOutput] = useState("Console is empty.");

  const handleRun = async () => {
    setOutput("Compiling...");
    const res = await runCode("javascript", code);
    setOutput(res);
  };

  return (
    <section className="h-screen w-screen flex flex-col p-10 bg-[#0a0a0a]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-clash text-4xl uppercase">The Coding Lab</h2>
        <button onClick={handleRun} className="bg-solana-green text-black px-8 py-2 font-black rounded-full hover:scale-110 transition">SHIP IT</button>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="rounded-xl overflow-hidden border border-white/10">
          <Editor height="100%" theme="vs-dark" defaultLanguage="javascript" value={code} onChange={setCode} />
        </div>
        <div className="bg-black p-6 font-mono text-solana-green rounded-xl border border-white/10 overflow-auto whitespace-pre-wrap">
          <span className="text-gray-500">{"// Output:"}</span> <br />
          {output}
        </div>
      </div>
    </section>
  );
}