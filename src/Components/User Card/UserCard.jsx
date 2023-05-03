import React from "react";
import "../User Card/UserCard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserCard = (props) => {
  const [data, setdata] = useState({});

  const getData = async () => {
    const response = await fetch(
      `https://api.github.com/users/${props.username}`
    );
    const data = await response.json();
    setdata(data);
    // console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Link to={`/userdetails/${props.username}`} className="userdetails">
        <div className="UserCard">
          <div>
            <img src={props.img} alt=".." />
          </div>
          <div>
            <p>{props.username}</p>
            <div className="UserCard_deets">
              <div className="followers">
                <h4>Followers</h4>

                <span>{data.followers}</span>
              </div>
              <br />
              <div className="repos">
                <h4>Repositories</h4>

                <span>{data.public_repos}</span>
              </div>
              <br />
              <div className="following">
                <h4>Following</h4>

                <span>{data.following}</span>
              </div>
              <br />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default UserCard;
