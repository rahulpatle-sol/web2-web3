import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Transaction, SystemProgram, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useState, useMemo } from 'react';
import { Twitter, Github, Linkedin, MessageSquare, Lock, Unlock } from 'lucide-react';

export default function VaultSocials() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [unlocked, setUnlocked] = useState(false);

  // Tera Real Devnet Wallet Address
  const MY_WALLET = useMemo(() => {
    try {
      return new PublicKey("8WkKMitZL7hmrtMJwggG3N8f8xRkRxyzENuEdbsKjkbM"); 
    } catch (e) {
      return null;
    }
  }, []);

  // Tere Social Links ka Data
  const SOCIAL_LINKS = [
    { name: 'Twitter', url: 'https://twitter.com/patlerahul239', icon: <Twitter size={20} /> },
    { name: 'GitHub', url: 'https://github.com/rahulpatle-sol', icon: <Github size={20} /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rahul-patle-sol/', icon: <Linkedin size={20} /> },
    { name: 'Discord', url: 'https://discord.com/users/rahulpatle_sol', icon: <MessageSquare size={20} /> },
  ];

  const unlockVault = async () => {
    if (!publicKey) return alert("Hacker Alert: Connect your wallet first!");
    
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: MY_WALLET,
          lamports: 0.01 * LAMPORTS_PER_SOL, 
        })
      );
      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');
      setUnlocked(true);
    } catch (e) {
      console.error(e);
      alert("Verification Failed: Transaction was rejected.");
    }
  };

  if (!MY_WALLET) return <div className="text-red-500 font-mono p-4 bg-red-500/10 border border-red-500/20 rounded">CRITICAL_ERROR: RECIPIENT_WALLET_INVALID</div>;

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-1 md:p-12 border border-white/10 bg-[#0a0a0a] overflow-hidden group">
          
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#14F195]/5 blur-3xl -z-10" />

          {!unlocked ? (
            <div className="text-center py-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/5 rounded-full border border-white/10 animate-pulse text-[#14F195]">
                  <Lock size={40} />
                </div>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-black mb-4 italic tracking-tighter text-white uppercase">
                COORDINATES_<span className="text-[#14F195]">LOCKED</span>
              </h3>
              
              <p className="text-gray-500 font-mono mb-10 max-w-sm mx-auto text-xs uppercase tracking-widest leading-relaxed">
                Unlock the architect's secure communication channels via protocol transfer.
                <br />
                <span className="text-white/40 mt-2 block">Fee: 0.01 SOL (Devnet)</span>
              </p>

              <button 
                onClick={unlockVault}
                className="group relative bg-[#14F195] text-black px-16 py-5 font-black uppercase italic tracking-tighter overflow-hidden transition-all hover:pr-20"
              >
                <span className="relative z-10">Authorize_Access_</span>
                <div className="absolute top-0 right-0 h-full w-0 bg-white group-hover:w-12 transition-all flex items-center justify-center text-black">
                   <Unlock size={18} />
                </div>
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in zoom-in duration-700">
              <div className="text-center mb-12">
                 <span className="text-[#14F195] font-mono text-[10px] tracking-[0.5em] uppercase">Security_Cleared</span>
                 <h3 className="text-white text-5xl font-black italic tracking-tighter mt-2">ACCESS_GRANTED</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {SOCIAL_LINKS.map(link => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 p-8 border border-white/5 bg-white/[0.02] hover:bg-[#14F195] hover:text-black text-white/60 hover:border-[#14F195] transition-all duration-500 group/link"
                  >
                    <div className="group-hover/link:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}