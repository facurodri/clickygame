import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    
    <div className="card" onClick={()=> props.onClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        {/* <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul> */}
      </div>
      {/* <span className="remove">𝘅</span> */}
    </div>
  );
}

export default FriendCard;
