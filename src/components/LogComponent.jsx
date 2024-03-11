import React from "react";

const LogComponent = ({ logs }) => {
  const { postType, details, date } = logs;

  return (
    <div className="logcomponent">
      <img className="notesIcon" src="https://www.computerhope.com/jargon/n/notes.png"></img>
      {/* <h3 className="logname">Oil Rig Placeholder</h3> */}
      <ul className="logdetails">
        <li className="traitslist">Activity: {postType}</li>
        <li className="traitslist">Time: {date}</li>
        <li className="traitslist">Note: {details}</li>
      </ul>
    </div>
  );
};

export default LogComponent;
