import React, { useState } from 'react';
import { API_URL } from '../../../Principle/data/dataApi';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    const handleLogin = async(e)=>{
        e.preventDefault();
        setLoading(true)
    try {
      const responce = await fetch(`${API_URL}/student/login`, {
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
        localStorage.setItem('studentToken', data.token)
        localStorage.setItem('studentId',data.studentId)
        localStorage.setItem('studentName', data.studentName)
        console.log(data)
        
      }
      window.location.reload()
    } catch (error) {
      alert("Logi failed...!!!!!1")
      console.log(error)
    }finally{
      setLoading(false)
    }
    }
    return (
        <div className='loginSection'>
          <form className='register-form' onSubmit={handleLogin}>
          <h3>Student Login</h3><br />
            <label>Email :</label><br />
            <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='enter your Email'/> <br />
            <label>Password:</label><br />
            <input type="password"  name='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='enter your email'/>
            <div className="submitBtn">
                <button type='submit'>Submit</button>
                {loading && <div className="spinner"></div>} {/* Show spinner when loading */}
            </div>
          </form>
        </div>
      )

}
export default Login;
