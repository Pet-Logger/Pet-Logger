import React from "react";
import { withRouter } from "react-router-dom";
import NewLogComponent from "../components/NewLogComponent";
import LogComponent from "../components/LogComponent";

import DependentComponent from "../components/DependentComponent";
import { useParams } from "react-router-dom";

const logArray = [{activity:'nap', time:'12:50pm', note: 'Did not want to take a nap.'}, {activity:'medicine', time:'1:50pm', note: 'Gave red pills' }]; 

const DependentContainer = (props) => {
  const { id } = useParams();

  // fetch ('/')
  // .then(resp => resp.json())
  // .then (data => console.log(data))  // data is going to be an array of objects
  // .catch((err)=> console.log("get dependents request error", err));

  // iterate using a for loop over the data array of objects, pass in the infor from each element to a dependent component.
  // const dependents = dogArray.map((elem, i)=>{
  //   return (
  //     <DependentComponent
  //       key ={i}
  //       traits = {elem}
  //     />);
  // });

  // console.log("dogarray", dogArray)
  // console.log("dependents", dependents)

  console.log(id)

  const logActivities = logArray.map((elem, i)=>{
    return (
      <LogComponent
        key ={i}
        logs = {elem}
      />);
  });  

  return (
    <div>
      <h1>This is Dependent Container</h1>
      <DependentComponent
        traits={{
          name: "Oil Rig",
          breed: "German Shepard",
          age: 5,
          gender: "female",
        }} //Need to fetch actual traits
      ></DependentComponent>
      <NewLogComponent id = {id}></NewLogComponent>
      {logActivities}
    
      
    </div>
  );
};

export default DependentContainer;
