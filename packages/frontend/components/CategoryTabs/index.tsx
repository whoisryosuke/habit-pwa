import { Button, Flex, HStack } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useCategoryValue } from "../../context/CategoryContext";

interface Props {}

export default function CategoryTabs({}: Props): ReactElement {
  const { categories, currentCategory, setCurrentCategory } =
    useCategoryValue();
  return (
    <HStack width="100%" overflowX="scroll">
      <Button fontWeight={currentCategory < 0 && "bold"}>All Habits</Button>
      {categories.map((category) => (
        <Button fontWeight={currentCategory == category.id && "bold"}>
          {category.attributes.name}
        </Button>
      ))}
    </HStack>
  );
}
