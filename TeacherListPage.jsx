import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './TeacherListPage.css';

const TeacherListPage = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/teachers/');
                const data = await response.json();
                setTeachers(data);
            } catch (error) {
                console.error('Error fetching teachers:', error);
            }
        };

        fetchTeachers();
    }, []);

    return (
        <div className="teacher-list-page-container">
            <Link to='/teacher-page'><FaArrowLeft className="back-arrow" /></Link>
            <div className="teacher-list-page">
                <h1>Teacher List</h1>
                <table className="teacher-list-table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Department</th>
                            <th>Gender</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map(teacher => (
                            <tr key={teacher.id}>
                                <td>{teacher.firstName}</td>
                                <td>{teacher.middleName}</td>
                                <td>{teacher.lastName}</td>
                                <td>{teacher.age}</td>
                                <td>{teacher.department}</td>
                                <td>{teacher.gender}</td>
                                <td>{teacher.contact}</td>
                                <td>{teacher.address}</td>
                                <td>
                                    <button onClick={() => console.log('Edit teacher')}>
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => console.log('Delete teacher')}>
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

export default TeacherListPage;
