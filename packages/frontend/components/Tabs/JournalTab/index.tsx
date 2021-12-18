import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { getAllHabits } from "../../../services/habits";
import CalendarBrowser from "../../CalendarBrowser";
import CategoryTabs from "../../CategoryTabs";
import HabitList from "../../HabitList";
import NewHabitButton from "../../NewHabitButton";

interface Props {}

const DEFAULT_DATE = new Date();

const JournalTab = (props: Props) => {
  const [currentDate, setCurrentDate] = useState(DEFAULT_DATE);
  console.log("date", currentDate.toDateString());
  const isToday =
    currentDate.toISOString().split("T")[0] ===
    DEFAULT_DATE.toISOString().split("T")[0];

  const currentDateString = isToday
    ? "Today"
    : `${currentDate.toLocaleString("default", { month: "long" })} 
        ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
  return (
    <Box position="relative" flex="1">
      <Heading size="sm" color="gray.500">
        {currentDateString}
      </Heading>
      <Heading>My Journal</Heading>
      <CategoryTabs />
      <HabitList date={currentDate} />
      <Flex width="100%" position="absolute" bottom="0" left="0">
        <CalendarBrowser
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
        <NewHabitButton />
      </Flex>
      {/* NEW HABIT BUTTON */}
    </Box>
  );
};

export default JournalTab;
