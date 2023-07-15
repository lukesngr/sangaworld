import { useState } from "react";
import "../../styles/expandablecard.scss";
import Image from "next/image";
import { FaTimesCircle } from "react-icons/fa";

function ExpandableCards() {

    return (
    <div className="vaporDialog">
        <div className="dialogTitle">
            About Me <FaTimesCircle className="fakeExitButton" size={30} />
        </div>
        <Image src="/me.jpg" width={700} height={700} alt="Picture of website" className="profilePicture" priority/>
        <p className="dialogContent">
        Hi, I am Luke.
        I am currently a Student at University of Wollongong studying AI and Software Engineering as part of a computer science degree<br />
        I am working at HOYTS as a Service Desk Specialist and have been for over 3 years<br />
        Keen interest in AI and Web Development<br />
        Avid lover of Hardstyle and Vaporwave music<br />
        </p>
    </div>    
    )
}

export default ExpandableCards;