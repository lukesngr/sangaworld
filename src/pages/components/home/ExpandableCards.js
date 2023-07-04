import "../../../styles/expandablecard.css";
import Image from "next/image";

function ExpandableCards() {
    return (
    <div className="parent">
        <div className="vaporDialog">
            <div className="dialogTitle">
                About Me <button className="fakeExitButton">X</button>
            </div>
            <p className="dialogContent">
            Hi, I am Luke.
            I am currently a Student at University of Wollongong studying AI and Software Engineering as part of a computer science degree<br />
            I am working at HOYTS as a Service Desk Specialist and have been for over 3 years<br />
            Keen interest in AI and Web Development<br />
            Avid lover of Hardstyle and Vaporwave music<br />
            <button>More Info</button>
            </p>
        </div>
        <Image src="/me.jpg" width={700} height={700} alt="Picture of website" className="profilePicture" priority/>
    </div>)
}

export default ExpandableCards;