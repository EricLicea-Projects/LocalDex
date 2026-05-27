import { Stack } from "@mui/material";
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
        <Stack
          key={champion.champion_id}
          sx={{
            width: "100%",
            borderRadius: "0.5rem",
            background:
              "linear-gradient(145deg, hsl(250, 65%, 13%) 0%, hsl(320, 75%, 5%) 100%)",
            borderLeft: "4px solid",
            borderLeftColor: "primary.main",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            overflow: "hidden",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
            },
          }}
        >
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
