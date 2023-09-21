import React from "react";

import SearchResults from "../Search Results/SearchResults";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";

const Homepage = () => {
  const { name } = useContext(AuthContext);

  return (
    <div className="homepage">
      <SearchResults />
    </div>
  );
};

export default Homepage;
