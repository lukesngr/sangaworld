import "../../styles/expandablecard.css";
import Image from "next/image";

function ExpandableCards() {
    return (
    <div className="parent">
        <div className="vaporDialog">
            <p className="dialContent">
            Student at University of Wollongong studying AI and Software Engineering as part of a computer science degree<br />
            Working at HOYTS as a Service Desk Specialist<br />
            Keen interest in AI and Web Development<br />
            Avid lover of Hardstyle and Vaporwave<br />
            </p>
        </div>
        <Image src="/me.jpg" width={700} height={700} alt="Picture of website" className="profilePicture" priority/>
    </div>)
}

export default ExpandableCards;