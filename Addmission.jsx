import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AdmissionImage from '../../Assets/Admission.jpg';
import CampusImage from '../../Assets/Campus.jpg';
import './Addmission.css';

function Addmission() {
  return (
    <div>
      <Navbar />
      <div className="admission-container">
        <div className="image-container">
          <img src={AdmissionImage} alt="Admission Process" className="admission-image" />
          <img src={CampusImage} alt="Campus" className="campus-image" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Addmission;
