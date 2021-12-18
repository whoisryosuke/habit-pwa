import React from "react";
import { CategoryProvider } from "../../context/CategoryContext";
import { UserProvider } from "../../context/UserContext";

interface Props {}

const Wrapper = ({ children }: React.PropsWithChildren<Props>) => {
  return (
    <UserProvider>
      <CategoryProvider>{children}</CategoryProvider>
    </UserProvider>
  );
};

export default Wrapper;
