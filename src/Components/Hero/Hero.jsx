// import React from 'react'
// import './Hero.css'
// import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-router-dom'

// const Hero = () => {
//   return (
//     <div className='hero container'>
//       <div className="hero-text">
//         <h1>We Ensure better education for a better world</h1>
//         <p>Our cutting-edge curriculum is designed to empower students with the 
//             knowledge, skills and experiences needed to excel in the dynamic field of education
//         </p>
//         
        
//         <button className="btn">Explore more <img src={dark_arrow} alt="" /> </button>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Hero

import React, { useEffect } from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'
import 'aos/dist/aos.css';
import Aos from 'aos';

const Hero = () => {
  useEffect(()=>{
    Aos.init({
      duration: 500,
      easing:'ease-in-out',
      once: false,
    })
  }, [])
  return (
    <div className='home'>
      <div className="home-section">
        <h1 className="head">Sanketika Annual Day Cultural Events</h1>
        <div className="events">
          <button className="event1">Tech Events</button>
          <button className="event2">Cultural Events</button>
          <button className="event3">Sports</button>
          <button className="event4">Student Co-ordinator Registration</button>
        </div>
      </div>
    </div>
  )
}
{/* <h1 className="clg-Head" data-aos="fade-up">
        We Ensure better education <br />for a better world
        </h1>
        <p className="clg-description" data-aos="fade-down">
        Our cutting-edge curriculum is designed to empower students with the <br />knowledge,skills and experiences needed to excel in the dynamic field of education
        </p>
        <Link to='/courses'>
        <button className="courses-offer" data-aos="fade-left">
            Courses We Offer 
        </button>
        </Link> */}

export default Hero
