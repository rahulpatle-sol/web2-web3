import { Canvas } from '@react-three/fiber';
import { ScrollControls, PerspectiveCamera, Float, Environment, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';
import { SheetProvider } from '@theatre/r3f';
import { getProject } from '@theatre/core';

const project = getProject('Portfolio');
const sheet = project.sheet('UniverseSheet');

export default function SharedCanvas({ children }) {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505]">
      <Canvas 
        shadows 
        dpr={[1, 2]} // Performance: Retina screens ke liye optimization
        gl={{ antialias: true, alpha: true }}
      >
        {/* Pages ko hum apne Lenis ke sath sync rakhte hain */}
        <ScrollControls pages={6} damping={0.2} infinite={false}> 
          <SheetProvider sheet={sheet}>
            
            <PerspectiveCamera 
              theatreKey="MainCamera" 
              makeDefault 
              position={[0, 0, 15]} 
              fov={45} // Lower FOV = More Luxury/Cinematic look
            />

            {/* Premium Lighting Setup */}
            <ambientLight intensity={0.4} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#14F195" />
            
            {/* Environment: Isse metal aur liquid objects chamkenge */}
            <Environment preset="city" />

            <Suspense fallback={null}>
              {/* Float: Tere 3D objects ko makkhan jaisa float karwayega */}
              <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {children}
              </Float>
            </Suspense>

            {/* Realistic Ground Shadows */}
            <ContactShadows 
              position={[0, -5, 0]} 
              opacity={0.4} 
              scale={20} 
              blur={2.4} 
              far={4.5} 
            />
            
            {/* Background Fog: Text ko 3D depth dene ke liye */}
            <fog attach="fog" args={['#050505', 10, 25]} />

          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </div>
  );
}