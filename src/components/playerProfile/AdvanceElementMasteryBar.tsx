import { Avatar, Stack } from "@mui/material";
import ElementalBar from "../elementalBar/ElementalBar";
import type { ElementalTheme } from "../elementalBar/ElementalBarTheme";

type Props = {
  element: ElementalTheme;
  value: number;
};

const AdvanceElementMasteryBar = ({ element, value }: Props) => {
  const elementalIcon = `/element/${element}.png`;

  return (
    <Stack spacing={2} mb={2} direction="row" alignItems="center">
      <Avatar src={elementalIcon} />
      <ElementalBar value={value} theme={element} />
    </Stack>
  );
};

export default AdvanceElementMasteryBar;
