import React from "react";
import "../User Card/UserCard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserCard = (props) => {
  function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
  }

  let description = truncate(props.desc, 20);

  return (
    <div className="UserCard">
      <div className="UserCard-L">
        <div className="name-role">
          <h3>{props.Cname}</h3>
          <h4>{props.role}</h4>
        </div>
        <div className="desc">{description}...</div>
        <div className="sal-loc-com">
          <span>$ {props.smin}</span> <span>{props.loc}</span>
          {/* <a href= target="_blank">
            visit
          </a> */}
        </div>
      </div>
      <div className="UserCard-R">
        <a href={props.joblink} target="_blank">
          <button>Apply</button>
        </a>
      </div>
    </div>
  );
};

export default UserCard;

{
  /* <Link to={`/userdetails/${props.username}`} className="userdetails"> */
}
