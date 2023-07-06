import '../../styles/skills.scss';

function Skills() {
    return (
        <div className="skillsSplit container">
            <div className="row skillsHeader">
                <div className="col-md">
                    <h1>Skills and education</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md workSkills">
                    Throughout my employment at HOYTS, I have learned numerous skills including but not limited to
                    <ul>
                        <li>Teamwork</li>
                        <li>Powershell</li>
                        <li>Office 365</li>
                        <li>POS and Kiosks</li>
                        <li>Gathering technical requirements from non-technical colleagues</li>
                        <li>How a company works in an office setting</li>
                        <li>Career progression</li>
                    </ul>
                </div>
                <div className="col-md uniSkills">
                I am on my final year of a 3 year degree in Computer Science, the skills I have learnt through this include
                <ul>
                    <li>Java</li>
                    <li>C++</li>
                    <li>NextJs</li>
                    <li>HTML, CSS and Javascript</li>
                    <li>React</li>
                    <li>Machine learning</li>
                    <li>Neural Networks</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;