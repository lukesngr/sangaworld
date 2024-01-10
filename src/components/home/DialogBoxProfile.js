import "../../styles/dialogboxprofile.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaTimesCircle, FaMinusCircle } from "react-icons/fa";

function DialogBoxProfile() {

    const [transformX, setTransformX] = useState(0);
    const [transformY, setTransformY] = useState(0);
    const [mouseDown, setMouseDown] = useState(false);
    const [mouseX, setMouseX] = useState({old: 0, new: 0});
    const [mouseY, setMouseY] = useState({old: 0, new: 0});

    useEffect(() => {
        const updateCoordinates = (e) => {
            setMouseX((previousValue) => {return {old: previousValue.new, new: e.x}});
            setMouseY((previousValue) => {return {old: previousValue.new, new: e.y}});
        }
        window.addEventListener('mousemove', updateCoordinates);
        return () => {
            window.removeEventListener('mousemove', updateCoordinates);
        }
    }, []);

    useEffect(() => {
        if(mouseDown) {
            setTransformX((mouseX.new - mouseX.old)+transformX);
            setTransformY((mouseY.new - mouseY.old)+transformY);
        }
    }, [mouseX, mouseY]);


    return (
    <div style={{'transform': `translate(${transformX}px, ${transformY}px)`}} className="vaporDialog">
        <div onMouseDown={() => setMouseDown(true)} onMouseUp={() => setMouseDown(false)} className="dialogTitle">
            About Me <FaTimesCircle className="fakeExitButton" size={30} /><FaMinusCircle className="fakeMinusButton" size={30} />
        </div>
        <Image src="/me.jpg" width={700} height={700} alt="Picture of website" className="profilePicture" priority/>
        <p className="dialogContent">
        My name is Luke Sanger, I have just finished a degree in Computer Science at University of Wollongong. <br />
        For over five years, I have honed my IT skills in a real-world setting at HOYTS, where I hold the position of a Service Desk Specialist. <br />
        My life isn't just limited to university and professional work - I also have a keen enthusiasm for AI and Web Development that goes beyond the classroom. <br />
        Outside of tech, I am an ardent fan of Hardstyle and Vaporwave music genres and love to go to HSU events. <br />
        </p>
        <a href="/myresume.pdf" className="downloadResumeButton" target='_blank' rel='noopener noreferrer'>Download Resume</a>
    </div>
    )
}

export default DialogBoxProfile;