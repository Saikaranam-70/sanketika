import React, { useEffect, useState } from 'react'
import { API_URL } from '../data/dataApi';

const AllNotifications = () => {
  const [notification, setNotification]= useState([]);
  const notificationHandler=async()=>{
    const principleId = localStorage.getItem('principleId')
    
    try {
      const responce = await fetch(`${API_URL}/events/event/${principleId}`)
      const data = await responce.json();
      setNotification(data.events);
      console.log(data)
    } catch (error) {
      console.error("failed to Notifications products", notification)
    }
  }
  useEffect(()=>{
    notificationHandler();
  },[])

  const deleteEventById = async(EventId)=>{
    try {
      const responce = await fetch(`${API_URL}/events/delete/${EventId}`, {
        method: 'DELETE'
      })
      if(responce.ok){
        setNotification(notification.filter(event => event._id !== EventId));
        confirm("are you sure, you want to delete?");
        alert("Event Deleted Successfully")
      }
    } catch (error) {
      console.log(error);
      alert("Failed to Delete Events")
    }

  }
  return (
    <div className='sai'>
       <table className="productTable">
          <thead>
               <tr>
                   <th>Event Date</th>
                   <th>Event Name</th>
                   <th>Banner Image</th>
                   <th>Delete Event</th>
               </tr>
           </thead>
           <tbody>
              {
                notification.map((item)=>{
                  return(
                    <>
                    <tr key={item._id}>
                 <td>{item.Date}</td>
                 <td>{item.EventName}</td>
                 <td>
                 {item.bannerImage && (
                    <img style={{width: '100px', height:'50px'}} src={`${API_URL}/events/uploads/${item.bannerImage}`} alt={item.EventName} />
                  )}
                 </td>
                 <td>
                  <button className='table-Btn' onClick={()=>deleteEventById(item._id)}>delete</button>
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

export default AllNotifications
