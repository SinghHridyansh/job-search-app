import React from "react";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Context/Context";
import { useDispatch } from "react-redux";
import { addData } from "../../Redux/UserSlice";
import "../Login Components/Login.css";

const Login = (props) => {
  const { setisloggedIn } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    ghuser: "",
  });

  const getData = async () => {
    const response = await fetch();
    const data = await response.json();
    dispatch(addData(data));
  };

  const handleAuth = () => {
    if (
      // user.name != "" &&
      user.email === "work@hridyansh.com" &&
      user.password === "1234qwer" &&
      user.ghuser != ""
    ) {
      setisloggedIn(true);
      getData();
    } else {
      alert("Enter proper Credentials/Github username Mandatory");
    }
  };

  return (
    <div className="login-main">
      <div className="login">
        <div className="left">
          <h3>Login</h3>
          <div>
            <label>Enter your name</label>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Enter Email Address</label>
            <br />
            <input
              type="text"
              placeholder="Enter email address."
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </div>

          <div>
            <label>Enter a language of your choice</label>
            <br />
            <input
              type="text"
              placeholder="C, C#, Java, Python, etc"
              onChange={(e) => {
                setUser({ ...user, ghuser: e.target.value });
              }}
            />
          </div>

          <div>
            <label>Enter password</label>
            <br />
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </div>

          <div>
            <button onClick={handleAuth}>Login</button>
          </div>

          <div>
            <p>
              work@hridyansh.com <br />
              1234qwer
            </p>
          </div>
        </div>
        <div className="right">
          {/* <img
          src="https://images.rawpixel.com/image_400/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA2L3YxMDExLTA4LWMta3NtbDJqM2MuanBn.jpg"
          alt=""
        /> */}
          {/* <img
            src="https://image.slidesdocs.com/responsive-images/docs/a-doodle-with-a-simple-blue-abstract-design-page-border-background-word-template_202dfb3602__1131_1600.jpg"
            alt=""
          /> */}
          <h1>
            Welcome <br />
            Back!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
