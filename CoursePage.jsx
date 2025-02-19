import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CoursePage.css';

const CoursePage = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [courseData, setCourseData] = useState({
        courseName: '',
        department: '',
        credits: '',
        semester: ''
    });

    const handleChange = (e) => {
        setCourseData({
            ...courseData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/courses/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(courseData)
            });
            if (response.ok) {
                setIsPopupVisible(true);
                setCourseData({
                    courseName: '',
                    department: '',
                    credits: '',
                    semester: ''
                });
            } else {
                console.error('Failed to add course');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className="course-page-container">
            <Link to='/course-list'><FaArrowLeft className="back-arrow" /></Link>
            <div className="course-page">
                <h1>Course Management</h1>
                <form className="course-page-form" onSubmit={handleSubmit}>
                    <h2>Add New Course</h2>
                    <div className="course-page-form-row">
                        <div className="course-page-form-group">
                            <label htmlFor="courseName">Course Name</label>
                            <input type="text" id="courseName" name="courseName" value={courseData.courseName} onChange={handleChange} required />
                        </div>
                        <div className="course-page-form-group">
                            <label htmlFor="department">Department</label>
                            <input type="text" id="department" name="department" value={courseData.department} onChange={handleChange} required />
                        </div>
                        <div className="course-page-form-group">
                            <label htmlFor="credits">Credits</label>
                            <input type="number" id="credits" name="credits" value={courseData.credits} onChange={handleChange} required />
                        </div>
                        <div className="course-page-form-group">
                            <label htmlFor="semester">Semester</label>
                            <input type="number" id="semester" name="semester" value={courseData.semester} onChange={handleChange} required />
                        </div>
                    </div>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
                {isPopupVisible && (
                    <div className="course-page-popup">
                        <div className="course-page-popup-content">
                            <h3>Course Added Successfully!</h3>
                            <button onClick={handleClosePopup}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CoursePage;
