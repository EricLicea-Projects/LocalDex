import type { AdvanceElementUsage } from "../../hooks/useGetPlayerProfile";
import type { ElementalTheme } from "../elementalBar/ElementalBarTheme";
import AdvanceElementMasteryBar from "./AdvanceElementMasteryBar";
import PlayerProfileCard from "./PlayerProfileCard";

type Props = {
  advElementList: AdvanceElementUsage[];
};

const AdvanceElementMastery = ({ advElementList }: Props) => {
  return (
    <PlayerProfileCard side="right" header="Advance Element Mastery">
      {advElementList.map((element) => (
        <AdvanceElementMasteryBar
          element={element.element_name.toLocaleLowerCase() as ElementalTheme}
          value={element.times_played * 10}
        />
      ))}
    </PlayerProfileCard>
  );
};

export default AdvanceElementMastery;
