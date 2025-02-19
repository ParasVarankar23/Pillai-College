import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './StudentPage.css';


const StudentPage = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [studentData, setStudentData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        age: '',
        specialization: '',
        gender: '',
        contact: '',
        bloodGroup: '',
        address: ''
    });

    const handleChange = (e) => {
        setStudentData({
            ...studentData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/students/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(studentData)
            });
            if (response.ok) {
                setIsPopupVisible(true);
                setStudentData({
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    age: '',
                    specialization: '',
                    gender: '',
                    contact: '',
                    bloodGroup: '',
                    address: ''
                });
            } else {
                console.error('Failed to add student');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className="studentpage-container">
            <Link to='/student-list'><FaArrowLeft className="studentpage-back-arrow" /></Link>
            <div className="studentpage">
                <h1>Student Management</h1>
                <form className="studentpage-form" onSubmit={handleSubmit}>
                    <h2>Add New Student</h2>
                    <div className="studentpage-form-row">
                        <div className="studentpage-form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" value={studentData.firstName} onChange={handleChange} required />
                        </div>
                        <div className="studentpage-form-group">
                            <label htmlFor="middleName">Middle Name</label>
                            <input type="text" id="middleName" name="middleName" value={studentData.middleName} onChange={handleChange} />
                        </div>
                        <div className="studentpage-form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" value={studentData.lastName} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="studentpage-form-row">
                        <div className="studentpage-form-group">
                            <label htmlFor="age">Age</label>
                            <input type="number" id="age" name="age" value={studentData.age} onChange={handleChange} required />
                        </div>
                        <div className="studentpage-form-group">
                            <label htmlFor="specialization">Specialization</label>
                            <select id="specialization" name="specialization" value={studentData.specialization} onChange={handleChange} required>
                                <option value="">Select Specialization</option>
                                <option value="IT">IT</option>
                                <option value="CS">CS</option>
                                <option value="BCA">BCA</option>
                            </select>
                        </div>
                        <div className="studentpage-form-group">
                            <label htmlFor="gender">Gender</label>
                            <select id="gender" name="gender" value={studentData.gender} onChange={handleChange} required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="studentpage-form-row">
                        <div className="studentpage-form-group">
                            <label htmlFor="contact">Contact</label>
                            <input type="text" id="contact" name="contact" value={studentData.contact} onChange={handleChange} required />
                        </div>
                        <div className="studentpage-form-group">
                            <label htmlFor="bloodGroup">Blood Group</label>
                            <select id="bloodGroup" name="bloodGroup" value={studentData.bloodGroup} onChange={handleChange} required>
                                <option value="">Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                        <div className="studentpage-form-group">
                            <label htmlFor="address">Address</label>
                            <textarea id="address" name="address" value={studentData.address} onChange={handleChange} required></textarea>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                {isPopupVisible && (
                    <div className="studentpage-popup">
                        <div className="studentpage-popup-content">
                            <h3>Student Added Successfully!</h3>
                            <button onClick={handleClosePopup}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentPage;