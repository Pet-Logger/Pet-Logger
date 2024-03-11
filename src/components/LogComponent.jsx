import React from 'react';



const LogComponent = ({logs}) => {
  const {activity, time, note} = logs;

  return (
    <div className='logcomponent'>
    <img src="/"></img>
    <h3 className='logname'>Oil Rig Placeholder</h3>
    <ul className='logdetails'>
        <li className='traitslist'>Activity: {activity}</li>
        <li className='traitslist'>Time: {time}</li>
        <li className='traitslist'>Note: {note}</li>
    </ul>

</div>
  )
}

export default LogComponent;