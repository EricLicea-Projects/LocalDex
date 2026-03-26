import { Box, Stack, Typography } from "@mui/material";
import LocalLeaderboardTable from "../components/localLeaderboardTable/LocalLeaderboardTable";
import useGetPlayerStatsTable from "../hooks/useGetPlayerStatsTable";
import LocalLeaderBoardMobileCard from "../components/localLeaderboardTable/LocalLeaderBoardMobileCard";

const Leaderboard = () => {
  const { data } = useGetPlayerStatsTable();

  if (!data) return <Box>No Data Found.</Box>;

  return (
    <Stack p={2} spacing={2} justifyContent={"center"}>
      <Stack>
        <Typography variant="h4">Locals Leaderboards</Typography>
        <Typography variant="body2">
          See how players are performing at local events
        </Typography>
      </Stack>
      <LocalLeaderboardTable playerStats={data} />
      {data.map((player, rank) => (
        <LocalLeaderBoardMobileCard player={player} rank={rank} />
      ))}
    </Stack>
  );
};

export default Leaderboard;
