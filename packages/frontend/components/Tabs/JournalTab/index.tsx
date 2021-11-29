import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getAllHabits } from "../../../services/habits";

interface Props {}

const JournalTab = (props: Props) => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchHabits = async () => {
      const habits = await getAllHabits();
      console.log("habits fetched", habits);
    };
    fetchHabits();
  }, [habits]);
  return (
    <Box>
      <Heading>My Journal</Heading>
      {/* CATEGORY TABS */}
      {/* TODAYS HABITS */}
      {/* CALENDAR BROWSER */}
      {/* NEW HABIT BUTTON */}
    </Box>
  );
};

export default JournalTab;
