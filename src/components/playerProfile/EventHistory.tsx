import PlayerProfileCard from "./PlayerProfileCard";
import EventHistoryCard from "./EventHistoryCard";
import type { PlayerEventHistory } from "../../hooks/useGetPlayerProfile";

type Props = {
  events: PlayerEventHistory[];
};

const EventHistory = ({ events }: Props) => {
  return (
    <PlayerProfileCard side="left" header="Event History">
      {events.map((event) => (
        <EventHistoryCard event={event} />
      ))}
    </PlayerProfileCard>
  );
};

export default EventHistory;
