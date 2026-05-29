import type { SxProps, Theme } from "@mui/material/styles";

export const gradientCardSx: SxProps<Theme> = {
  borderRadius: "0.5rem",
  background:
    "linear-gradient(145deg, hsl(250, 65%, 13%) 0%, hsl(320, 75%, 5%) 100%)",
  borderLeft: "3px solid",
  borderLeftColor: "primary.main",
  boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
};
