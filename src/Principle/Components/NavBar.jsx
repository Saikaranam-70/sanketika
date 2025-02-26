import React from 'react'

const NavBar = ({showLoginHandler, showLogOut,showRegisterHandler, logOutHandler}) => {
  const principleName = localStorage.getItem('name')
  return (
    <div className='navbar' style={{marginTop:'170px'}}>
      <div className="Principle">
        <h3>Principal Dashboard</h3>
      </div>
      <div className="Sankethika">
        <h3>Principal Name: <span style={{color: 'Orange', textTransform: 'uppercase'}}>{principleName}</span></h3>
      </div>
      <div className="login-register">
        {!showLogOut ? <><span onClick={showLoginHandler}>login /</span>
        <span onClick={showRegisterHandler}>register</span>
        </> : <span onClick={logOutHandler}>Logout</span> }
        
      </div>
    </div>
  )
}

export default NavBar
