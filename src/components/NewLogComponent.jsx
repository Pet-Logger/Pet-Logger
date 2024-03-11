import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

const NewLogComponent = (props) => {
  const [postType, postTypeOnChange] = useInput("");
  const [details, detailsOnChange] = useInput("");

  const saveLog = (id) => {
    // NEED TO DO FEILD INPUT VALIDATION
    const body = {
      dogId: id,
      postType,
      details,
    };
    fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("request body", data);
        window.location.reload();
      })
      .catch((err) => console.log(" add log fetch: ERROR: ", err));
  };

  return (
    <div>
      <h4>This is new log component</h4>
      <form></form>
      <form>
        {/* <input value={`${props.id}`} type="hidden" onChange={idOnChange}></input> */}
        <input
          name="details"
          value={details}
          onChange={detailsOnChange}
        ></input>

        <label htmlFor="activity">Select Activity:</label>
        <select
          id="activity"
          name="postType"
          value={postType}
          onChange={postTypeOnChange}
        >
          <option value="blank">-</option>
          <option value="Food">Food</option>
          <option value="Medicine">Medicine</option>
          <option value="Potty">Potty</option>
          <option value="Nap">Nap</option>
          <option value="Exercise">Exercise</option>
          <option value="Treats">Treats</option>
        </select>

        {/* <Link to={`/dependent/${props.id}`}> */}
        <button type="button" onClick={() => saveLog(props.id)}>
          Submit
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default NewLogComponent;
