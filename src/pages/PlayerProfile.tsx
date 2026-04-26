import { useState } from "react";
import { useParams } from "react-router";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import PlayerBanner from "../components/playerProfile/PlayerBanner";
import useGetPlayerProfile from "../hooks/useGetPlayerProfile";
import PlayerPersonalStats from "../components/playerProfile/PlayerPersonalStats";
import PlayerChampionStats from "../components/playerProfile/PlayerChampionStats";

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

const PlayerProfile = () => {
  const { playerId } = useParams();
  console.log(playerId);
  if (!playerId) return <Stack>No data</Stack>;
  const { data } = useGetPlayerProfile(playerId);
  console.log(data);
  const [activeTab, setActiveTab] = useState(0);

  if (!data) return <Stack>No Data</Stack>;

  const championList = data.champion_mastery;
  const advElementList = data.advanced_element_usage;
  const events = data.event_history;

  const personalStats = (
    <PlayerPersonalStats
      currentCP={data.player_cp}
      playerRank={data.player_rank}
      playerWinRate={data.win_rate}
      playerWins={data.total_wins}
      playerLosses={data.total_losses}
      events={events}
    />
  );

  const championStats = (
    <PlayerChampionStats
      championList={championList}
      advElementList={advElementList}
    />
  );

  return (
    <Stack spacing={1} p={{ xs: 1, lg: 2 }} flex={1} alignItems="center">
      <Stack spacing={1} width={{ xs: 344, sm: 456, lg: 944 }}>
        <PlayerBanner
          playerId={data.player_id}
          playerName={data.username}
          mainChampion={championList[0].champion_name}
          mainElement={data.most_played_element}
        />

        <Box sx={{ display: { xs: "block", lg: "none" } }}>
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
        </Box>

        <Stack
          spacing={2}
          direction="row"
          width="100%"
          alignItems="flex-start"
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          {personalStats}
          {championStats}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PlayerProfile;
