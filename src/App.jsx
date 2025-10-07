import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, useHelper } from "@react-three/drei";
import "./index.css";
import { useControls, Leva } from "leva";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { SpotLight, TextureLoader } from "three";
import { color } from "three/tsl";

function AnimatedBox() {
  const boxRef = useRef();
  const { color, speed } = useControls({
    color: "#ff0000",
    speed: {
      value: 0.01,
      min: 0,
      max: 0.1,
      step: 0.01,
    },
  });

  useFrame(() => {
    boxRef.current.rotation.x += speed;
    boxRef.current.rotation.y += speed;
    boxRef.current.rotation.z += speed;
  });
  return (
    <mesh position={2} ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
import { useEffect } from "react";

function Model() {
  const result = useLoader(GLTFLoader, "/Bat.gltf");

  return <primitive object={result.scene} />;
}

function SpherewithTexture() {
  const texture = useLoader(TextureLoader, "/Alien_Texture.png");
  return (
    <mesh position={[-5, 1, 0]}>
      <sphereGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

function SpotLightHelper() {
  const light = useRef();
  useHelper(light, SpotLight, 1, "red");
  const { angle } = useControls({
    angle: Math.PI / 8,
  });
  return <spotLight ref={light} intensity={50} position={[4, 2, 3]} />;
}
export default function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <OrbitControls />
        <AnimatedBox />
        <gridHelper args={[10, 10]} />
        <axesHelper args={[5]} />
        <ambientLight intensity={0.2} color={0xfcfcfc} />
        <directionalLight position={[0, 10, 5]} />
        <ambientLight color={0xfcfcfc} intensity={0.8} />

        <SpotLightHelper />
        <Model />
        <SpherewithTexture />
      </Canvas>
      <Leva />

      <h1>Hello world</h1>
    </div>
  );
}
