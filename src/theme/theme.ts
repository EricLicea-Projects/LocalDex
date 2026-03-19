import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    border: {
      main: string;
      muted: string;
    };
    highlight: string;
  }
  interface PaletteOptions {
    border?: {
      main?: string;
      muted?: string;
    };
    highlight?: string;
  }
  interface TypeBackground {
    dark: string;
  }
}

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "hsl(289 44% 73%)",
      contrastText: "hsl(289 39% 5%)",
    },
    secondary: {
      main: "hsl(109 33% 64%)",
    },
    error: {
      main: "hsl(9 26% 64%)",
    },
    warning: {
      main: "hsl(52 19% 57%)",
    },
    success: {
      main: "hsl(146 17% 59%)",
    },
    info: {
      main: "hsl(217 28% 65%)",
    },
    // Custom Backgrounds
    background: {
      default: "hsl(289 39% 5%)", // --bg
      paper: "hsl(289 35% 7%)", // --bg-light
      dark: "hsl(285 61% 2%)", // --bg-dark
    },
    // Custom Text Colors
    text: {
      primary: "hsl(289 100% 95%)", // --text
      secondary: "hsl(289 21% 71%)", // --text-muted
    },
    // Custom Border and Highlight Keys
    border: {
      muted: "hsl(289 24% 19%)", // --border-muted
    },
    highlight: "hsl(289 45% 12%)", // --highlight
    divider: "hsl(289 100% 95%)", // Mapping standard divider to your border
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          backgroundColor: theme.palette.background.default,
          scrollbarColor: `${theme.palette.highlight} transparent`,
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.highlight,
            borderRadius: "4px",
          },
        },
      }),
    },
  },
});
