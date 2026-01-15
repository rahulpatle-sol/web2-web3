import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Transaction, SystemProgram, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useState } from 'react';

export default function VaultSocials() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [unlocked, setUnlocked] = useState(false);

  const MY_WALLET = new PublicKey("YOUR_SOLANA_PUBLIC_KEY_HERE");

  const unlockVault = async () => {
    if (!publicKey) return alert("Please connect your wallet first.");
    
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: MY_WALLET,
          lamports: 0.1 * LAMPORTS_PER_SOL,
        })
      );
      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');
      setUnlocked(true);
    } catch (e) {
      alert("Verification failed. Insufficient SOL or user rejected.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-12 border-2 border-dashed border-[#14F195]/30 flex flex-col items-center">
      {!unlocked ? (
        <div className="text-center">
          <h3 className="text-5xl font-black mb-6 italic skew-x-[-10deg]">VAULT_LOCKED</h3>
          <p className="text-gray-400 font-mono mb-8 max-w-md">Accessing the architect's coordinates requires 0.1 SOL Devnet protocol fee.</p>
          <button 
            onClick={unlockVault}
            className="bg-[#14F195] text-black px-12 py-4 font-black uppercase hover:bg-white transition-all shadow-[0_0_30px_rgba(20,241,149,0.3)]"
          >
            Authorize_Transfer
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full animate-pulse">
          {['Twitter', 'GitHub', 'LinkedIn', 'Discord'].map(s => (
            <a key={s} href="#" className="p-6 border border-[#14F195] text-center font-black hover:bg-[#14F195] hover:text-black uppercase italic">
              {s}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}