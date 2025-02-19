import React from 'react';
import Garba from '../../Assets/garba.jpg';
import Shivaji from '../../Assets/shivaji.jpg';
import './Events.css';
import Footer from './Footer';
import Navbar from './Navbar';

function Events() {
  return (
    <div>
      <Navbar />
      <div className="events-container">
        <section className="event-section">
          <h1 className="event-title">Chhatrapati Shivaji Maharaj Jayanti</h1>
          <img src={Shivaji} alt="Shivaji Maharaj Jayanti" className="event-image" />
          <p className="event-description">
            Shivaji Jayanti is celebrated every year on 19th March. The NSS unit of PHCET has organized Shivjayanti utsav on 21st March, 2022. The sole purpose of their program was to enlighten everyone about the great Maratha ruler, Chhatrapati Shivaji Maharaj, the first Chhatrapati and founder of the Maratha Empire.
          </p>
        </section>

        <section className="event-section">
          <h1 className="event-title">Navratri of Pillai College</h1>
          <img src={Garba} alt="Garba Night" className="event-image" />
          <p className="event-description">
            Navratri festival is a joyous way of worshiping Goddess Durga. The festival is celebrated all over the country with joy and fervor. Dressed up in traditional Chaniya Cholis and Churidar Kurtas.
          </p>
        </section>

        <section className="event-section">
          <h1 className="event-title">Alegria is the Festival of Joy in Pillai College for the Students</h1>
          <p className="event-description">
            Mahatma Education Society's Pillai Group of Institutions proudly presents 'Alegria the Festival of Joy' held during the first week of February.
          </p>
          <video controls muted loop className="event-video">
            <source src="https://www.youtube.com/watch?v=SgI1PtJuU7w.mp4" type="video/mp4" />
          </video>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
