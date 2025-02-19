import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './ComputerScience.css';

function ComputerApplication() {
    return (
        <div className="computer-application-page">
            <div>
                <Navbar />
            </div>
            <div className="content">
                <h2>BCA</h2>
                <h3>Program Overview</h3>
                <p>
                    About the Course – Bachelor of Computer Application (BCA)<br />
                    The Department of Information Technology and Computer Science came into being in 2001.
                </p>
                <p>
                    The Department was started with the object of promoting specialized knowledge in the field of Computer Science and Computer Application. The Department strives to channelize talented youth of the region to this challenging and knowledge-intensive field by imparting quality technical knowledge and skills in the field.
                </p>
                <h3>Course Structure</h3>
                <table className="course-table">
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
                            <td>Programming Fundamentals</td>
                            <td>Data Structures</td>
                            <td>Database Management Systems</td>
                            <td>Operating Systems</td>
                            <td>Software Engineering</td>
                            <td>Artificial Intelligence</td>
                        </tr>
                        <tr>
                            <td>Computer Architecture</td>
                            <td>Discrete Mathematics</td>
                            <td>Computer Networks</td>
                            <td>Compiler Design</td>
                            <td>Web Technologies</td>
                            <td>Machine Learning</td>
                        </tr>
                        <tr>
                            <td>Communication Skills</td>
                            <td>Object-Oriented Programming</td>
                            <td>Algorithm Analysis</td>
                            <td>Mobile Application Development</td>
                            <td>Project Management</td>
                            <td>Cloud Computing</td>
                        </tr>
                        <tr>
                            <td>Human Values</td>
                            <td>Environmental Studies</td>
                            <td>Data Visualization</td>
                            <td>Cyber Security</td>
                            <td>Digital Marketing</td>
                            <td>Capstone Project</td>
                        </tr>
                        <tr>
                            <td>Mathematics I</td>
                            <td>Mathematics II</td>
                            <td>Operating Systems</td>
                            <td>Computer Graphics</td>
                            <td>Big Data Analytics</td>
                            <td>Robotics</td>
                        </tr>
                        <tr>
                            <td>Introduction to IT</td>
                            <td>Physics</td>
                            <td>Web Programming</td>
                            <td>Design Patterns</td>
                            <td>Data Mining</td>
                            <td>Network Security</td>
                        </tr>
                    </tbody>
                </table>

                <div className="additional-info">
                    <h3>About the Department</h3>
                    <p>The programmes under the department are:</p>
                    <ul>
                        <li>BCA</li>
                        <li>MBA</li>
                        <li>MCA</li>
                    </ul>
                    <p>The programmes have been designed by the University of Mumbai, keeping in mind the needs of the global Information Technology Industry.</p>
                    <p>We leverage the MoU s signed with Google, Zensar Ltd., Oracle Corp. for progression of our students academics as well as their career.</p>
                    <p>Faculty members of the Department endeavor to be guides, counselors and facilitators to the students in order to sharpen their technical, leadership and organizational skills.</p>
                    <p>The department has adopted various practices for students’ support like:</p>
                    <ul>
                        <li>Student – Student Mentoring</li>
                        <li>Guardian Teacher</li>
                        <li>Students Exchange Programme</li>
                        <li>Advance learners</li>
                    </ul>
                    <p>
                        The Department has a “Computer Association”. It gives a good platform to students for their overall personality development. Various technical as well as social events are conducted under this banner. All these events are organized by students of the department under the guidance of teacher in-charge of the association.
                    </p>
                    <p>We believe in continuous improvement and strive for excellence.</p>
                    <p>Some of the ways adopted to remain focused on our propulsion are:</p>
                    <ul>
                        <li>Unbiased paper assessment</li>
                        <li>Exit feedback from T.Y. students</li>
                        <li>Project Sessions</li>
                        <li>Training for MH-CET for M.C.A. course</li>
                        <li>Alumni associates</li>
                        <li>Students exchange programme</li>
                    </ul>

                    <h3>Vision</h3>
                    <p>
                        Creating competent professionals capable of taking leading role in the industry. To provide the community with the graduates, who will practice the profession with ethics, integrity and social responsibility.
                    </p>

                    <h3>Mission</h3>
                    <p>
                        Persistently strive, to inculcate the requisite skills in the budding I.T. professionals, innovators and entrepreneurs. Making them competent professionals, enabling them to take up any kind of challenges in any of the industry. Also, to sensitize them towards their social and moral responsibilities.
                    </p>

                    <h3>Future Plans</h3>
                    <ul>
                        <li>To improve placement ratio with the help of Alumni</li>
                        <li>To improve linkages with the industry and institutes</li>
                        <li>To organize State/National level conference</li>
                        <li>To motivate student for industry internship</li>
                    </ul>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default ComputerApplication;
