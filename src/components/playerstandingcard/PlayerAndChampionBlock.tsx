import { Box, Typography } from "@mui/material";

type Props = {
  username: string;
  championName: string;
};

const PlayerAndChampionBlock = ({ username, championName }: Props) => {
  return (
    <Box sx={{ flexGrow: 1, minWidth: 0 }}>
      <Typography
        variant="h6"
        mb={0.5}
        noWrap
        sx={{ fontWeight: 800, lineHeight: 1.1 }}
      >
        {username}
      </Typography>
      <Typography variant="body2" noWrap sx={{ fontWeight: 200 }}>
        {championName}
      </Typography>
    </Box>
  );
};

export default PlayerAndChampionBlock;
