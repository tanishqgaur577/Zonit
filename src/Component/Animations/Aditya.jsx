import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

const DataCenterModel = () => {
  const gltf = useGLTF("../../../Threejs Models/data_center_rack.glb"); // Path to your .glb file
  return (
    <primitive
      object={gltf.scene}
      scale={[1.5, 1.5, 1.5]} // Adjust the size of the model
      position={[0, -2, 0]} // Move the model down along the Y-axis
    />
  );
};

const App = () => {
  return (
    <Canvas className="h-screen">
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />

      {/* Model */}
      <DataCenterModel />

      {/* Controls */}
      <OrbitControls
        enableZoom={false} // Disable zoom
        minPolarAngle={Math.PI / 2} // Restrict vertical rotation
        maxPolarAngle={Math.PI / 2} // Restrict vertical rotation
      />

      {/* Environment */}
      <Environment preset="city" />
    </Canvas>
  );
};

export default App;
