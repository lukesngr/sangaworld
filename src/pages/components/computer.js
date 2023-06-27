import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber"
function Computer() {
    const pc = useLoader(GLTFLoader, '/computer.glb');
    return (
        <group>
            <primitive object={pc.scene}></primitive>
        </group>
    )
}

export default Computer