import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import FooterTabs from "../../FooterTabs";
import JournalTab from "../../Tabs/JournalTab";

interface Props {}

const MainScreen = (props: Props) => {
  return (
    <Tabs
      position="relative"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      flex="1"
    >
      <TabPanels display="flex" flexDirection="column" flex="1">
        <TabPanel display="flex" flex="1" flexDirection="column">
          <JournalTab />
        </TabPanel>
      </TabPanels>
      <FooterTabs />
    </Tabs>
  );
};

export default MainScreen;
