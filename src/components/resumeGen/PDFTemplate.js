
export default function PDFTemplate(props) {
    console.log(props);
    return (<html>
        <head>
            <script src="https://kit.fontawesome.com/793a493ac1.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
            <style>
            {`
            .sidebar {
                background-color: #0081FB;
                height: 100%;
            }
            
            .sidebar li {
                color: white;
                font-family: 'Roboto';
            }
            
            body {
                margin: 0;
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
        </head>
        <body>
            <div className="container">
                <div className="row">
                    <div className="col-4 sidebar">
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
        </body>
    </html>)
}