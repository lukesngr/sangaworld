import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber"
function Computer() {
    const pc = useLoader(GLTFLoader, '/computer.glb');
    pc.scene.position.y = -6;
    pc.scene.rotation.y = 4.75;
    pc.scene.position.z = -40;
    return <primitive object={pc.scene}></primitive>
}

export default Computer