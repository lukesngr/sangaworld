import {useThree, useFrame} from "@react-three/fiber";

function AnimationToMain() {
    const { camera } = useThree();
    useFrame(() => {
        if(camera.position.z > -37) {
            camera.position.z -= 0.5;
            console.log(camera.position.z)
        }
      })
}

export default AnimationToMain;