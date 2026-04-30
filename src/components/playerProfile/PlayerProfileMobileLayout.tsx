import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const TabPanel = ({ children, value, index }: TabPanelProps) => (
  <Box
    role="tabpanel"
    hidden={value !== index}
    id={`player-tabpanel-${index}`}
    aria-labelledby={`player-tab-${index}`}
    width="100%"
    mt={2}
  >
    {value === index && children}
  </Box>
);

interface Props {
  personalStats: React.ReactNode;
  championStats: React.ReactNode;
}

const PlayerProfileMobileLayout = ({ personalStats, championStats }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
        variant="fullWidth"
        aria-label="player stats tabs"
      >
        <Tab
          label="Personal Stats"
          id="player-tab-0"
          aria-controls="player-tabpanel-0"
        />
        <Tab
          label="Champion Stats"
          id="player-tab-1"
          aria-controls="player-tabpanel-1"
        />
      </Tabs>
      <TabPanel value={activeTab} index={0}>
        {personalStats}
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        {championStats}
      </TabPanel>
    </>
  );
};

export default PlayerProfileMobileLayout;
