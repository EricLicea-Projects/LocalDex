import { Box, Stack, TableCell, Typography } from "@mui/material";

type Props = {
  winRate: number;
  totalGames: number;
};
const LocalLeaderboardWinRate = ({ winRate, totalGames }: Props) => {
  return (
    <TableCell sx={{ minWidth: 150 }}>
      <Stack spacing={0.5}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" fontWeight={700}>
            {winRate}%
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {totalGames} games
          </Typography>
        </Stack>

        <Box
          sx={{
            height: 8,
            width: "100%",
            borderRadius: 1,
            background: (theme) => {
              const winPct = winRate;
              const green = theme.palette.success.main;
              const red = theme.palette.error.main;
              return `linear-gradient(90deg, ${green} 0%, ${green} ${winPct}%, ${red} ${winPct}%, ${red} 100%)`;
            },
          }}
        />
      </Stack>
    </TableCell>
  );
};

export default LocalLeaderboardWinRate;
