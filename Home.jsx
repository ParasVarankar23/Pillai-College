import React from 'react';
import PillaiCampus from '../../Assets/pillaicampus.jpg';
import PillaiCampus1 from '../../Assets/pillaicampus2.jpg';
import Navbar from './Navbar';
import './Home.css';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="image-wrapper">
        <div className="left-image">
          <img src={PillaiCampus} alt="Pillai Campus 1" />
        </div>
        <div className="right-image">
          <img src={PillaiCampus1} alt="Pillai Campus 2" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
