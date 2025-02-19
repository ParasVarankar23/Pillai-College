import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Association.css';
import Heritage from '../../Assets/heritage.jpg';
import Student from '../../Assets/student.jpg';
import Alegria from '../../Assets/alegria.jpg'

function Association() {
  return (
    <div className="association-container">
      <Navbar />
      <div className="content">
        <div className="section">
          <h1>Heritage Committee</h1>
          <p>
            The Heritage Club at Pillai College is dedicated to promoting awareness and appreciation of India's rich cultural heritage among students...
          </p>
          <img src={Heritage} alt="Heritage" className="association-image" />
          <p>
            This committee plays a pivotal role in connecting students with India's diverse cultural practices, providing them with opportunities to explore and participate in various cultural events. Through these activities, the Heritage Committee fosters a sense of identity and pride in the students, ensuring that they remain rooted in their cultural heritage while progressing academically and socially.
          </p>
        </div>

        <div className="section">
          <h1>Computer Association</h1>
          <p>
            The Computer Association at Pillai College is a student-led group that focuses on advancing knowledge and skills in the field of computer science and information technology...
          </p>
          <img src={Heritage} alt="Computer Association" className="association-image" />
          <p>
            The association also emphasizes the importance of staying current with technological advancements. It provides a platform for students to engage in practical, hands-on experiences that complement their academic learning, preparing them for successful careers in the tech industry.
          </p>
        </div>

        <div className="section">
          <h1>Mathematics Association</h1>
          <p>
            The Mathematics Association at Pillai College aims to foster a deeper understanding and appreciation of mathematics among students...
          </p>
          <img src={Heritage} alt="Mathematics Association" className="association-image" />
          <p>
            By encouraging participation in competitive events and problem-solving workshops, the Mathematics Association helps students develop strong analytical and logical reasoning skills, which are crucial not only in academic pursuits but also in various professional fields.
          </p>
        </div>

        <div className="section">
          <h1>Alegria Committee</h1>
          <p>
            The Alegria Committee is responsible for organizing "Alegria – The Festival of Joy," which is one of the largest and most popular college festivals in Mumbai...
          </p>
          <img src={Alegria} alt="Alegria Committee" className="association-image" />
          <p>
            This festival is a platform for students to showcase their talents, connect with peers from other colleges, and engage in a wide range of cultural and recreational activities. The Alegria Committee ensures that the event is a memorable experience for everyone involved.
          </p>
        </div>

        <div className="section">
          <h1>Student Council</h1>
          <p>
            The Student Council at Pillai College serves as the voice of the student body, representing their interests and concerns to the college administration...
          </p>
          <img src={Student} alt="Student Council" className="association-image" />
          <p>
            Through active participation in college governance, the Student Council helps create a vibrant campus environment where students feel heard and empowered. The council’s initiatives aim to enhance the overall college experience for all students.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Association;
