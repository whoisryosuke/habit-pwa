import { Box } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";
import API from "../../constants/api";
import { getAllHabitLogs, getAllHabits } from "../../services/habits";
import HabitListItem from "../HabitListItem";

interface Props {
  date: Date;
}

const HabitList = ({ date }: Props) => {
  const { data: habits, error } = useSWR(API.habits, getAllHabits, {
    onError: (err, key, config) => console.error("swr error", err, key, config),
  });
  const { data: habitLogs, error: habitLogErrors } = useSWR(
    API.habitlogs,
    getAllHabitLogs
  );

  console.log("habit logs", habitLogs);
  console.log("habits swr", habits, error);

  if (error) return <div>failed to load</div>;
  if (!habits) return <div>loading...</div>;
  return (
    <Box width="100%">
      {habits.map((habit) => (
        <HabitListItem title={habit.title} id={habit.id} completed={false} />
      ))}
    </Box>
  );
};

export default HabitList;
