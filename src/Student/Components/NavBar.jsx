import React from 'react'

const NavBar = ({handleLogin, showLogOut, handleLogout}) => {
  const studentName = localStorage.getItem('studentName')
  return (
    <div className='navbar'>
          <div className="Principle">
            <h3>Student Dashboard</h3>
          </div>
          <div className="Sankethika">
            <h3>Student Name :<span style={{color: 'Orange', textTransform: 'uppercase'}}>{studentName}</span></h3>
          </div>
          <div className="login-register">

            {!showLogOut ? <><span onClick={handleLogin}>Login</span></>:
            <span onClick={handleLogout}>LogOut</span>}           
          </div>
        </div>
  )
}

export default NavBar
