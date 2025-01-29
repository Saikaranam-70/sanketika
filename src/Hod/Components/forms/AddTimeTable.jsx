import React, { useState } from 'react'
import { API_URL } from '../../../Principle/data/dataApi';


const AddTimeTable = () => {
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
      formData.append('timeTableImage', file)

      const responce = await fetch(`${API_URL}/timetable/add-timetable`, {
        method:'POST',
        headers:{
          'token': `${hodToken}`
        },
        body: formData
      })
      const data =  await responce.json();
      if(responce.ok){
        alert("Time Table Added Successfully...!!!")
        setBranch("");
        setSection("");
        setFile(null);
        console.log(data)
      }
    } catch (error) {
      alert("Adding Time Table is failed")
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className='registerSection Notification-Section'>
      <form className="register-form" onSubmit={handleAddAttendence}>
        <h3>Add Time Table</h3>
        <label>Branch: </label>
        <input type="text" name="branch" value={branch} id="" placeholder='Enter Your Branch..!!!' onChange={(e)=>setBranch(e.target.value)} />
        <label>Section: </label>
        <input type="text" name="section" value={section} id="" placeholder='Enter Your Section...!!!' onChange={(e)=>setSection(e.target.value)}/>
        <label >Fee Due PdF:</label>
        <input type="file" name="timeTableImage" id="" onChange={(e)=>setFile(e.target.files[0])} />
        <div className="submitBtn">
            <button type='submit'>Submit</button>
            {loading && <div className="spinner"></div>} {/* Show spinner when loading */}
        </div>
      </form>
    </div>
  )
}

export default AddTimeTable;