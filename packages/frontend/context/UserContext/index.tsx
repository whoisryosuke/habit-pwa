import React, { createContext, useContext, useEffect, useState } from "react";
import LoginScreen from "../../components/Screens/LoginScreen";
import { getUserCookie } from "../../utils/cookies";

export type UserContextData = {
  name: string;
  email: string;
  loggedIn: boolean;
};

const USER_DEFAULT_CONTEXT: UserContextData = {
  name: "",
  email: "",
  loggedIn: false,
};

export const UserContext = createContext({
  user: USER_DEFAULT_CONTEXT,
  setUser: null,
  loginUser: null,
  logoutUser: null,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(USER_DEFAULT_CONTEXT);

  const loginUser = (loginData: UserContextData) => {
    setUser(() => ({
      ...loginData,
      loggedIn: true,
    }));
  };

  const logoutUser = () => {
    setUser(USER_DEFAULT_CONTEXT);
  };

  useEffect(() => {
    // Check cookies if we have JWT
    // const token = getUserCookie();
    // console.log("token", token, typeof window === "undefined");
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        logoutUser,
      }}
    >
      {user.loggedIn ? children : <LoginScreen />}
    </UserContext.Provider>
  );
};

export const useUserValue = () => useContext(UserContext);
