import API from "../constants/api";
import { fetchWithAuth } from "../utils/fetch";

export const getAllHabits = async () => {
  const data = await fetchWithAuth(API.habits);
  console.log("habits function", data);
  return data;
};
