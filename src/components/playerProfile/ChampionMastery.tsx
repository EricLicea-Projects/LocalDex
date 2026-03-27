import { Stack } from "@mui/material";
import ChampionMasterySlot from "./ChampionMasterySlot";
import PlayerProfileCard from "./PlayerProfileCard";

const ChampionMastery = () => {
  return (
    <PlayerProfileCard side="right" header="Champion Mastery">
      <Stack spacing={2}>
        <ChampionMasterySlot />
        <ChampionMasterySlot />
        <ChampionMasterySlot />
        <ChampionMasterySlot />
        <ChampionMasterySlot />
      </Stack>
    </PlayerProfileCard>
  );
};

export default ChampionMastery;
