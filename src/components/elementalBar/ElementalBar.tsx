import { Box } from "@mui/material";
import { elementalBarThemes } from "./ElementalBarTheme";
import type { ElementalTheme } from "./ElementalBarTheme";

type Props = {
  value: number; // 0–100
  theme: ElementalTheme;
};

const ElementalBar = ({ value, theme }: Props) => {
  const clampedValue = Math.min(100, Math.max(0, value));
  const { fill } = elementalBarThemes[theme];

  return (
    <Box
      sx={{
        width: "100%",
        height: 24,
        borderRadius: "999px",
        p: "1px",
        position: "relative",
        background:
          "linear-gradient(180deg, hsl(289 20% 10%) 0%, hsl(289 20% 18%) 45%, hsl(289 20% 21%) 100%)",
        boxShadow: `
          0 0 0 1px rgba(235, 170, 255, 0.18),
          inset 0 1px 1px rgba(231, 190, 255, 0.35),
          inset 0 -2px 3px rgba(31, 10, 40, 0.45),
          0 4px 12px rgba(0, 0, 0, 0.25)
        `,
        boxSizing: "border-box",
      }}
    >
      {/* Clipping wrapper — full width, clips the fill bar at its rounded edges */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "999px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Fill bar — width drives the value, transition animates it */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: `${clampedValue}%`,
            height: "100%",
            borderRadius: "999px",
            transition: "width 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            background: fill,
            boxShadow: `
              inset 0 2px 4px rgba(0, 0, 0, 0.35),
              inset 0 -1px 2px rgba(255, 255, 255, 0.05)
            `,
          }}
        />
      </Box>
    </Box>
  );
};

export default ElementalBar;
