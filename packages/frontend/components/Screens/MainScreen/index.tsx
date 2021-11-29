import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import FooterTabs from "../../FooterTabs";
import JournalTab from "../../Tabs/JournalTab";

interface Props {}

const MainScreen = (props: Props) => {
  return (
    <Tabs>
      <FooterTabs />
      <TabPanels>
        <TabPanel>
          <JournalTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MainScreen;
