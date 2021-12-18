import { Box, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import useSWR from "swr";
import API from "../../constants/api";
import {
  createHabitLogUrl,
  getAllHabitLogs,
  getAllHabits,
} from "../../services/habits";
import { fetchWithAuth } from "../../utils/fetch";
import HabitListItem from "../HabitListItem";

interface Props {
  date: Date;
  currentCategory: number;
}

const HabitList = ({ date, currentCategory = -1 }: Props) => {
  const { data: habits, error } = useSWR(
    `${API.habits}${currentCategory}`,
    () => getAllHabits(currentCategory)
  );
  const { data: habitLogs, error: habitLogErrors } = useSWR(
    createHabitLogUrl(date, date),
    fetchWithAuth
  );
  console.log("habits swr", habits, error);
  console.log("habit logs", habitLogs, habitLogErrors);

  // We take the log data and remap it to a hashmap of habit ids
  // Makes it easier to see what habit is complete vs not
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
    <VStack width="100%">
      {habits.data.map((habit) => (
        <HabitListItem
          title={habit.attributes.title}
          id={habit.id}
          completed={sortedLog[habit.id]}
          date={date}
        />
      ))}
    </VStack>
  );
};

export default HabitList;
