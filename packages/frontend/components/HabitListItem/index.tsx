import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  id: number;
  completed: boolean;
}

const HabitListItem = ({ title, id, completed }: Props) => {
  const subtitleColor = useColorModeValue("gray.700", "gray.400");
  return (
    <Flex width="100%" justifyContent="space-between">
      <Flex flexDirection="column">
        <Heading size="2xs">{title}</Heading>
        <Text color={subtitleColor} size="2xs">
          {completed ? "1" : "0"} / 1 times
        </Text>
      </Flex>
      {completed ? "Completed" : <Button>Done</Button>}
    </Flex>
  );
};

export default HabitListItem;
