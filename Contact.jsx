import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Contact.css';
import PillaiCampus from '../../Assets/pillaicampus.jpg';
import PillaiCampus1 from '../../Assets/pillaicampus2.jpg';

function Contact() {
return (
    <div className="contact-container">
    <header>
        <Navbar />
    </header>

    <main>
        <div className="images">
        <div className="contact-image-left">
            <img src={PillaiCampus} alt="Pillai College Campus" />
        </div>
        <div className="contact-image-right">
            <img src={PillaiCampus1} alt="Pillai College Building" />
        </div>
        </div>

        <section className="contact-info">
        <p>
            <strong>
            Pillai College of Arts, Commerce & Science (Autonomous) Dr. K. M. Vasudevan Pillai Campus Plot No. 10, Sector 16, New Panvel Navi Mumbai, Mumbai-410206, Maharashtra, India
            </strong>
            <br />
            Phone number: 022-2745 1700 / 6100 / 6030 / 2748 1764
            <br />
            Email: pcacs@mes.ac.in, admission@mes.ac.in, pcascsoffice@gmail.com
            <br />
            Website: <a href="http://www.pcacs.ac.in" target="_blank" rel="noopener noreferrer">www.pcacs.ac.in</a>
            <br />
            Contact Person: Dr. Shabab Ahmed Rizvi
            <br />
            Contact Numbers: 97867345438, 02227451700
            <br />
            For admission-related queries:
            <br />
            Call or Whatsapp: 9920297325 | 9819066679
        </p>
        </section>
    </main>

    <footer>
        <Footer />
    </footer>
    </div>
);
}

export default Contact;
