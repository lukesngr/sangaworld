export default function PDFTemplate(props) {
    console.log(props);
    return (<>
            
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
            <style>
            {`
            .sidebar {
                background-color: #0081FB;
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
            }
            
            .sidebar p {
                margin-left: 10px;
                color: white;
            }
            
            .sidebar i {
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
                font-family: 'Roboto';
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
            `}
            </style>
            <script src="https://kit.fontawesome.com/793a493ac1.js" crossorigin="anonymous"></script>
            <div className="h-100 container">
                <div className="row">
                    <div style={{backgroundColor: "#0081FB"}}className="col-4 sidebar">
                        {props.name.split(' ').map(namePart => (<h1>{namePart}</h1>))}
                        <p className="sidebarHeading">CONTACT</p>
                        <p><i className="fa-solid fa-phone"></i>{props.number}</p>
                        <p><i className="fa-solid fa-envelope"></i>{props.email}</p>
                        <p><i className="fa-solid fa-location-dot"></i>{props.location}</p>
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