import React, { useEffect, useState } from 'react';
import { API_URL } from '../../Principle/data/dataApi';
import './Hod.css';

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  const fetchAllStudents = async () => {
    const hodId = localStorage.getItem('hodId');
    if (!hodId) {
      alert('Please Login...!!!');
      return;
    }
    try {
      const response = await fetch(`${API_URL}/student/all-students/${hodId}`);
      const data = await response.json();
      setStudents(data.students);
    } catch (error) {
      console.error('Failed to fetch students:', error);
    }
  };

  const deleteStudent = async (studentId) => {
    if (!window.confirm('Are you sure you want to delete this student?')) return;
    try {
      const response = await fetch(`${API_URL}/student/delete-student/${studentId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setStudents(students.filter((student) => student._id !== studentId));
        alert('Student deleted successfully');
      }
    } catch (error) {
      console.error('Failed to delete student:', error);
      alert('Failed to delete student');
    }
  };

  useEffect(() => {
    fetchAllStudents();
  }, []);

  return (
    <div className='student-list-container'>
      <h2 className='student-list-heading'>All Students</h2>
      {students.length > 0 ? (
        <table className='student-list-table'>
          <thead>
            <tr>
              <th className='student-list-th'>Branch</th>
              <th className='student-list-th'>Name</th>
              <th className='student-list-th'>Pin Number</th>
              <th className='student-list-th'>Section</th>
              <th className='student-list-th'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id} className='student-list-row'>
                <td className='student-list-td'>{student.branch}</td>
                <td className='student-list-td'>{student.name}</td>
                <td className='student-list-td'>{student.pinNo}</td>
                <td className='student-list-td'>{student.section}</td>
                <td className='student-list-td'>
                  <button className='student-list-delete-btn' onClick={() => deleteStudent(student._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className='student-list-no-data'>No students found</p>
      )}
    </div>
  );
};

export default AllStudents;
