import { Box, Typography } from "@mui/material";

type Props = {
  championName: string;
  wins: number;
  losses: number;
  stalemates: number;
};

const PlayerAndChampionBlock = ({
  championName,
  wins,
  stalemates,
  losses,
}: Props) => {
  return (
    <Box sx={{ flexGrow: 1, minWidth: 0 }}>
      <Typography
        variant="body1"
        mb={0.5}
        noWrap
        sx={{ fontWeight: 800, lineHeight: 1.1 }}
      >
        {championName}
      </Typography>
      <Typography variant="caption" fontWeight={600}>
        {`${wins}W - ${losses}L - ${stalemates}D`}
      </Typography>
    </Box>
  );
};

export default PlayerAndChampionBlock;
