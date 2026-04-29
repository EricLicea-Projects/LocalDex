import { Paper, Table, TableContainer } from "@mui/material";
import EventStandingsHeader from "./EventStandingsHeader";
import type { Standing } from "../../hooks/useLatestEventStandings";
import EventStandingsBody from "./EventStandingsBody";

type Props = {
  players: Standing[];
};

const EventStandingsTable = ({ players }: Props) => {
  return (
    <TableContainer
      component={Paper}
      elevation={8}
      sx={{
        display: { xs: "none", sm: "flex" },
        width: { sm: 696, lg: 944 },
        minWidth: { sm: 696, lg: 872 },
        border: "2px double",
        borderColor: "border.muted",
        borderRadius: 3,
        overflow: "hidden",
        backgroundImage: "none",
      }}
    >
      <Table stickyHeader>
        <EventStandingsHeader />
        <EventStandingsBody players={players} />
      </Table>
    </TableContainer>
  );
};

export default EventStandingsTable;
