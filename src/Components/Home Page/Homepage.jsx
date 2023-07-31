import React from "react";
import UserList from "../UserList/UserList";
import SearchResults from "../Search Results/SearchResults";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";

const Homepage = () => {
  const { name } = useContext(AuthContext);

  return (
    <div className="homepage">
      {name != "" ? <SearchResults /> : <UserList />}
      {/* <UserList /> */}
    </div>
  );
};

export default Homepage;
