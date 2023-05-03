import { createContext, useState } from "react";

export const AuthContext = createContext();

function CustomProvider({ children }) {
  const [isloggedIn, setisloggedIn] = useState(false);

  const [name, setname] = useState("");
  return (
    <AuthContext.Provider
      value={{
        isloggedIn,
        setisloggedIn,
        name,
        setname,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default CustomProvider;
