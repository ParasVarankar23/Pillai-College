import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About';
import Account from './Components/Pages/Account';
import Addmission from './Components/Pages/Addmission';
import AdminDashboard from './Components/Pages/AdminDashboard';
import Association from './Components/Pages/Association';
import Commerce from './Components/Pages/Commerce';
import ComputerApplication from './Components/Pages/ComputerApplication';
import ComputerScience from './Components/Pages/ComputerScience';
import Contact from './Components/Pages/Contact';
import CourseListPage from './Components/Pages/CourseListPage';
import CoursePage from './Components/Pages/CoursePage';
import Dashboard from './Components/Pages/Dashboard';
import DepartmentListPage from './Components/Pages/DepartmentListPage';
import DepartmentPage from './Components/Pages/DepartmentPage';
import Events from './Components/Pages/Events';
import ExamListPage from './Components/Pages/ExamListPage';
import ExamSchedule from './Components/Pages/ExamSchedule';
import GenerateReportPage from './Components/Pages/GenerateReportPage';
import Home from './Components/Pages/Home';
import InformationTechnology from './Components/Pages/InformationTechnology';
import Library from './Components/Pages/Library';
import Login from './Components/Pages/Login';
import PaymentListPage from './Components/Pages/PaymentListPage';
import PaymentPage from './Components/Pages/PaymentPage';
import Registration from './Components/Pages/Registration';
import SettingPage from './Components/Pages/SettingPage';
import SignupPage from './Components/Pages/SignupPage';
import Sports from './Components/Pages/Sports';
import Students from './Components/Pages/Student';
import StudentListPage from './Components/Pages/StudentListPage';
import StudentPage from './Components/Pages/StudentPage';
import TeacherListPage from './Components/Pages/TeacherListPage';
import TeacherPage from './Components/Pages/TeacherPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Addmission />} />
        <Route path="/login" element={<Login />} />
        <Route path="/students" element={<Students />} />
        <Route path="/library" element={<Library />} />
        <Route path="/association" element={<Association />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/bsc-it" element={<InformationTechnology />} />
        <Route path="/bsc-cs" element={<ComputerScience />} />
        <Route path="/bca" element={<ComputerApplication />} />
        <Route path="/bcom" element={<Commerce />} />
        <Route path="/baf" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/student-page" element={<StudentPage />} />
        <Route path="/student-list" element={<StudentListPage />} />
        <Route path="/teacher-page" element={<TeacherPage />} />
        <Route path="/teacher-list" element={<TeacherListPage />} />
        <Route path="/department-page" element={<DepartmentPage />} />
        <Route path="/department-list" element={<DepartmentListPage />} />
        <Route path="/course-page" element={<CoursePage />} />
        <Route path="/course-list" element={<CourseListPage />} />
        <Route path="/exam-schedule" element={<ExamSchedule />} />
        <Route path="/exam-list" element={<ExamListPage />} />
        <Route path="/payment-page" element={<PaymentPage />} />
        <Route path="/payment-list" element={<PaymentListPage />} />
        <Route path="/reports" element={<GenerateReportPage/>}/>
        <Route path="/settings" element={<SettingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
