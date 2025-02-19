import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PCACS from '../../Assets/pcacs.jpg';
import './Navbar.css';

function Navbar() {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isBachelorOpen, setIsBachelorOpen] = useState(false);

  const toggleAcademics = () => setIsAcademicsOpen(!isAcademicsOpen);
  const toggleBachelor = () => setIsBachelorOpen(!isBachelorOpen);

  return (
    <div className="container1">
      <div>
        <img src={PCACS} className='pcacs-header' alt='PCACS Logo' />
      </div>
      <div className="college">
        <nav className="Tags">
          <Link to="/">Home</Link>
          <div className="dropdown">
            <button
              className="dropdown-toggle-academics-custom"
              onClick={toggleAcademics}
              aria-expanded={isAcademicsOpen}
              aria-controls="academics-menu"
              tabIndex="0"
            >
              <span>Academics</span>
              {isAcademicsOpen ? <FaChevronUp className="dropdown-arrow" /> : <FaChevronDown className="dropdown-arrow" />}
            </button>
            {isAcademicsOpen && (
              <div id="academics-menu" className="dropdown-content">
                <div className="dropdown-submenu">
                  <button
                    className="dropdown-toggle-academics-custom"
                    onClick={toggleBachelor}
                    aria-expanded={isBachelorOpen}
                    aria-controls="bachelor-menu"
                    tabIndex="0"
                  >
                    <span>Bachelors</span>
                    {isBachelorOpen ? <FaChevronUp className="dropdown-arrow" /> : <FaChevronDown className="dropdown-arrow" />}
                  </button>
                  {isBachelorOpen && (
                    <div id="bachelor-menu" className="dropdown-content-sub">
                      <Link to="/BSc-IT">BSc IT</Link>
                      <Link to="/BSc-CS">BSc CS</Link>
                      <Link to="/BCA">BCA</Link>
                      <Link to="/BCom">B.Com</Link>
                      <Link to="/BAF">BAF</Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <Link to="/about-us">About Us</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/events">Events</Link>
          <Link to="/admission">Addmission</Link>
          <Link to="/contact">Contact-Us</Link>
          <Link to="/students">Students</Link>
          <Link to="/library">Library</Link>
          <Link to="/association">Association</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
