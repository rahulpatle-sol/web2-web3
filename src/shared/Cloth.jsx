import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Cloth() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    // Plane ke har vertex ko wave function se move karenge
    for (let i = 0; i < meshRef.current.geometry.attributes.position.count; i++) {
      const x = meshRef.current.geometry.attributes.position.getX(i)
      const y = meshRef.current.geometry.attributes.position.getY(i)
      
      // Ye hai "Cloth Stretch" effect ka math
      const z = Math.sin(x * 2 + time) * 0.2 + Math.cos(y * 2 + time) * 0.2
      meshRef.current.geometry.attributes.position.setZ(i, z)
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[10, 10, 32, 32]} />
      <meshStandardMaterial color="#222" wireframe side={THREE.DoubleSide} />
    </mesh>
  )
}