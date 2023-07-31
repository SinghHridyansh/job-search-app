import React from "react";
import { useState, useEffect } from "react";
import UserCard from "../User Card/UserCard";
import Loader from "../Loader";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import "../Search Results/SearchResults.css";

const SearchResults = () => {
  const [userProfile, setUserProfile] = useState("");
  const { name } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${name}`);
        if (!response.ok) {
          throw new Error("Failed to fetch Data");
        }
        const data = await response.json();
        setUserProfile(data);
        console.log("====================================");
        console.log(data);
        console.log("====================================");
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, [name]);

  if (!userProfile) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div className="SearchResults">
      <UserCard
        img={userProfile.avatar_url}
        username={userProfile.login}
        followers={userProfile.followers_url}
        following={userProfile.following_url}
      />
    </div>
  );
};

export default SearchResults;
