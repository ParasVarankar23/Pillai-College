import React from 'react';
import './IT.css';
import Navbar from './Navbar';
import Footer from './Footer';

function InformationTechnolgoy() {
return (
    <div className="it-container">
        <div>
            <Navbar/>
        </div>
    <div className="it-description">
        <p>
        The Department of Information Technology was established with the objective of promoting specialized knowledge in the field of Information Technology. 
        Our curriculum is designed to equip students with the necessary skills and expertise required to thrive in the fast-evolving IT industry. 
        We focus on a holistic development approach, combining technical knowledge with soft skills to prepare our students for diverse career opportunities. 
        Through a combination of theoretical coursework and practical experiences, we ensure that our graduates are well-prepared to meet the challenges of the modern IT world. 
        Our department also emphasizes research and innovation, encouraging students to explore new technologies and contribute to the development of cutting-edge solutions.
        </p>
    </div>
    <div className="it-table">
        <table>
        <thead>
            <tr>
            <th>First Semester</th>
            <th>Second Semester</th>
            <th>Third Semester</th>
            <th>Fourth Semester</th>
            <th>Fifth Semester</th>
            <th>Sixth Semester</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Software Engineer</td>
            <td>Software Developer</td>
            <td>Front-End Developer</td>
            <td>Back-End Developer</td>
            <td>System Analyst</td>
            <td>Cyber Security</td>
            </tr>
            <tr>
            <td>Information System Manager</td>
            <td>Customer Relationship Manager</td>
            <td>Cloud Engineer</td>
            <td>Forensic Computer Analyst</td>
            <td>Web Developer</td>
            <td>Ethical Hacker</td>
            </tr>
            <tr>
            <td>Computer Hardware Engineer</td>
            <td>Network Administrator</td>
            <td>Database Administrator</td>
            <td>Security Manager</td>
            <td>IT Project Manager</td>
            <td>Information Network Security</td>
            </tr>
            <tr>
            <td>DevOps Engineer</td>
            <td>Computer Networks</td>
            <td>Game Developer</td>
            <td>Business Analyst</td>
            <td>Internship</td>
            <td>Field Project</td>
            </tr>
            <tr>
            <td>Communication Skills</td>
            <td>Soft Skills</td>
            <td>Data Analyst</td>
            <td>Framework Project</td>
            <td>Full Stack Paper - I</td>
            <td>Artificial Intelligence</td>
            </tr>
            <tr>
            <td>Human Values</td>
            <td>Environment Management</td>
            <td>Data Visualization with Python</td>
            <td>Full Stack Development Hybrid Application</td>
            <td>Digital Marketing</td>
            <td>Machine Learning</td>
            </tr>
        </tbody>
        </table>
    </div>
    <div className="it-additional-info">
        <h2>About the Course – Bachelor of Science in Information Technology (B.Sc.I.T.)</h2>
        <p>
        The Department of Information Technology and Computer Science came into being in 2001. The Department was started with the objective of promoting specialized knowledge in the field of Computer Science and Computer Application. The Department strives to channelize talented youth of the region to this challenging and knowledge-intensive field by imparting quality technical knowledge and skills in the field.
        </p>
        <h3>Programmes Offered</h3>
        <ul>
        <li>B.Sc.(I.T.)</li>
        <li>B.Sc.(C.S.)</li>
        <li>M.Sc.(I.T.)</li>
        </ul>
        <p>
        The programmes have been designed by the University of Mumbai, keeping in mind the needs of the global Information Technology Industry. We leverage the MOUs signed with Google, Zensar Ltd., Oracle University for the progression of our students' academics as well as their careers.
        </p>
        <p>
        Faculty members of the Department endeavor to be guides, counselors, and facilitators to the students in order to sharpen their technical, leadership, and organizational skills. The department has adopted various practices for students’ support like:
        </p>
        <ul>
        <li>Student – Student Mentoring</li>
        <li>Guardian Teacher</li>
        <li>Students Exchange Programme</li>
        <li>Advance learners</li>
        </ul>
        <p>
        The Department has a “Computer Association”. It gives a good platform to students for their overall personality development. Various technical as well as social events are conducted under this banner. All these events are organized by students of the department under the guidance of the teacher in charge of the association.
        </p>
        <h3>Vision</h3>
        <p>
        Creating competent professionals capable of taking leading roles in the industry. To provide the community with graduates who will practice the profession with ethics, integrity, and social responsibility.
        </p>
        <h3>Mission</h3>
        <p>
        Persistently strive, to inculcate the requisite skills in budding I.T. professionals, innovators, and entrepreneurs. Making them competent professionals, enabling them to take up any kind of challenges in any of the industries. Also, to sensitize them towards their social and moral responsibilities.
        </p>
        <h3>Future Plans</h3>
        <ul>
        <li>To improve placement ratio with the help of Alumni</li>
        <li>To improve linkages with the industry and institutes</li>
        <li>To organize State/National level conferences</li>
        <li>To motivate students for industry internships</li>
        </ul>
    </div>
    <div>
        <Footer/>
    </div>
    </div>
);
}

export default InformationTechnolgoy;
