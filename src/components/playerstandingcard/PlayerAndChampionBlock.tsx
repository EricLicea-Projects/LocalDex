import { Link as MuiLink, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

type Props = {
  username: string;
  playerId: number;
  championName: string;
};

const PlayerAndChampionBlock = ({
  championName,
  username,
  playerId,
}: Props) => {
  return (
    <Stack sx={{ flexGrow: 1, minWidth: 0 }}>
      <MuiLink
        component={RouterLink}
        to={`/player-profile/${playerId}`}
        mb={0}
        noWrap
        underline="none"
        sx={{
          typography: { xs: "body1", sm: "h6" },
          fontWeight: 900,
          lineHeight: 1.1,
          color: "inherit",
        }}
      >
        {username}
      </MuiLink>

      <Typography variant="caption" fontWeight={400}>
        {championName}
      </Typography>
    </Stack>
  );
};

export default PlayerAndChampionBlock;
