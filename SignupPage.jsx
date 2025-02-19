import React from 'react';
import './SignupPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import PillaiLogo from '../../Assets/pillailogo.jpg';
import PillaiCampus1 from '../../Assets/pillaicampus2.jpg';

function SignupPage() {
    return (
        <div>
            <Navbar />
            <div className="signup-container">
                <div className="left-image-signup">
                    <img src={PillaiCampus1} alt="Pillai Campus" className="signup-campus-image" />
                </div>
                <div className="main-signup">
                    <div className="text-signup">
                        <img src={PillaiLogo} alt="Sign Up" className="signup-image"/>
                        <h2>Sign Up</h2>
                        <form id="signupForm" onSubmit={validateForm}>
                            <input type="email" id="email" placeholder="Email" required /> <br />
                            <input type="text" id="username" placeholder="Username" required /> <br />
                            <input type="password" id="password" placeholder="Password" required /><br />
                            <input type="password" id="confirmPassword" placeholder="Confirm Password" required /> <br />
                            <button type="submit" className="button-signup">Sign Up</button><br />
                            <p>Have an account?
                                <Link to="/login">Login</Link>
                            </p>
                        </form>
                        <p>Need help? Visit our <a href="https://support.example.com" target="_blank" rel="noopener noreferrer">Support Page</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

function validateForm(e) {
    e.preventDefault();  // Prevent form submission
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        return false;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}

export default SignupPage;
