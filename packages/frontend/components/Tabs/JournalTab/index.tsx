import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { getAllHabits } from "../../../services/habits";
import HabitList from "../../HabitList";

interface Props {}

const JournalTab = (props: Props) => {
  return (
    <Box>
      <Heading>My Journal</Heading>
      {/* CATEGORY TABS */}
      <HabitList date={new Date()} />
      {/* CALENDAR BROWSER */}
      {/* NEW HABIT BUTTON */}
    </Box>
  );
};

export default JournalTab;
