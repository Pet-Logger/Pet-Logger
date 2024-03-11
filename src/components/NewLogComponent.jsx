import React from 'react';
import { useState, useEffect } from "react";


const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};


const NewLogComponent = (props) => {
  console.log("props", props)

  // const [ id, idOnChange ] = useInput('');
  const [ activity, activityOnChange ] = useInput('');
  const [ note, noteOnChange ] = useInput('');

  const saveLog = (id) => {
    // NEED TO DO FEILD INPUT VALIDATION
    const logbody = {
      id, 
      activity,
      note, 
    };
    console.log("req.body", logbody);
    //NEEDS TO BE UPDATED !!!
    //     fetch('/api/dog', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'Application/JSON'
    //       },
    //       body: JSON.stringify(body)
    //     })
    //       .then(resp => resp.json())
    //       .then(data => {
    //         console.log(data);
    //       })
    //       .then(() => {
    //        useNavigate('')
    //         //props.history.push('/');
    //       })
    //       .catch(err => console.log(' add dependent fetch /api/character: ERROR: ', err));
    //   }
  };


  return (
    <div>
      <h4>This is new log component</h4>
      <form></form>
      <form>
        {/* <input value={`${props.id}`} type="hidden" onChange={idOnChange}></input> */}
        <input name= "note" value={note} onChange={noteOnChange}></input>

        <label htmlFor="activity">Select Activity:</label>
        <select id="activity" name="activity" value = {activity} onChange={activityOnChange}>
          <option value="blank">-</option>
          <option value="Food">Food</option>
          <option value="Medicine">Medicine</option>
          <option value="Potty">Potty</option>
          <option value="Nap">Nap</option>
          <option value="Exercise">Exercise</option>
          <option value="Treats">Treats</option>
        </select>
        <button type='button' onClick={saveLog(props.id)}>Submit</button>
        {/* <Link to={"/dependent/" + name}><button className='cancel' type='button'> Submit </button></Link> */}
      </form>
    </div>
  )
}

export default NewLogComponent;