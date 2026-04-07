"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Smooth, slow rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        {/* A TorusKnot is a classic mathematical shape that looks very "computer science" */}
        <torusKnotGeometry args={[1.8, 0.6, 256, 64]} />
        <meshPhysicalMaterial 
          color="#0ea5e9"       // Bright blue base
          metalness={0.8}       // Highly reflective
          roughness={0.2}       // Very smooth
          clearcoat={1}         // Glassy outer layer
          clearcoatRoughness={0.1}
          emissive="#005999"    // ACM Deep Blue glow
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
        
        <AbstractShape />
        
        {/* Environment map gives the metal material realistic reflections */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}