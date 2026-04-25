import { Stack } from "@mui/material";
import PlayerBanner from "../components/playerProfile/PlayerBanner";
import PersonalRatings from "../components/playerProfile/PersonalRatings";
import ChampionMastery from "../components/playerProfile/ChampionMastery";
import EventHistory from "../components/playerProfile/EventHistory";
import AdvanceElementMastery from "../components/playerProfile/AdvanceElementMastery";

import useGetPlayerProfile from "../hooks/useGetPlayerProfile";

const PlayerProfile = () => {
  const { data } = useGetPlayerProfile();

  if (!data) return <Stack>No Data</Stack>;
  const championList = data.champion_mastery;
  const advElementList = data.advanced_element_usage;
  const events = data.event_history;

  return (
    <Stack spacing={1} p={2} flex={1} alignItems={"center"}>
      <Stack spacing={1} width={944}>
        <PlayerBanner
          playerId={data.player_id}
          playerName={data.username}
          mainChampion={championList[0].champion_name}
          mainElement={data.most_played_element}
        />
        <Stack spacing={2} direction="row" width="100%" alignItems="flex-start">
          <Stack spacing={1}>
            <PersonalRatings
              currentCP={data.player_cp}
              playerRank={data.player_rank}
              playerWinRate={data.win_rate}
              playerWins={data.total_wins}
              playerLosses={data.total_losses}
            />
            <EventHistory username={data.username} events={events} />
          </Stack>
          <Stack spacing={1} width="100%">
            <ChampionMastery championList={championList} />
            <AdvanceElementMastery advElementList={advElementList} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PlayerProfile;
