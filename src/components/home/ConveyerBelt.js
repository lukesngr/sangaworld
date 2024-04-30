import { useEffect, useRef, useState } from 'react'
import '../../styles/conveyer.scss'

export default function ConveyerBelt() {

    const words = ["Passionate", "Driven", "Responsible", "Innovative"];
    let selection = 0;
    const [text, setText] = useState(words[0]);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            selection = selection + 1;
            if(selection <= words.length - 1) {
                console.log(selection, words[selection])
                setText(words[selection]);
            }else{
                selection = 0;
                setText(words[0]);
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