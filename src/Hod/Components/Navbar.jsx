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

  const handleNavigation = (callback) => {
    callback(); // Execute the passed function (like handleFeedBack or handleAllFeedBacks)
    setIsSidebarVisible(false); // Close sidebar after navigation
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
        <div className="AddHod" onClick={()=>handleNavigation(showStudentHandler)}>
          <h4>Add Student</h4>
        </div>
        <div className="AddEvents" onClick={()=>handleNavigation(showFeeDueHandler)}>
          <h4>Add Fee Due</h4>
        </div>
        <div className="AddNotifiCations" onClick={()=>handleNavigation(showAttendenceHandler)}>
          <h4>Add Attendance</h4>
        </div>
        <div className="All-Events" onClick={()=>handleNavigation(showTimetableHandler)}>
          <h4>Add Time Tables</h4>
        </div>
        <div className="All-Notifications" onClick={()=>handleNavigation(showAllStudentHandler)}>
          <h4>All Students</h4>
        </div>
        <div className="All-Notifications" onClick={()=>handleNavigation(showAllTimetableHandler)}>
          <h4>All Time Tables</h4>
        </div>
        <div className="All-Notifications" onClick={()=>handleNavigation(showAllFeeDueHandler)}>
          <h4>All Fee Due</h4>
        </div>
        <div className="All-Notifications" onClick={()=>handleNavigation(showAllAttendenceHandler)}>
          <h4>All Attendance</h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
