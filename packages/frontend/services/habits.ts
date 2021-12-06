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

export const createHabitLogUrl = (startDate: Date, endDate?: Date) => {
  // If user doesn't pass an end date, assume it's same day EOD
  let startDateParsed = startDate.toISOString();
  let endDateParsed;
  if (endDate) {
    endDateParsed = endDate.toISOString();
  } else {
    const startDateAdjust = new Date(startDate);
    startDateAdjust.setHours(0);
    startDateParsed = startDateAdjust.toISOString();
    const endDateAdjust = new Date(startDate);
    endDateAdjust.setHours(23);
    endDateParsed = endDateAdjust.toISOString();
  }
  return `${API.habitlogs}&filters[createdAt][$gte]=${startDateParsed}&filters[createdAt][$lte]=${endDateParsed}`;
};

// export const getHabitLogsByDate = async (startDate: Date, endDate?: Date) => {
//   const data = await fetchWithAuth(
//     `${
//       API.habitlogs
//     }&filters[createdAt][$gte]=${startDate.toISOString()}&filters[createdAt][$lte]=${endDateParsed}`
//   );
//   console.log("habit logs by date function", data);
//   return data;
// };

export const postHabitLog = async (habit: number, skip = false) => {
  const data = await fetchWithAuth(API.habitlogs, {
    data: {
      habit,
      date_completed: new Date(),
    },
  });
  console.log("post habit logs function", data);
  return data;
};
