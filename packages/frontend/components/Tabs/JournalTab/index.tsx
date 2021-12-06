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
  return (
    <Box>
      <Heading>My Journal</Heading>
      {/* CATEGORY TABS */}
      <HabitList date={currentDate} />
      {/* CALENDAR BROWSER */}
      <CalendarBrowser setCurrentDate={setCurrentDate} />
      {/* NEW HABIT BUTTON */}
    </Box>
  );
};

export default JournalTab;
