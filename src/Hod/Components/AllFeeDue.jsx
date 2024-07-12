import React, { useEffect, useState } from 'react'
import { API_URL } from '../../Principle/data/dataApi'

const AllFeeDue = () => {
  const [attendence, setAttendence] = useState([])

  const handleAttendence = async()=>{
    const hodId = localStorage.getItem('hodId')
    try {
      const responce = await fetch(`${API_URL}/feeDue/all-feeDue/${hodId}`)
      const data = await responce.json();
      setAttendence(data.feeDue)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    handleAttendence();
  },[])

  const deleteAttendence = async(attendenceId)=>{
    try {
      const responce = await fetch(`${API_URL}/feeDue/delete-feeDue/${attendenceId}`,{
        method:'DELETE'
      })
      if(responce.ok){
        setAttendence(attendence.filter(attendence => attendence._id !== attendenceId));
        confirm("are you sure, you want to delete?");
        alert("Notification Deleted Successfully")
      }

    } catch (error) {
      console.log(error);
      alert("Failed to Delete Attendence")
    }
  }
  return (
    <div className='sai'>
      <h2 className='note'>FeeDue</h2>
      {
        !attendence ? (
          <p>FeeDue not found</p>
        ):(

          
          <table className="eventTable">
        <thead>
          <th>Branch</th>
          <th>Section</th>
          <th>Attendence pdf</th>
          <th>View Attendence</th>
          <th>Delete Attendence</th>
        </thead>
        <tbody>
          {
            attendence.map((item)=>{
              return(
                <>
                <tr key={item._id}>
            <td>{item.branch}</td>
            <td>{item.section}</td>
            <td>
              {item.feeDuePdf && 
                     <iframe src={`${API_URL}/feeDue/uploads/${item.feeDuePdf}`} frameborder="0"></iframe>

              }</td>
            <td>
              <button className='table-Btn' onClick={()=>window.open(`${API_URL}/feeDue/uploads/${item.feeDuePdf}`)} >View PDF</button>
            </td>
            <td>
              
              <button className='table-Btn' onClick={()=>deleteAttendence(item._id)} >Delete</button>
            </td>
          </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
        )
      }
    </div>
  )
}

export default AllFeeDue
