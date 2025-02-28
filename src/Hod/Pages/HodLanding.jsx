import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

import AddAttendence from '../Components/forms/AddAttendence';
import AddStudent from '../Components/forms/AddStudent'
import AddFeedue from '../Components/forms/AddFeedue'
import AddTimeTable from '../Components/forms/AddTimeTable'
import AllAttendence from '../Components/AllAttendence'
import AllFeeDue from '../Components/AllFeeDue'
import AllStudents from '../Components/AllStudents'
import AllTime from '../Components/AllTime'
import Login from '../Components/forms/Login';
import ResetPassword from '../Components/ResetPassword';








const HodLanding = () => {
  const [showAttendence, setShowAttendence] = useState(false);
const [showFeeDue, setShowFeeDue] = useState(false);
const [showStudent, setShowStudent] = useState(false);
const [showTimetable, setShowTimeTable] = useState(false);
const [showAllAttendence, setShowAllAttendence] = useState(false);
const [showAllFeeDue, setShowAllFeeDue] = useState(false);
const [showAllStudent, setShowAllStudent] = useState(false);
const [showAllTimetable, setShowAllTimeTable] = useState(false);
const [showLogin, setShowLogin] = useState(false);
const [logOut, setLogOut] = useState(false);
const [reset, setReset] = useState(false);

useEffect(()=>{
  const hodToken = localStorage.getItem('hodToken');
  if(hodToken){
    setLogOut(true)
  }
},[])

const logOutHandler = ()=>{
  confirm("You Want to LogOut....???")
  localStorage.removeItem('hodId');
  localStorage.removeItem('hodToken');
  localStorage.removeItem('hodName');
  setLogOut(false)
}


const showAttendenceHandler = ()=>{
  if(logOut){
  setShowAttendence(true);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(false)
  }else{
    alert("Please Login...!!!!!!")
    setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(true)

  }
}
const showFeeDueHandler = ()=>{
  if(logOut){
  setShowAttendence(false);
  setShowFeeDue(true)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(false)
  }else{
    alert("Please Login...!!!!!!")
    setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(true)
  }
}
const showStudentHandler = ()=>{
  if(logOut){
  setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(true)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(false)
  }else{
    alert("Please Login...!!!!!!")
    setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(true)
  }
}
const showTimetableHandler= ()=>{
  if(logOut){
  setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(true)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(false)
  }else{
    alert("Please Login...!!!!!!")
    setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(true)
  }
}

const showAllAttendenceHandler = ()=>{
  if(logOut){
  setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(true)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(false)
  }else{
    alert("Please Login...!!!!!!")
    setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(true)
  }
}
const showAllTimetableHandler = ()=>{
  if(logOut){
  setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(true)
  setShowLogin(false)
  }else{
    alert("Please Login...!!!!!!")
    setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(true)
  }
}

const showAllFeeDueHandler = ()=>{
  if(logOut){
  setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(true)
  setShowAllTimeTable(false)
  setShowLogin(false)
  }else{
    alert("Please Login...!!!!!!")
    setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(true)
  }
}

const showAllStudentHandler = () => {
  if(logOut){
  setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(true)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(false)
  }else{
    alert("Please Login...!!!!!!")
    setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(true)
  }
}
const showLoginHandler = () =>{
  setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(true)
  setReset(false)
}
const resetHodPassword = async()=>{
  setShowAttendence(false);
  setShowFeeDue(false)
  setShowAllStudent(false)
  setShowStudent(false)
  setShowTimeTable(false)
  setShowAllAttendence(false)
  setShowAllFeeDue(false)
  setShowAllTimeTable(false)
  setShowLogin(false)
  setReset(true);
}
  return (
    <div>
      <Navbar showLoginHandler = {showLoginHandler} logOutHandler = {logOutHandler} logOut = {logOut} showStudentHandler={showStudentHandler} showFeeDueHandler={showFeeDueHandler}  showAttendenceHandler = {showAttendenceHandler} showAllStudentHandler = {showAllStudentHandler} showAllFeeDueHandler={showAllFeeDueHandler} showAllTimetableHandler={showAllTimetableHandler} showAllAttendenceHandler={showAllAttendenceHandler} showTimetableHandler={showTimetableHandler}/>
      <div className="nav-side">
        {/* <Sidebar /> */}
        {showAttendence && <AddAttendence /> }
        {showAllFeeDue && <AllFeeDue />}
        {showStudent && <AddStudent />}
        {showFeeDue && <AddFeedue />}
        {showTimetable && <AddTimeTable /> }
        {showAllAttendence && <AllAttendence />}
        {showAllStudent && <AllStudents />}
        {showAllTimetable && <AllTime />}
        {showLogin && <Login resetHodPassword={resetHodPassword}/> }
        {reset && <ResetPassword />}
      </div>
    </div>
  )
}

export default HodLanding;

