import { useEffect, useState } from 'react';

const logs = [
  "INITIALIZING SHADOW_PROTOCOL...",
  "CONNECTING TO SOLANA MAINNET-BETA...",
  "ENCRYPTING RSA_4096 BIT KEYS...",
  "SCANNING FOR DEGEN_VIBES...",
  "BYPASSING CENTRALIZED GATEWAYS...",
  "ACCESS GRANTED: WELCOME ADMIN.",
];

export default function TerminalConsole() {
  const [visibleLogs, setVisibleLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLogs(prev => [...prev, logs[Math.floor(Math.random() * logs.length)]].slice(-8));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/80 border border-[#14F195]/30 p-4 font-mono text-[10px] md:text-xs h-64 overflow-hidden shadow-[0_0_20px_rgba(20,241,149,0.1)]">
      <div className="flex gap-2 mb-2 border-b border-[#14F195]/20 pb-1 text-[#14F195]/50">
        <span>●</span><span>●</span><span>●</span>
        <span className="ml-auto">SYSTEM_LOGS</span>
      </div>
      {visibleLogs.map((log, i) => (
        <p key={i} className="mb-1">
          <span className="text-[#9945FF] mr-2">[{new Date().toLocaleTimeString()}]</span>
          {log}
        </p>
      ))}
      <div className="animate-pulse inline-block w-2 h-4 bg-[#14F195] ml-1"></div>
    </div>
  );
}