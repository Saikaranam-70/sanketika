import React, { useEffect, useState } from 'react';
import { API_URL } from '../data/dataApi';
import './Principal.css'

const AllNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    const principleId = localStorage.getItem('principleId');
    try {
      const response = await fetch(`${API_URL}/events/event/${principleId}`);
      const data = await response.json();
      setNotifications(data.events);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const deleteEventById = async (eventId) => {
    if (!window.confirm('Are you sure you want to delete this event?')) return;
    
    try {
      const response = await fetch(`${API_URL}/events/delete/${eventId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setNotifications(notifications.filter((event) => event._id !== eventId));
        alert('Event Deleted Successfully');
      }
    } catch (error) {
      console.error('Failed to delete event:', error);
      alert('Failed to delete event.');
    }
  };

  return (
    <div className='notifications-container'>
      <h2 className='notifications-heading'>All Events</h2>
      <table className='notifications-table'>
        <thead>
          <tr>
            <th className='notifications-th'>Event Date</th>
            <th className='notifications-th'>Event Name</th>
            <th className='notifications-th'>Banner Image</th>
            <th className='notifications-th'>Delete Event</th>
          </tr>
        </thead>
        <tbody>
          {notifications.length > 0 ? (
            notifications.map((item) => (
              <tr key={item._id} className='notifications-row'>
                <td className='notifications-td'>{item.Date}</td>
                <td className='notifications-td'>{item.EventName}</td>
                <td className='notifications-td'>
                  {item.bannerImage && (
                    <img
                      className='notifications-img'
                      src={`${API_URL}/events/uploads/${item.bannerImage}`}
                      alt={item.EventName}
                    />
                  )}
                </td>
                <td className='notifications-td'>
                  <button
                    className='notifications-delete-btn'
                    onClick={() => deleteEventById(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='4' className='notifications-no-data'>
                No events available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllNotifications;
