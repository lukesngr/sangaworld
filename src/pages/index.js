import { Canvas } from "@react-three/fiber";

function LandingPage() {
    return (
        <Canvas camera={{position: [0, 0, 30]}}>
            <ambientLight></ambientLight>
            <pointLight color="0xf59df5" position={[0, 4.75, -20]}></pointLight> 
        </Canvas>
    )
}

export default LandingPage;