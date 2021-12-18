import API from "../constants/api";
import { fetchWithAuth } from "../utils/fetch";

export const getAllHabits = async () => {
  const data = await fetchWithAuth(API.habits);
  console.log("habits function", data);
  return data;
};

export const postHabit = async (data: any) => {
  const result = await fetchWithAuth(API.habits, {
    data,
  });
  console.log("post habit function", result);
  return result;
};

// Habit Logs

export const getAllHabitLogs = async () => {
  const data = await fetchWithAuth(API.habitlogs);
  console.log("habit logs function", data);
  return data;
};

export const createHabitLogUrl = (startDate: Date, endDate?: Date) => {
  // If user doesn't pass an end date, assume it's same day EOD
  let startDateParsed = startDate.toISOString().split("T")[0];
  let endDateParsed;
  if (endDate) {
    endDateParsed = endDate.toISOString().split("T")[0];
  } else {
    const endDateAdjust = new Date(startDate);
    // endDateAdjust.setHours(23);
    endDateParsed = endDateAdjust.toISOString().split("T")[0];
  }
  console.log(
    "url",
    `${API.habitlogs}&filters[date_completed][$gte]=${startDateParsed}T00:00:00.150Z&filters[date_completed][$lte]=${endDateParsed}T23:59:59.150Z`
  );
  return `${API.habitlogs}&filters[date_completed][$gte]=${startDateParsed}T00:00:00.150Z&filters[date_completed][$lte]=${endDateParsed}T23:59:59.150Z`;
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

export const postHabitLog = async (
  habit: number,
  date_completed: Date = new Date(),
  skip = false
) => {
  const data = await fetchWithAuth(API.habitlogs, {
    data: {
      habit,
      date_completed,
    },
  });
  console.log("post habit logs function", data);
  return data;
};
