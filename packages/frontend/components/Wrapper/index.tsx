import React from "react";
import { UserProvider } from "../../context/UserContext";

interface Props {}

const Wrapper = ({ children }: React.PropsWithChildren<Props>) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Wrapper;
