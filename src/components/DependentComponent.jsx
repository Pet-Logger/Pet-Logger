import React from 'react';
import { Link } from 'react-router-dom'

// import DependentContainer from './DependentContainer';


// to add link to the dependent page 


const DependentComponent = ({traits}) => {

  const {name, age, breed, gender} = traits


  return (
    <div className='dependentcomponent'>
      <img src="/"></img>
      <h3 className='dependentname'><Link to="/dependent">{name}</Link></h3>
      <ul className='dependenttraits'>
        <li className='traitslist'>Age: {age}</li>
        <li className='traitslist'>Breed: {breed}</li>
        <li className='traitslist'>Gender: {gender}</li>
      </ul>
    </div>
  );
};

export default DependentComponent;