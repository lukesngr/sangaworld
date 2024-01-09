import { FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";

export default function PDFTemplate(props) {
    console.log(props);
    return (<>
            <style>
            {`
            .sidebar {
                background-color: #0081FB;
            }
            
            .sidebar li {
                color: white;
                font-family: &#x27;Roboto&#x27;;
            }
            
            body {
                margin: 0;
                height: 100%;
            }

            
            h1 {
                margin: 0;
                padding-left: 10px;
                font-family: &#x27;Roboto&#x27;;
                color: white;
            }
            
            .sidebar p {
                margin-left: 10px;
                color: white;
            }
            
            .sidebar i {
                margin-right: 5px;
            }
            
            .sidebarHeading {
                font-family: &#x27;Roboto&#x27;;
                border-bottom: 2px white solid;
                color: white;
                font-size: large;
            }
            
            .container {
                padding-right: 0 !important;
                padding-left: 0 !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
                max-width: 100% !important;
            }
            
            .mainpart {
                margin-top: 25px;
            }
            
            .container {
                height: 100%;
            }
            
            .row {
                height: 100%;
            }
            
            .mainHeading {
                font-family: &#x27;Roboto&#x27;;
                border-bottom: 2px solid #0081FB;
                width: 95%;
                font-size: large;
            }
            
            .summary {
                font-size: medium;
            }
            
            .experienceTime {
                margin-bottom: 0;
                color: darkslategray;
            }

            html {
                height: 100%;
            }

            #__next {
                height: 100%;
            }
            `}
            </style>
            <div className="h-100 container">
                <div className="row">
                    <div className="col-4 sidebar">
                        {props.name.split(' ').map(namePart => (<h1>{namePart}</h1>))}
                        <p className="sidebarHeading">CONTACT</p>
                        <p><FaPhone size={10}></FaPhone>{props.number}</p>
                        <p><FaEnvelope size={10}></FaEnvelope>{props.email}</p>
                        <p><FaLocationArrow size={10}></FaLocationArrow>{props.location}</p>
                        <p className="sidebarHeading">SKILLS</p>
                        <ul>
                            {props.skills.split('\n').map(skill => (<li>{skill}</li>))}
                        </ul>
                    </div>
                    <div className="col mainpart">
                        <p className="mainHeading">PROFESSIONAL SUMMARY</p>
                        <p className="summary">{props.professionalSummary}</p>
                        <p className="mainHeading">EXPERIENCE</p>
                        <p className="experienceTime">{props.workExpTime}</p>
                        <b>{props.workExpRole}</b>
                        <p>{props.workExpLoc}</p>
                        <ul>
                            <li>Cinema POS and Kiosk - Software Troubleshooting, Configuration and Deployment</li>
                            <li>Corporate Office support including Wi-Fi troubleshooting</li>
                            <li>Powershell scripting and configuration of Android-based scanners</li>
                            <li>Communication and collaboration in a team</li>
                        </ul>
                        <p className="mainHeading">EDUCATION</p>
                        <p className="experienceTime">{props.graduationDate}</p>
                        <b>{props.degreeName}</b>
                        <p>{props.university}</p>
                        <p className="mainHeading">CERTIFICATIONS</p>
                        <ul>
                            <li>Meta Front-end Developer</li>
                        </ul>
                    </div>
            </div>
            </div>
        
    </>)
}