import { CardContent, Stack } from "@mui/material";
import ChampionMasterySlot from "./ChampionMasterySlot";
import PlayerProfileCard from "./PlayerProfileCard";

const ChampionMastery = () => {
  return (
    <PlayerProfileCard side="right" header="Champion Mastery">
      <CardContent>
        <Stack spacing={2}>
          <ChampionMasterySlot />
          <ChampionMasterySlot />
          <ChampionMasterySlot />
          <ChampionMasterySlot />
          <ChampionMasterySlot />
        </Stack>
      </CardContent>
    </PlayerProfileCard>
  );
};

export default ChampionMastery;
