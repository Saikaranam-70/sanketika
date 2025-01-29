import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import HodLanding from './Hod/Pages/HodLanding'
import LandingPage from './Principle/Pages/LandingPage'
import StudentLanding from './Student/Pages/StudentLanding'
import Gallery from './Components/Gallery/Gallery'
import Courses from './Components/Courses/Courses'
import AllTestimonials from './Components/AllTestimonials/AllTestimonials'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/hod' element={<HodLanding />}/>
        <Route path='/student' element={<StudentLanding />}/>
        <Route path='/principal' element={<LandingPage />}/>
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/test-all' element={<AllTestimonials />} />
      </Routes>
    </div>
  )
}

export default HomePage
