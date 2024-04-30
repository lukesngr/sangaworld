import { useEffect, useRef, useState } from 'react'
import '../../styles/conveyer.scss'

export default function ConveyerBelt() {

    const words = ["Passionate", "Driven", "Responsible", "Innovative"];
    const [selection, setSelection] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if(selection > 3) {
                setSelection(selection+1);
            }else{
                setSelection(0);
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