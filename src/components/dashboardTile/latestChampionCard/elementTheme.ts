export const elementThemes = {
  Fire: {
    glow: "0px 0px 30px hsl(0, 100%, 50%)",
    primary: "hsl(11 69% 72%)",
    dividerColor: "hsl(10 55% 29%)",
    buttonTextColor: "hsl(11 100% 98%)",
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("/champion/Spirit-of-Fire.png")`,
  },
  Water: {
    glow: "0px 0px 30px hsl(214, 100%, 50%)",
    primary: "hsl(215 78% 74%)",
    dividerColor: "hsl(215 58% 31%)",
    buttonTextColor: "hsl(215 100% 100%)",
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("/champion/Spirit-of-Water.png")`,
  },
  Wind: {
    glow: "0px 0px 30px hsl(108, 100%, 50%)",
    primary: "hsl(132 35% 64%)",
    dividerColor: "hsl(141 67% 20%)",
    buttonTextColor: "hsl(131 100% 89%)",
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("/champion/Spirit-of-Wind.png")`,
  },
  Norm: {
    glow: "0px 0px 30px hsl(108, 100%, 50%)",
    primary: "hsl(132 35% 64%)",
    dividerColor: "hsl(141 67% 20%)",
    buttonTextColor: "hsl(131 100% 89%)",
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("/champion/Spirit-of-Wind.png")`,
  },
} as const;

export type Element = keyof typeof elementThemes;
