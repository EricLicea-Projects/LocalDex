import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";
import getChampionImagePath from "../../util/getChampionImagePath";

type Props = {
  playerId: number;
  playerName: string;
  mainChampion: string;
  mainElement: string;
};

const PlayerBanner = ({
  playerId,
  playerName,
  mainChampion,
  mainElement,
}: Props) => {
  const championImg = getChampionImagePath(mainChampion);
  return (
    <Card
      elevation={3}
      sx={{
        height: 168,
        width: "100%",
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("/champion/Spirit-of-${mainElement}.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <CardContent>
        <Stack spacing={2} direction="row">
          <Avatar src={championImg} sx={{ height: 80, width: 80 }} />
          <Stack justifyContent={"center"}>
            <Typography variant="h6" fontWeight={700}>
              {`${playerName} #${playerId}`}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {mainChampion}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PlayerBanner;
