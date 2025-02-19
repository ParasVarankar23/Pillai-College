import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './PaymentListPage.css';

const PaymentListPage = () => {
const [payments, setPayments] = useState([]);

useEffect(() => {
    const fetchPayments = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/payments/');
        const data = await response.json();
        setPayments(data);
    } catch (error) {
        console.error('Error fetching payments:', error);
    }
    };

    fetchPayments();
}, []);

return (
    <div className="payment-list-page-container">
    <Link to='/payment-page'><FaArrowLeft className="back-arrow" /></Link>
    <div className="payment-list-page">
        <h1>Payment List</h1>
        <table className="payment-list-table">
        <thead>
            <tr>
            <th>Student ID</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Date</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {payments.map(payment => (
            <tr key={payment.id}>
                <td>{payment.studentId}</td>
                <td>{payment.amount}</td>
                <td>{payment.paymentMethod}</td>
                <td>{payment.date}</td>
                <td>
                <button onClick={() => console.log('Edit payment')}>
                    <FaEdit />
                </button>
                <button onClick={() => console.log('Delete payment')}>
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

export default PaymentListPage;
