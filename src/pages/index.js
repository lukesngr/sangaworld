import { Canvas } from "@react-three/fiber";
import Computer from "./components/computer";
import { useEffect } from "react";

function LandingPage() {
    let aspectRatio = 0;
    let dpr = 0;
    useEffect(function(){
        aspectRatio = window.innerWidth / window.innerHeight;
        dpr = window.devicePixelRatio;
        
    })
    return (
        <Canvas camera={{fov: 75, position: [0, 0, 30], aspect: aspectRatio}} dpr={dpr}>
            <ambientLight></ambientLight>
            <pointLight color="0xf59df5" position={[0, 4.75, -20]}></pointLight>
            <Computer></Computer>
        </Canvas>
    )
}

export default LandingPage;