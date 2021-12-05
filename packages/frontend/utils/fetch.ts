import { getUserCookie } from "./cookies";

export const fetchWithAuth = async (url: string, body?: any) => {
  const token = getUserCookie();
  if (token) {
    const postHeaders = body
      ? {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      : {};

    const results = await fetch(url, {
      method: body ? "POST" : "GET",
      headers: {
        ...postHeaders,
        Authorization: `Bearer ${token}`,
      },
      body: body ? JSON.stringify(body) : null,
    });
    const data = await results.json();
    return data;
  } else {
    throw Error("Token not found");
  }
};
