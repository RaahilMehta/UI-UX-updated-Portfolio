import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/assets/the_night_owls_desk.glb"); // Path to GLB file
  return <primitive object={scene} scale={1} />;
}

export default function ModelViewer() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}
