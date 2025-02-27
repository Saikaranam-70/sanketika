import React, { useEffect, useState } from 'react';
import { API_URL } from '../../Principle/data/dataApi';
import './Events.css'


const Evens = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_URL}/events/all-events`);
      const data = await response.json();
      setEvents(data.events || [])
    } catch (error) {
      console.error('Failed to fetch events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="student-events">
      <h2 className="student-events-title">Upcoming Events</h2>
      {!events.length  ? (
        <p>No Events Found</p>
      ) : (
        <table className="student-events-table">
          <thead>
            <tr>
              <th>Event Date</th>
              <th>Event Name</th>
              <th>Banner Image</th>
            </tr>
          </thead>
          <tbody>
            {events.map((item) => (
              <tr key={item._id}>
                <td>{item.Date}</td>
                <td>{item.EventName}</td>
                <td>
                  {item.bannerImage && (
                    <img
                      src={`${API_URL}/events/uploads/${item.bannerImage}`}
                      alt={item.EventName}
                      className="event-banner"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Evens;