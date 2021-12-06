import { Button, Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import useSWR from "swr";
import API from "../../constants/api";
import { fetchWithAuth } from "../../utils/fetch";

interface Props {}

export default function CategoryTabs({}: Props): ReactElement {
  const { data: categories, error } = useSWR(API.categories, fetchWithAuth);
  if (error) return <div>failed to load</div>;
  if (!categories) return <div>loading...</div>;
  return (
    <Flex width="100%" overflowX="scroll">
      {categories.data.map((category) => (
        <Button>{category.attributes.name}</Button>
      ))}
    </Flex>
  );
}
