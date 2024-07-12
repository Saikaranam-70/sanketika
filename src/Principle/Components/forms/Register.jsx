import React, { useState } from 'react';
import { API_URL } from '../../data/dataApi';

const Register = ({showLoginHandler}) => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [collegeId, setCollegeId] = useState("");

    const handleLogin = async(e)=>{
        e.preventDefault();

        try {
            const responce = await fetch(`${API_URL}/principle/register`,{
                method : 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({userName, email, password,name,collegeId})
            })
            const data = responce.json();
            if(responce.ok){
                setUserName("");
                setEmail("");
                setPassword("");
                setName("");
                setCollegeId("");
                alert(" Principal Register successfully..........!!!!!")
                showLoginHandler();
                
            }else {
                alert("Email Already Taken Or Principal Of The Sankethika college is Already Exists");

                alert("Please Login Mr.Principal...")
                showLoginHandler();
            }
        } catch (error) {
            console.log(error);
            alert("Registration failed..........!!!")
        }
    }

  return (
    <div className='registerSection'>
        <form className="register-form" onSubmit={handleLogin}>
            <h3>Principal Register</h3>
            <label>User Name :</label>
            <input type="text" value={userName} name='userName' onChange={(e)=>setUserName(e.target.value)} placeholder='Enter your User Name...!!'/>
            <label >Email :</label>
            <input type="email" name='email' id="" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email...!!'/>
            <label >Password :</label>
            <input type="password" name='password' id="" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password...!!'/>
            <label >Name :</label>
            <input type="text" name='Name' id="" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name...!!'/>
            <label >college Id</label>
            <input type="text" name='collegeId' id="" value={collegeId} onChange={(e)=>setCollegeId(e.target.value)} placeholder='Enter CollegeId...!!'/>
            <div className="submitBtn">
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Register
