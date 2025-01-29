import React from 'react'
import './Campus.css'
import campus1 from '../../assets/clg1.jpeg'
import gallery_2 from '../../assets/clg2.jpeg'
import gallery_3 from '../../assets/clg3.jpeg'
import gallery_4 from '../../assets/clg4.jpeg'
import white_arrow from '../../assets/white-arrow.png'
import { Link } from 'react-router-dom'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={campus1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <Link to='/gallery'>
      <button className='btn dark-btn'>See More here <img src={white_arrow} alt="" /></button></Link>
    </div>
  )
}

export default Campus
