import React, { Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

const Model = ({ url, mousePosition }) => {
  const gltf = useLoader(GLTFLoader, url);
  
  // Use the frame hook to update the position of the model
  useFrame(() => {
    if (gltf.scene) {
      gltf.scene.position.x = mousePosition.x * 5;
      gltf.scene.position.y = mousePosition.y * 5;
    }
  });

  return <primitive object={gltf.scene} />;
};

const ModelCanvas = ({ url }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Event listener for mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: ((event.clientX / window.innerWidth) * 2 - 1)/2,
        y: ((event.clientY / window.innerHeight) * -2 + 1)/2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model url={url} mousePosition={mousePosition} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ModelCanvas;
