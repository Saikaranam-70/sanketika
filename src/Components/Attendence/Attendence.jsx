// import React, { useEffect, useState } from 'react'
// import { API_URL } from '../../Principle/data/dataApi'

// const Attendence = () => {
//   const [attendence, setAttendence] = useState([])

//   const handleAttendence = async()=>{
    
//     try {
//       const responce = await fetch(`${API_URL}/attendence/all`)
//       const data = await responce.json();
//       setAttendence(data.attendence || [])
//       console.log(data)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   useEffect(()=>{
//     handleAttendence();
//   },[])

  
//   return (
//     <div className='sai'>
//       <h2 className='note'>Attendence</h2>
//       {
//         !attendence ? (
//           <p>Attendence not found</p>
//         ):(

          
//           <table className="eventTable">
//         <thead>
//           <th>Branch</th>
//           <th>Section</th>
//           <th>Attendence pdf</th>
//           <th>View Attendence</th>
          
//         </thead>
//         <tbody>
//           {
//             attendence.map((item)=>{
//               return(
//                 <>
//                 <tr key={item._id}>
//             <td>{item.branch}</td>
//             <td>{item.section}</td>
//             <td>
//               {item.attendencePdf && 
//                      <iframe src={`${API_URL}/attendence/uploads/${item.attendencePdf}`} frameborder="0"></iframe>

//               }</td>
//             <td>
//               <button className='table-Btn' onClick={()=>window.open(`${API_URL}/attendence/uploads/${item.attendencePdf}`)} >View PDF</button>
//             </td>
            
//           </tr>
//                 </>
//               )
//             })
//           }
//         </tbody>
//       </table>
//         )
//       }
//     </div>
//   )
// }

// export default Attendence
import React, { useEffect, useState } from 'react';
import './Attendence.css';
import { API_URL } from '../../Principle/data/dataApi';



const Attendence = () => {
  const [attendence, setAttendence] = useState([]);

  const fetchAttendence = async () => {
    try {
      const response = await fetch(`${API_URL}/attendence/all`);
      const data = await response.json();
      setAttendence(data.attendence || []);
    } catch (error) {
      console.error('Failed to fetch attendence:', error);
    }
  };

  useEffect(() => {
    fetchAttendence();
  }, []);

  const branches = ['CME', 'Civil', 'Mechanical', 'Electrical', 'Electronics', 'IT'];
  const years = ['1st Year', '2nd Year', '3rd Year'];

  return (
    <div className="attendance-container">
      <h2 className="attendance-title">Student Attendance</h2>
      <div className="branch-buttons-container">
        {branches.map((branch) => (
          <button key={branch} className="branch-button">{branch}</button>
        ))}
      </div>

      <div className="year-sections-container">
        {years.map((year) => (
          <div key={year} className="year-section">
            <h3 className="year-title">{year}</h3>
            <table className="attendance-table">
              <thead>
                <tr>
                  <th>Branch</th>
                  <th>Section</th>
                  <th>Attendance PDF</th>
                  <th>View Attendance</th>
                </tr>
              </thead>
              <tbody>
                {attendence.map((item) => (
                  <tr key={item._id} className="attendance-row">
                    <td>{item.branch}</td>
                    <td>{item.section}</td>
                    <td>
                      {item.attendencePdf && (
                        <iframe
                          src={`${API_URL}/attendence/uploads/${item.attendencePdf}`}
                          className="attendance-pdf"
                          title="Attendance PDF"
                        ></iframe>
                      )}
                    </td>
                    <td>
                      <button
                        className="view-pdf-button"
                        onClick={() => window.open(`${API_URL}/attendence/uploads/${item.attendencePdf}`)}
                      >
                        View PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendence;
