import PlayerProfileCard from "./PlayerProfileCard";
import EventHistoryCard from "./EventHistoryCard";

const player = {
  placement: 6,
  username: "Snuggie",
  player_id: 1307,
  wins: 2,
  losses: 1,
  stalemates: 0,
  byes: 0,
  score: 6,
  main_element_id: 4,
  champion_id: 61,
  main_element: "Wind",
  champion_element: "Norm",
  champion_name: "Ciel, Omenbringer",
  champion_class: "Guardian",
  champion_sub_class: null,
};

const EventHistory = () => {
  return (
    <PlayerProfileCard side="left" header="Event History">
      <EventHistoryCard player={player} />
      <EventHistoryCard player={player} />
      <EventHistoryCard player={player} />
    </PlayerProfileCard>
  );
};

export default EventHistory;
