import API from "../constants/api";
import { fetchWithAuth } from "../utils/fetch";

export const getAllHabits = async () => {
  const results = await fetchWithAuth(API.habits);
  if (results) {
    const data = await results.json();
    console.log("habits", data);
    return data;
  }
};
