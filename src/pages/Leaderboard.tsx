import { Box, Stack, Typography } from "@mui/material";
import useGetPlayerStatsTable from "../hooks/useGetPlayerStatsTable";
import LocalLeaderBoardMobileCard from "../components/localLeaderboardTable/LocalLeaderBoardMobileCard";
import LoaderOverlay from "../components/LoaderOverlay";
import HamsterLoader from "../loaders/HamsterLoader";
import PageContentFade from "../components/PageContentFade";
import TableLayout from "../components/TableLayout";
import LocalLeaderboardHeader from "../components/localLeaderboardTable/LocalLeaderboardHeader";
import LocalLeaderboardBody from "../components/localLeaderboardTable/LocalLeaderboardBody";

const Leaderboard = () => {
  const { data, loading } = useGetPlayerStatsTable();

  return (
    <Box minHeight="100vh" width="100%" display="flex" justifyContent="center">
      <LoaderOverlay loading={loading}>
        <HamsterLoader />
      </LoaderOverlay>
      <PageContentFade loading={loading}>
        {data ? (
          <Stack p={2} spacing={2} maxWidth={760}>
            <Stack>
              <Typography variant="h4">Locals Leaderboards</Typography>
              <Typography variant="body2">
                See how players are performing at local events
              </Typography>
            </Stack>
            <TableLayout>
              <LocalLeaderboardHeader />
              <LocalLeaderboardBody playerStats={data} />
            </TableLayout>
            {data.map((player, rank) => (
              <LocalLeaderBoardMobileCard
                key={player.player_id}
                player={player}
                rank={rank}
              />
            ))}
          </Stack>
        ) : (
          <Box p={2}>No Data Found.</Box>
        )}
      </PageContentFade>
    </Box>
  );
};

export default Leaderboard;
