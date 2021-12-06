import { Button, Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface Props {
  setCurrentDate: any;
}

export default function CalendarBrowser({
  setCurrentDate,
}: Props): ReactElement {
  var date = new Date();
  //   var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  //   var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const daysInMonth = new Date(
    date.getFullYear(),
    // We go to next month because...
    date.getMonth() + 1,
    // 0 goes to the last month
    0
  ).getDate();

  console.log("days in month", date.getMonth(), daysInMonth);

  // for (var d = new Date(2012, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
  //   daysOfYear.push(new Date(d));
  // }
  const handleDateChange = (newDayNum) => {
    const newDate = new Date(date.getFullYear(), date.getMonth(), newDayNum);
    setCurrentDate(newDate);
  };

  const createDayButtons = new Array(daysInMonth)
    .fill(0)
    .map((_, dayIndex) => (
      <Button onClick={() => handleDateChange(dayIndex + 1)}>
        {dayIndex + 1}
      </Button>
    ));

  return (
    <Flex width="100%" overflowX="scroll">
      {createDayButtons}
    </Flex>
  );
}
