import { Avatar, Stack, Typography } from "@mui/material";
import getChampionImagePath from "../../util/getChampionImagePath";

type Props = {
  championName: string;
  rank: number;
};

const SeasonalStatsLayoutCardHeader = ({ championName, rank }: Props) => {
  const getRankColor = (r: number) => {
    if (r === 0) return "#FFD700"; // Gold
    if (r === 1) return "#C0C0C0"; // Silver
    if (r === 2) return "#CD7F32"; // Bronze
    return "text.secondary";
  };

  return (
    <Stack direction="row" px={2} py={1.5} spacing={2} alignItems="center">
      <Avatar
        variant="rounded"
        src={getChampionImagePath(championName)}
        alt={championName}
        sx={{
          width: "3.5rem",
          height: "3.5rem",
          border: "2px solid rgba(255,255,255,0.1)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
          borderRadius: "0.375rem",
        }}
      />

      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 800,
          lineHeight: 1.1,
          flexGrow: 1,
          pr: 1,
        }}
      >
        {championName}
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 900,
          color: getRankColor(rank),
          fontStyle: "italic",
          textShadow: rank < 3 ? `0 0 10px ${getRankColor(rank)}60` : "none",
        }}
      >
        #{rank + 1}
      </Typography>
    </Stack>
  );
};

export default SeasonalStatsLayoutCardHeader;
