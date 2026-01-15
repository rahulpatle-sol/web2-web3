import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function HeroWeb3() {
  return (
    <div className="h-screen w-full relative bg-[#050505] overflow-hidden">
      {/* 1. Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} color="#14F195" intensity={1.5} />
          <pointLight position={[-10, -10, -10]} color="#9945FF" intensity={1} />
          
          {/* Solana Moving Object */}
          <Float speed={2} rotationIntensity={2} floatIntensity={2}>
            <mesh scale={1.2}>
              <torusKnotGeometry args={[1, 0.3, 256, 32]} />
              <MeshDistortMaterial
                color="#14F195"
                speed={3}
                distort={0.4}
                radius={1}
                emissive="#14F195"
                emissiveIntensity={0.5}
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
          </Float>

          {/* Background Particles/Stars */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* 2. Overlapping UI Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        {/* Neon Glow Text */}
        <h1 className="text-8xl md:text-[12rem] font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#14F195] to-[#9945FF] drop-shadow-[0_0_35px_rgba(20,241,149,0.5)] leading-none select-none">
          RAHUL <br /> PATLE
        </h1>
        
        <p className="mt-4 font-mono text-[#14F195] tracking-[0.5em] uppercase text-sm animate-pulse">
          // Architecting the Solana Ecosystem
        </p>

        {/* Buttons (Pointer Events On karni padegi tabhi click hoga) */}
        <div className="mt-12 flex gap-4 pointer-events-auto">
          <WalletMultiButton className="!bg-[#14F195] !text-black !font-black !rounded-none hover:!bg-white transition-all shadow-[0_0_20px_rgba(20,241,149,0.3)]" />
          
          <button className="border border-[#9945FF] text-[#9945FF] px-8 py-3 font-bold uppercase hover:bg-[#9945FF] hover:text-white transition-all">
            Enter_Vault
          </button>
        </div>
      </div>

      {/* 3. Bottom Decorative Elements */}
      <div className="absolute bottom-10 left-10 z-20 pointer-events-none hidden md:block">
        <div className="font-mono text-[10px] text-gray-500 space-y-1">
          <p>NETWORK_STATUS: DEVNET_CONNECTED</p>
          <p>LATENCY: 12MS</p>
          <p>PROTOCOL: SPL_V2</p>
        </div>
      </div>
    </div>
  );
}