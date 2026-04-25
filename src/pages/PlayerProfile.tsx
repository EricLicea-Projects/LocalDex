import { Stack } from "@mui/material";
import PlayerBanner from "../components/playerProfile/PlayerBanner";
import useGetPlayerProfile from "../hooks/useGetPlayerProfile";
import PlayerPersonalStats from "../components/playerProfile/PlayerPersonalStats";
import PlayerChampionStats from "../components/playerProfile/PlayerChampionStats";

const PlayerProfile = () => {
  const { data } = useGetPlayerProfile();

  if (!data) return <Stack>No Data</Stack>;
  const championList = data.champion_mastery;
  const advElementList = data.advanced_element_usage;
  const events = data.event_history;
  //lg: 944

  return (
    <Stack spacing={1} p={{ xs: 1, lg: 2 }} flex={1} alignItems={"center"}>
      <Stack spacing={1} width={{ xs: 344 }}>
        <PlayerBanner
          playerId={data.player_id}
          playerName={data.username}
          mainChampion={championList[0].champion_name}
          mainElement={data.most_played_element}
        />
        <Stack spacing={2} direction="row" width="100%" alignItems="flex-start">
          <PlayerPersonalStats
            currentCP={data.player_cp}
            playerRank={data.player_rank}
            playerWinRate={data.win_rate}
            playerWins={data.total_wins}
            playerLosses={data.total_losses}
            events={events}
          />
          <PlayerChampionStats
            championList={championList}
            advElementList={advElementList}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PlayerProfile;
