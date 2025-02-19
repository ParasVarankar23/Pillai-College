import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './StudentListPage.css';

const StudentListPage = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/students');
                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className="student-list-page-container">
            <Link to='/student-page'><FaArrowLeft className="back-arrow" /></Link>
            <div className="student-list-page">
                <h1>Student List</h1>
                <table className="student-list-table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Specialization</th>
                            <th>Gender</th>
                            <th>Blood Group</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student._id}>
                                <td>{student.firstName}</td>
                                <td>{student.middleName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.age}</td>
                                <td>{student.specialization}</td>
                                <td>{student.gender}</td>
                                <td>{student.bloodGroup}</td>
                                <td>{student.contact}</td>
                                <td>{student.address}</td>
                                <td>
                                    <button onClick={() => console.log('Edit student', student._id)}>
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => console.log('Delete student', student._id)}>
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

export default StudentListPage;