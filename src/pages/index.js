import { Canvas } from "@react-three/fiber";
import Computer from "./components/computer";
import Background from "./components/background";
import AnimationToMain from "./components/animationToMainPage";
import { Suspense, useEffect, useState } from "react";

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
                <AnimationToMain />
            </Canvas>
        </div>
    )
}

export default LandingPage;