import type { ElementalTheme } from "../elementalBar/ElementalBarTheme";
import AdvanceElementMasteryBar from "./AdvanceElementMasteryBar";
import PlayerProfileCard from "./PlayerProfileCard";

const playerData = [
  { element: "astra", value: 50 },
  { element: "exia", value: 75 },
  { element: "arcane", value: 20 },
];

const AdvanceElementMastery = () => {
  return (
    <PlayerProfileCard side="right" header="Advance Element Mastery">
      {playerData.map((player) => (
        <AdvanceElementMasteryBar
          element={player.element as ElementalTheme}
          value={player.value}
        />
      ))}
    </PlayerProfileCard>
  );
};

export default AdvanceElementMastery;
