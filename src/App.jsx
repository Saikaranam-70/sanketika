import React, { useState } from 'react'
import LandingPage from './Principle/Pages/LandingPage'
import './App.css'
import HodLanding from './Hod/Pages/HodLanding'
import StudentLanding from './Student/Pages/StudentLanding'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/Video/Video'


const App = () => {

  const [video, setVideo] = useState(false);

  return (
    <div>
      <Hero />
      <div className="container">
        <Title subTitle = 'Our Courses' title = 'What We Offer' />
        <Programs />
        <About setVideo = {setVideo}/>
        <Title subTitle = 'Gallery' title = 'Campus Photos' />
        <Campus />
        {/* <Title subTitle = 'TESTIMONIALS' title = 'What Students Says' />
        <Testimonials /> */}
        <Title subTitle = 'Contact Us' title = 'Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <Video video={video} setVideo={setVideo}/>
    </div>
  )
}

export default App
