import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { getAllHabits } from "../../../services/habits";
import CalendarBrowser from "../../CalendarBrowser";
import HabitList from "../../HabitList";

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
    <Box>
      <Heading size="sm" color="gray.500">
        {currentDateString}
      </Heading>
      <Heading>My Journal</Heading>
      {/* CATEGORY TABS */}
      <HabitList date={currentDate} />
      {/* CALENDAR BROWSER */}
      <CalendarBrowser
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      {/* NEW HABIT BUTTON */}
    </Box>
  );
};

export default JournalTab;
