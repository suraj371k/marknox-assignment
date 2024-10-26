// Background3D.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

function RotatingSphere({ position, color }) {
  const meshRef = useRef();

  // Rotation animation
  useFrame(() => {
    meshRef.current.rotation.y += 0.002;
    meshRef.current.rotation.x += 0.001;
  });

  return (
    <Sphere args={[1, 32, 32]} position={position} ref={meshRef}>
      <meshStandardMaterial color={color} wireframe />
    </Sphere>
  );
}

export default function Background3D() {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full z-0">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Add multiple rotating spheres */}
      <RotatingSphere position={[-3, 1, -5]} color="#ff4d00" />
      <RotatingSphere position={[3, -2, -7]} color="#d00000" />
      <RotatingSphere position={[0, 4, -10]} color="#bfbcbc" />

      {/* Optional orbit controls */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
