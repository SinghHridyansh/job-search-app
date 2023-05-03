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
    email: "",
    password: "",
    ghuser: "",
  });

  const getData = async () => {
    const response = await fetch(`https://api.github.com/users/${user.ghuser}`);
    const data = await response.json();
    dispatch(addData(data));
  };

  const handleAuth = () => {
    if (
      user.email === "Hridyansh@geek.in" &&
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
    <div className="login">
      <h3>You Login Here</h3>
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
        <label>Enter valid Github username</label>
        <br />
        <input
          type="text"
          placeholder="Enter valid Github username."
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
          Hridyansh@geek.in <br />
          1234qwer
        </p>
      </div>
    </div>
  );
};

export default Login;
