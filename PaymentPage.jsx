import React from 'react';
import GooglePay from '../../Assets/payment.jpg';
import './PaymentPage.css';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
return (
    <div className="payment-page-container">
        <Link to='/admin-dashboard'><FaArrowLeft className="back-arrow" /></Link>
    <h1>Payment Page</h1>
    
    <form className="payment-form">
        <label htmlFor="student-id">Student ID:</label>
        <input type="text" id="student-id" name="student-id" />

        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" name="amount" />

        <label htmlFor="payment-method">Payment Method:</label>
        <select id="payment-method" name="payment-method">
        <option value="credit-card">Credit Card</option>
        <option value="debit-card">Debit Card</option>
        <option value="paypal">Online App</option>
        </select>

        <img src={GooglePay} alt="Google Pay" className="GooglePay" />

        <button type="submit">Submit Payment</button>
    </form>
    </div>
);
};

export default PaymentPage;
