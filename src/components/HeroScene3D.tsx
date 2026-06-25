"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import type { Mesh } from "three";

function AnimatedSphere({ color }: { color: string }) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={ref} args={[1, 64, 64]} scale={1.2}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.35}
          speed={2}
          roughness={0.2}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  );
}

export function HeroScene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }} className="h-full w-full bg-gradient-to-br from-rose-light to-white">
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <AnimatedSphere color="#e8b4b8" />
    </Canvas>
  );
}
