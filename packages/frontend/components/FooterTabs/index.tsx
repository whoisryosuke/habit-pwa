import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

interface Props {}

export const FooterTabs = (props: Props) => {
  return (
    <TabList>
      <Tab>Journal</Tab>
      <Tab>Progress</Tab>
      <Tab>Settings</Tab>
    </TabList>
  );
};

export default FooterTabs;
