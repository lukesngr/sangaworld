import { FaEnvelope, FaPhone, FaMap } from "react-icons/fa";
export default function PDFTemplate(props) {
    console.log(props);
    return (<>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
            <style>
            {`
            .sidebar {
                background-color: #242321;
                border-image-source: linear-gradient(#1399f2, #f538eb) !important;
                border-left: none;
                border-right: 5px solid;
                border-bottom: none;
                border-top: none;
                border-image-slice: 1;
            }
            
            .sidebar li {
                color: white;
                font-family: 'Roboto';
            }
            
            body {
                margin: 0;
                height: 100%;
            }

            
            h1 {
                margin: 0;
                padding-left: 10px;
                font-family: 'Roboto';
                color: white;
                font-family: 'Fox Cavalier';
                background-image: linear-gradient(#1399f2, #c0c0c0, #f538eb);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent; 
                -moz-text-fill-color: transparent;
                -webkit-text-stroke-width: 0.2vw;
                -webkit-text-stroke-color: white;
            }
            
            .sidebar p {
                margin-left: 10px;
                color: white;
            }
            
            .sidebar svg {
                margin-right: 5px;
            }
            
            .sidebarHeading {
                font-family: 'Roboto';
                border-bottom: 2px white solid;
                color: white;
                font-size: large;
            }
            
            .container {
                padding-right: 0 !important;
                padding-left: 0 !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
                min-width: 100% !important;
                max-width: 600px;
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
                font-family: 'Roboto';
                border-bottom: 3px solid;
                border-image-source: linear-gradient(to right, #7acaff, #ff7af8) !important;
                border-image-slice: 1;
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
             
            
            `}
            </style>
            
            <div className="h-100 container">
                <div className="row">
                    <div className="col-4 sidebar">
                        {props.name.split(' ').map(namePart => (<h1>{namePart}</h1>))}
                        <p className="sidebarHeading">CONTACT</p>
                        <p><FaPhone size={20}></FaPhone>{props.number}</p>
                        <p><FaEnvelope size={20}></FaEnvelope>{props.email}</p>
                        <p><FaMap size={20}></FaMap>{props.location}</p>
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
                            {props.workExpDotpoints.split('\n').map(workExpDotpoint => (<li>{workExpDotpoint}</li>))}
                        </ul>
                        <p className="mainHeading">EDUCATION</p>
                        <p className="experienceTime">{props.graduationDate}</p>
                        <b>{props.degreeName}</b>
                        <p>{props.university}</p>
                        <p className="mainHeading">CERTIFICATIONS</p>
                        <ul>
                            {props.certifications.split('\n').map(certification => (<li>{certification}</li>))}
                        </ul>
                    </div>
            </div>
            </div>
        
    </>)
}