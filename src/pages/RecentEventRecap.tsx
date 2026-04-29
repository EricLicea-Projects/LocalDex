import { useState, type SyntheticEvent } from "react";
import {
  Box,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { EmojiEvents, Flare } from "@mui/icons-material";

import useLatestEventStandings from "../hooks/useLatestEventStandings";
import PlayerStandingCard from "../components/playerstandingcard/PlayerStandingCard";
import HomepageTile from "../components/dashboardTile/HomepageTile";
import LatestChampionCard from "../components/dashboardTile/latestChampionCard/LatestChampionCard";
import ElementalBarShell from "../components/elementalBar/ElementalBarShell";
import type { ElementalTheme } from "../components/elementalBar/ElementalBarTheme";
import EventStandingsTable from "../components/eventRecapStandingsTable/EventStandingsTable";

const RecentEventRecap = () => {
  const { data } = useLatestEventStandings();
  const [value, setValue] = useState(0);

  if (!data) return <Box>No Data Found.</Box>;

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const winner = data.standings[0];
  const theme = winner.main_element;
  const standings = data.standings;
  const mainElements = data.main_element_play_rates;

  const championTile = (
    <HomepageTile themeElement={theme}>
      <LatestChampionCard
        themeElement={theme}
        eventData={data.event}
        eventWinner={winner}
      />
    </HomepageTile>
  );

  const elementMetaTile = (
    <HomepageTile>
      <Box py={1} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h6">RDO Season Element Meta</Typography>
      </Box>

      <Divider variant="middle" />

      {mainElements.map((element) => (
        <ElementalBarShell
          key={element.element_name}
          playrate={element.play_rate}
          theme={element.element_name.toLowerCase() as ElementalTheme}
        />
      ))}
    </HomepageTile>
  );

  return (
    <Box
      p={2}
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      alignItems={{ xs: "center", lg: "flex-start" }}
      gap={2}
    >
      <Box width="100%" sx={{ display: { xs: "block", sm: "none" } }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Champion and Element Tabs"
          variant="fullWidth"
          sx={{
            mb: 2,
          }}
        >
          <Tab icon={<EmojiEvents />} label="Champion" />
          <Tab icon={<Flare />} label="Element Meta" />
        </Tabs>

        <Box display="flex" justifyContent="center">
          {value === 0 && championTile}
          {value === 1 && elementMetaTile}
        </Box>
      </Box>

      <Stack
        spacing={2}
        sx={{ display: { xs: "none", sm: "flex" } }}
        direction={{ sm: "row", lg: "column" }}
      >
        {championTile}
        {elementMetaTile}
      </Stack>
      <EventStandingsTable players={standings} />
      <Grid container display={{ xs: "block", sm: "none" }}>
        {standings.slice(1).map((player) => (
          <Grid
            size={{ xs: 12, sm: 6, lg: 4 }}
            key={player.player_id}
            display="flex"
            justifyContent="center"
          >
            <PlayerStandingCard player={player} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecentEventRecap;
