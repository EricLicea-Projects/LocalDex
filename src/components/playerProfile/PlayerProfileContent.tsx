import { Box, Stack } from "@mui/material";
import type { PlayerProfileResponse } from "../../hooks/useGetPlayerProfile";
import PlayerBanner from "./PlayerBanner";
import PlayerPersonalStats from "./PlayerPersonalStats";
import PlayerChampionStats from "./PlayerChampionStats";
import PlayerProfileMobileLayout from "./PlayerProfileMobileLayout";
import PlayerProfileLayout from "./PlayerProfileLayout";

interface Props {
  data: PlayerProfileResponse;
}

const PlayerProfileContent = ({ data }: Props) => {
  const personalStats = (
    <PlayerPersonalStats
      currentCP={data.player_cp}
      playerRank={data.player_rank}
      playerWinRate={data.win_rate}
      playerWins={data.total_wins}
      playerLosses={data.total_losses}
      events={data.event_history}
    />
  );

  const championStats = (
    <PlayerChampionStats
      championList={data.champion_mastery}
      advElementList={data.advanced_element_usage}
    />
  );

  return (
    <Stack spacing={1} p={{ xs: 1, lg: 2 }} flex={1} alignItems="center">
      <Stack spacing={1} width={{ xs: 344, sm: 456, lg: 944 }}>
        <PlayerBanner
          playerId={data.player_id}
          playerName={data.username}
          mainChampion={data.champion_mastery[0].champion_name}
          mainElement={data.most_played_element}
        />
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <PlayerProfileMobileLayout
            personalStats={personalStats}
            championStats={championStats}
          />
        </Box>
        <Box sx={{ display: { xs: "none", lg: "flex" } }}>
          <PlayerProfileLayout
            personalStats={personalStats}
            championStats={championStats}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default PlayerProfileContent;
