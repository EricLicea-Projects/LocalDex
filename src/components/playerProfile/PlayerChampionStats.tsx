import { Stack } from "@mui/material";
import ChampionMastery from "./ChampionMastery";
import AdvanceElementMastery from "./AdvanceElementMastery";
import type {
  AdvanceElementUsage,
  PlayerChampionMastery,
} from "../../hooks/useGetPlayerProfile";

type Props = {
  championList: PlayerChampionMastery[];
  advElementList: AdvanceElementUsage[];
};

const PlayerChampionStats = ({ championList, advElementList }: Props) => {
  return (
    <Stack spacing={1} width="100%">
      <ChampionMastery championList={championList} />
      <AdvanceElementMastery advElementList={advElementList} />
    </Stack>
  );
};

export default PlayerChampionStats;
