import {useThree, useFrame} from "@react-three/fiber";
import { useRouter } from 'next/router';

function AnimationToMain() {
    const { camera } = useThree();
    const router = useRouter();
    useFrame(() => {
        if(camera.position.z > -37) {
            camera.position.z -= 0.5;
            console.log(camera.position.z)
        }else{
            setTimeout(() => {
                router.push("/main");
            }, 1000);
        }
      })
}

export default AnimationToMain;