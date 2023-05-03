import "./App.css";
import Login from "./Components/Login Components/Login";
import NavBar from "./Components/Navigation/NavBar";
import Homepage from "./Components/Home Page/Homepage";
import Profile from "./Components/Login Profile/LoginProfile";
import UserDetails from "./Components/User Details/UserDetails";
import { useContext } from "react";
import { AuthContext } from "./Context/Context";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const { isloggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      {isloggedIn ? (
        <BrowserRouter>
          <div>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={isloggedIn ? <Homepage /> : <Navigate to="/" />}
              />
              <Route
                path="/profile"
                element={isloggedIn ? <Profile /> : <Navigate to="/" />}
              />
              <Route
                path="/userdetails/:username"
                element={isloggedIn ? <UserDetails /> : <Navigate to="/" />}
              />
              {/* <Route
                path="/search/:username"
                element={isloggedIn ? <UserDetails /> : <Navigate to="/" />}
              /> */}
            </Routes>
          </div>
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
