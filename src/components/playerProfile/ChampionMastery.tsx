import { Stack } from "@mui/material";
import ChampionMasterySlot from "./ChampionMasterySlot";
import PlayerProfileCard from "./PlayerProfileCard";
import type { PlayerChampionMastery } from "../../hooks/useGetPlayerProfile";

type Props = {
  championList: PlayerChampionMastery[];
};

const ChampionMastery = ({ championList }: Props) => {
  return (
    <PlayerProfileCard side="right" header="Champion Mastery">
      <Stack spacing={2}>
        {championList.map((champion) => (
          <ChampionMasterySlot
            key={champion.champion_id}
            championName={champion.champion_name}
            winRate={champion.win_rate}
            wins={champion.wins}
            losses={champion.losses}
          />
        ))}
      </Stack>
    </PlayerProfileCard>
  );
};

export default ChampionMastery;
