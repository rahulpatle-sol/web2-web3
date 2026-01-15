import React, { useState, useMemo } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters';
import { createV1, mplCore } from '@metaplex-foundation/mpl-core';
import { generateSigner } from '@metaplex-foundation/umi';
import { Zap, Loader2, CheckCircle, ExternalLink, Shield } from 'lucide-react';

export default function NFTVault() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [status, setStatus] = useState('idle'); // idle, minting, success
  const [assetId, setAssetId] = useState('');

  // Setup Metaplex Engine
  const umi = useMemo(() => {
    if (!wallet.publicKey) return null;
    return createUmi(connection.rpcEndpoint)
      .use(walletAdapterIdentity(wallet))
      .use(mplCore());
  }, [connection, wallet]);

  const handleMint = async () => {
    if (!wallet.publicKey || !umi) return alert("Pehle wallet connect karo!");
    
    setStatus('minting');
    try {
      const asset = generateSigner(umi);

      // --- CONFIGURATION ---
      const METADATA_URL = "TERA_JSON_FILE_KA_LINK_YAHAN_AAYEGA"; // JSON link upload karke yahan dalo
      
      await createV1(umi, {
        asset,
        name: 'RAHUL_DEV_ARCHITECT',
        uri: "https://ik.imagekit.io/y8vbhvt7s/metadata.json",
      }).sendAndConfirm(umi);

      setAssetId(asset.publicKey.toString());
      setStatus('success');
    } catch (error) {
      console.error("Minting Error:", error);
      alert("Error: " + error.message);
      setStatus('idle');
    }
  };

  return (
    <div className="max-w-md mx-auto relative mt-20">
      {/* Background Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#14F195] to-[#9945FF] rounded-2xl blur-xl opacity-20 animate-pulse"></div>
      
      <div className="relative bg-[#0a0a0a] border border-white/10 p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-[#14F195] font-mono text-[10px] tracking-widest">
            <Shield size={12} /> ENCRYPTED_VAULT
          </div>
          <div className="text-white/20 font-mono text-[10px]">v1.0.4</div>
        </div>

        {/* NFT Image View */}
        <div className="relative aspect-square mb-8 rounded-xl overflow-hidden border border-white/5 shadow-2xl">
          <img 
            src="https://ik.imagekit.io/y8vbhvt7s/persenal%20fun%20stuff%20/image.jpg" 
            className={`w-full h-full object-cover transition-all duration-1000 ${status === 'idle' ? 'grayscale brightness-50' : 'grayscale-0'}`}
            alt="Rahul Dev NFT"
          />
          {status === 'idle' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/40 font-black italic tracking-widest text-xs border border-white/20 px-4 py-2 bg-black/50 backdrop-blur-sm">LOCKED_ASSET</span>
            </div>
          )}
        </div>

        <div className="space-y-2 mb-8 text-center">
          <h3 className="text-2xl font-black italic text-white tracking-tighter uppercase">Rahul_Dev_Genesis</h3>
          <p className="text-[10px] font-mono text-gray-500 uppercase">Solana Mainnet_Protocol // No_Gas_Fee_Optimization</p>
        </div>

        {status === 'success' ? (
          <div className="space-y-4">
            <div className="py-4 border border-[#14F195] text-[#14F195] font-black uppercase italic bg-[#14F195]/5 text-center flex items-center justify-center gap-2">
               <CheckCircle size={16} /> TRANSACTION_CONFIRMED
            </div>
            <a 
              href={`https://solscan.io/address/${assetId}`} 
              target="_blank" 
              className="flex items-center justify-center gap-2 text-[10px] text-gray-500 hover:text-[#14F195] transition-colors font-mono"
            >
              EXPLORE_LEDGER <ExternalLink size={12} />
            </a>
          </div>
        ) : (
          <button
            onClick={handleMint}
            disabled={status === 'minting' || !wallet.publicKey}
            className="w-full py-5 bg-[#14F195] text-black font-black uppercase italic flex items-center justify-center gap-3 hover:bg-white transition-all transform active:scale-95 disabled:opacity-30 disabled:grayscale"
          >
            {status === 'minting' ? (
              <> <Loader2 className="animate-spin" size={20} /> DEPLOYING_CONTRACT... </>
            ) : (
              <> <Zap size={18} fill="currentColor" /> {wallet.publicKey ? "CLAIM_DIGITAL_IDENTITY" : "CONNECT_WALLET_FIRST"} </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}