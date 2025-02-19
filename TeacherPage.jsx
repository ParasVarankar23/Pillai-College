import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './TeacherPage.css';

const TeacherPage = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [teacherData, setTeacherData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        age: '',
        department: '',
        gender: '',
        contact: '',
        bloodGroup: '',
        address: ''
    });

    const handleChange = (e) => {
        setTeacherData({
            ...teacherData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/teachers/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(teacherData)
            });
            if (response.ok) {
                setIsPopupVisible(true);
                setTeacherData({
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    age: '',
                    department: '',
                    gender: '',
                    contact: '',
                    bloodGroup: '',
                    address: ''
                });
            } else {
                console.error('Failed to add teacher');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className="teacherpage-container">
            <Link to='/teacher-list'><FaArrowLeft className="teacherpage-back-arrow" /></Link>
            <div className="teacherpage">
                <h1>Teacher Management</h1>
                <form className="teacherpage-form" onSubmit={handleSubmit}>
                    <h2>Add New Teacher</h2>
                    <div className="teacherpage-form-row">
                        <div className="teacherpage-form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" value={teacherData.firstName} onChange={handleChange} required />
                        </div>
                        <div className="teacherpage-form-group">
                            <label htmlFor="middleName">Middle Name</label>
                            <input type="text" id="middleName" name="middleName" value={teacherData.middleName} onChange={handleChange} />
                        </div>
                        <div className="teacherpage-form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" value={teacherData.lastName} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="teacherpage-form-row">
                        <div className="teacherpage-form-group">
                            <label htmlFor="age">Age</label>
                            <input type="number" id="age" name="age" value={teacherData.age} onChange={handleChange} required />
                        </div>
                        <div className="teacherpage-form-group">
                            <label htmlFor="department">Department</label>
                            <input type="text" id="department" name="department" value={teacherData.department} onChange={handleChange} required />
                        </div>
                        <div className="teacherpage-form-group">
                            <label htmlFor="gender">Gender</label>
                            <select id="gender" name="gender" value={teacherData.gender} onChange={handleChange} required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="teacherpage-form-row">
                        <div className="teacherpage-form-group">
                            <label htmlFor="contact">Contact</label>
                            <input type="text" id="contact" name="contact" value={teacherData.contact} onChange={handleChange} required />
                        </div>
                        <div className="teacherpage-form-group">
                            <label htmlFor="bloodGroup">Blood Group</label>
                            <select id="bloodGroup" name="bloodGroup" value={teacherData.bloodGroup} onChange={handleChange} required>
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
                        <div className="teacherpage-form-group">
                            <label htmlFor="address">Address</label>
                            <textarea id="address" name="address" value={teacherData.address} onChange={handleChange} required></textarea>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                {isPopupVisible && (
                    <div className="teacherpage-popup">
                        <div className="teacherpage-popup-content">
                            <h3>Teacher Added Successfully!</h3>
                            <button onClick={handleClosePopup}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeacherPage;
