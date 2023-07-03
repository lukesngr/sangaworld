import { Canvas } from "@react-three/fiber";
import Computer from "./components/landing/Computer";
import Background from "./components/landing/Background";
import AnimationToMain from "./components/landing/AnimationToMainPage";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from 'next/router';

function LandingPage() {
    const [dpr, setDpr] = useState(1);
    const [aspectRatio, setAspectRatio] = useState(1);
    const router = useRouter();
    

    useEffect(() => {
        setDpr(window.devicePixelRatio);
        setAspectRatio(window.innerWidth / window.innerHeight);
        router.prefetch("/home");
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