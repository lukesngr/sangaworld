import { useEffect, useRef, useState } from 'react'
import '../../styles/conveyer.scss'

export default function ConveyerBelt() {

    const words = ["Passionate", "Driven", "Responsible", "Innovative"];
    let selection = 0;
    const [text, setText] = useState(words[0]);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if(selection <= 3) {
                selection = selection + 1;
                setText(words[selection]);
            }else{
                selection = 0;
                setText(words[selection]);
            }
        }, 2000)
        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);

    return (
    <div className="scene">
        <div className="conveyerBeltSection">
            <img src="/chute.png" className='chute' alt='chute'/>
            <span className="word">{text}</span>
            <img src="/conveyerbelt.png" className='conveyerBelt' alt='conveyer belt'/>
        </div>
    </div>)
}