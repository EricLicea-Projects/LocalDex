import { Stack } from "@mui/material";
import ElementalAvatar from "./ElementalAvatar";
import ElementalBar from "./ElementalBar";
import type { ElementalTheme } from "./ElementalBarTheme";

type Props = {
  playrate: number;
  theme: ElementalTheme;
};

const ElementalBarShell = ({ playrate, theme }: Props) => {
  return (
    <Stack p={2} direction="column" spacing={0.5}>
      <ElementalAvatar element={theme} playRate={playrate} />
      <ElementalBar value={playrate} theme={theme} />
    </Stack>
  );
};

export default ElementalBarShell;
