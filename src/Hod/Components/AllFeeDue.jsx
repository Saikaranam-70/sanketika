import React, { useEffect, useState } from 'react';
import { API_URL } from '../../Principle/data/dataApi';
import './Hod.css';

const AllFeeDue = () => {
  const [feeDue, setFeeDue] = useState([]);

  const fetchFeeDue = async () => {
    const hodId = localStorage.getItem('hodId');
    try {
      const response = await fetch(`${API_URL}/feeDue/all-feeDue/${hodId}`);
      const data = await response.json();
      setFeeDue(data.feeDue);
    } catch (error) {
      console.error('Failed to fetch fee due:', error);
    }
  };

  useEffect(() => {
    fetchFeeDue();
  }, []);

  const deleteFeeDueById = async (feeDueId) => {
    if (!window.confirm('Are you sure you want to delete this record?')) return;

    try {
      const response = await fetch(`${API_URL}/feeDue/delete-feeDue/${feeDueId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setFeeDue(feeDue.filter((item) => item._id !== feeDueId));
        alert('Record deleted successfully');
      }
    } catch (error) {
      console.error('Failed to delete record:', error);
      alert('Failed to delete record');
    }
  };

  return (
    <div className='fee-due-container'>
      <h2 className='fee-due-heading'>All Fee Dues</h2>
      <table className='fee-due-table'>
        <thead>
          <tr>
            <th className='fee-due-th'>Branch</th>
            <th className='fee-due-th'>Section</th>
            <th className='fee-due-th'>Fee Due PDF</th>
            <th className='fee-due-th'>View</th>
            <th className='fee-due-th'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {feeDue.length > 0 ? (
            feeDue.map((item) => (
              <tr key={item._id} className='fee-due-row'>
                <td className='fee-due-td'>{item.branch}</td>
                <td className='fee-due-td'>{item.section}</td>
                <td className='fee-due-td'>
                  {item.feeDuePdf && (
                    <iframe
                      src={`${API_URL}/feeDue/uploads/${item.feeDuePdf}`}
                      title='Fee Due PDF'
                      frameBorder='0'
                    ></iframe>
                  )}
                </td>
                <td className='fee-due-td'>
                  <button
                    className='fee-due-view-btn'
                    onClick={() => window.open(`${API_URL}/feeDue/uploads/${item.feeDuePdf}`)}
                  >
                    View PDF
                  </button>
                </td>
                <td className='fee-due-td'>
                  <button
                    className='fee-due-delete-btn'
                    onClick={() => deleteFeeDueById(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='5' className='fee-due-no-data'>No fee due records available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllFeeDue;
