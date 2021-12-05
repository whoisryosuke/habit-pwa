import API from "../constants/api";
import { fetchWithAuth } from "../utils/fetch";

export const getAllHabits = async () => {
  const data = await fetchWithAuth(API.habits);
  console.log("habits function", data);
  return data;
};

export const getAllHabitLogs = async () => {
  const data = await fetchWithAuth(API.habitlogs);
  console.log("habit logs function", data);
  return data;
};

export const postHabitLog = async (habit: number, skip = false) => {
  const data = await fetchWithAuth(API.habitlogs, {
    habit,
    date_completed: new Date(),
  });
  console.log("post habit logs function", data);
  return data;
};
