import React from 'react';
import { Link } from 'react-router-dom'


const breedArray = ['Husky', 'Golden Retreiver', 'Dalmatian', 'German Shepard', 'Lab', 'Beagle', 'Poodle']


const AddNewComponent = () => {

  function createDependent(){
    console.log("to be continued"); 
  }


  return (
    <div className='addnewcomponent'>
      <h3 className='newdependentname'><Link to="/user">This is new dependent form</Link></h3>
      <form>
        <label htmlFor="fname">Name:</label>
        <input type="text" id="name" ></input>
        <label htmlFor="fname">Age:</label>
        <input type="text" id="age" ></input>
        <label htmlFor="fname">Breed:</label>
        <select id="breed">
          <option value="Husky">Husky</option>
          <option value="Dalmation">Dalmation</option>
        </select> 
        <label htmlFor="fname">Gender:</label>
        <select id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select> 
        <button type='submit' onClick={()=>createDependent()}> Submit</button>
      </form>
      

  
    </div>
  );
};

export default AddNewComponent;