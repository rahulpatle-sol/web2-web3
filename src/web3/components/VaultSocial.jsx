import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Transaction, SystemProgram, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useState, useMemo } from 'react';

export default function VaultSocials() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [unlocked, setUnlocked] = useState(false);

  // --- FIX: Address ko memoize kiya aur try-catch mein dala ---
  const MY_WALLET = useMemo(() => {
    try {
      // Yahan apna REAL Devnet address dalo. Agar khali chhodna hai toh valid dummy dalo.
      // Maine ek valid dummy address dala hai niche:
      return new PublicKey("8WkKMitZL7hmrtMJwggG3N8f8xRkRxyzENuEdbsKjkbM"); 

    } catch (e) {
      console.error("Invalid Public Key! Please check your MY_WALLET string.");
      return null;
    }
  }, []);

  const unlockVault = async () => {
    if (!publicKey) return alert("Please connect your wallet first.");
    if (!MY_WALLET) return alert("Dev error: Recipient address is invalid.");
    
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: MY_WALLET,
          lamports: 0.01 * LAMPORTS_PER_SOL, // Testing ke liye 0.01 rakha hai
        })
      );
      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');
      setUnlocked(true);
    } catch (e) {
      console.error(e);
      alert("Transfer failed or rejected.");
    }
  };

  if (!MY_WALLET) return <div className="text-red-500 font-mono">CONFIG_ERROR: INVALID_WALLET_ADDRESS</div>;

  return (
    <div className="max-w-4xl mx-auto p-12 border-2 border-dashed border-[#14F195]/30 flex flex-col items-center bg-black/50 backdrop-blur-md">
      {!unlocked ? (
        <div className="text-center">
          <h3 className="text-5xl font-black mb-6 italic tracking-tighter text-white">VAULT_LOCKED</h3>
          <p className="text-gray-400 font-mono mb-8 max-w-md mx-auto">
            Accessing the architect's coordinates requires a 0.01 SOL protocol fee.
          </p>
          <button 
            onClick={unlockVault}
            className="bg-[#14F195] text-black px-12 py-4 font-black uppercase hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(20,241,149,0.3)] active:scale-95"
          >
            Authorize_Transfer
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {['Twitter', 'GitHub', 'LinkedIn', 'Discord'].map(s => (
            <a 
              key={s} 
              href="#" 
              className="p-6 border border-[#14F195] text-[#14F195] text-center font-black hover:bg-[#14F195] hover:text-black uppercase italic transition-all duration-300"
            >
              {s}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}