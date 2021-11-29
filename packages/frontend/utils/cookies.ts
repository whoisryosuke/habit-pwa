import Cookies from "js-cookie";
import storage from "../constants/storage";

export const saveUserCookie = (jwt: string) => {
  return Cookies.set(storage.USER_JWT, jwt, { expires: 30 });
};

export const getUserCookie = () => {
  return Cookies.get(storage.USER_JWT);
};
