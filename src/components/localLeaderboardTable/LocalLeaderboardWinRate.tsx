import { Box, Stack, TableCell, Tooltip, Typography } from "@mui/material";

type Props = {
  winRate: number;
  totalGames: number;
  totalWins: number;
  totalLosses: number;
};
const LocalLeaderboardWinRate = ({
  winRate,
  totalGames,
  totalLosses,
  totalWins,
}: Props) => {
  return (
    <TableCell sx={{ minWidth: 150 }}>
      <Stack spacing={0.5}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" fontWeight={700}>
            {(winRate * 100).toFixed(1)}%
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {totalGames} games
          </Typography>
        </Stack>
        <Tooltip
          title={`${totalWins}W - ${totalLosses}L`}
          arrow
          placement="top"
        >
          <Box
            sx={{
              height: 8,
              width: "100%",
              borderRadius: 1,
              background: (theme) => {
                const winPct = winRate * 100;
                const green = theme.palette.success.main;
                const red = theme.palette.error.main;
                return `linear-gradient(90deg, ${green} 0%, ${green} ${winPct}%, ${red} ${winPct}%, ${red} 100%)`;
              },
            }}
          />
        </Tooltip>
      </Stack>
    </TableCell>
  );
};

export default LocalLeaderboardWinRate;
