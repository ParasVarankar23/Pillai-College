import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import PillaiCampus1 from '../../Assets/pillaicampus2.jpg';
import PillaiLogo from '../../Assets/pillailogo.jpg';
import Footer from './Footer';
import './Login.css';
import Navbar from './Navbar';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Check credentials and navigate accordingly
        if (username === 'Admin' && password === 'Admin123#') {
            navigate('/admin-dashboard');
        } else if (username === 'Paras' && password === 'Siddhi126@') {
            navigate('/registration');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="login-container">
                <div className="left-image-login">
                    <img src={PillaiCampus1} alt="Pillai Campus" className="login-campus-image" />
                </div>
                <div className="main-login">
                    <div className="text-login">
                        <form onSubmit={handleLogin}>
                            <img src={PillaiLogo} alt="Pillai Logo" className="logo-login" />
                            <h2>Login</h2>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            /> <br />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            /><br />
                            <button type="submit" className="button-login">Login</button><br />
                        </form>
                        <p>Don't have an account? <Link to="/SignUp">Sign up</Link></p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;
