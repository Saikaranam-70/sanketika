import React, { useState } from 'react'
import { API_URL } from '../../../Principle/data/dataApi';

const AddStudent = () => {
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");
  const [branch, setBranch] = useState("");
  const [section, setSection] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [ loading, setLoading] = useState(false)

  const AddStudenthandle = async(e)=>{
    e.preventDefault();
    setLoading(true)
    try {
      const hodToken = localStorage.getItem('hodToken')
      if(!hodToken){
        alert("Your not logged in...!!!!!")
      }

      const formData = new FormData();
      formData.append('name', name);
      formData.append('pinNo', pin)
      formData.append('branch', branch)
      formData.append('section', section)
      formData.append('password', password)
      formData.append('profilePic', file)
      formData.append('email',email)

      const responce = await fetch(`${API_URL}/student/register`, {
        method:'POST',
        headers:{
          'token':`${hodToken}`
        },
        body: formData
      })
      const data = await responce.json()
      if(responce.ok){
        alert("Student Added Successfully")
        setName("")
        setPin("");
        setBranch("")
        setSection("")
        setPassword("")
        setEmail("");
        setFile(null)
        console.log(data)
      }
    } catch (error) {
      alert("Adding Student Failed")
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className='registerSection Notification-Section'>
      <form  className="register-form" onSubmit={AddStudenthandle}>
        <h3>Add Student</h3>
        <label>Student Name:</label>
        <input type="text" name='name' value={name} placeholder='Enter Student Name...!!!' onChange={(e)=>setName(e.target.value)}/>
        <label>Student Email:</label>
        <input type="text" name='email' value={email} placeholder='Enter Student Email...!!!' onChange={(e)=>setEmail(e.target.value)}/>
        <label >PIN Number:</label>
        <input type="text" name="pinNo" value={pin} id="" placeholder='Enter Pin Number' onChange={(e)=>setPin(e.target.value)}/>
        <label >Branch:</label>
        <input type="text" name="branch" id="" value={branch} placeholder='Enter Branch'onChange={(e)=>setBranch(e.target.value)}/>
        <label >Section:</label>
        <input type="text" name="section" id="" value={section} placeholder='Enter Section'onChange={(e)=>setSection(e.target.value)}/>
        <label >Password</label>
        <input type="text" name="password" id="" value={password} placeholder='Enter Password'onChange={(e)=>setPassword(e.target.value)}/>
        <label >Profile</label>
        <input type="file" name="profilePic" id="" onChange={(e)=>setFile(e.target.files[0])}/>
        <div className="submitBtn">
            <button type='submit'>Submit</button>
            {loading && <div className="spinner"></div>} {/* Show spinner when loading */}
        </div>
      </form>
    </div>
  )
}

export default AddStudent
