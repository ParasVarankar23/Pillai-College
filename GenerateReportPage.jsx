import React from 'react';
import './GenerateReportPage.css';

const GenerateReportPage = () => {
return (
    <div className="student-report-card">
    <h1>Generate Report Card</h1>
    <form className="report-it">
        <div className="row">
        <label htmlFor="name">Student Name:</label>
        <input type="text" id="name" name="name" required />
        </div>
        <div className="row">
        <label htmlFor="course">Course:</label>
        <select id="course" name="course" required>
            <option value="">Select Course</option>
            <option value="BSc IT">BSc IT</option>
            <option value="BSc CS">BSc CS</option>
            <option value="BCA">BCA</option>
        </select>
        </div>
        <div className="row">
        <label htmlFor="semester">Semester:</label>
        <select id="semester" name="semester" required>
            <option value="">Select Semester</option>
            <option value="Semester I">I</option>
            <option value="Semester II">II</option>
            <option value="Semester III">III</option>
            <option value="Semester IV">IV</option>
            <option value="Semester V">V</option>
            <option value="Semester VI">VI</option>
        </select>
        </div>
        <div className="row">
        <label htmlFor="seatNumber">Seat Number:</label>
        <input type="text" id="seatNumber" name="seatNumber" required />
        </div>
        <div className="row">
        <label htmlFor="photo">Photo:</label>
        <input type="file" id="photo" name="photo" accept="image/*" required />
        </div>
        <div className="subjects">
        <h2>Subjects</h2>
        <div className="subject">
            <div className="row">
            <label htmlFor="subject_code">Code:</label>
            <input type="text" id="subject_code" name="subject_code" required />
            </div>
            <div className="row">
            <label htmlFor="subject_title">Title:</label>
            <input type="text" id="subject_title" name="subject_title" required />
            </div>
            <div className="row">
            <label htmlFor="subject_credits">Credits:</label>
            <input type="number" id="subject_credits" name="subject_credits" required />
            </div>
            <div className="row">
            <label htmlFor="subject_theory">Theory:</label>
            <input type="number" id="subject_theory" name="subject_theory" required />
            </div>
            <div className="row">
            <label htmlFor="subject_internal">Internal:</label>
            <input type="number" id="subject_internal" name="subject_internal" required />
            </div>
            <button type="button" className="remove-btn">Remove Subject</button>
        </div>
        <button type="button" className="add-btn">Add Subject</button>
        </div>
        <button type="submit">Generate Report Card</button>
    </form>
    </div>
);
};

export default GenerateReportPage;
