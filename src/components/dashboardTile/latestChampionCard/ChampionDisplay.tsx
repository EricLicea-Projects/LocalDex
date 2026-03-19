import { Box, Avatar, Typography, CardContent } from "@mui/material";
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
            width: 80,
            height: 80,
            boxShadow: glowColor,
          }}
        />
      </Box>

      <Typography
        variant="overline"
        fontWeight="bold"
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
