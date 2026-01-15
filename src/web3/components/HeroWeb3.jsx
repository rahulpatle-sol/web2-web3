import { Canvas } from '@react-three/fiber';
import { 
  Float, 
  MeshDistortMaterial, 
  PerspectiveCamera, 
  OrbitControls, 
  Stars, 
  MeshWobbleMaterial,
  Text,
  Environment
} from '@react-three/drei';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function HeroWeb3() {
  return (
    <div className="h-screen w-full relative bg-[#010101] overflow-hidden">
      
      {/* 1. Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas shadow={true}>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />
          
          {/* Solana Lighting Palette */}
          <ambientLight intensity={0.1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} color="#14F195" intensity={2} />
          <pointLight position={[-10, -5, -10]} color="#9945FF" intensity={1} />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

          {/* Core Solana Mesh - Wobbling Distorted Sphere */}
          <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <mesh scale={1.5}>
              <sphereGeometry args={[1, 64, 64]} />
              <MeshDistortMaterial
                color="#14F195"
                speed={4}
                distort={0.3}
                radius={1}
                emissive="#14F195"
                emissiveIntensity={0.2}
                metalness={1}
                roughness={0}
              />
            </mesh>
            
            {/* Outer Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[2.2, 0.02, 16, 100]} />
              <meshStandardMaterial color="#9945FF" emissive="#9945FF" emissiveIntensity={2} />
            </mesh>
          </Float>

          {/* Interactive Controls */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
          <Environment preset="night" />
        </Canvas>
      </div>

      {/* 2. Overlapping UI Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none select-none">
        
        {/* Glow Background for Text */}
        <div className="absolute w-[500px] h-[500px] bg-[#14F195] rounded-full blur-[180px] opacity-10 animate-pulse" />

        <h1 className="text-[10vw] font-black italic tracking-tighter text-white leading-none flex flex-col items-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14F195] to-[#9945FF] drop-shadow-[0_0_20px_rgba(20,241,149,0.4)]">
            RAHUL
          </span>
          <span className="mt-[-2vw] text-white border-b-4 border-[#9945FF]">PATLE</span>
        </h1>
        
        <div className="mt-8 flex flex-col items-center gap-2">
            <p className="font-mono text-[#14F195] tracking-[0.6em] text-[10px] md:text-xs bg-black/50 px-4 py-1 border border-[#14F195]/20 backdrop-blur-sm uppercase">
               SYSTEM_STATUS: HIGH_PERFORMANCE_NODE
            </p>
            <div className="w-1 h-12 bg-gradient-to-b from-[#14F195] to-transparent opacity-50" />
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col md:flex-row gap-6 pointer-events-auto items-center">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#14F195] to-[#9945FF] blur opacity-30 group-hover:opacity-100 transition duration-500" />
            <WalletMultiButton className="!bg-black !text-[#14F195] !border !border-[#14F195]/50 !rounded-none !h-14 !px-10 !font-mono !text-sm uppercase !transition-all hover:!scale-105 active:!scale-95" />
          </div>
          
          <button className="h-14 px-10 border border-white/20 text-white font-mono text-sm uppercase hover:bg-white hover:text-black transition-all bg-white/5 backdrop-blur-md">
            Execute_Swap
          </button>
        </div>
      </div>

      {/* 3. Bottom HUD (Heads Up Display) */}
      <div className="absolute bottom-10 left-10 right-10 z-20 pointer-events-none flex justify-between items-end border-t border-white/10 pt-4">
        <div className="font-mono text-[9px] text-[#14F195]/60 space-y-1 uppercase tracking-tighter">
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#14F195] rounded-full animate-ping" />
            Network: Mainnet_Beta
          </p>
          <p>TPS: 2,491 / 65,000</p>
          <p>Block_Height: 284,910,231</p>
        </div>

        <div className="text-right font-mono text-[9px] text-white/40 uppercase">
          <p>© 2026 ARCHITECT_OS</p>
          <p>Built_on_Rust</p>
        </div>
      </div>

      {/* Glass Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
    </div>
  );
}