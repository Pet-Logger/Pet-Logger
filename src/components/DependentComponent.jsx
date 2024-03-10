import React from 'react';
import { Link } from 'react-router-dom'

// import DependentContainer from './DependentContainer';


// to add link to the dependent page 


const DependentComponent = ({traits}) => {

  const {name, age, breed, gender} = traits


  return (
    <div className='dependentcomponent'>
      <div className='dependentimgcontainer'><img src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg"></img></div>
      <div className='dependentinfocontainer'>
      <h3 className='dependentname' style={{textDecoration: 'none'}}><Link to="/dependent">{name}</Link></h3>
      <ul className='dependenttraits'>
        <li className='traitslist'>Age: {age}</li>
        <li className='traitslist'>Breed: {breed}</li>
        <li className='traitslist'>Gender: {gender}</li>
      </ul>
      </div>
    </div>
  );
};

export default DependentComponent;