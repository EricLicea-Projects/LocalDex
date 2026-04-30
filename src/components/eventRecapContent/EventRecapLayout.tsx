import { Stack } from "@mui/material";
import type { Standing } from "../../hooks/useLatestEventStandings";
import EventStandingsTable from "../eventRecapStandingsTable/EventStandingsTable";

interface Props {
  championTile: React.ReactNode;
  elementMetaTile: React.ReactNode;
  standings: Standing[];
}

const EventRecapLayout = ({
  championTile,
  elementMetaTile,
  standings,
}: Props) => {
  return (
    <Stack spacing={2} direction={{ sm: "column", lg: "row" }}>
      <Stack spacing={2} direction={{ sm: "row", lg: "column" }}>
        {championTile}
        {elementMetaTile}
      </Stack>
      <EventStandingsTable players={standings} />
    </Stack>
  );
};

export default EventRecapLayout;
