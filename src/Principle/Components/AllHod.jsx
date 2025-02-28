import React, { useEffect, useState } from 'react';
import { API_URL } from '../data/dataApi';
import './Principal.css';

const AllHod = ({ updateHandler }) => {
  const [hod, setHod] = useState([]);

  const fetchAllHod = async () => {
    const principleId = localStorage.getItem('principleId');
    try {
      const response = await fetch(`${API_URL}/hod/all-hod/${principleId}`);
      const data = await response.json();
      setHod(data.hod);
    } catch (error) {
      console.error('Failed to fetch HODs:', error);
    }
  };

  useEffect(() => {
    fetchAllHod();
  }, []);

  const handleDeleteHod = async (hodId) => {
    try {
      const response = await fetch(`${API_URL}/hod/delete-hod/${hodId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setHod(hod.filter((hod) => hod._id !== hodId));
        if (window.confirm('Are you sure you want to delete this HOD?')) {
          alert('HOD deleted successfully.');
        }
      }
    } catch (error) {
      console.error('Failed to delete HOD:', error);
      alert('Failed to delete HOD.');
    }
  };

  return (
    <div className='all-hod-container'>
      <h2 className='all-hod-title'>All HODs</h2>
      <table className='all-hod-table'>
        <thead className='all-hod-thead'>
          <tr>
            <th className='all-hod-th'>Name</th>
            <th className='all-hod-th'>Branch</th>
            <th className='all-hod-th'>Profile Picture</th>
            <th className='all-hod-th'>Update HOD</th>
            <th className='all-hod-th'>Delete HOD</th>
          </tr>
        </thead>
        <tbody className='all-hod-tbody'>
          {hod.map((item) => (
            <tr key={item._id} className='all-hod-row'>
              <td className='all-hod-td'>{item.name}</td>
              <td className='all-hod-td'>{item.branch}</td>
              <td className='all-hod-td'>
                {item.profile && (
                  <img
                    className='all-hod-profile-pic'
                    src={`${API_URL}/hod/uploads/${item.profile}`}
                    alt={item.name}
                  />
                )}
              </td>
              <td className='all-hod-td'>
                <button
                  className='all-hod-update-btn'
                  onClick={updateHandler}
                >
                  Update HOD
                </button>
              </td>
              <td className='all-hod-td'>
                <button
                  className='all-hod-delete-btn'
                  onClick={() => handleDeleteHod(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllHod;
