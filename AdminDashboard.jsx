import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { FaUserGraduate, FaChalkboardTeacher, FaBuilding, FaCalendarAlt, FaFileAlt, FaMoneyBill, FaChartBar, FaSignOutAlt, FaCog, FaChevronUp, FaChevronDown, FaTachometerAlt, FaBook } from 'react-icons/fa';
import './AdminDashboard.css';
import PillaiCollege from '../../Assets/pillaicampus2.jpg';

const AdminDashboard = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [studentOpen, setStudentOpen] = useState(false);
    const [teacherOpen, setTeacherOpen] = useState(false);
    const [departmentOpen, setDepartmentOpen] = useState(false);
    const [scheduleOpen, setScheduleOpen] = useState(false);
    const [examOpen, setExamOpen] = useState(false);
    const [paymentOpen, setPaymentOpen] = useState(false);
    const [reportOpen, setReportOpen] = useState(false);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);
    const toggleStudent = () => setStudentOpen(!studentOpen);
    const toggleTeacher = () => setTeacherOpen(!teacherOpen);
    const toggleDepartment = () => setDepartmentOpen(!departmentOpen);
    const toggleSchedule = () => setScheduleOpen(!scheduleOpen);
    const toggleExam = () => setExamOpen(!examOpen);
    const togglePayment = () => setPaymentOpen(!paymentOpen);
    const toggleReport = () => setReportOpen(!reportOpen);

    return (
        <div className="dashboard-container-college">
            <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                <div className="sidebar-container-college">
                    <button className="sidebar-link-button-admin" onClick={toggleSidebar} aria-expanded={isCollapsed}>
                        <MenuIcon className='menu-icon' />
                    </button>
                    <Link to="/Dashboard" className="sidebar-link-button-admin">
                        <FaTachometerAlt className="sidebar-icon" />
                        {!isCollapsed && <span>Dashboard</span>}
                    </Link>
                    <button className="sidebar-link-button-admin" onClick={toggleStudent} aria-expanded={studentOpen} aria-controls="student-submenu">
                        <FaUserGraduate className="sidebar-icon" />
                        {!isCollapsed && <span>Students</span>}
                        {!isCollapsed && (studentOpen ? <FaChevronUp className="sidebar-icon" /> : <FaChevronDown className="sidebar-icon" />)}
                    </button>
                    {!isCollapsed && studentOpen && (
                        <div id="student-submenu" className="student-submenu">
                            <Link to="/student-page" className="sidebar-sublink">
                                <FaUserGraduate className="sidebar-icon" />
                                <span>Add Student</span>
                            </Link>
                            <Link to="/student-list" className="sidebar-sublink">
                                <FaUserGraduate className="sidebar-icon" />
                                <span>Student List</span>
                            </Link>
                        </div>
                    )}
                    <button className="sidebar-link-button-admin" onClick={toggleTeacher} aria-expanded={teacherOpen} aria-controls="teacher-submenu">
                        <FaChalkboardTeacher className="sidebar-icon" />
                        {!isCollapsed && <span>Teachers</span>}
                        {!isCollapsed && (teacherOpen ? <FaChevronUp className="sidebar-icon" /> : <FaChevronDown className="sidebar-icon" />)}
                    </button>
                    {!isCollapsed && teacherOpen && (
                        <div id="teacher-submenu" className="teacher-submenu">
                            <Link to="/teacher-page" className="sidebar-sublink">
                                <FaChalkboardTeacher className="sidebar-icon" />
                                <span>Add Teacher</span>
                            </Link>
                            <Link to="/teacher-list" className="sidebar-sublink">
                                <FaChalkboardTeacher className="sidebar-icon" />
                                <span>Teacher List</span>
                            </Link>
                        </div>
                    )}
                    <button className="sidebar-link-button-admin" onClick={toggleDepartment} aria-expanded={departmentOpen} aria-controls="department-submenu">
                        <FaBuilding className="sidebar-icon" />
                        {!isCollapsed && <span>Departments</span>}
                        {!isCollapsed && (departmentOpen ? <FaChevronUp className="sidebar-icon" /> : <FaChevronDown className="sidebar-icon" />)}
                    </button>
                    {!isCollapsed && departmentOpen && (
                        <div id="department-submenu" className="department-submenu">
                            <Link to="/department-page" className="sidebar-sublink">
                                <FaBuilding className="sidebar-icon" />
                                <span>Add Department</span>
                            </Link>
                            <Link to="/department-list" className="sidebar-sublink">
                                <FaBuilding className="sidebar-icon" />
                                <span>Department List</span>
                            </Link>
                        </div>
                    )}
                    <button className="sidebar-link-button-admin" onClick={toggleSchedule} aria-expanded={scheduleOpen} aria-controls="schedule-submenu">
                        <FaBook className="sidebar-icon" />
                        {!isCollapsed && <span>Courses</span>}
                        {!isCollapsed && (scheduleOpen ? <FaChevronUp className="sidebar-icon" /> : <FaChevronDown className="sidebar-icon" />)}
                    </button>
                    {!isCollapsed && scheduleOpen && (
                        <div id="schedule-submenu" className="schedule-submenu">
                            <Link to="/course-page" className="sidebar-sublink">
                                <FaBook className="sidebar-icon" />
                                <span>Add Course</span>
                            </Link>
                            <Link to="/course-list" className="sidebar-sublink">
                                <FaBook className="sidebar-icon" />
                                <span>Course List</span>
                            </Link>
                        </div>
                    )}
                    <button className="sidebar-link-button-admin" onClick={toggleExam} aria-expanded={examOpen} aria-controls="exam-submenu">
                        <FaCalendarAlt className="sidebar-icon" />
                        {!isCollapsed && <span>Exams</span>}
                        {!isCollapsed && (examOpen ? <FaChevronUp className="sidebar-icon" /> : <FaChevronDown className="sidebar-icon" />)}
                    </button>
                    {!isCollapsed && examOpen && (
                        <div id="exam-submenu" className="exam-submenu">
                            <Link to="/exam-schedule" className="sidebar-sublink">
                                <FaCalendarAlt className="sidebar-icon" />
                                <span>Schedule Exam</span>
                            </Link>
                            <Link to="/exam-list" className="sidebar-sublink">
                                <FaCalendarAlt className="sidebar-icon" />
                                <span>Exam List</span>
                            </Link>
                        </div>
                    )}
                    <button className="sidebar-link-button-admin" onClick={togglePayment} aria-expanded={paymentOpen} aria-controls="payment-submenu">
                        <FaMoneyBill className="sidebar-icon" />
                        {!isCollapsed && <span>Payments</span>}
                        {!isCollapsed && (paymentOpen ? <FaChevronUp className="sidebar-icon" /> : <FaChevronDown className="sidebar-icon" />)}
                    </button>
                    {!isCollapsed && paymentOpen && (
                        <div id="payment-submenu" className="payment-submenu">
                            <Link to="/payment-page" className="sidebar-sublink">
                                <FaMoneyBill className="sidebar-icon" />
                                <span>Add Payment</span>
                            </Link>
                            <Link to="/payment-list" className="sidebar-sublink">
                                <FaMoneyBill className="sidebar-icon" />
                                <span>Payment List</span>
                            </Link>
                        </div>
                    )}
                    <button className="sidebar-link-button-admin" onClick={toggleReport} aria-expanded={reportOpen} aria-controls="reports-submenu">
                        <FaChartBar className="sidebar-icon" />
                        {!isCollapsed && <span>Reports</span>}
                        {!isCollapsed && (reportOpen ? <FaChevronUp className="sidebar-icon" /> : <FaChevronDown className="sidebar-icon" />)}
                    </button>
                    {!isCollapsed && reportOpen && (
                        <div id="reports-submenu" className="reports-submenu">
                            <Link to="/reports" className="sidebar-sublink">
                                <FaFileAlt className="sidebar-icon" />
                                <span>Student Reports</span>
                            </Link>
                        </div>
                    )}
                    <Link to="/settings" className="sidebar-link-button-admin">
                        <FaCog className="sidebar-icon" />
                        <span>Settings</span>
                    </Link>
                    <Link to="/Logout" className="sidebar-link-button-admin">
                        <FaSignOutAlt className="sidebar-icon" />
                        <span>Logout</span>
                    </Link>
                </div>
            </div>
            <div className="main-content">
                <div className="image-container-admin">
                    <h1>Pillai College of Arts, Commerce and Science</h1>
                    <img src={PillaiCollege} alt="Pillai College Campus" />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
