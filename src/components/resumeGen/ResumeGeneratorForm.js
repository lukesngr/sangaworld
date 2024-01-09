import { useEffect, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import PDFTemplate from './PDFTemplate';
import '../../styles/resumegenerator.scss';
import axios from 'axios';
import jsPDF from 'jspdf';

export default function ResumeGeneratorForm() {
    const [professionalSummary, setProfessionalSummary] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [skills, setSkills] = useState("");
    const [workExpTime, setWorkExpTime] = useState("");
    const [workExpRole, setWorkExpRole] = useState("");
    const [workExpLoc, setWorkExpLoc] = useState("");
    const [workExpDotpoints, setWorkExpDotpoints] = useState("");
    const [graduationDate, setGraduationDate] = useState("");
    const [degreeName, setDegreeName] = useState("");
    const [university, setUniversity] = useState("");
    const [certifications, setCertifications] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        axios.get('/api/generatePDF', {
            responseType: 'blob',
            params: {
              professionalSummary, name, number, email, location, skills, workExpTime, workExpLoc, workExpRole, graduationDate, degreeName, university, certifications, workExpDotpoints
            }
          })
          .then(function (response) {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(new Blob([response.data]));
            link.download = 'generated-pdf.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          })
    }

    return (
        <form onSubmit={handleSubmit} className="resumeGeneratorForm">
            <h1>Resume Generator</h1>
            <p>Generator I used to generate my resume</p>
            <h4>Basic Details</h4>
            <label htmlFor='name'>Full Name:</label>
            <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input><br />
            <label htmlFor='phone'>Phone Number:</label>
            <input name="phone" type="phone" value={number} onChange={(e) => setNumber(e.target.value)}></input><br />
            <label htmlFor='email'>Email:</label>
            <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br />
            <label htmlFor='location'>Location:</label>
            <input name="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)}></input><br />
            <label htmlFor='skills'>Skills:</label><br />
            <textarea name="skills" type="text" rows="4" cols="50" value={skills} onChange={(e) => setSkills(e.target.value)}></textarea><br />
            <label htmlFor='professionalSum'>Professional Summary:</label><br />
            <textarea name="professionalSum" type="text" rows="4" cols="50" value={professionalSummary} onChange={(e) => setProfessionalSummary(e.target.value)}></textarea><br />
            <h4>Experience</h4>
            <label htmlFor='workExpTime'>Work Experience Time:</label>
            <input name="workExpTime" type="text" value={workExpTime} onChange={(e) => setWorkExpTime(e.target.value)}></input><br />
            <label htmlFor='workExpRole'>Work Experience Role:</label>
            <input name="workExpRole" type="text" value={workExpRole} onChange={(e) => setWorkExpRole(e.target.value)}></input><br />
            <label htmlFor='workExpLoc'>Work Experience Location:</label>
            <input name="workExpLoc" type="text" value={workExpLoc} onChange={(e) => setWorkExpLoc(e.target.value)}></input><br />
            <label htmlFor='workExpDotpoints'>Skills Learned During Work Experience:</label><br />
            <textarea name="workExpDotpoints" type="text" rows="4" cols="50" value={workExpDotpoints} onChange={(e) => setWorkExpDotpoints(e.target.value)}></textarea><br />
            <h4>Education</h4>
            <label htmlFor='graduationDate'>Graduation Date:</label>
            <input name="graduationDate" type="text" value={graduationDate} onChange={(e) => setGraduationDate(e.target.value)}></input><br />
            <label htmlFor='degreeName'>Degree Name:</label>
            <input name="degreeName" type="text" value={degreeName} onChange={(e) => setDegreeName(e.target.value)}></input><br />
            <label htmlFor='university'>University:</label>
            <input name="university" type="text" value={university} onChange={(e) => setUniversity(e.target.value)}></input><br />
            <label htmlFor='certifications'>Certifications:</label><br />
            <textarea name="certifications" type="text" rows="4" cols="50" value={certifications} onChange={(e) => setCertifications(e.target.value)}></textarea><br />
            <button type='submit'>Generate</button>
        </form> );
}