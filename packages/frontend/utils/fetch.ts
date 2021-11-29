import { getUserCookie } from "./cookies";

export const fetchWithAuth = async (url: string) => {
  const token = getUserCookie();
  if (token) {
    return await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    return false;
  }
};
