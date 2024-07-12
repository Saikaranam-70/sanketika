import React, { useEffect, useState } from 'react'
import { API_URL } from '../data/dataApi';
import UpdateHod from './UpdateHod';

const AllHod = ({updateHandler}) => {
    const [hod, setHod] = useState([]);
    const allHodHandler = async()=>{
        const principleId = localStorage.getItem('principleId')

        try {
            const responce = await fetch(`${API_URL}/hod/all-hod/${principleId}`)
            const data = await responce.json();
            setHod(data.hod);
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        allHodHandler()
    },[])

    const deleteHod = async(hodId)=>{
        try {
            const responce = await fetch(`${API_URL}/hod/delete-hod/${hodId}`,{
                method:'DELETE'
            })
            if(responce.ok){
                setHod(hod.filter(notification => notification._id !== hodId));
                confirm("are you sure, you want to delete?");
                alert("Notification Deleted Successfully")
              }
            } catch (error) {
              console.log(error);
              alert("Failed to Delete Events")
            }
    }
    
  return (
    <div className='sai'>
       <table className="productTable">
          <thead>
               <tr>
                   <th>Name</th>
                   <th>Branch</th>
                   <th>Profile Pic</th>
                   <th>Update Hod</th>
                   <th>Delete Hod</th>
               </tr>
           </thead>
           <tbody>
              {
                hod.map((item)=>{
                  return(
                    <>
                    <tr key={item._id}>
                 <td>{item.name}</td>
                 <td>{item.branch}</td>
                 <td>
                 {item.profile && (
                    <img style={{width: '100px', height:'50px'}} src={`${API_URL}/hod/uploads/${item.profile}`} alt={item.name} />
                  )}
                 </td>
                 <td>
                    <button className='table-Btn' onClick={updateHandler}> Update Hod</button>
                 </td>
                 <td>
                  <button className='table-Btn' onClick={()=>deleteHod(item._id)}>delete</button>
                 </td>
              </tr>
                    </>
                  )
                })
              }
          </tbody>
        </table>
                      
    </div>
  )
}

export default AllHod
