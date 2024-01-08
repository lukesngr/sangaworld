import '../../styles/resume.css';

export default function PDFTemplate(props) {
    return (<html>
        <head>
            <script src="https://kit.fontawesome.com/793a493ac1.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </head>
        <body>
            <div class="container">
                <div class="row">
                    <div class="col-4 sidebar">
                        {props.name.split(' ').map(namePart => (<h1>{namePart}</h1>))}
                        <p class="sidebarHeading">CONTACT</p>
                        <p><i class="fa-solid fa-phone"></i>{props.number}</p>
                        <p><i class="fa-solid fa-envelope"></i>{props.email}</p>
                        <p><i class="fa-solid fa-location-dot"></i>{props.location}</p>
                        <p class="sidebarHeading">SKILLS</p>
                        <ul>
                            {props.skills.split('\n').map(skill => (<li>{skill}</li>))}
                        </ul>
                    </div>
                    <div class="col mainpart">
                        <p class="mainHeading">PROFESSIONAL SUMMARY</p>
                        <p class="summary">{props.professionalSummary}</p>
                        <p class="mainHeading">EXPERIENCE</p>
                        <p class="experienceTime">{props.workExpTime}</p>
                        <b>{props.workExpRole}</b>
                        <p>{props.workExpLoc}</p>
                        <ul>
                            <li>Cinema POS and Kiosk - Software Troubleshooting, Configuration and Deployment</li>
                            <li>Corporate Office support including Wi-Fi troubleshooting</li>
                            <li>Powershell scripting and configuration of Android-based scanners</li>
                            <li>Communication and collaboration in a team</li>
                        </ul>
                        <p class="mainHeading">EDUCATION</p>
                        <p class="experienceTime">{props.graduationDate}</p>
                        <b>{props.degreeName}</b>
                        <p>{props.university}</p>
                        <p class="mainHeading">CERTIFICATIONS</p>
                        <ul>
                            <li>Meta Front-end Developer</li>
                        </ul>
                    </div>
            </div>
            </div>
        </body>
    </html>)
}