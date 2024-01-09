import "../../styles/dialogboxprofile.scss";
import Image from "next/image";
import { useState } from "react";
import { FaTimesCircle, FaMinusCircle } from "react-icons/fa";

function DialogBoxProfile() {

    return (
    <div className="vaporDialog">
        <div className="dialogTitle">
            About Me <FaTimesCircle className="fakeExitButton" size={30} /><FaMinusCircle className="fakeMinusButton" size={30} />
        </div>
        <Image src="/me.jpg" width={700} height={700} alt="Picture of website" className="profilePicture" priority/>
        <p className="dialogContent">
        Greetings! My name is Luke Sanger, an eager student currently pursuing a degree in Computer Science with a focus on AI and Software Engineering at the esteemed University of Wollongong. <br />
        For over three years, I have honed my IT skills in a real-world setting at HOYTS, where I hold the position of a Service Desk Specialist. <br />
        My interests aren't just limited to academia and professional work - I also have a keen enthusiasm for AI and Web Development that goes beyond the classroom. <br />
        Outside of tech, I am an ardent fan of Hardstyle and Vaporwave music genres. <br />
        </p>
        <a href="/myresume.pdf" target='_blank' rel='noopener noreferrer'>Download Resume</a>
    </div>
    )
}

export default DialogBoxProfile;