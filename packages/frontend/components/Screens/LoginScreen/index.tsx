import { Button } from "@chakra-ui/react";
import React from "react";
import API from "../../../constants/api";
import { useUserValue } from "../../../context/UserContext";
import { saveUserCookie } from "../../../utils/cookies";

interface Props {}

const LoginScreen = (props: Props) => {
  const { loginUser } = useUserValue();
  const handleLogin = async () => {
    const results = await fetch(API.login, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: "ryosuke.san.hana@gmail.com",
        password: "Test4321",
      }),
    });

    const data = await results.json();
    // console.log(data);

    // Did we get a token?
    if ("jwt" in data) {
      // Save the JWT to cookie for use later
      saveUserCookie(data.jwt);

      // Login user using context provider
      loginUser({
        name: data.user.username,
        email: data.user.email,
      });
    }
  };
  return (
    <div>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default LoginScreen;
