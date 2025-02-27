import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import HodLanding from './Hod/Pages/HodLanding'
import LandingPage from './Principle/Pages/LandingPage'
import StudentLanding from './Student/Pages/StudentLanding'
import Gallery from './Components/Gallery/Gallery'
import Courses from './Components/Courses/Courses'
import AllTestimonials from './Components/AllTestimonials/AllTestimonials'
import AboutUs from './Components/AboutMore/AboutUs'
// import About from './Components/About/About'
import Video from './Components/Video/Video'
import Aiml from './Components/Branches/AIML/Aiml'
import Automobile from './Components/Branches/Automobile/Automobile'
import Civil from './Components/Branches/Civil/Civil'
import Cme from './Components/Branches/CME/Cme'
import Ece from './Components/Branches/ECE/Ece'
import Eee from './Components/Branches/EEE/Eee'
import Mech from './Components/Branches/Mech/Mech'
import AboutOfficers from './Components/AboutUs/AboutUs'
import Admission from './Components/Admission/Admission'
import Library from './Components/Library/Library'
import Sports from './Components/Sports/Sports'
import Transportation from './Components/Transportation/Transportation'
import Placements from './Components/Placements/Placements'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Notification from './Components/Notification/Notification'
import Evens from './Components/Events/Evens'
import Attendence from './Components/Attendence/Attendence'


const HomePage = () => {
  const [video, setVideo] = useState(false);
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
        <Route path='/about-more' element={<AboutUs setVideo={setVideo}/>} />
        <Route path='/aiml' element={<Aiml />} />
        <Route path='/automobile' element={<Automobile />} />
        <Route path='/civil' element={<Civil />} />
        <Route path='/cme' element={<Cme />} />
        <Route path='/ece' element={<Ece />} />
        <Route path='/eee' element={<Eee />} />
        <Route path='/mech' element={<Mech />} />
        <Route path='/about-us' element={<AboutOfficers />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/library' element={<Library />} />
        <Route path='/overview' element={<AboutUs />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/transportation' element={<Transportation />} />
        <Route path='/placements' element={<Placements />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/notifications' element={<Notification />} />
        <Route path='/events' element={<Evens />} />
        <Route path='/attendence' element={<Attendence />} />
      </Routes>
      <Footer />
      <Video video={video} setVideo={setVideo}/>
    </div>
  )
}

export default HomePage
