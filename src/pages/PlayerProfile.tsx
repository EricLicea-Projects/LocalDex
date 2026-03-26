import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";
import PlayerBanner from "../components/playerProfile/PlayerBanner";
import PersonalRatings from "../components/playerProfile/PersonalRatings";

const PlayerProfile = () => {
  return (
    <Stack spacing={1} p={2} flex={1} alignItems={"center"}>
      <PlayerBanner />
      <PersonalRatings />
    </Stack>
  );
};

export default PlayerProfile;
