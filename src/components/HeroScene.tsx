"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as React from "react";
import * as THREE from "three";

function Orb() {
  const meshRef = React.useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!meshRef.current) return;
    meshRef.current.rotation.x = t * 0.25;
    meshRef.current.rotation.y = t * 0.4;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.7} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.25, 2]} />
        <meshStandardMaterial
          color={"#ff5a1f"}
          metalness={0.35}
          roughness={0.15}
          emissive={"#2563eb"}
          emissiveIntensity={0.22}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 2, 6]} intensity={1.15} />
        <pointLight position={[-4, -2, 2]} intensity={0.65} />
        <Orb />
      </Canvas>
    </div>
  );
}

