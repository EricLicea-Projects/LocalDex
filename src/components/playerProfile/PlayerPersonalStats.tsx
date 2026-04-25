import { Stack } from "@mui/material";
import PersonalRatings from "./PersonalRatings";
import EventHistory from "./EventHistory";
import type { PlayerEventHistory } from "../../hooks/useGetPlayerProfile";

type Props = {
  currentCP: number;
  playerRank: number;
  playerWinRate: number;
  playerWins: number;
  playerLosses: number;
  events: PlayerEventHistory[];
};

const PlayerPersonalStats = ({
  currentCP,
  playerLosses,
  playerRank,
  playerWinRate,
  playerWins,
  events,
}: Props) => {
  return (
    <Stack spacing={1}>
      <PersonalRatings
        currentCP={currentCP}
        playerRank={playerRank}
        playerWinRate={playerWinRate}
        playerWins={playerWins}
        playerLosses={playerLosses}
      />
      <EventHistory events={events} />
    </Stack>
  );
};

export default PlayerPersonalStats;
