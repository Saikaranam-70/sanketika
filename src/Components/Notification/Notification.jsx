import React, { useState, useEffect } from 'react';
import { API_URL } from '../../Principle/data/dataApi';
import './Notification.css'


const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    try {
      const response = await fetch(`${API_URL}/notification/all-notifications`);
      const data = await response.json();
      setNotifications(data.notifications);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="student-notifications">
      <h2 className="student-notifications-title">Sankethika Notifications</h2>
      {!notifications.length ? (
        <p>No Notifications Found</p>
      ) : (
        <table className="student-notifications-table">
          <thead>
            <tr>
              <th>Date of The Notification</th>
              <th>Event Name</th>
              <th>Notification PDF</th>
              <th>View Notification</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((item) => (
              <tr key={item._id}>
                <td>{item.Date}</td>
                <td>{item.name}</td>
                <td>
                  {item.content && (
                    <iframe
                      src={`${API_URL}/notification/uploads/${item.content}`}
                      title="Notification PDF"
                      frameBorder="0"
                    ></iframe>
                  )}
                </td>
                <td>
                  <button
                    className="view-pdf-btn"
                    onClick={() => window.open(`${API_URL}/notification/uploads/${item.content}`)}
                  >
                    View PDF
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

export default Notification;