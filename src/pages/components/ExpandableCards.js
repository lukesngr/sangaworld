import "../../styles/expandablecard.css";
import Image from "next/image";

function ExpandableCards() {
    return (
    <div>
        <Image src="/me.jpg" width={700} height={700} alt="Picture of website" className="profilePicture"/>
        <div className="windowsDialog"></div>
    </div>)
}

export default ExpandableCards;