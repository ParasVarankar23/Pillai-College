import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Library.css'; // Import the CSS file

import LibraryImage1 from '../../Assets/CE.jpg';
import LibraryImage2 from '../../Assets/library1.jpg';
import LibraryImage3 from '../../Assets/library2.jpg';

function Library() {
return (
    <div>
    <Navbar />
    <div className="library-container">
        <h1>Library Information</h1>
        <div className="library-intro">
        <img src={LibraryImage1} alt="Library" className="library-image" />
        <p className="library-description">
            Dear Library Patrons (Teachers and Students), Welcome to the newly added information tools like E-Journals, Pillai's Digital Archive, NPTEL IIT Lecture series and a good number of Open Access Resources through this library website. It would be our endeavor to add more IT-oriented virtual library facilities in the future. All these innovations are brought in with a view to make your every academic activity (Teaching and Learning) qualitatively sound and more meaningful. You are requested to make the optimum use of these tools, increase your presence in the library virtually and physically and suggest to us what are your further needs.
        </p>
        </div>

        <h1>PCACS Library</h1>
        <p className="library-info">
        PCACS Library is a Fully Automated Library with 26,273 plus collections. The collection can be searched from public <b>web OPAC</b> and <b>Rack Index</b>. Checked out books can be monitored through the <b>Book Verification System</b>. The patron can see the number of books issued and their due date by the help of Library Web Application. Email alerts will be sent to the patron for all the library transactions and overdue of items in their possession. Number of patrons visiting the library can be analyzed or summarized by the <b>Student in Out Counter</b>.
        </p>

        <h1>Library Collection</h1>
        <h2><b>The PCACS Library has a huge and varied collection which includes:</b></h2>
        <img src={LibraryImage2} alt="Library Collection" className="collection-image" />
        <table className="collection-table">
        <thead>
            <tr>
            <th>Category</th>
            <th>Count</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Titles</td>
            <td>6,260</td>
            </tr>
            <tr>
            <td>Volumes</td>
            <td>26,451</td>
            </tr>
            <tr>
            <td>Journals & Periodicals</td>
            <td>100</td>
            </tr>
            <tr>
            <td>Project Thesis</td>
            <td>1,520</td>
            </tr>
            <tr>
            <td>Complementary CDs</td>
            <td>1,189</td>
            </tr>
            <tr>
            <td>Multimedia CDs</td>
            <td>80</td>
            </tr>
            <tr>
            <td>Online Databases</td>
            <td>IEEE, K-Hub Engineering DELENT Proquest</td>
            </tr>
            <tr>
            <td>E-books</td>
            <td>35,263</td>
            </tr>
            <tr>
            <td>Newspaper</td>
            <td>4</td>
            </tr>
            <tr>
            <td>Daily Checkouts</td>
            <td>300</td>
            </tr>
            <tr>
            <td>Patron Count</td>
            <td>3,702</td>
            </tr>
            <tr>
            <td>Special Reference Books</td>
            <td>1,012</td>
            </tr>
            <tr>
            <td>Plagiarism Software</td>
            <td>Turnitin</td>
            </tr>
        </tbody>
        </table>
        <img src={LibraryImage3} alt="Library Team" className="team-image" />

        <h1>Library Team</h1>
        <h3>The PCACS Library Staff</h3>
        <table className="team-table">
        <thead>
            <tr>
            <th>Role</th>
            <th>Staff</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Librarian</td>
            <td>Ms. Nayema Nasrin, Mr. Veereshprasad Sawadi</td>
            </tr>
            <tr>
            <td>Library Assistant</td>
            <td>Mrs. Rajshri Gholap, Ms. Komal Shindhe Bapu</td>
            </tr>
            <tr>
            <td>Library Attendant</td>
            <td>Mr. Rohidas Bhoir, Mr. Naresh Patil</td>
            </tr>
        </tbody>
        </table>

        <h3><b>The PCACS library provides the following services to its users:</b></h3>
        <ul className="service-list">
        <li>Lending Service</li>
        <li>Reference Service</li>
        <li>Current Awareness Service (CAS)</li>
        <li>Selective Dissemination of Information (SDI)</li>
        <li>Inter-Library Lending</li>
        <li>Scan and Reprography Service</li>
        </ul>

        <h3>Scan and Deliver System</h3>
        <p>Scan & Deliver is a free document delivery service exclusively for PCE faculty, students, and staff. With Scan & Deliver, you can get scanned copies from print material owned by our library usually within 7 business days.</p>

        <h3>Procedure for Placing the Request</h3>
        <ul className="request-procedure">
        <li>When you find the correct record, choose “Article Request” from the item you want scanned.</li>
        <li>Login with your User ID and password to complete the request form.</li>
        <li>Some fields will be mandatory. Complete all required fields (chapter number, article title, inclusive pages, etc.) and provide any additional information that would help staff fill your request.</li>
        <li>Click Submit Request at the bottom of the request form.</li>
        </ul>
        <p>You will receive an email notification with a link to the PDF when your request is available.</p>

        <h3>Library Timing</h3>
        <h4>The PCACS Library timings are:</h4>
        <table className="timing-table">
        <thead>
            <tr>
            <th>Days</th>
            <th>Timing</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Monday to Saturday (During Semesters)</td>
            <td>8:00 am to 6:00 pm</td>
            </tr>
            <tr>
            <td>Monday to Saturday (During Exams)</td>
            <td>8:00 am to 8:00 pm</td>
            </tr>
        </tbody>
        </table>
    </div>
    <Footer />
    </div>
);
}

export default Library;
