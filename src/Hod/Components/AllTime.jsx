import React, { useEffect, useState } from 'react';
import { API_URL } from '../../Principle/data/dataApi';
import './Hod.css';

const AllTimeTables = () => {
  const [timeTables, setTimeTables] = useState([]);

  const fetchTimeTables = async () => {
    const hodId = localStorage.getItem('hodId');
    if (!hodId) {
      alert('Please Login...!!!');
      return;
    }
    try {
      const response = await fetch(`${API_URL}/timetable/all-timeTable/${hodId}`);
      const data = await response.json();
      setTimeTables(data.timeTable || []);
    } catch (error) {
      console.error('Failed to fetch time tables:', error);
    }
  };

  const deleteTimeTableById = async (timeTableId) => {
    if (!window.confirm('Are you sure you want to delete this time table?')) return;
    try {
      const response = await fetch(`${API_URL}/timetable/delete/timetable/${timeTableId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setTimeTables(timeTables.filter((table) => table._id !== timeTableId));
        alert('Time Table deleted successfully');
      }
    } catch (error) {
      console.error('Failed to delete time table:', error);
      alert('Failed to delete time table');
    }
  };

  useEffect(() => {
    fetchTimeTables();
  }, []);

  return (
    <div className='timeTable-container'>
      <h2 className='timeTable-heading'>All Time Tables</h2>
      {timeTables.length > 0 ? (
        <table className='timeTable-table'>
          <thead>
            <tr>
              <th className='timeTable-th'>Branch</th>
              <th className='timeTable-th'>Section</th>
              <th className='timeTable-th'>Time Table</th>
              <th className='timeTable-th'>View</th>
              <th className='timeTable-th'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {timeTables.map((item) => (
              <tr key={item._id} className='timeTable-row'>
                <td className='timeTable-td'>{item.branch}</td>
                <td className='timeTable-td'>{item.section}</td>
                <td className='timeTable-td'>
                  {item.timeTableImage && (
                    <iframe
                      src={`${API_URL}/timetable/uploads/${item.timeTableImage}`}
                      title='Time Table'
                      className='timeTable-iframe'
                    ></iframe>
                  )}
                </td>
                <td className='timeTable-td'>
                  <button
                    className='timeTable-view-btn'
                    onClick={() => window.open(`${API_URL}/timetable/uploads/${item.timeTableImage}`)}
                  >
                    View PDF
                  </button>
                </td>
                <td className='timeTable-td'>
                  <button
                    className='timeTable-delete-btn'
                    onClick={() => deleteTimeTableById(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className='timeTable-no-data'>No time tables available</p>
      )}
    </div>
  );
};

export default AllTimeTables;
