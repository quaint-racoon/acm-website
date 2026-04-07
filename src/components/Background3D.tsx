// src/components/Background3D.tsx
"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function GlowingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Rotate the shape smoothly over time
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef}>
        {/* Icosahedron gives that sharp, techy geometric look */}
        <icosahedronGeometry args={[2.5, 0]} />
        <meshStandardMaterial
          color="#3b82f6"       // Base blue
          emissive="#8b5cf6"    // Purple neon glow
          emissiveIntensity={2}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
}

export default function Background3D() {
  return (
    // pointer-events-none ensures it doesn't block you from clicking buttons
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        
        <GlowingGeometry />
        
        {/* Adds that floating tech-dust aesthetic */}
        <Sparkles count={300} scale={12} size={1.5} speed={0.4} opacity={0.6} color="#60a5fa" />
      </Canvas>
    </div>
  );
}