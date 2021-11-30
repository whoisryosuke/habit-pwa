import { getUserCookie } from "./cookies";

export const fetchWithAuth = async (url: string) => {
  const token = getUserCookie();
  if (token) {
    const results = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await results.json();
    return data;
  } else {
    throw Error("Token not found");
  }
};
