import React, { useState, useEffect } from 'react';
import { API_URL } from '../data/dataApi';
import './Principal.css';

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const principleId = localStorage.getItem('principleId');
    try {
      const response = await fetch(`${API_URL}/notification/${principleId}`);
      const data = await response.json();
      setEvents(data.notifications);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const deleteNotificationById = async (notificationId) => {
    try {
      const response = await fetch(`${API_URL}/notification/delete/${notificationId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setEvents(events.filter((notification) => notification._id !== notificationId));
        if (window.confirm('Are you sure you want to delete this notification?')) {
          alert('Notification deleted successfully.');
        }
      }
    } catch (error) {
      console.error('Error deleting notification:', error);
      alert('Failed to delete event.');
    }
  };

  return (
    <div className='all-events-container'>
      <h2 className='all-events-heading'>Sankethika Notifications</h2>
      {!events.length ? (
        <p className='all-events-no-data'>No notifications found</p>
      ) : (
        <table className='all-events-table'>
          <thead className='all-events-thead'>
            <tr>
              <th className='all-events-th'>Date of Notification</th>
              <th className='all-events-th'>Event Name</th>
              <th className='all-events-th'>Notification PDF</th>
              <th className='all-events-th'>View Notification</th>
              <th className='all-events-th'>Delete Notification</th>
            </tr>
          </thead>
          <tbody className='all-events-tbody'>
            {events.map((item) => (
              <tr key={item._id} className='all-events-row'>
                <td className='all-events-td'>{item.Date}</td>
                <td className='all-events-td'>{item.name}</td>
                <td className='all-events-td'>
                  {item.content && (
                    <iframe
                      src={`${API_URL}/notification/uploads/${item.content}`}
                      className='all-events-iframe'
                      title='Notification PDF'
                    ></iframe>
                  )}
                </td>
                <td className='all-events-td'>
                  <button
                    className='all-events-view-btn'
                    onClick={() =>
                      window.open(`${API_URL}/notification/uploads/${item.content}`)
                    }
                  >
                    View PDF
                  </button>
                </td>
                <td className='all-events-td'>
                  <button
                    className='all-events-delete-btn'
                    onClick={() => deleteNotificationById(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllEvents;
