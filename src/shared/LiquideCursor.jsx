import React, { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function LiquidCursor() {
  const mesh = useRef()
  const { viewport } = useThree()
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uColor: { value: new THREE.Color("#14F195") }
  }), [])

  useFrame((state) => {
    const { x, y } = state.mouse
    // Smooth transition for liquid feel
    uniforms.uMouse.value.x += (x * viewport.width / 2 - uniforms.uMouse.value.x) * 0.1
    uniforms.uMouse.value.y += (y * viewport.height / 2 - uniforms.uMouse.value.y) * 0.1
    uniforms.uTime.value = state.clock.getElapsedTime()
  })

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[viewport.width, viewport.height, 32, 32]} />
      <shaderMaterial
        transparent
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec2 uMouse;
          uniform vec3 uColor;
          varying vec2 vUv;
          void main() {
            float dist = distance(vUv * vec2(20.0, 10.0), (uMouse.xy + vec2(10.0, 5.0)));
            float strength = 0.05 / dist;
            gl_FragColor = vec4(uColor, strength * 0.5);
          }
        `}
      />
    </mesh>
  )
}