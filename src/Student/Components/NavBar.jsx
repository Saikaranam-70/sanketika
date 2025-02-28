import React, { useState } from 'react';
import './Navbar.css';

const NavBar = ({
  handleLogin,
  showLogOut,
  handleLogout,
  handleFeedBack,
  handleAllFeedBacks
}) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const studentName = localStorage.getItem('studentName');

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <div className="navbar">
        <div className="Principle">
          <h3>Student Dashboard</h3>
        </div>
        <div className="Sankethika">
          <h3>
            Student Name:{' '}
            <span>{studentName || 'Not Available'}</span>
          </h3>
        </div>
        <div className="login-register">
  {!showLogOut ? (
    <span onClick={handleLogin}>Login</span>
  ) : (
    <span onClick={ handleLogout}>Logout</span>
  )}
</div>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <h4>{isSidebarVisible ? 'Hide Menu' : 'Show Menu'}</h4>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarVisible ? 'active' : ''}`}>
        <div className="AddHod" onClick={handleFeedBack}>
          <h4>Add Feedback</h4>
        </div>
        <div className="AddEvents" onClick={handleAllFeedBacks}>
          <h4>All Feedbacks</h4>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
