import Cookies from "js-cookie";
import storage from "../constants/storage";

export const saveUserCookie = (jwt: string) => {
  Cookies.set(storage.USER_JWT, jwt, { expires: 30 });
};

export const getUserCookie = () => {
  Cookies.get(storage.USER_JWT);
};
