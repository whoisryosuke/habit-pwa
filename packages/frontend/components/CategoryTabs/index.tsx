import { Button, Flex, HStack } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useCategoryValue } from "../../context/CategoryContext";

interface Props {}

export default function CategoryTabs({}: Props): ReactElement {
  const { categories, currentCategory, changeCategory } = useCategoryValue();
  return (
    <HStack width="100%" overflowX="scroll">
      <Button
        key="all"
        fontWeight={currentCategory < 0 && "bold"}
        onClick={() => changeCategory(-1)}
      >
        All Habits
      </Button>
      {categories.map((category) => (
        <Button
          key={category.attributes.name}
          fontWeight={currentCategory == category.id && "bold"}
          onClick={() => changeCategory(category.id)}
        >
          {category.attributes.name}
        </Button>
      ))}
    </HStack>
  );
}
