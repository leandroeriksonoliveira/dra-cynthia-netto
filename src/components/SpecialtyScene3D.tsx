"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import type { Mesh } from "three";

type SpecialtySceneProps = {
  color: string;
  variant?: "sphere" | "torus";
};

function SpecialtyMesh({ color, variant = "sphere" }: SpecialtySceneProps) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.15;
      ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  if (variant === "torus") {
    return (
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
        <Torus ref={ref} args={[0.8, 0.3, 32, 64]}>
          <MeshDistortMaterial color={color} distort={0.2} speed={1.5} roughness={0.3} />
        </Torus>
      </Float>
    );
  }

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={ref} args={[0.9, 48, 48]}>
        <MeshDistortMaterial color={color} distort={0.3} speed={2} roughness={0.25} />
      </Sphere>
    </Float>
  );
}

export function SpecialtyScene3D({ color, variant = "sphere" }: SpecialtySceneProps) {
  return (
    <Canvas camera={{ position: [0, 0, 2.8], fov: 50 }} className="h-full w-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={0.8} />
      <pointLight position={[-2, -2, 2]} intensity={0.4} color={color} />
      <SpecialtyMesh color={color} variant={variant} />
    </Canvas>
  );
}
