import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { motion } from 'framer-motion';

// Default styles for Solana button (iske bina ganda dikhta hai)
import '@solana/wallet-adapter-react-ui/styles.css';

export default function ConnectProtocol() {
  const { publicKey } = useWallet();

  return (
    <div className="flex flex-col items-end gap-2 group">
      <div className="relative">
        {/* Glow effect jab wallet connect ho */}
        {publicKey && (
          <div className="absolute -inset-1 bg-[#14F195] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        )}
        <WalletMultiButton className="!bg-black !border !border-[#14F195] !font-mono !text-xs !tracking-tighter hover:!bg-[#14F195] hover:!text-black transition-all" />
      </div>
      
      {publicKey && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-[10px] text-[#9945FF] font-mono flex items-center gap-1"
        >
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          NODE_CONNECTED: {publicKey.toString().slice(0, 4)}...{publicKey.toString().slice(-4)}
        </motion.div>
      )}
    </div>
  );
}