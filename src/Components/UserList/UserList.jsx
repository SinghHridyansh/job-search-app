import React from "react";
import { useState, useEffect } from "react";
import "../UserList/UserList.css";
import UserCard from "../User Card/UserCard";
import Loader from "../Loader";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";

const UserList = () => {
  const [data, setdata] = useState({});
  // const { name } = useContext(AuthContext);

  // useEffect(() => {
  //   if (name !== "") {
  //     fetch(`https://api.github.com/users/${name}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setdata(data);
  //         console.log(data);
  //       });

  //     console.log("1st is working");
  //   } else {
  //     fetch("https://api.github.com/users")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setdata(data);
  //       });
  //   }
  // }, [name]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
      });
  }, []);

  return (
    <div className="UserList">
      {data[0] !== undefined ? (
        <>
          {data.map((user, key) => (
            <UserCard
              keys={key}
              img={user.avatar_url}
              username={user.login}
              followers={user.followers_url}
              following={user.following_url}
            />
          ))}
        </>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default UserList;
