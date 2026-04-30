import { Box, Divider, Typography } from "@mui/material";

import EventRecapMobileLayout from "./EventRecapMobileLayout";
import EventRecapLayout from "./EventRecapLayout";
import HomepageTile from "../dashboardTile/HomepageTile";
import LatestChampionCard from "../dashboardTile/latestChampionCard/LatestChampionCard";
import ElementalBarShell from "../elementalBar/ElementalBarShell";
import type { ElementalTheme } from "../elementalBar/ElementalBarTheme";
import type { LatestEventStandingsResponse } from "../../hooks/useLatestEventStandings";

interface Props {
  data: LatestEventStandingsResponse;
}

const EventRecapContent = ({ data }: Props) => {
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
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <EventRecapMobileLayout
          championTile={championTile}
          elementMetaTile={elementMetaTile}
          standings={standings}
        />
      </Box>

      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          width: "100%",
          gap: 2,
          justifyContent: "center",
        }}
      >
        <EventRecapLayout
          championTile={championTile}
          elementMetaTile={elementMetaTile}
          standings={standings}
        />
      </Box>
    </Box>
  );
};

export default EventRecapContent;
