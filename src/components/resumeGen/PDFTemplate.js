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
                        <h1>LUKE</h1>
                        <h1>SANGER</h1>
                        <p class="sidebarHeading">CONTACT</p>
                        <p><i class="fa-solid fa-phone"></i>0477819893</p>
                        <p><i class="fa-solid fa-envelope"></i>lukesngr@gmail.com</p>
                        <p><i class="fa-solid fa-location-dot"></i>Heathcote, Sydney, NSW 2233</p>
                        <p class="sidebarHeading">SKILLS</p>
                        <ul>
                            <li>React</li>
                            <li>Git</li>
                            <li>SASS</li>
                            <li>CSS3</li>
                            <li>HTML5</li>
                            <li>UX Design</li>
                            <li>Next.js</li>
                            <li>AWS</li>
                        </ul>
                    </div>
                    <div class="col mainpart">
                        <p class="mainHeading">PROFESSIONAL SUMMARY</p>
                        <p class="summary">Recent CompSci graduate passionate about pursuing a career in web development with 4+ years of experience in a IT environment in a multinational company. 
                            Multiple web projects proving competency including a SAAS website in production. 
                            Strong knowledge in React, Next.js, CSS and UX. Communication skills refined over half a decade of working in a customer service role. 
                            Strong desire to continue to learn more and progress in career and skill.</p>
                        <p class="mainHeading">EXPERIENCE</p>
                        <p class="experienceTime">January 2019 - Present</p>
                        <b>Service Desk Specialist</b>
                        <p>HOYTS, Sydney, NSW</p>
                        <ul>
                            <li>Cinema POS and Kiosk - Software Troubleshooting, Configuration and Deployment</li>
                            <li>Corporate Office support including Wi-Fi troubleshooting</li>
                            <li>Powershell scripting and configuration of Android-based scanners</li>
                            <li>Communication and collaboration in a team</li>
                        </ul>
                        <p class="mainHeading">EDUCATION</p>
                        <p class="experienceTime">December 2023</p>
                        <b>Bachelor of Computer Science</b>
                        <p>University Of Wollongong, Wollongong</p>
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