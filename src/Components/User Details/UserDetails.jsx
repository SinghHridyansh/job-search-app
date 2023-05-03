import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../Detials Card/DetailsCard";
import "../User Details/UserDetails.css";

const UserDetails = () => {
  const { username } = useParams();
  const [state, setState] = useState({});
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setState(data);
      });
  }, []);
  return (
    <div className="UserDetails">
      <DetailsCard
        name={state.name}
        img={state.avatar_url}
        username={state.login}
        location={state.location}
        followers={state.followers}
        following={state.following}
        repos={state.public_repos}
        link={state.html_url}
      />
    </div>
  );
};

export default UserDetails;
