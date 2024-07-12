import React, { useEffect, useState } from 'react'
import { API_URL } from '../../Principle/data/dataApi'

const AllFeedBack = () => {
    const [feedback, setFeedback] = useState([])
    const handleFeedBack =  async()=>{
        const studentId = localStorage.getItem('studentId')
        try {
            const responce = await fetch(`${API_URL}/feedback/get-feedback/${studentId}`);
            const data = await responce.json();
            console.log(data)
            setFeedback(data.feedback);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        handleFeedBack()
    },[])
    const deleteFeedback = async(feedbackId) =>{
        try {
            const responce = await fetch(`${API_URL}/feedback/delete-feedback/${feedbackId}`,{
                method:'DELETE'
            })
            if(responce.ok){
                setFeedback(feedback.filter(attendence => attendence._id !== feedbackId));
                confirm("are you sure, you want to delete?");
                alert("FeedBack Deleted Successfully")
              }
        } catch (error) {
            console.log(error)
            alert("deleting failed...!!!!!")
        }
    }
  return (
    <div className='sai'>
      <h2 className='note'>FeeDue</h2>
      {
        !feedback ? (
          <p>FeedBack not found</p>
        ):(

          <div className="table-container">
          <table  className="eventTable">
        <thead>
            <th>Name</th>
          <th>Branch</th>
          <th>Section</th>
          <th>Feed Back</th>
          <th >Delete Feed Back</th>
        </thead>
        <tbody>
          {
            feedback.map((item)=>{
              return(
                <>
                <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.branch}</td>
            <td>{item.section}</td>
            <td className='feedbackCell' >{item.feed}</td>
            <td>
              
              <button className='table-Btn'onClick={()=>deleteFeedback(item._id)} >Delete</button>
            </td>
          </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
      </div>
        )
      }
    </div>
  )
}


export default AllFeedBack
