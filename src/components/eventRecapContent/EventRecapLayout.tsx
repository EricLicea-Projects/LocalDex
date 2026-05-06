import { Stack } from "@mui/material";
import type { Standing } from "../../hooks/useLatestEventStandings";
import TableLayout from "../TableLayout";
import EventStandingsHeader from "../eventRecapStandingsTable/EventStandingsHeader";
import EventStandingsBody from "../eventRecapStandingsTable/EventStandingsBody";

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
      <TableLayout>
        <EventStandingsHeader />
        <EventStandingsBody players={standings} />
      </TableLayout>
    </Stack>
  );
};

export default EventRecapLayout;
