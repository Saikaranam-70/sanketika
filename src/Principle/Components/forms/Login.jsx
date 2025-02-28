import React, { useState } from 'react'
import { API_URL } from '../../data/dataApi';
import ResetPassword from '../ResetPassword';
import '../Principal.css'


const Login = ({resetPassword}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    const logingHandler = async(e)=>{
        e.preventDefault();
        setLoading(true)
        try {
            const responce = await fetch(`${API_URL}/principle/login`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({email, password})
            })
            const data = await responce.json();

            if(responce.ok){
                alert("Login Success.....!!!")
                console.log(data)
                setEmail("");
                setPassword("");
                localStorage.setItem('loginToken', data.token)
                localStorage.setItem('principleId', data.principleId)
            }
            const principleId = data.principleId;
            const principleName = data.principleName
            localStorage.setItem('name', data.principleName)
            console.log(principleId)
            console.log(principleName)
            window.location.reload();
        } catch (error) {
            console.log(error)
        }finally{
          setLoading(false)
        }
    }
  return (
      <div className='loginSection'>
      <form className='register-form' onSubmit={logingHandler}>
      <h3>Principal Login</h3><br />
        <label>Email:</label><br />
        <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/> <br />
        <label>Password:</label><br />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name='password' placeholder='enter your Password'/>
        <div className="submitBtn">
            <button type='submit'>Submit</button>
            {loading && <div className="spinner"></div>} {/* Show spinner when loading */}
        </div><br />
        <div className="resetPassword">
          <h4 style={{color:'red', letterSpacing: '2px'}} onClick={resetPassword}>Reset Password</h4>
        </div>
      </form>
    </div>
  )
}

export default Login
