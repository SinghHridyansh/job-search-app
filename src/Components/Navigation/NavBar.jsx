import React, { useState } from "react";
import "../Navigation/NavBar.css";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import { useSelector } from "react-redux";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const NavBar = () => {
  const { setisloggedIn } = useContext(AuthContext);
  const [menuOpened, setMenuOpened] = useState(false);
  const { setname } = useContext(AuthContext);
  const loginData = useSelector((state) => state.userData);
  const navigate = useNavigate();

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <nav className="navBar">
      <div>
        <Link to="/" className="links">
          <h2 className="logo">
            Github <br />
            Explorer
          </h2>
        </Link>
      </div>

      <input type="text" onChange={(e) => setname(e.target.value)} />
      <OutsideClickHandler
        onOutsideClick={() => {
          setMenuOpened(false);
        }}
      >
        <div className="h-menu" style={getMenuStyles(menuOpened)}>
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
      </OutsideClickHandler>
      <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
        <BiMenuAltRight size={40} color={"white"} />
      </div>
    </nav>
  );
};

export default NavBar;
