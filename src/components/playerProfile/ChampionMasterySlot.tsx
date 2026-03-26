import { Avatar, Box, Stack, Tooltip, Typography } from "@mui/material";

const winRate = 0.36;
const totalGames = 30;
const totalWins = 10;
const totalLosses = 30;

const ChampionMasterySlot = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack spacing={1} direction="row">
        <Avatar
          src="/champion/zander-blinding-steel.png"
          sx={{ width: 48, height: 48 }}
        />
        <Stack>
          <Typography fontWeight={700}>Zander, Blinding Steel</Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Rank 1
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing={0.5} px={1} width={150}>
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
    </Stack>
  );
};

export default ChampionMasterySlot;
