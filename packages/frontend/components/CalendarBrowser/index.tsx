import { Button, Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface Props {
  currentDate: Date;
  setCurrentDate: any;
}

export default function CalendarBrowser({
  currentDate,
  setCurrentDate,
}: Props): ReactElement {
  const currentDayIndex = currentDate.getDate();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    // We go to next month because...
    currentDate.getMonth() + 1,
    // 0 goes to the last month
    0
  ).getDate();

  console.log("days in month", currentDate.getMonth(), daysInMonth);

  const handleDateChange = (newDayNum) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      newDayNum
    );
    setCurrentDate(newDate);
  };

  console.log("currentDayIndex", currentDate.toDateString(), currentDayIndex);

  const createDayButtons = new Array(daysInMonth).fill(0).map((_, dayIndex) => (
    <Button
      onClick={() => handleDateChange(dayIndex + 1)}
      fontWeight={currentDayIndex === dayIndex + 1 ? "bold" : "normal"}
    >
      {dayIndex + 1}
    </Button>
  ));

  return (
    <Flex width="100%" overflowX="scroll">
      {createDayButtons}
    </Flex>
  );
}
