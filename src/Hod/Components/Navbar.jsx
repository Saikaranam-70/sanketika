import React from 'react'



const Navbar = ({showLoginHandler, logOutHandler, logOut}) => {
  
  const hodName = localStorage.getItem('hodName')
    return (
        <div className='navbar navbar-sidebar' style={{marginTop:'170px'}}>
          
          <div className="Principle">
            <h3>HOD Dashboard</h3>
          </div>
          <div className="Sankethika">
            <h3>HOD Name : <span style={{color: 'Orange', textTransform: 'uppercase'}}>{hodName}</span></h3>
          </div>
          <div className="login-register">

            {!logOut ? <><span onClick={showLoginHandler}>Login</span></>:<span onClick={logOutHandler} >LogOut</span>}
          </div>

        </div>
      )
}

export default Navbar
