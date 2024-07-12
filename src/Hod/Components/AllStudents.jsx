
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../Principle/data/dataApi';

const AllStudents = () => {
  const [time, setTime]  = useState([]);

  const allTimeTable = async()=>{
    const hodId = localStorage.getItem('hodId')
    if(!hodId){
      alert("Please Login...!!!")
    }
    try {
      const responce = await fetch(`${API_URL}/student/all-students/${hodId}`)
      const data = await responce.json();
      setTime(data.students)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteTimeTable = async(notificationId)=>{
    try {
      const responce = await fetch(`${API_URL}/student/delete-student/${notificationId}`, {
        method: 'DELETE'
      })
      if(responce.ok){
        setTime(time.filter(timeTable => timeTable._id !== notificationId));
        confirm("are you sure, you want to delete?");
        alert("Notification Deleted Successfully")
      }
    } catch (error) {
      console.log(error);
      alert("Failed to Delete Events")
    }

  }
  useEffect(()=>{
    allTimeTable()
  }, [])
  return (
    <div className='sai'>
      <h2 className='note'>Students</h2>
      {
        !time ? (
          <p>Students not found</p>
        ):(

          
          <table className="eventTable">
        <thead>
          <th>Branch</th>
          <th>name</th>
          <th>Pin Number</th>
          <th>Section</th>
          
          <th>Delete TimeTable</th>
        </thead>
        <tbody>
          {
            time.map((item)=>{
              return(
                <>
                <tr key={item._id}>
            <td>{item.branch}</td>
            <td>{item.name}</td>
            <td>
              {item.pinNo}</td>
              <td>{item.section}</td>
            <td>
              
              <button className='table-Btn' onClick={()=>deleteTimeTable(item._id)}>Delete</button>
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

export default AllStudents











