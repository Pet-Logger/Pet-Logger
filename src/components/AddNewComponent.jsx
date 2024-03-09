import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import { useNavigate } from "react-router-dom";


const breedArray = ['Husky', 'Golden Retreiver', 'Dalmatian', 'German Shepard', 'Lab', 'Beagle', 'Poodle']

const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
  return [ value, onChange ];
};

const AddNewComponent = () => {
  const [ name, nameOnChange ] = useInput('');
  const [ age, ageOnChange ] = useInput('');
  const [ breed, breedOnChange ] = useInput('');
  const [ gender, genderOnChange ] = useInput('');
  
  
  const saveCharacter = () => {
    // check if name is empty
    const body = {
      name,
      age,
      breed,
      gender,
    };
    console.log("req.body", body)

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
    <div className='addnewcomponent'>
      <h3 className='newdependentname'><Link to="/user">This is new dependent form</Link></h3>
      <form>
        <label htmlFor="name" >Name</label>
        <input type="text" id="name" name="name" value={name} onChange={nameOnChange}></input>
        <label htmlFor="breed" >Age: </label>
        <input type="text" id="age" name="age" value={age} onChange={ageOnChange}></input>
        <label htmlFor="breed" >Breed:</label>
        <select id="breed" name="breed" value={breed} onChange={breedOnChange}>
          <option value="Husky">Husky</option>
          <option value="Dalmation">Dalmation</option>
        </select> 
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={gender} onChange={genderOnChange}>
        <option value="blank">-</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select> 
        <button type='button' onClick={saveCharacter}> Submit</button>
      </form>
      

  
    </div>
  );
};

export default AddNewComponent;