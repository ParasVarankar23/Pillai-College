import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'; // Import the Google icon from react-icons
import './Student.css';
import PillaiLogo from '../../Assets/pillailogo.jpg';

export default function Student() {
  return (
    <div>
      <Navbar />
      <div className="main-student">
        <div className="text-student">
          <img src={PillaiLogo} alt="PCACS" className="main-student-image" />
          <h1>PCACS Student Portal</h1>
          <p>Sign in with Student MES Account only.</p>
          <Link to="https://pcacsmis.pillai.edu.in/studentinfosys/studentportal/studinfo_studlogin.aspx" className="link-button">
            <button className="main-student-button">
              <FaGoogle className="google-icon" />
              Continue with Google
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
