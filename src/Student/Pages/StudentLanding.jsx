import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
// import Sidebar from '../Components/Sidebar'
import Login from '../Components/forms/Login'
import AddFeedBack from '../Components/forms/AddFeedBack'
import AllFeedBack from '../Components/AllFeedBack'

const StudentLanding = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [allFeedBack, setAllFeedBack] = useState(false)

  useEffect(()=>{
    const studentToken = localStorage.getItem('studentToken')
    if(studentToken){
      setShowLogOut(true)
    }
  },[])

  const handleLogout = () => {
    confirm("You Want to logout...!!!")
    localStorage.removeItem('studentToken')
    localStorage.removeItem('studentId');
    localStorage.removeItem('studentName');
    console.log("called")
    setShowLogOut(false)
  }
  const handleLogin = ()=>{
    setShowLogin(true);
    setFeedback(false);
    setAllFeedBack(false);
  }
  const handleFeedBack = ()=>{
    if(showLogOut){
    setShowLogin(false);
    setFeedback(true);
    setAllFeedBack(false);
    }else{
      alert("Please Login First....!!!")
      setShowLogin(true);
    setFeedback(false);
    setAllFeedBack(false);
    }
    }
  const handleAllFeedBacks = ()=>{
    if(showLogOut){
    setShowLogin(false);
    setFeedback(false);
    setAllFeedBack(true);
    }else{
      alert("Please Login First....!!!")
      setShowLogin(true);
    setFeedback(false);
    setAllFeedBack(false);
    }
  }
  return (
    <div>
      <NavBar handleLogin={handleLogin} showLogOut={showLogOut} handleLogout={handleLogout} handleFeedBack={handleFeedBack} handleAllFeedBacks={handleAllFeedBacks}/>
      <div className="nav-side">
        {/* <Sidebar /> */}
        {showLogin && <Login />}
        {feedback && <AddFeedBack />}
        {allFeedBack && <AllFeedBack />}
      </div>
    </div>
  )
}

export default StudentLanding
