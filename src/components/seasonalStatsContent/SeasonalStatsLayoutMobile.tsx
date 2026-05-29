import { Stack } from "@mui/material";
import { gradientCardSx } from "../../styles/cardStyles";
import type { ChampionStats } from "../../hooks/useGetChampionStatsTable";
import SeasonalStatsLayoutCardHeader from "./SeasonalStatsLayoutCardHeader";
import SeasonalStatsLayoutCardFooter from "./SeasonalStatsLayoutCardFooter";

type Props = {
  seasonData: ChampionStats[];
};

const MOBILE_WIDTH = "21rem";

const SeasonalStatsLayoutMobile = ({ seasonData }: Props) => {
  return (
    <Stack
      spacing={2}
      width={MOBILE_WIDTH}
      display={{ xs: "flex", sm: "none" }}
    >
      {seasonData.map((champion, rank) => (
        <Stack key={champion.champion_id} sx={gradientCardSx}>
          <SeasonalStatsLayoutCardHeader
            championName={champion.champion_name}
            rank={rank}
          />
          <SeasonalStatsLayoutCardFooter
            pickRate={champion.pick_rate}
            winRate={champion.win_rate}
            elements={champion.top_elements}
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default SeasonalStatsLayoutMobile;
