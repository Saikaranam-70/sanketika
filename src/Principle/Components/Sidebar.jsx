import React from 'react'

const Sidebar = ({showNotificationHandler, showAddHodHandler ,showEventHandler, showAllNotificationsHandler, showAllEventHandler, showAllHodHandler}) => {
  return (
    <div className='sidebar'>
      <div className="AddHod"  onClick={showAddHodHandler}>
        <h4>Add Hod</h4>
      </div>
      <div onClick={showEventHandler} className="AddEvents">
        <h4>Add Events</h4>
      </div>
      <div onClick={showNotificationHandler} className="AddNotifiCations">
        <h4>Add Notifications</h4>
      </div>
      <div onClick={showAllEventHandler} className="All-Events">
        <h4>All Notifications</h4>
      </div>
      <div onClick={showAllNotificationsHandler} className="All-Notifications">
        <h4>All Events</h4>
      </div>
      <div onClick={showAllHodHandler} className="All-Notifications">
        <h4>All HOD's</h4>
      </div>
    </div>
  )
}

export default Sidebar
