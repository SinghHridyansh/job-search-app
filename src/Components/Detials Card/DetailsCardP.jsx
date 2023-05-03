import React from "react";

const DetailsCardP = (props) => {
  return (
    <div className="extendDetailsP">
      <img src={props.img} alt="" />
      <div className="extendDetails_container">
        <div>
          <h2>{props.name}</h2>
          <h3>{props.username}</h3>
          <span>{props.location}</span>
        </div>
        <div className="extendDeets">
          <div className="extendData">
            <h3>Followers</h3>
            <h4>{props.followers}</h4>
          </div>
          <div className="extendData">
            <h3>Following</h3>
            <h4>{props.following}</h4>
          </div>
          <div className="extendData">
            <h3>Repositories</h3>
            <h4>{props.repos}</h4>
          </div>
        </div>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Visit {props.name}'s Github Profile
        </a>
      </div>
    </div>
  );
};

export default DetailsCardP;
