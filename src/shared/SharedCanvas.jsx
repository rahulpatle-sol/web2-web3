import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Suspense } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import {SheetProvider} from '@theatre/r3f';
import { getProject } from '@theatre/core';

// Project setup
const project = getProject('Portfolio');
const sheet = project.sheet('UniverseSheet');

export default function SharedCanvas({ children }) {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <ScrollControls pages={5} damping={0.3}> 
          <SheetProvider sheet={sheet}>
            {/* Theatre.js will control this camera */}
            <PerspectiveCamera theatreKey="MainCamera" makeDefault position={[0, 0, 10]} fov={75} />
            
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            
            <Suspense fallback={null}>
              {children}
            </Suspense>
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </div>
  );
}