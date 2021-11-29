import { Button } from "@chakra-ui/react";
import React from "react";
import { saveUserCookie } from "../../../utils/cookies";

interface Props {}

const LoginScreen = (props: Props) => {
  const handleLogin = async () => {
    const results = await fetch("http://localhost:1337/auth/local", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: "squall.leonhart@test.com",
        password: "Test4321",
      }),
    });

    const data = await results.json();
    console.log(data);
    // Save the JWT to cookie for use later
    if ("jwt" in data) {
      saveUserCookie(data.jwt);
    }
  };
  return (
    <div>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default LoginScreen;
