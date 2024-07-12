import React, { useState } from "react";
import { API_URL } from "../../../Principle/data/dataApi";

const Login = ({resetHodPassword}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin= async(e)=>{
    e.preventDefault();

    try {
      const responce = await fetch(`${API_URL}/hod/login`, {
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
      })
      const data = await responce.json();
      if(responce.ok){
        alert("Login success...!!!!!")
        setEmail("");
        setPassword("");
        console.log(data)
        localStorage.setItem('hodToken', data.token)
        localStorage.setItem('hodId', data.hodId)
        localStorage.setItem('hodName', data.hodName)
        
      }
      window.location.reload();
    } catch (error) {
      alert("Logi failed...!!!!!1")
      console.log(error)
    }

  }
  return (
    <div className='loginSection'>
      <form className='register-form' onSubmit={handleLogin}>
      <h3>Hod Login</h3><br />
        <label>Email:</label><br />
        <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='enter your Email'/> <br />
        <label>Password:</label><br />
        <input type="password"  name='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='enter your email'/>
        <div className="submitBtn">
            <button type='submit'>Submit</button>
        </div>

        <div className="resetPassword">
          <h4 style={{color:'red', letterSpacing: '2px'}} onClick={resetHodPassword}>Reset Password</h4>
        </div>
      </form>
    </div>
  )
};

export default Login;
