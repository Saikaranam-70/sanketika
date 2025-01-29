import React, { useState } from 'react'
import { API_URL } from '../../data/dataApi';

const AddNotification = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false)

    //const handleImageUpload = (event)=>{
    //    setFile(event.target.files);
    //}

    const handleNotificationSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true)
        try {
            const loginToken = localStorage.getItem('loginToken');
            if(!loginToken){
                console.log("you are not logged in.....!!")
            }
            const formData = new FormData();
            formData.append('name', name);
            formData.append('Date', date);
            formData.append('content', file);
            const responce = await fetch(`${API_URL}/notification/add-notification`, {
                method: 'POST',
                headers:{
                    'token' : `${loginToken}`
                },
                body: formData
            })
            const data = await responce.json();
            if(responce.ok){
                console.log(data)
                alert("Notification added successfully...!!!")
                setName("");
                setDate("");
               // setFile(null);

            }else{
                alert("failed to adding notification")
            }

        } catch (error) {
            console.log(error)
            alert("failed to adding notification")
        }finally{
            setLoading(false)
        }
    }

  return (
    <div className='Notification-Section'>
      <form className="register-form" onSubmit={handleNotificationSubmit}>
        <h3>Add Notification</h3>
        <label>Notification Name :</label><br />
        <input type="text" name="name" value={name} id="" onChange={(e)=>setName(e.target.value)} placeholder='Enter your Notification Name...!!!' /><br />
        <label >Date :</label><br />
        <input type="text" name="Date" id="" value={date} onChange={(e)=>setDate(e.target.value)} placeholder='Enter Notification Upoading Date...!!!'/><br />
        <label >Notification file :</label><br />
        <input type="file" className='file' name="content" id="" accept='application/pdf' onChange={(e)=>setFile(e.target.files[0])} /><br />
        <div className="submitBtn">
            <button type='submit'>submit</button>
            {loading && <div className="spinner"></div>} {/* Show spinner when loading */}
        </div>
      </form>
    </div>
  )
}

export default AddNotification
