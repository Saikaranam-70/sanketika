import React, { useEffect, useState } from 'react'
import { API_URL } from '../../Principle/data/dataApi'

const AllAttendence = () => {
  const [attendence, setAttendence] = useState([])

  const handleAttendence = async()=>{
    const hodId = localStorage.getItem('hodId')
    try {
      const responce = await fetch(`${API_URL}/attendence/get-attendence/${hodId}`)
      const data = await responce.json();
      setAttendence(data.attendence)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    handleAttendence();
  },[])

  const deleteAttendence = async(attendenceId)=>{
    try {
      const responce = await fetch(`${API_URL}/attendence/delete-attendence/${attendenceId}`,{
        method:'DELETE'
      })
      if(responce.ok){
        setAttendence(attendence.filter(attendence => attendence._id !== attendenceId));
        confirm("are you sure, you want to delete?");
        alert("Attendence deleted successfully")
      }

    } catch (error) {
      console.log(error);
      alert("Failed to Delete Attendence")
    }
  }
  return (
    <div className='sai'>
      <h2 className='note'>Attendence</h2>
      {
        !attendence ? (
          <p>Attendence not found</p>
        ):(

          
          <table className="eventTable">
        <thead>
          <th>Branch</th>
          <th>Section</th>
          <th>Attendence pdf</th>
          <th>View Attendence</th>
          <th>Delete Attendence</th>
        </thead>
        <tbody>
          {
            attendence.map((item)=>{
              return(
                <>
                <tr key={item._id}>
            <td>{item.branch}</td>
            <td>{item.section}</td>
            <td>
              {item.attendencePdf && 
                     <iframe src={`${API_URL}/attendence/uploads/${item.attendencePdf}`} frameborder="0"></iframe>

              }</td>
            <td>
              <button className='table-Btn' onClick={()=>window.open(`${API_URL}/attendence/uploads/${item.attendencePdf}`)} >View PDF</button>
            </td>
            <td>
              
              <button className='table-Btn' onClick={()=>deleteAttendence(item._id)} >Delete</button>
            </td>
          </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
        )
      }
    </div>
  )
}

export default AllAttendence
