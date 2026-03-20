import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import useLatestEventStandings from "../hooks/useLatestEventStandings";

import PlayerStandingCard from "../components/playerstandingcard/PlayerStandingCard";
import HomepageTile from "../components/dashboardTile/HomepageTile";
import LatestChampionCard from "../components/dashboardTile/latestChampionCard/LatestChampionCard";
import ElementalBarShell from "../components/elementalBar/ElementalBarShell";
import type { ElementalTheme } from "../components/elementalBar/ElementalBarTheme";

const RecentEventRecap = () => {
  const { data } = useLatestEventStandings();

  if (!data) return <Box>No Data Found.</Box>;

  const winner = data.standings[0];
  const theme = winner.main_element;
  const standings = data.standings;
  const mainElements = data.main_element_play_rates;

  return (
    <Box
      p={2}
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={{ xs: "center", md: "flex-start" }}
    >
      <Stack direction={{ xs: "row", md: "column" }} spacing={2}>
        <HomepageTile themeElement={theme}>
          <LatestChampionCard
            themeElement={theme}
            eventData={data.event}
            eventWinner={winner}
          />
        </HomepageTile>
        <HomepageTile>
          <Box
            py={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h6">PTM Season Element Meta</Typography>
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
      </Stack>
      <Grid
        px={{ sm: 0, md: 2 }}
        container
        spacing={{ xs: 0, sm: 0, md: 3 }}
        alignContent="flex-start"
      >
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
