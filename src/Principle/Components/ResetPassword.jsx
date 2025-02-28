import React, { useState } from 'react'
import { API_URL } from '../data/dataApi';
import './Principal.css'

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [userotp, setUserotp] = useState(null);
    const [verify, setVerify] = useState([]);

    const generateOtp = async(e)=>{
        e.preventDefault();
        try {
            const responce = await fetch(`${API_URL}/otp/get-otp`,{
                method:'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({email})
            })
            const data = await responce.json();

            if(responce.ok){
                alert("OTP sent successfully...!!!!")
                console.log(data)
            }
    
        } catch (error) {
            console.log(error)
            alert("failed to send otp")
        }
    }
    const verifyOtp = async(e)=>{
        e.preventDefault();
        try {
            const responce = await fetch(`${API_URL}/otp/verify`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userotp})
            })
            const data = await responce.json();
            if(responce.ok){
                alert("OTP Verified successfully ...!! Please Enter Your new Password..!!")
                console.log(data)
                setVerify(data);
                console.log(verify, "My name is sai")
            }
        } catch (error) {
            console.log(error);
            alert("Please Eneter a valid OTP")
        }
    }
    const resetPassword = async(e)=>{
        e.preventDefault();
        try {
            const responce = await fetch(`${API_URL}/reset/change-pass`, {
                method:'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({email, newPassword, userotp})
            })
            const data = await responce.json();
            if(responce.ok){
                alert("password updated successfully")
                console.log(data);
            }
        } catch (error) {
            console.log(error)
            alert("failed....")
        }
    }
  return (
    <div className='loginSection'>
      <form className='register-form' onSubmit={resetPassword}>
      <h3>Reset Password</h3><br />
        <label>Email:</label><br />
        <div className="otpbtn">
        <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/> <button onClick={generateOtp}>Send OTP</button> </div><br />
        <label>OTP:</label><br />
        <div className="otpbtn">
        <input type="number"  value={userotp} onChange={(e)=>setUserotp(e.target.value)} placeholder='enter your OTP'/> <button onClick={verifyOtp}>Verify Otp</button>
        </div>
        {
            verify.success === 'OTP Verified Successfull...!!' ? 
            <>
            <label>New Password:</label><br />
            <input type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}  placeholder='enter your New Password'/> <br />
            <div className="submitBtn">
            <button type='submit'>Submit</button>
        </div>
            </> : " "
        }
        
      </form>
    </div>
  )
}

export default ResetPassword
