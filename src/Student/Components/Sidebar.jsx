import React from 'react'

const Sidebar = ({handleFeedBack, handleAllFeedBacks}) => {
  return (
    <div className='sidebar'>
    <div className="AddHod" >
      <h4 onClick={handleFeedBack}>Add FeedBack</h4>
    </div>
    <div className="AddEvents">
      <h4 onClick={handleAllFeedBacks}>All Feedbacks</h4>
    </div>
  </div>
  )
}

export default Sidebar
