import React, { useState } from 'react'
import { API_URL } from '../../../Principle/data/dataApi';

const AddAttendence = () => {
  const [branch, setBranch] = useState("");
  const [section, setSection] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false)

  const handleAddAttendence = async(e)=>{
    e.preventDefault();
    setLoading(true)

    try {
      const hodToken = localStorage.getItem('hodToken')
      if(!hodToken){
        alert("You Are Not Logged In...!!")
      }
      const formData = new FormData();
      formData.append('branch', branch)
      formData.append('section', section)
      formData.append('attendencePdf', file)

      const responce = await fetch(`${API_URL}/attendence/add-attendence`, {
        method:'POST',
        headers:{
          'token': `${hodToken}`
        },
        body: formData
      })
      const data =  await responce.json();
      if(responce.ok){
        alert("Attendence Added Successfully...!!!")
        setBranch("");
        setSection("");
        setFile(null);
        console.log(data)
      }
    } catch (error) {
      alert("Adding Attendence is failed")
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className='registerSection Notification-Section'>
      <form className="register-form" onSubmit={handleAddAttendence}>
        <h3>Add Fee Due</h3>
        <label>Branch: </label>
        <input type="text" name="branch" value={branch} id="" placeholder='Enter Your Branch..!!!' onChange={(e)=>setBranch(e.target.value)} />
        <label>Section: </label>
        <input type="text" name="section" value={section} id="" placeholder='Enter Your Section..!!!' onChange={(e)=>setSection(e.target.value)}/>
        <label >Attendence PdF:</label>
        <input type="file" name="attendencePdf" id="" onChange={(e)=>setFile(e.target.files[0])} />
        <div className="submitBtn">
            <button type='submit'>Submit</button>
            {loading && <div className="spinner"></div>} {/* Show spinner when loading */}
        </div>
      </form>
    </div>
  )
}

export default AddAttendence
