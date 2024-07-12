import React, { useState } from 'react'
import { API_URL } from '../../data/dataApi';

const AddEvent = () => {

    const [eventName, setEventName] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [culturel, setCulturel] = useState([]);
    const [sports, setSports] = useState([]);
    const [file, setFile] = useState(null)
    const [contact, setContact] = useState(null);

    const handleCultureChange = (event)=>{
        const value = event.target.value;
        if(culturel.includes(value)){
            setCulturel(culturel.filter((item)=>item!==value))
        }else{
            setCulturel([...culturel, value])
        }
    }

    const handleSportChange = (event)=>{
        const value = event.target.value;

        if(sports.includes(value)){
            setSports(sports.filter((item)=>item!==value))
        }else{
            setSports([...sports, value])
        }
    }

    const handleImageHandler = (e)=>{
        const value = e.target.files[0];
        setFile(value)
    }

    const handleEventSubmit = async(e)=>{
        e.preventDefault();
        try {
            const loginToken = localStorage.getItem('loginToken');
            if(!loginToken){
                console.log("your not logged in")
            }
            const formData = new FormData();
            formData.append('EventName', eventName);
            formData.append('Date', date);
            formData.append('description', description);
            formData.append('ContactNumber', contact)
            formData.append('bannerImage', file);

            culturel.forEach((value)=>{
                formData.append('culturels', value)
            })

            sports.forEach((value)=>{
                formData.append('sports', value)
            })

            const responce = await fetch(`${API_URL}/events/add-event`, {
                method:'POST',
                headers:{
                    'token': `${loginToken}`
                },
                body: formData
            })
            const data = await responce.json();
            if(responce.ok){
                alert("Event Added Successfully......!!!!")
                console.log(data)
                setEventName("")
                setDate("");
                setDescription("");
                setCulturel([]);
                setSports([]);
                setFile(null);
                setContact(null)
            }
        } catch (error) {
            alert("Adding Events Failed.....!!!!!!")
            console.log(error)
        }
    }



  return (
    <div className='addEvent-Section'>
      <form className="event-form" onSubmit={handleEventSubmit}>
        <h3>Add Events</h3>
        <label >Event Name :</label>
        <input type="text" placeholder='Enter Event Name...!!' name="EventName" id="" value={eventName} onChange={(e)=>setEventName(e.target.value)} />
        <label >Date :</label>
        <input type="text" placeholder='Enter Date of the Event...!!' name="Date" id="" value={date} onChange={(e)=>setDate(e.target.value)} />
        <label>Description :</label>
        <textarea id="w3review" placeholder='Enter Description of the Event....!!' name="description" value={description} rows="3" cols="40" onChange={(e)=>setDescription(e.target.value)}></textarea><br />


        <div className="check-inp">
          <label>Culturels:</label>
          <div className="inputs-container ">
            <div className="checkBoxContainer cultureBox ">
              <label>Dance :</label>
              <input type="checkbox" checked={culturel.includes('Dance')} value='Dance' onChange={handleCultureChange}/>
            </div>
            <div className="checkBoxContainer cultureBox">
              <label>Rangoli</label>
              <input type="checkbox" checked={culturel.includes('Rangoli')} value='Rangoli' onChange={handleCultureChange}/>
            </div>
            <div className="checkBoxContainer cultureBox">
              <label>Sweet Pongal</label>
              <input type="checkbox" checked={culturel.includes('Sweet Pongal')} value='Sweet Pongal' onChange={handleCultureChange}/>
            </div>
            <div className="checkBoxContainer cultureBox">
              <label>Traditional Dress</label>
              <input type="checkbox" checked={culturel.includes('Traditional Dress')} value='Traditional Dress' onChange={handleCultureChange}/>
            </div>
            <div className="checkBoxContainer cultureBox">
              <label>Others</label>
              <input type="checkbox" checked={culturel.includes('Others')} value='Others' onChange={handleCultureChange}/>
            </div>
          </div>
          </div>

          <div className="check-inp">
          <label>Sports :</label>
          <div className="inputs-container">
            <div className="checkBoxContainer ">
              <label>Cricket</label>
              <input type="checkbox" checked={sports.includes('Cricket')} value='Cricket' onChange={handleSportChange}/>
            </div>
            <div className="checkBoxContainer ">
              <label>Volly Boll</label>
              <input type="checkbox" checked={sports.includes('Volly Boll')} value='Volly Boll' onChange={handleSportChange}/>
            </div>
            <div className="checkBoxContainer ">
              <label>Kabaddi</label>
              <input type="checkbox" checked={sports.includes('Kabaddi')} value='Kabaddi' onChange={handleSportChange}/>
            </div>
            <div className="checkBoxContainer ">
              <label>Kho-Kho</label>
              <input type="checkbox" checked={sports.includes('Kho-Kho')} value='Kho-Kho' onChange={handleSportChange}/>
            </div>
            <div className="checkBoxContainer ">
              <label>Chess</label>
              <input type="checkbox" checked={sports.includes('Chess')} value='Chess' onChange={handleSportChange}/>
            </div>
            <div className="checkBoxContainer ">
              <label>Others</label>
              <input type="checkbox" checked={sports.includes('Others')} value='Others' onChange={handleSportChange}/>
            </div>
          </div>
          </div>

          <label >Contact :</label>
          <input type="number" placeholder='Enter Contact Mobile Number....!!' value={contact} name="ContactNumber" onChange={(e)=>setContact(e.target.value)} id="" />

          <label >Banner Image :</label>
          <input type="file" name="bannerImage"  onChange={handleImageHandler} id="" />
          <div className="submitBtn btn">
            <button type='submit'>submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddEvent
