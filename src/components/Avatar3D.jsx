import React, { Suspense, useMemo } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function AvatarModel() {
  // Load OBJ model from public folder with error handling
  const obj = useLoader(OBJLoader, '/3Dmodel.obj');
  
  // Optimize the model and add materials
  const optimizedModel = useMemo(() => {
    if (!obj) return null;
    
    // Clone the object to avoid mutations
    const clonedObj = obj.clone();
    
    // Add materials to all meshes if they don't have them
    clonedObj.traverse((child) => {
      if (child.isMesh) {
        // If no material exists, add a basic material
        if (!child.material) {
          child.material = new THREE.MeshStandardMaterial({
            color: '#ffffff',
            roughness: 0.5,
            metalness: 0.1
          });
        }
        
        // Optimize geometry
        if (child.geometry) {
          child.geometry.computeVertexNormals();
        }
      }
    });
    
    return clonedObj;
  }, [obj]);

  if (!optimizedModel) {
    return <Html center>Loading model...</Html>;
  }

  return <primitive object={optimizedModel} scale={0.5} />;
}

function Avatar3D() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: 240 }}>
      <Canvas 
        camera={{ position: [0, 0, 3.5], fov: 50 }} 
        shadows
        gl={{ 
          antialias: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: false
        }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 4, 5]} intensity={0.8} />
        <pointLight position={[-2, -2, -2]} intensity={0.3} />
        
        <Suspense fallback={<Html center>Loading 3D Avatar...</Html>}>
          <AvatarModel />
        </Suspense>
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}

export default Avatar3D; 