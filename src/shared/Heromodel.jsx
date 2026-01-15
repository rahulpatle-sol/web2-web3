import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, MeshReflectorMaterial, Cylinder } from '@react-three/drei';
import { useUniverse } from '../store/useUniverse';

export default function HeroModel() {
  const coinRef = useRef();
  const { mode } = useUniverse();
  const isWeb3 = mode === 'web3';

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Constant rotation like a spinning coin
    coinRef.current.rotation.y = t * 0.8;
    // Slight tilt for dynamic look
    coinRef.current.rotation.z = Math.sin(t * 0.5) * 0.2;
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={coinRef}>
        {/* THE COIN BODY */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.2, 1.2, 0.15, 64]} />
          <meshStandardMaterial 
            color={isWeb3 ? "#14F195" : "#3b82f6"} 
            metalness={0.9} 
            roughness={0.1}
            emissive={isWeb3 ? "#14F195" : "#000000"}
            emissiveIntensity={isWeb3 ? 0.2 : 0}
          />
        </mesh>

        {/* COIN FACE (FRONT) - Solana Symbol Style */}
        <group position={[0, 0, 0.08]}>
          {/* Top Bar */}
          <mesh position={[0, 0.3, 0]}>
            <boxGeometry args={[0.8, 0.15, 0.02]} />
            <meshStandardMaterial color={isWeb3 ? "#9945FF" : "white"} emissive="#9945FF" emissiveIntensity={1} />
          </mesh>
          {/* Middle Bar */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.8, 0.15, 0.02]} />
            <meshStandardMaterial color={isWeb3 ? "#14F195" : "white"} emissive="#14F195" emissiveIntensity={1} />
          </mesh>
          {/* Bottom Bar */}
          <mesh position={[0, -0.3, 0]}>
            <boxGeometry args={[0.8, 0.15, 0.02]} />
            <meshStandardMaterial color={isWeb3 ? "#9945FF" : "white"} emissive="#9945FF" emissiveIntensity={1} />
          </mesh>
        </group>

        {/* GLOW RING AROUND COIN */}
        {isWeb3 && (
          <mesh>
            <torusGeometry args={[1.3, 0.01, 16, 100]} />
            <meshStandardMaterial color="#14F195" emissive="#14F195" emissiveIntensity={5} />
          </mesh>
        )}
      </group>

      {/* LIGHTING FOR METALLIC LOOK */}
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
    </Float>
  );
}