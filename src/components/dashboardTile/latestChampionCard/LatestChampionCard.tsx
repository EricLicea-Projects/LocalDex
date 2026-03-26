import { Divider, Stack } from "@mui/material";
import EventHeader from "./EventHeader";
import ChampionDisplay from "./ChampionDisplay";
import type { Element } from "./elementTheme";
import type {
  EventSummary,
  Standing,
} from "../../../hooks/useLatestEventStandings";
import formatEventDate from "../../../util/formatEventDate";
import { elementThemes } from "./elementTheme";
import EventFooter from "./EventFooter";

type Props = {
  themeElement: string;
  eventData: EventSummary;
  eventWinner: Standing;
};

const LatestChampionCard = ({
  themeElement,
  eventData,
  eventWinner,
}: Props) => {
  const theme = elementThemes[themeElement as Element];
  const eventDate = formatEventDate(eventData.start_at);
  const bestOfLabel = eventData.swiss_match_config === "bo1" ? "Bo1" : "Bo3";
  const roundsLabel = `${eventData.swiss_rounds} rounds`;
  return (
    <Stack spacing={0.5}>
      <EventHeader
        date={eventDate.date}
        bestOfLabel={bestOfLabel}
        roundsLabel={roundsLabel}
        textColor={theme.primary}
        chipColor={theme.dividerColor}
      />
      <Divider variant="middle" sx={{ borderColor: theme.dividerColor }} />
      <ChampionDisplay
        day={eventDate.day}
        winnerName={eventWinner.username}
        glowColor={theme.glow}
        textColor={theme.primary}
        champion={eventWinner.champion_name}
        mainElement={eventWinner.main_element}
        championElement={eventWinner.champion_element}
      />
      <Divider sx={{ borderColor: theme.dividerColor }} />
      <EventFooter
        wins={eventWinner.wins}
        losses={eventWinner.losses}
        stalemates={eventWinner.stalemates}
        score={eventWinner.score}
        byes={eventWinner.byes}
        textColor={theme.primary}
      />
    </Stack>
  );
};

export default LatestChampionCard;
