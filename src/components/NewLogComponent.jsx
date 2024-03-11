import React from 'react';



const NewLogComponent = () => {


  return (
    <div>
      <h4>This is new log component</h4>
      <form><textarea Rows="3" maxLength='49' placeholder='Max 49 characters...'></textarea></form>
      <form>
      <label htmlFor="activity">Select Activity:</label>
        <select id="breed" name="breed">
          <option value="blank">-</option>
          <option value="Food">Food</option>
          <option value="Medicine">Medicine</option>
          <option value="Potty">Potty</option>
          <option value="Nap">Nap</option>
          <option value="Exercise">Exercise</option>
          <option value="Treats">Treats</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default NewLogComponent;