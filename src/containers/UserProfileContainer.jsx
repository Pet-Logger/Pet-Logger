import React from 'react';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'

import DependentComponent from '../components/DependentComponent';


const dogArray = [{name: "Oil Rig", breed:"German Shepard", age: 5, gender: 'female'}, {name: "Shadow", breed:"German Shepard", age: 7, gender: 'male'}, {name: "Penelope", breed:"Grey Hound", age: 2, gender: 'female'}, {name: "Antonio", breed:"English Bulldog", age: 10, gender: 'male'}]

const DependentContainer = () => {
  // fetch ('/') 
  // .then(resp => resp.json())
  // .then (data => console.log(data))  // data is going to be an array of objects 
  // .catch((err)=> console.log("get dependents request error", err)); 
  

  // iterate using a for loop over the data array of objects, pass in the infor from each element to a dependent component. 
  const dependents = dogArray.map((elem, i)=>{
    return (
      <DependentComponent
        key ={i}
        traits = {elem}
      />);
  });  

  console.log("dogarray", dogArray)
  console.log("dependents", dependents)

  return (
    <div className='usermaincontainer'>
            

      <h2>Dependents you are tracking</h2>

      <div className='alldependents'>
      {dependents}
      </div>
      <div className='buttoncontainer'>
      <button>Add Existing Dependent</button>
      <Link to="/addnew"><button>Add New Dependent</button></Link>
      </div>

      
    </div>

); 
    
}; 

export default DependentContainer; 