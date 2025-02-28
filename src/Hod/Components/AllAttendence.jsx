import React, { useEffect, useState } from 'react';
import { API_URL } from '../../Principle/data/dataApi';
import './Hod.css';

const AllAttendence = () => {
  const [attendence, setAttendence] = useState([]);

  const fetchAttendence = async () => {
    const hodId = localStorage.getItem('hodId');
    try {
      const response = await fetch(`${API_URL}/attendence/get-attendence/${hodId}`);
      const data = await response.json();
      setAttendence(data.attendence);
    } catch (error) {
      console.error('Failed to fetch attendence:', error);
    }
  };

  useEffect(() => {
    fetchAttendence();
  }, []);

  const deleteAttendenceById = async (attendenceId) => {
    if (!window.confirm('Are you sure you want to delete this attendence?')) return;
    
    try {
      const response = await fetch(`${API_URL}/attendence/delete-attendence/${attendenceId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setAttendence(attendence.filter((item) => item._id !== attendenceId));
        alert('Attendence deleted successfully');
      }
    } catch (error) {
      console.error('Failed to delete attendence:', error);
      alert('Failed to delete attendence');
    }
  };

  return (
    <div className='attendence-container'>
      <h2 className='attendence-heading'>All Attendence</h2>
      <table className='attendence-table'>
        <thead>
          <tr>
            <th className='attendence-th'>Branch</th>
            <th className='attendence-th'>Section</th>
            <th className='attendence-th'>Attendence PDF</th>
            <th className='attendence-th'>View</th>
            <th className='attendence-th'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {attendence.length > 0 ? (
            attendence.map((item) => (
              <tr key={item._id} className='attendence-row'>
                <td className='attendence-td'>{item.branch}</td>
                <td className='attendence-td'>{item.section}</td>
                <td className='attendence-td'>
                  {item.attendencePdf && (
                    <iframe
                      src={`${API_URL}/attendence/uploads/${item.attendencePdf}`}
                      title='Attendence PDF'
                      frameBorder='0'
                    ></iframe>
                  )}
                </td>
                <td className='attendence-td'>
                  <button
                    className='attendence-view-btn'
                    onClick={() => window.open(`${API_URL}/attendence/uploads/${item.attendencePdf}`)}
                  >
                    View PDF
                  </button>
                </td>
                <td className='attendence-td'>
                  <button
                    className='attendence-delete-btn'
                    onClick={() => deleteAttendenceById(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='5' className='attendence-no-data'>No attendence records available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllAttendence;
