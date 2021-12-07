import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import useSWR from "swr";
import API from "../../constants/api";
import {
  createHabitLogUrl,
  getAllHabitLogs,
  getAllHabits,
  getHabitLogsByDate,
} from "../../services/habits";
import { fetchWithAuth } from "../../utils/fetch";
import HabitListItem from "../HabitListItem";

interface Props {
  date: Date;
}

const HabitList = ({ date }: Props) => {
  const { data: habits, error } = useSWR(API.habits, getAllHabits);
  const { data: habitLogs, error: habitLogErrors } = useSWR(
    createHabitLogUrl(date, date),
    fetchWithAuth
  );
  console.log("habits swr", habits, error);
  console.log("habit logs", habitLogs, habitLogErrors);

  const sortedLog = habits?.data.reduce((prevHabit, currHabit) => {
    return {
      ...prevHabit,
      [currHabit.id]: habitLogs?.data?.some((habitLog) => {
        console.log("habitLog", habitLog, habitLog.attributes);
        return habitLog?.attributes.habit?.data.id === currHabit.id;
      }),
    };
  }, {});
  console.log("sorted log", sortedLog);

  if (error) return <div>failed to load</div>;
  if (!habits) return <div>loading...</div>;

  return (
    <Box width="100%">
      {habits.data.map((habit) => (
        <HabitListItem
          title={habit.attributes.title}
          id={habit.id}
          completed={sortedLog[habit.id]}
          date={date}
        />
      ))}
    </Box>
  );
};

export default HabitList;
