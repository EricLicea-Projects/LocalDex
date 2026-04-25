import PlayerProfileCard from "./PlayerProfileCard";
import EventHistoryCard from "./EventHistoryCard";
import type { EventHistory } from "../../hooks/useGetPlayerProfile";

type Props = {
  username: string;
  events: EventHistory[];
};

const EventHistory = ({ events, username }: Props) => {
  return (
    <PlayerProfileCard side="left" header="Event History">
      {events.map((event) => (
        <EventHistoryCard username={username} event={event} />
      ))}
    </PlayerProfileCard>
  );
};

export default EventHistory;
