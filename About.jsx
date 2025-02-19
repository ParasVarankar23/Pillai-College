import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './About.css';

function About() {
return (
    <div>
    <Navbar />

    <div className="about">
        <p>
        Pillai College of Arts, Commerce and Science was established in 1998 by Dr. K. M.
        Vasudevan Pillai, Chairman and CEO, MES whose vision was to provide students of Navi
        Mumbai with quality education in a high-tech atmosphere. It is situated on 10 acres
        of land surrounded by natural beauty and supported by the best infrastructure facilities, 
        a state-of-the-art conference room, well-equipped computer labs, and well-stocked libraries.
        </p>

        <h2>Vision</h2>
        <p>
        <strong>Our vision is "Education for All."</strong> To fulfill our vision, we welcome students
        from diverse backgrounds irrespective of region, religion, caste, economic strata, and academic
        performance.
        </p>

        <h2>Mission</h2>
        <ul style={{ listStyleType: 'circle' }}>
        <li>
            Achieving excellence in education by maintaining high standards of teaching, shaping
            talents of students, molding their character, and imbibing in them a sense of civic
            responsibility.
        </li>
        <li>
            Empowering students to become able, responsible citizens by imparting quality education
            and inculcating sound values.
        </li>
        <li>
            Providing the best infrastructure comparable to international standards.
        </li>
        </ul>

        <h2>Organizational Goals</h2>
        <ul style={{ listStyleType: 'circle' }}>
        <li>To provide quality education.</li>
        <li>To create employment potential.</li>
        <li>To provide community service.</li>
        <li>To provide youth for community service.</li>
        <li>To achieve the overall development of students.</li>
        <li>Respect for the environment.</li>
        </ul>
    </div>

    <Footer />
    </div>
);
}

export default About;
