// import React from 'react'
// import './Principal.css'

// const NavBar = ({showLoginHandler, showLogOut,showRegisterHandler, logOutHandler}) => {
//   const principleName = localStorage.getItem('name')
//   return (
//     <div className='navbar' style={{marginTop:'170px'}}>
//       <div className="Principle">
//         <h3>Principal Dashboard</h3>
//       </div>
//       <div className="Sankethika">
//         <h3>Principal Name: <span style={{color: 'Orange', textTransform: 'uppercase'}}>{principleName}</span></h3>
//       </div>
//       <div className="login-register">
//         {!showLogOut ? <><span onClick={showLoginHandler}>login /</span>
//         <span onClick={showRegisterHandler}>register</span>
//         </> : <span onClick={logOutHandler}>Logout</span> }
        
//       </div>
//     </div>
//   )
// }

// export default NavBar

import React, { useState } from 'react';
import './Navbar.css';

const NavBar = ({
  showLoginHandler,
  showLogOut,
  showRegisterHandler,
  logOutHandler,
  showNotificationHandler,
  showAddHodHandler,
  showEventHandler,
  showAllNotificationsHandler,
  showAllEventHandler,
  showAllHodHandler,
}) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const principleName = localStorage.getItem('name');

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <div className="navbar">
        <div className="Principle">
          <h3>Principal Dashboard</h3>
        </div>
        <div className="Sankethika">
          <h3>
            Principal Name:{' '}
            <span>{principleName || 'Not Available'}</span>
          </h3>
        </div>
        <div className="login-register">
          {!showLogOut ? (
            <>
              <span onClick={showLoginHandler}>Login /</span>
              <span onClick={showRegisterHandler}>Register</span>
            </>
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
        <div className="AddHod" onClick={showAddHodHandler}>
          <h4>Add HOD</h4>
        </div>
        <div className="AddEvents" onClick={showEventHandler}>
          <h4>Add Events</h4>
        </div>
        <div className="AddNotifiCations" onClick={showNotificationHandler}>
          <h4>Add Notifications</h4>
        </div>
        <div className="All-Events" onClick={showAllEventHandler}>
          <h4>All Notifications</h4>
        </div>
        <div className="All-Notifications" onClick={showAllNotificationsHandler}>
          <h4>All Events</h4>
        </div>
        <div className="All-HODs" onClick={showAllHodHandler}>
          <h4>All HOD's</h4>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
