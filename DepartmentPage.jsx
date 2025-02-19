import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './DepartmentPage.css';

const DepartmentPage = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [departmentData, setDepartmentData] = useState({
        departmentName: '',
        headOfDepartment: '',
        contact: '',
        location: ''
    });

    const handleChange = (e) => {
        setDepartmentData({
            ...departmentData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/departments/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(departmentData)
            });
            if (response.ok) {
                setIsPopupVisible(true);
                setDepartmentData({
                    departmentName: '',
                    headOfDepartment: '',
                    contact: '',
                    location: ''
                });
            } else {
                console.error('Failed to add department');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className="department-page-container">
            <Link to='/department-list'><FaArrowLeft className="back-arrow" /></Link>
            <div className="department-page">
                <h1>Department Management</h1>
                <form className="department-page-form" onSubmit={handleSubmit}>
                    <h2>Add New Department</h2>
                    <div className="department-page-form-row">
                        <div className="department-page-form-group">
                            <label htmlFor="departmentName">Department Name</label>
                            <input type="text" id="departmentName" name="departmentName" value={departmentData.departmentName} onChange={handleChange} required />
                        </div>
                        <div className="department-page-form-group">
                            <label htmlFor="headOfDepartment">Head of Department</label>
                            <input type="text" id="headOfDepartment" name="headOfDepartment" value={departmentData.headOfDepartment} onChange={handleChange} required />
                        </div>
                        <div className="department-page-form-group">
                            <label htmlFor="contact">Contact</label>
                            <input type="text" id="contact" name="contact" value={departmentData.contact} onChange={handleChange} required />
                        </div>
                        <div className="department-page-form-group">
                            <label htmlFor="location">Location</label>
                            <input type="text" id="location" name="location" value={departmentData.location} onChange={handleChange} required />
                        </div>
                    </div>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
                {isPopupVisible && (
                    <div className="department-page-popup">
                        <div className="department-page-popup-content">
                            <h3>Department Added Successfully!</h3>
                            <button onClick={handleClosePopup}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DepartmentPage;
