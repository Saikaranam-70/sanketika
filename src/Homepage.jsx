import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import HodLanding from './Hod/Pages/HodLanding'
import LandingPage from './Principle/Pages/LandingPage'
import StudentLanding from './Student/Pages/StudentLanding'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/hod' element={<HodLanding />}/>
        <Route path='/student' element={<StudentLanding />}/>
        <Route path='/principal' element={<LandingPage />}/>
      </Routes>
    </div>
  )
}

export default HomePage
