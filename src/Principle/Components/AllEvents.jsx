import React, { useState,useEffect } from 'react'
import { API_URL } from '../data/dataApi';

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  const EventsHandler = async()=>{
    const principleId = localStorage.getItem('principleId');
  
    try {
      const responce = await fetch(`${API_URL}/notification/${principleId}`)
    const data = await responce.json();
    setEvents(data.notifications)
    console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    EventsHandler();
  }, [])
  const deleteNotificationById = async(notificationId)=>{
    try {
      const responce = await fetch(`${API_URL}/notification/delete/${notificationId}`, {
        method: 'DELETE'
      })
      if(responce.ok){
        setEvents(events.filter(notification => notification._id !== notificationId));
        confirm("are you sure, you want to delete?");
        alert("Notification Deleted Successfully")
      }
    } catch (error) {
      console.log(error);
      alert("Failed to Delete Events")
    }

  }
  return (
    
    <div className='sai'>
      <h2 className='note'>Sankethika Notifications</h2>
      {
        !events ? (
          <p>Notifications not found</p>
        ):(

          
          <table className="eventTable">
        <thead>
          <th>Date of The Notification</th>
          <th>Event Name</th>
          <th>Notification pdf</th>
          <th>View Notification</th>
          <th>Delete Notification</th>
        </thead>
        <tbody>
          {
            events.map((item)=>{
              return(
                
                <>
                <tr key={item._id}>
            <td>{item.Date}</td>
            <td>{item.name}</td>
            <td >
            {item.content &&
                    <iframe src={`${API_URL}/notification/uploads/${item.content}`} frameborder="0"></iframe> }
              
            </td>
            <td>
              <button className='table-Btn' onClick={()=>window.open(`${API_URL}/notification/uploads/${item.content}`)}>View PDF</button>
            </td>
            <td>
              
              <button className='table-Btn' onClick={()=>deleteNotificationById(item._id)}>Delete</button>
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

export default AllEvents
