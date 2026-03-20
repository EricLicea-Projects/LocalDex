import { Box, Avatar, Typography, CardContent, Stack } from "@mui/material";
import getChampionImagePath from "../../../util/getChampionImagePath";

type Props = {
  day: string;
  winnerName: string;
  glowColor: string;
  textColor: string;
  champion: string;
  mainElement: string;
  championElement: string;
};

const ChampionDisplay = ({
  day,
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

      <Typography
        variant="overline"
        fontWeight="bold"
        fontSize="0.75rem"
        sx={{ color: textColor }}
      >
        {day} Champion
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 900, mb: 0.5 }}>
        {winnerName}
      </Typography>

      <Typography variant="body2" sx={{ color: textColor }}>
        {mainElement} {subElement} {champion}
      </Typography>
    </CardContent>
  );
};

export default ChampionDisplay;
