import { Paper, Table, TableContainer } from "@mui/material";
import type { PlayerStats } from "../../hooks/useGetPlayerStatsTable";
import LocalLeaderboardHeader from "./LocalLeaderboardHeader";
import LocalLeaderboardBody from "./LocalLeaderboardBody";

type Props = {
  playerStats: PlayerStats[];
};

const LocalLeaderboardTable = ({ playerStats }: Props) => {
  return (
    <TableContainer
      component={Paper}
      elevation={8}
      sx={{
        display: { xs: "none", sm: "flex" },
        border: "2px double",
        borderColor: "border.muted",
        borderRadius: 3,
        overflow: "hidden",
        backgroundImage: "none",
      }}
    >
      <Table stickyHeader>
        <LocalLeaderboardHeader />
        <LocalLeaderboardBody playerStats={playerStats} />
      </Table>
    </TableContainer>
  );
};

export default LocalLeaderboardTable;
