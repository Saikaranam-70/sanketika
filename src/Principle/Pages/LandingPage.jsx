import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import Sidebar from '../Components/Sidebar'
import Register from '../Components/forms/Register'
import Login from '../Components/forms/Login'
import AddNotification from '../Components/forms/AddNotification'
import AddEvent from '../Components/forms/AddEvent'
import AllEvents from '../Components/AllEvents'
import AllNotifications from '../Components/AllNotifications'
import AddHod from '../Components/forms/AddHod'
import AllHod from '../Components/AllHod'
import UpdateHod from '../Components/UpdateHod'
import Navbar from '../../Components/Navbar/Navbar'
import ResetPassword from '../Components/ResetPassword'




const LandingPage = () => {
  const [showRegister, setShowRegister] = useState(false);
const [showLogin, setShowLogin] = useState(false);
const [showNotification, setShowNotification] = useState(false);
const [showEvents, setShowEvents]= useState(false);
const [allEvents, setAllEvents]= useState(false);
const [allNotifications, setAllNotifications]= useState(false);
const [showLogOut, setShowLogOut] = useState(false);
const [showHod, setShowHod] = useState(false);
const [allHod, setAllHod] = useState(false)
const [update, setUpdate] = useState(false);
const [reset, setReset] = useState(false)


useEffect(()=>{
  const loginToken = localStorage.getItem('loginToken');
  if(loginToken){
    setShowLogOut(true)
  }
},[])

const logOutHandler = ()=>{
  confirm("You Want to LogOut....???")
  localStorage.removeItem('loginToken');
  localStorage.removeItem('principleId');
  localStorage.removeItem('name');
  setShowLogOut(false)
}

const showRegisterHandler = ()=>{
  setShowRegister(true);
  setShowLogin(false);
  setShowNotification(false)
  setShowEvents(false)
  setAllNotifications(false)
  setAllEvents(false)
  setShowHod(false)
  setAllHod(false)
  setUpdate(false)
  setReset(false)
}

const showAddHodHandler = ()=>{
  if(showLogOut){
    setShowLogin(false)
  setShowEvents(false)
  setShowRegister(false);
  setShowNotification(false)
  setAllNotifications(false)
  setAllEvents(false)
  setShowHod(true);
  setAllHod(false)
  setUpdate(false)
  setReset(false)
  }else{
    alert("Please Login First....!!!")
    setShowLogin(true)
  setShowEvents(false)
  setShowRegister(false);
  setShowNotification(false)
  setAllNotifications(false)
  setAllEvents(false)
  setShowHod(false)
  setAllHod(false)
  setUpdate(false)
  setReset(false)

  }
}
const resetPassword = ()=>{
  setShowLogin(false)
  setShowNotification(false)
  setShowEvents(false)
  setShowRegister(false);
  setAllNotifications(false)
  setAllEvents(false)
  setShowHod(false)
  setAllHod(false)
  setUpdate(false)
  setReset(false)
  setReset(true);
}


const showLoginHandler = () =>{
  setShowLogin(true)
  setShowNotification(false)
  setShowEvents(false)
  setShowRegister(false);
  setAllNotifications(false)
  setAllEvents(false)
  setShowHod(false)
  setAllHod(false)
  setUpdate(false)
  setReset(false)

}
const showNotificationHandler = ()=>{
  if(showLogOut){
    setShowLogin(false)
  setShowEvents(false)
  setShowRegister(false);
  setShowNotification(true)
  setAllNotifications(false)
  setAllEvents(false)
  setShowHod(false)
  setAllHod(false)
  setUpdate(false)
  setReset(false)
  }else{
    alert("Please Login First....!!!")
    setShowLogin(true)
  setShowEvents(false)
  setShowRegister(false);
  setShowNotification(false)
  setAllNotifications(false)
  setAllEvents(false)
  setShowHod(false)
  setAllHod(false)
  setUpdate(false)
  setReset(false)
  }

}
const showEventHandler = ()=>{
  if(showLogOut){
    setShowLogin(false)
  setShowRegister(false);
  setShowNotification(false)
  setShowEvents(true)
  setAllNotifications(false)
  setAllEvents(false)
  setShowHod(false)
  setAllHod(false)
  setUpdate(false)
  setReset(false)
  }else{
    alert("Please Login First...!!")
    setShowLogin(true)
  setShowRegister(false);
  setShowNotification(false)
  setShowEvents(false)
  setAllNotifications(false)
  setAllEvents(false)
  setShowHod(false)
  setAllHod(false)
  setUpdate(false)
  setReset(false)
  }
}
const showAllEventHandler = ()=>{
  if(showLogOut){
    setShowLogin(false)
  setShowRegister(false);
  setShowNotification(false)
  setShowEvents(false)
  setAllNotifications(false)
  setAllEvents(true)
  setShowHod(false)
  setAllHod(false)
  setUpdate(false)
  setReset(false)
  }else{
    alert("Please Login First...!!")
    setShowLogin(true)
  setShowRegister(false);
  setShowNotification(false)
  setShowEvents(false)
  setAllNotifications(false)
  setAllEvents(false)
  setShowHod(false)
  setAllHod(false)
  setUpdate(false)
  setReset(false)
  }
}
const showAllNotificationsHandler = ()=>{
  if(showLogOut){
    setShowLogin(false)
  setShowRegister(false);
  setShowNotification(false)
  setShowEvents(false)
  setAllNotifications(true)
  setAllEvents(false)
  setShowHod(false)
  setAllHod(false)
  setUpdate(false)
  setReset(false)
  }else{
    alert("Please Login First...!!")
    setShowLogin(true)
  setShowRegister(false);
  setShowNotification(false)
  setShowEvents(false)
  setAllNotifications(false)
  setAllEvents(false)
  setShowHod(false)
  setAllHod(false)
  setUpdate(false)
  setReset(false)
  }
}
const showAllHodHandler = ()=>{
    if(showLogOut){
      setShowLogin(false)
    setShowRegister(false);
    setShowNotification(false)
    setShowEvents(false)
    setAllNotifications(false)
    setAllEvents(false)
    setShowHod(false)
    setAllHod(true)
    setUpdate(false)
    setReset(false)
    }else{
      alert("Please Login First...!!")
      setShowLogin(true)
    setShowRegister(false);
    setShowNotification(false)
    setShowEvents(false)
    setAllNotifications(false)
    setAllEvents(false)
    setShowHod(false)
    setAllHod(false)
    setUpdate(false)
    setReset(false)
    }
}
const updateHandler = ()=>{
  if(showLogOut){
    setShowLogin(false)
  setShowRegister(false);
  setShowNotification(false)
  setShowEvents(false)
  setAllNotifications(false)
  setAllEvents(false)
  setShowHod(false)
  setAllHod(false)
  setUpdate(true)
  setReset(false)
  }else{
    alert("Please Login First...!!")
    setShowLogin(true)
  setShowRegister(false);
  setShowNotification(false)
  setShowEvents(false)
  setAllNotifications(false)
  setAllEvents(false)
  setShowHod(false)
  setAllHod(false)
  setUpdate(false)
  setReset(false)
  }
}

  return (
    <div>
       <NavBar showLoginHandler = {showLoginHandler} showRegisterHandler={showRegisterHandler} showLogOut={showLogOut} logOutHandler={logOutHandler}/>
      <div className="nav-side">
      <Sidebar showAllHodHandler={showAllHodHandler} showNotificationHandler = {showNotificationHandler} showEventHandler= {showEventHandler} showAllEventHandler ={showAllEventHandler} showAllNotificationsHandler={showAllNotificationsHandler} showAddHodHandler = {showAddHodHandler}/>
        {showLogin && <Login resetPassword={resetPassword}/>}
        {showRegister && <Register showLoginHandler={showLoginHandler}/>}
        {showNotification && <AddNotification />}
        {showEvents && <AddEvent />}
        {allEvents && <AllEvents />}
        {allNotifications && <AllNotifications />}
        {showHod && <AddHod />}
        {allHod && <AllHod updateHandler={updateHandler}/>}
        {update && <UpdateHod />}
        {reset && <ResetPassword />}

      
      </div>
    </div>
  )
}

export default LandingPage
