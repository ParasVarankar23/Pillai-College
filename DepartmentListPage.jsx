import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './DepartmentListPage.css';

const DepartmentListPage = () => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/departments/');
                const data = await response.json();
                setDepartments(data);
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        };

        fetchDepartments();
    }, []);

    return (
        <div className="department-list-page-container">
            <Link to='/department-page'><FaArrowLeft className="back-arrow" /></Link>
            <div className="department-list-page">
                <h1>Department List</h1>
                <table className="department-list-table">
                    <thead>
                        <tr>
                            <th>Department Name</th>
                            <th>Head of Department</th>
                            <th>Contact</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map(department => (
                            <tr key={department.id}>
                                <td>{department.departmentName}</td>
                                <td>{department.headOfDepartment}</td>
                                <td>{department.contact}</td>
                                <td>{department.location}</td>
                                <td>
                                    <button onClick={() => console.log('Edit department')}>
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => console.log('Delete department')}>
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

export default DepartmentListPage;
