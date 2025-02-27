import React, { useEffect } from 'react'
import './Campus.css'
import campus1 from '../../assets/clg1.webp'
import gallery_2 from '../../assets/clg2.webp'
import gallery_3 from '../../assets/clg3.webp'
import gallery_4 from '../../assets/clg4.webp'
import white_arrow from '../../assets/white-arrow.webp'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Campus = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out', 
      once: false, 
    });
  }, []);
  return (
    <div className='campus'>
      <div className="gallery" data-aos="fade-right">
        <img src={campus1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <Link to='/gallery'>
      <button className='btn dark-btn' data-aos="fade-up">See More here <img src={white_arrow} alt="" /></button></Link>
    </div>
  )
}

export default Campus
