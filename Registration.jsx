import React from 'react';
import './Registration.css';
import PillaiLogo from '../../Assets/pillailogo.jpg';
import Payment from '../../Assets/payment.jpg'

function Registration() {
    return (
        <div className="container-registration">
            <div className="container-registration-header">
                <div className="container-registration-logo">
                    <img src={PillaiLogo} alt="Pillai College Logo" className="registration-logo-image" />
                    <div className="container-registration-logo-text">
                        <span>p</span>
                        <span>c</span>
                        <span>a</span>
                        <span>c</span>
                        <span>s</span>
                    </div>
                </div>
                <div className="container-registration-college-info">
                    <h3>MAHATMA EDUCATION SOCIETY</h3>
                    <h1>Pillai College of Arts, Commerce and Science (Autonomous)</h1>
                    <p>Affiliated to the University of Mumbai & Recognized by the Govt. of Maharashtra
                    NAAC Accredited 'A' Grade (3 Cycles) ISO.9001:2005 Certified
                    Dr. K. M. Vasudevan Pillai Campus, Sector 16, New Panvel 410206
                    Tel: 2745 6100/ 2745 1700/ 2748 3207/ 2748 3500. Fax: 2748 3208
                    E-mail: pcacsadmission@mes.ac.in Website : <a href="https://pcacs.ac.in/">https://pcacs.ac.in</a></p>
                </div>
            </div>
            <div className="container-registration-admission-info">
                <h1>FIRST YEAR ADMISSION 2024</h1>
                <form className="container-registration-form">
                    <h2 className="underline">Personal Details</h2>
                    <div className="container-registration-form-group row">
                        <div className="container-registration-form-item">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" placeholder="Name" />
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="fatherName">Father's Name:</label>
                            <input type="text" id="fatherName" placeholder="Father's Name" />
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="motherName">Mother's Name:</label>
                            <input type="text" id="motherName" placeholder="Mother's Name" />
                        </div>
                    </div>
                    <div className="container-registration-form-group row">
                        <div className="container-registration-form-item">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" placeholder="Last Name" />
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="gender">Gender:</label>
                            <select id="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="bloodGroup">Blood Group:</label>
                            <select id="bloodGroup">
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                    </div>
                    <div className="container-registration-form-group row">
                        <div className="container-registration-form-item">
                            <label htmlFor="mobileNumber">Mobile Number:</label>
                            <input type="text" id="mobileNumber" placeholder="Mobile Number" />
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="birthDate">Birth Date:</label>
                            <input type="date" id="birthDate" />
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="address">Address:</label>
                            <textarea id="address" placeholder="Address"></textarea>
                        </div>
                    </div>
                    <div className="container-registration-form-group row">
                        <div className="container-registration-form-item">
                            <label htmlFor="photo">Photo:</label>
                            <input type="file" id="photo" />
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="status">Status:</label>
                            <select id="status">
                                <option value="married">Married</option>
                                <option value="unmarried">Unmarried</option>
                            </select>
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="enrollmentDate">Enrollment Date:</label>
                            <input type="date" id="enrollmentDate" />
                        </div>
                    </div>
                    <div className="container-registration-form-group row">
                        <div className="container-registration-form-item">
                            <label htmlFor="admittedYear">Admitted Year:</label>
                            <select id="admittedYear">
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                            </select>
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="applicationId">Application ID:</label>
                            <input type="text" id="applicationId" placeholder="Application ID" />
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="emailId">E-mail ID:</label>
                            <input type="text" id="emailId" placeholder="Email ID" />
                        </div>
                    </div>
                    <div className="container-registration-form-group row">
                        <div className="container-registration-form-item">
                            <label htmlFor="semester">Semester:</label>
                            <input type="text" id="semester" placeholder="Semester" />
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="courseName">Course Name:</label>
                            <select id="courseName">
                                <option value="bsc-it">B.Sc IT</option>
                                <option value="bsc-cs">B.Sc CS</option>
                                <option value="bca">BCA</option>
                            </select>
                        </div>
                    </div>

                    <h2 className="underline">10<sup>th</sup> or SSC Examination</h2>
                    <div className="container-registration-form-group row">
                        <div className="container-registration-form-item">
                            <label htmlFor="sscSchool">School Name:</label>
                            <input type="text" id="sscSchool" placeholder="School Name" />
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="sscBoard">Board:</label>
                            <select id="sscBoard">
                                <option value="maharashtra">Maharashtra</option>
                                <option value="cbse">CBSE</option>
                                <option value="icse">ICSE</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="sscYear">Year:</label>
                            <select id="sscYear">
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                            </select>
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="sscPercentage">Percentage:</label>
                            <input type="text" id="sscPercentage" placeholder="Percentage" />
                        </div>
                    </div>

                    <h2 className="underline">12<sup>th</sup> or HSC Examination</h2>
                    <div className="container-registration-form-group row">
                        <div className="container-registration-form-item">
                            <label htmlFor="hscSchool">School Name:</label>
                            <input type="text" id="hscSchool" placeholder="School Name" />
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="hscBoard">Board:</label>
                            <select id="hscBoard">
                                <option value="maharashtra">Maharashtra</option>
                                <option value="cbse">CBSE</option>
                                <option value="icse">ICSE</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="hscYear">Year:</label>
                            <select id="hscYear">
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                            </select>
                        </div>
                        <div className="container-registration-form-item">
                            <label htmlFor="hscPercentage">Percentage:</label>
                            <input type="text" id="hscPercentage" placeholder="Percentage" />
                        </div>
                    </div>

                    <h2 className="underline">Payment</h2>
                    <div className="container-registration-form-group row">
                        <div className="container-registration-form-item">
                            <label htmlFor="paymentReceipt">Upload Payment Receipt:</label>
                            <input type="file" id="paymentReceipt" />
                            <p className="payment-description">Please upload a scanned copy of your payment receipt.</p>
                            <img src = {Payment} alt="/" className = "payment-logo"/>
                        </div>
                    </div>

                    <div className="container-registration-form-group row">
    <div className="container-registration-form-checkbox">
        <input type="checkbox" id="declaration" className="checkbox" />
        <label htmlFor="declaration" className="checkbox-label">I hereby declare that the information provided is accurate to the best of my knowledge.</label>
    </div>
</div>


                    <button type="submit" className="container-registration-form-submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Registration;
