import {
  Box,
  Avatar,
  Typography,
  CardContent,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import { Link as RouterLink } from "react-router";
import getChampionImagePath from "../../../util/getChampionImagePath";

type Props = {
  day: string;
  playerId: number;
  winnerName: string;
  glowColor: string;
  textColor: string;
  champion: string;
  mainElement: string;
  championElement: string;
};

const ChampionDisplay = ({
  day,
  playerId,
  winnerName,
  glowColor,
  textColor,
  champion,
  mainElement,
  championElement,
}: Props) => {
  const subElement = championElement === "Norm" ? "" : championElement;
  return (
    <CardContent sx={{ textAlign: "center", py: 3 }}>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Avatar
          src={getChampionImagePath(champion)}
          alt="Champion Character"
          sx={{
            width: 88,
            height: 88,
            boxShadow: glowColor,
          }}
        />
      </Box>
      <Stack spacing={1} direction="row" justifyContent="center">
        <Avatar
          src={`/element/${mainElement.toLowerCase()}.png`}
          sx={{
            width: 32,
            height: 32,
          }}
          variant="rounded"
        />
        <Avatar
          src={`/element/${championElement.toLowerCase()}.png`}
          sx={{
            width: 32,
            height: 32,
          }}
          variant="rounded"
        />
      </Stack>

      <Stack alignItems={"center"}>
        <Typography variant="overline" fontWeight="bold" fontSize="0.75rem">
          {day} Champion
        </Typography>
        <MuiLink
          component={RouterLink}
          to={`/player-profile/${playerId}`}
          noWrap
          underline="none"
          sx={{
            typography: "h4",
            color: "inherit",
            textAlign: "left",
            fontWeight: 900,
            mb: 0.5,
          }}
        >
          {winnerName}
        </MuiLink>
        <Typography variant="body2" sx={{ color: textColor }}>
          {mainElement} {subElement} {champion}
        </Typography>
      </Stack>
    </CardContent>
  );
};

export default ChampionDisplay;
