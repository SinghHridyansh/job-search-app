import React from "react";
import { useSelector } from "react-redux";
import DetailsCardP from "../Detials Card/DetailsCardP";
import "../Login Profile/LoginProfile.css";
import { useState, useEffect } from "react";

const RepoContainer = (props) => {
  return (
    <div className="RepoContainer">
      <div>
        <div>
          <h3>{props.RepoName}</h3>
          <h5>Created at: {props.date}</h5>
        </div>
      </div>

      <h5>Languages: {props.lang}</h5>

      <a href={props.link} target="_blank" rel="noopener noreferrer">
        Visit Repo
      </a>
    </div>
  );
};

const Profile = () => {
  const loginData = useSelector((state) => state.userData);
  const [state, setState] = useState({});
  // const subset = state.slice(0, 5);
  //api.github.com/users/<username>/repos
  useEffect(() => {
    fetch(`https://api.github.com/users/${loginData[0].login}/repos`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setState(data.slice(0, 5));
      });
  }, []);
  return (
    <div className="LoginProfile">
      {loginData != undefined ? (
        <>
          <DetailsCardP
            name={loginData[0].name}
            img={loginData[0].avatar_url}
            username={loginData[0].login}
            location={loginData[0].location}
            followers={loginData[0].followers}
            following={loginData[0].following}
            repos={loginData[0].public_repos}
            link={loginData[0].html_url}
          />

          <h3>Repositories</h3>

          <div className="repo">
            {state[0] != undefined ? (
              <>
                {state.map((apidata, key) => (
                  <RepoContainer
                    keys={key}
                    RepoName={apidata.name}
                    date={apidata.created_at}
                    lang={apidata.language}
                    link={apidata.url}
                  />
                ))}
              </>
            ) : (
              <>Loading.</>
            )}
          </div>
        </>
      ) : (
        <>Loading..</>
      )}
    </div>
  );
};

export default Profile;
