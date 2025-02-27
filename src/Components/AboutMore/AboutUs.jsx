import React from 'react'
import './AboutUs.css'
import about_img from '../../assets/bg.jpg'
import play_icon from '../../assets/play-icon.png'

const AboutUs = ({setVideo =()=>{}}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} className='about-img' alt="" />
        <img src={play_icon} onClick={()=>{setVideo(true)}} className='play-img' alt="" />
      </div>
      <div className="about-right">
      <h3>ABOUT COLLEGE</h3>
      <h2>Nurturing Tomorrow's Leaders Today</h2>
      <p>Sanketika Polytechnic College, with over 15 years of academic excellence, is renowned for its commitment to quality education in engineering and technology. Established in 2009, the college offers a vibrant campus life, fostering innovation and holistic development among its students.
          </p>
          <p>
          With a focus on innovation, hands-on learning, and personalized mentorship,
           our programs prepare aspiring educators to make a meaningful impact in classrooms,
            schools, and communities
          </p>
          <p>
          Whether you aspire to become a teacher, administrator, counselor, or educational leader,
           our diverse range of programs offers the perfect pathway to achieve your goals and unlock your
            full potential in shaping the future of education.
          </p>
          </div>
    </div>
  )
}

export default AboutUs