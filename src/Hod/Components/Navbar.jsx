import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({
  showLoginHandler,
  logOutHandler,
  logOut,
  showStudentHandler,
  showFeeDueHandler,
  showAttendenceHandler,
  showTimetableHandler,
  showAllStudentHandler,
  showAllTimetableHandler,
  showAllFeeDueHandler,
  showAllAttendenceHandler,
}) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const hodName = localStorage.getItem('hodName');

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <div className="navbar">
        <div className="Principle">
          <h3>HOD Dashboard</h3>
        </div>
        <div className="Sankethika">
          <h3>
            HOD Name: <span style={{ color: 'Orange', textTransform: 'uppercase' }}>{hodName || 'Not Available'}</span>
          </h3>
        </div>
        <div className="login-register">
          {!logOut ? (
            <span onClick={showLoginHandler}>Login</span>
          ) : (
            <span onClick={logOutHandler}>Logout</span>
          )}
        </div>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <h4>{isSidebarVisible ? 'Hide Menu' : 'Show Menu'}</h4>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarVisible ? 'active' : ''}`}>
        <div className="AddHod" onClick={showStudentHandler}>
          <h4>Add Student</h4>
        </div>
        <div className="AddEvents" onClick={showFeeDueHandler}>
          <h4>Add Fee Due</h4>
        </div>
        <div className="AddNotifiCations" onClick={showAttendenceHandler}>
          <h4>Add Attendance</h4>
        </div>
        <div className="All-Events" onClick={showTimetableHandler}>
          <h4>Add Time Tables</h4>
        </div>
        <div className="All-Notifications" onClick={showAllStudentHandler}>
          <h4>All Students</h4>
        </div>
        <div className="All-Notifications" onClick={showAllTimetableHandler}>
          <h4>All Time Tables</h4>
        </div>
        <div className="All-Notifications" onClick={showAllFeeDueHandler}>
          <h4>All Fee Due</h4>
        </div>
        <div className="All-Notifications" onClick={showAllAttendenceHandler}>
          <h4>All Attendance</h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
