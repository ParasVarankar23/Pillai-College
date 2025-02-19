import React from 'react';
import Football from '../../Assets/sports1.jpg';
import Ground from '../../Assets/sports2.jpg';
import Riffle from '../../Assets/sports3.jpg';
import Footer from './Footer';
import Navbar from './Navbar';
import './Sports.css';
function Sports() {
return (
    <div>
    <Navbar />
    <div className="sports-container">
        <table className="sports-table">
        <caption>Sports Report 2023-24</caption>
        <thead>
            <tr className="header-row">
            <th>Discipline</th>
            <th>Event</th>
            <th>Remarks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Table Tennis</td>
            <td>Mumbai University Kokan Zone Men Championship</td>
            <td>Bronze Medal</td>
            </tr>
            <tr>
            <td>Chess</td>
            <td>Mumbai University Kokan Zone Men Championship</td>
            <td>Gold Medal</td>
            </tr>
            <tr>
            <td>Chess</td>
            <td>Mumbai University Kokan Zone Women Championship</td>
            <td>Participated</td>
            </tr>
            <tr>
            <td>Badminton</td>
            <td>Mumbai University Kokan Zone Men Championship</td>
            <td>Runners-up</td>
            </tr>
            <tr>
            <td>Power Lifting</td>
            <td>Mumbai University Kokan Zone Men Championship</td>
            <td>Silver Medal</td>
            </tr>
            <tr>
            <td>Power Lifting</td>
            <td>Mumbai University Kokan Zone Women Championship</td>
            <td>Bronze Medal</td>
            </tr>
            <tr>
            <td>Rifle Shooting</td>
            <td>Mumbai University Kokan Zone Men Championship</td>
            <td>Winner</td>
            </tr>
        </tbody>
        </table>

        <div className="sports-images">
        <img src={Football} alt="Mumbai University Men's Football Championship" className="sports-image" />
        <p><strong>Mumbai University Men's Football Championship</strong><br />
        PCACS Football Team won the Mumbai University Men's Football Championship for the second consecutive year. Pillai College</p>

        <img src={Ground} alt="Pillai Taekwondo stars strikes Gold at National Level Championship" className="sports-image" />
        <p><strong>Pillai Taekwondo stars strikes Gold at National Level Championship</strong><br />
        The upcoming star Taekwondo players of Pillai College of Arts, Commerce & Science, New Panvel won 2 Gold Medals.</p>

        <img src={Riffle} alt="PCACS Rifle Shooting Championship" className="sports-image" />
        <p><strong>PCACS, New Panvel settled with Silver & Bronze at Mumbai University Rifle Shooting Championship 2018-19</strong><br />
        Pillai College of Arts, Commerce & Science, New Panvel, Rifle Shooting Women Team won Peep Sight Bronze Medal.</p>
        </div>
    </div>
    <Footer />
    </div>
);
}

export default Sports;
