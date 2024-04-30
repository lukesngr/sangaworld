import { useEffect, useRef } from 'react'
import '../../styles/conveyer.scss'

export default function ConveyerBelt() {

    const words = ["Passionate", "Driven", "Responsible", "Innovative"];
    let selection = 0;
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if(selection > 3) {
                selection = selection + 1;
            }else{
                selection = 0;
            }
        }, 1000)
        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);

    return (
    <div className="scene">
        <div className="conveyerBeltSection">
            <img src="/chute.png" className='chute' alt='chute'/>
            <span className="word">{words[selection]}</span>
            <img src="/conveyerbelt.png" className='conveyerBelt' alt='conveyer belt'/>
        </div>
    </div>)
}