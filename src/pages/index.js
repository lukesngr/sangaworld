import { Canvas, useLoader, useThree } from "@react-three/fiber";
import Computer from "./components/computer";
import { Suspense, useEffect } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useState } from "react";

function Background() {
    const { scene } = useThree();
    const texture = useLoader(TextureLoader, '/0_0.png');
    useEffect(() => {
      if (!texture) return;
  
      const imageAspect = texture.image.width / texture.image.height;
      texture.matrixAutoUpdate = false;
      const aspect = window.innerWidth / window.innerHeight;
      
      if (aspect < imageAspect) {
        texture.matrix.setUvTransform(0, 0, aspect / imageAspect, 1, 0, 0.5, 0.5);
      } else {
        texture.matrix.setUvTransform(0, 0, 1, imageAspect / aspect, 0, 0.5, 0.5);
      }
      
      scene.background = texture;
    }, [scene, texture]);
    
    return null;
  }

function LandingPage() {
    const [dpr, setDpr] = useState(1);
    const [aspectRatio, setAspectRatio] = useState(1);

    useEffect(() => {
        setDpr(window.devicePixelRatio);
        setAspectRatio(window.innerWidth / window.innerHeight);
    }, []);
    
    return (
        <div style={{width: "100vw", height: "100vh"}}>
            <Canvas camera={{fov: 75, position: [0, 0, 30], aspect: aspectRatio}} dpr={dpr}>
                <Suspense fallback={null}>
                    <Background></Background>
                    <Computer></Computer>
                </Suspense>
                <ambientLight></ambientLight>
                <pointLight color={0xf59df5} position={[0, 4.75, -20]}></pointLight>
                
            </Canvas>
        </div>
    )
}

export default LandingPage;