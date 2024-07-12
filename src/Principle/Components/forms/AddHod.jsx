import React, { useState } from 'react'
import { API_URL } from '../../data/dataApi';

const AddHod = () => {
    const [userName, setUserName ] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [branch, setBranch] = useState("");
    const [file, setFile] = useState(null);
    
    const handleHodRegister = async(e)=>{
        e.preventDefault();

        const loginToken = localStorage.getItem('loginToken')

        const formData = new FormData();
        formData.append('userName', userName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('name', name);
        formData.append('branch', branch);
        formData.append('profile', file)

        const responce = await fetch(`${API_URL}/hod/register`,{
            method:'POST',
            headers:{
                'token' : `${loginToken}`
            },
            body: formData
        })

        const data = await responce.json();

        if(responce.ok){
            console.log(data)
            console.log(data.success)
            alert("Hod Added successfully");
            setUserName("");
            setEmail("");
            setPassword("");
            setName("");
            setBranch("");
            setFile(null)
        }

    }
  return (
    <div className='registerSection Notification-Section'>
        <form className="register-form" onSubmit={handleHodRegister}>
            <h3>HOD Register</h3>
            <label>User Name :</label>
            <input type="text" value={userName} name='userName' onChange={(e)=>setUserName(e.target.value)} placeholder='Enter your Hod User Name...!!'/>
            <label >Email :</label>
            <input type="email" name='email' id="" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Hod Email...!!'/>
            <label >Password :</label>
            <input type="password" name='password' id="" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Hod Password...!!'/>
            <label >Name :</label>
            <input type="text" name='name' id="" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Hod Name...!!'/>
            <label >Branch</label>
            <input type="text" name='branch' id="" value={branch} onChange={(e)=>setBranch(e.target.value)} placeholder='Enter Hod Branch...!!'/>
            <label >Profile Pic:</label>
            <input type="file" accept='image/jpg' name="profile" id="" onChange={(e)=>setFile(e.target.files[0])}/>
            <div className="submitBtn">
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddHod
