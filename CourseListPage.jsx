import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CourseListPage.css';

const CourseListPage = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/courses/');
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="course-list-page-container">
            <Link to='/course-page'><FaArrowLeft className="back-arrow" /></Link>
            <div className="course-list-page">
                <h1>Course List</h1>
                <table className="course-list-table">
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Department</th>
                            <th>Credits</th>
                            <th>Semester</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <tr key={course.id}>
                                <td>{course.courseName}</td>
                                <td>{course.department}</td>
                                <td>{course.credits}</td>
                                <td>{course.semester}</td>
                                <td>
                                    <button onClick={() => console.log('Edit course')}>
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => console.log('Delete course')}>
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CourseListPage;
