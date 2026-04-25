import { Avatar, Box, Stack, Tooltip, Typography } from "@mui/material";
import getChampionImagePath from "../../util/getChampionImagePath";

type Props = {
  championName: string;
  winRate: number;
  wins: number;
  losses: number;
};

const totalWins = 10;
const totalLosses = 30;

const ChampionMasterySlot = ({
  championName,
  winRate,
  wins,
  losses,
}: Props) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack spacing={1} direction="row">
        <Avatar
          src={getChampionImagePath(championName)}
          sx={{ width: 48, height: 48 }}
        />
        <Stack>
          <Typography fontWeight={700}>{championName}</Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            {"Rank -"}
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
            {`${winRate}%`}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {`${wins}W - ${losses}L`}
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
                const winPct = winRate;
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
