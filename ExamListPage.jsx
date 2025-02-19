import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ExamListPage.css'; // Include CSS for styling if needed

const ExamListPage = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/exams/');
        const data = await response.json();
        setExams(data);
      } catch (error) {
        console.error('Error fetching exams:', error);
      }
    };

    fetchExams();
}, []);

return (
    <div className="exam-list-page-container">
    <Link to='/exam-schedule'><FaArrowLeft className="back-arrow" /></Link>
    <div className="exam-list-page">
        <h1>Exam List</h1>
        <table className="exam-list-table">
        <thead>
            <tr>
            <th>Exam Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Duration</th>
            <th>Location</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {exams.map(exam => (
            <tr key={exam.id}>
                <td>{exam.examName}</td>
                <td>{exam.date}</td>
                <td>{exam.time}</td>
                <td>{exam.duration}</td>
                <td>{exam.location}</td>
                <td>
                <button onClick={() => console.log('Edit exam')}>
                    <FaEdit />
                </button>
                <button onClick={() => console.log('Delete exam')}>
                    <FaTrashAlt />
                </button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
);
};

export default ExamListPage;
