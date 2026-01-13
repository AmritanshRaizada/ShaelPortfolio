"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { Suspense } from "react";

function Shapes() {
  return (
    <>
      <Environment preset="city" />
      
      {/* Large Purple Blob */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[-2, 1, -2]} scale={1.2}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial 
            color="#581c87" 
            envMapIntensity={1} 
            clearcoat={1} 
            clearcoatRoughness={0.1}
            metalness={0.1}
            distort={0.4}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Torus Knot - Glossy */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1}>
        <mesh position={[3, -1, -3]} scale={0.8}>
          <torusKnotGeometry args={[1, 0.3, 128, 16]} />
          <meshPhysicalMaterial 
            color="#4c1d95" 
            roughness={0.2} 
            metalness={0.5} 
            clearcoat={1}
            envMapIntensity={1.5}
          />
        </mesh>
      </Float>

      {/* Floating Capsule */}
      <Float speed={1} rotationIntensity={2} floatIntensity={0.5}>
        <mesh position={[-3, -2, -4]} scale={0.6}>
          <capsuleGeometry args={[1, 2, 8, 16]} />
          <meshStandardMaterial 
            color="#3b0764" 
            roughness={0.3} 
            metalness={0.8} 
          />
        </mesh>
      </Float>
       
       {/* Small accent sphere */}
       <Float speed={3} rotationIntensity={1.2} floatIntensity={1.2}>
        <mesh position={[2, 2, -5]} scale={0.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial 
            color="#7e22ce" 
            speed={4}
            distort={0.6}
            radius={1}
            roughness={0.1}
          />
        </mesh>
      </Float>

      <ambientLight intensity={0.5} />
    </>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Shapes />
        </Suspense>
      </Canvas>
    </div>
  );
}
