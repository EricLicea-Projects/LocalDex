import { Stack } from "@mui/material";
import PlayerBanner from "../components/playerProfile/PlayerBanner";
import PersonalRatings from "../components/playerProfile/PersonalRatings";
import ChampionMastery from "../components/playerProfile/ChampionMastery";
import EventHistory from "../components/playerProfile/EventHistory";

const PlayerProfile = () => {
  return (
    <Stack spacing={1} p={2} flex={1} alignItems={"center"}>
      <Stack spacing={1} width={944}>
        <PlayerBanner />
        <Stack spacing={2} direction="row" width="100%" alignItems="flex-start">
          <Stack spacing={1}>
            <PersonalRatings />
            <EventHistory />
          </Stack>
          <ChampionMastery />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PlayerProfile;
