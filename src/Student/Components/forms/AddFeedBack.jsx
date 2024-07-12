import React, { useState } from 'react'
import { API_URL } from '../../../Principle/data/dataApi';

const AddFeedBack = () => {
  const [branch, setBranch] = useState("");
  const [section, setSection] = useState("")
  const [name, setName] = useState("")
  const [feed, setFeed] = useState("")

  const feedBack = async(e)=>{
    e.preventDefault();
    const studentToken = localStorage.getItem('studentToken')
    try {
      const responce = await fetch(`${API_URL}/feedback/add-feedback`, {
        method:'POST',
        headers :{
          'Content-Type': 'application/json',
          'token' : `${studentToken}`
        },
        body: JSON.stringify({  name, section, branch, feed})
      })
      const data = await responce.json();
      if(responce.ok){
        alert("Feed Back Added Successfully...!!!")
        setBranch("")
        setSection("");
        setName("")
        setFeed("")
        console.log(data)
      }
    } catch (error) {
      alert("Adding Feed back is Failed...!!!")
      console.log(error)
    }
  }
  return (
    <div className='registerSection Notification-Section'>
      <form className="register-form" onSubmit={feedBack}>
        <h3>Add Feed Back</h3>
        
        <label >Name :</label>
        <input type="text" name="name" id="" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' />
        <label>Section: </label>
        <input type="text" name="section" value={section} id="" placeholder='Enter Your Section...!!!' onChange={(e)=>setSection(e.target.value)}/>
        <label>Branch: </label>
        <input type="text" name="branch" value={branch} id="" placeholder='Enter Your Branch..!!!' onChange={(e)=>setBranch(e.target.value)} />
        <label >Feed Back:</label>
        <textarea name="feed" value={feed} onChange={(e)=>setFeed(e.target.value)}  placeholder='Enter Your Feed Back Here..!!!' id=""></textarea>
        <div className="submitBtn">
            <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddFeedBack
