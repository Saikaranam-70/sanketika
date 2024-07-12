import React, { useEffect, useState } from 'react'
import { API_URL } from '../../Principle/data/dataApi';

const AllTime = () => {
  const [time, setTime]  = useState([]);

  const allTimeTable = async()=>{
    const hodId = localStorage.getItem('hodId')
    if(!hodId){
      alert("Please Login...!!!")
    }
    try {
      const responce = await fetch(`${API_URL}/timetable/all-timeTable/${hodId}`)
      const data = await responce.json();
      setTime(data.timeTable)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteTimeTable = async(notificationId)=>{
    try {
      const responce = await fetch(`${API_URL}/timetable/delete/timetable/${notificationId}`, {
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
      <h2 className='note'>Time Tables</h2>
      {
        !time ? (
          <p>TimeTables not found</p>
        ):(

          
          <table className="eventTable">
        <thead>
          <th>Branch</th>
          <th>Section</th>
          <th>Time Table</th>
          <th>View TimeTable</th>
          <th>Delete TimeTable</th>
        </thead>
        <tbody>
          {
            time.map((item)=>{
              return(
                <>
                <tr key={item._id}>
            <td>{item.branch}</td>
            <td>{item.section}</td>
            <td>
              {item.timeTableImage && 
                     <iframe src={`${API_URL}/timetable/uploads/${item.timeTableImage}`} frameborder="0"></iframe>

              }</td>
            <td>
              <button className='table-Btn' onClick={()=>window.open(`${API_URL}/timetable/uploads/${item.timeTableImage}`)} >View PDF</button>
            </td>
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

export default AllTime
