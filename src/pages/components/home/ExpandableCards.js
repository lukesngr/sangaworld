import { useState } from "react";
import "../../../styles/expandablecard.scss";
import Image from "next/image";

function ExpandableCards() {

    const [displayOptions, setDisplayOptions] = useState({display: "none"});
    function displayProfessionalSummary() {
        if(displayOptions.display == "none") {
            setDisplayOptions({display: "block"});
        }else{
            setDisplayOptions({display: "none"});
        }
    }

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
            <button onClick={displayProfessionalSummary}>More Info</button>
            </p>
        </div>
        <div className="professionalSummary" style={displayOptions}>
            <h1>Professional Summary</h1>
            <p>
            My career journey began when I started work experience at HOYTS Group in late 2018 doing mainly POS software installs.
            Instantly I was appreciated for my character and skill despite my age so I was kept on and did work for the company every school holidays.
            I worked in this capacity for about two years while I was in highschool, mainly fixing tickets logged through the ServiceNow platform.
            However I have had a few projects, most notably removing an old version of a VPN and replacing it with a new version for 90+ devices.
            I graduated from Bosco College in 2020 and begun a degree in Computer Science at  University of Wollongong.
            As I got into university, the freedom of the schedule allowed me to work more days in the office and hence I begun to take a more active role within the company.
            I worked on building and distrubuting android-based scanners which allowed intergration of scanning utilities into mobile apps.
            I built several powershell scripts including auto-builds of GUI software that unfortunately has no command line installer and scripts to find terminal IDs.
            Through this experience, I learned that the powershell send key functionality leaves a lot to be desired and this is why I am building scripts focused around the pywinauto library.  
            </p>
        </div>
        <Image src="/me.jpg" width={700} height={700} alt="Picture of website" className="profilePicture" priority/>
    </div>)
}

export default ExpandableCards;