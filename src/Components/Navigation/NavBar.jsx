import React from "react";
import "../Navigation/NavBar.css";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import { useSelector } from "react-redux";

const NavBar = (props) => {
  const { setisloggedIn } = useContext(AuthContext);
  const { setname } = useContext(AuthContext);
  const loginData = useSelector((state) => state.userData);
  const navigate = useNavigate();

  return (
    <nav className="navBar">
      <div>
        <Link to="/" className="links">
          <h2>Github Explorer</h2>
        </Link>
      </div>

      <input type="text" onChange={(e) => setname(e.target.value)} />

      <div>
        <div>
          <Link to="/" className="links">
            Home
          </Link>
        </div>
        <div>
          <Link to="/profile" className="links" id="profile_btn">
            <div>
              <FaUserAlt className="FaUserAlt" />
            </div>
            {loginData[0] != undefined ? (
              <span>{loginData[0].login}</span>
            ) : (
              <span>Profile</span>
            )}
          </Link>
        </div>
        <button
          onClick={() => {
            setisloggedIn(false);
            navigate("/");
          }}
          className="logout_btn"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
