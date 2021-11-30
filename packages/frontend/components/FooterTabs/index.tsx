import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

interface Props {}

export const FooterTabs = (props: Props) => {
  const tabCount = 3;
  const tabWidth = 1 / tabCount;
  return (
    <TabList width="100%" position="absolute" bottom={0} left={0}>
      <Tab width={tabWidth}>Journal</Tab>
      <Tab width={tabWidth}>Progress</Tab>
      <Tab width={tabWidth}>Settings</Tab>
    </TabList>
  );
};

export default FooterTabs;
