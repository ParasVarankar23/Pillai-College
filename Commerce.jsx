import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Commerce() {
    return (
        <div className="commerce-page">
            <div>
                <Navbar />
            </div>
            <div className="content">
                <h2>B.Com</h2>
                <h3>Program Overview</h3>
                <p>
                    B.Com. is the oldest and successful programme of our college. Started with a strength of 80 students in 1998, currently we have 750 students. The strength of the department is qualified and experienced faculty. The department carries a number of activities for the students like guidance sessions, guest lectures, intercollegiate paper presentation competition for students, industrial visits, mock stock exchange, and the like. We also encourage students to participate in research conventions and conduct social activities involving students. B.Com. is a course which supports students for a number of professional courses like C.A., I.C.W.A., C.P.A., M.B.A. etc.
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
                            <td>Financial Accounting I</td>
                            <td>Financial Accounting II</td>
                            <td>Cost Accounting I</td>
                            <td>Cost Accounting II</td>
                            <td>Advanced Financial Accounting</td>
                            <td>Corporate Accounting</td>
                        </tr>
                        <tr>
                            <td>Business Economics I</td>
                            <td>Business Economics II</td>
                            <td>Business Law I</td>
                            <td>Business Law II</td>
                            <td>Financial Management I</td>
                            <td>Financial Management II</td>
                        </tr>
                        <tr>
                            <td>Commerce I</td>
                            <td>Commerce II</td>
                            <td>Marketing Management</td>
                            <td>Human Resource Management</td>
                            <td>Auditing</td>
                            <td>Income Tax Law</td>
                        </tr>
                        <tr>
                            <td>Business Communication</td>
                            <td>Corporate Communication</td>
                            <td>Business Statistics</td>
                            <td>Operations Research</td>
                            <td>Strategic Management</td>
                            <td>Management Information Systems</td>
                        </tr>
                        <tr>
                            <td>Environmental Studies I</td>
                            <td>Environmental Studies II</td>
                            <td>Banking & Insurance I</td>
                            <td>Banking & Insurance II</td>
                            <td>Entrepreneurship Development</td>
                            <td>International Finance</td>
                        </tr>
                        <tr>
                            <td>Computer Applications in Business</td>
                            <td>Office Automation</td>
                            <td>E-Commerce</td>
                            <td>Digital Marketing</td>
                            <td>Investment Analysis</td>
                            <td>Portfolio Management</td>
                        </tr>
                    </tbody>
                </table>

                <div className="additional-info">
                    <h3>Vision</h3>
                    <p>Our vision is to care for the needs of the students with academically and economically diverse backgrounds.</p>

                    <h3>Mission</h3>
                    <p>To impart quality education and create social consciousness for the all-round development of our students.</p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Commerce;
