import React, { useState } from 'react';
import './SettingPage.css';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SettingPage = () => {
    const [hospitalName, setHospitalName] = useState('City Hospital');
    const [adminEmail, setAdminEmail] = useState('admin@cityhospital.com');
    const [password, setPassword] = useState('');

    const handleSaveChanges = () => {
        console.log('Settings saved:', { hospitalName, adminEmail, password });
    };

    return (
        <div className="settings-page">
            <Link to='/admin-dashboard'>
                <FaArrowLeft className="back-arrow-settings" />
            </Link>
            <h2>Admin Settings</h2>
            <div className="form-group">
                <label htmlFor="hospitalName">Hospital Name</label>
                <input
                    type="text"
                    id="hospitalName"
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="adminEmail">Admin Email</label>
                <input
                    type="email"
                    id="adminEmail"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Change Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleSaveChanges}>Save Changes</button>
        </div>
    );
};

export default SettingPage;
