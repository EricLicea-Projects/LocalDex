export type ElementalTheme = "fire" | "water" | "wind" | "norm";

type BarTheme = {
  fill: string;
};

const gloss = `linear-gradient(
  180deg,
  rgba(255,255,255,0.12) 0%,
  rgba(255,255,255,0.03) 35%,
  rgba(0,0,0,0.08) 100%
)`;

export const elementalBarThemes: Record<ElementalTheme, BarTheme> = {
  fire: {
    fill: `${gloss}, linear-gradient(180deg, hsl(0 100% 50%) 0%, hsl(0 100% 20%) 55%, hsl(0 100% 5%) 100%)`,
  },
  water: {
    fill: `${gloss}, linear-gradient(180deg, hsl(228 100% 50%) 0%, hsl(228 100% 20%) 55%, hsl(228 100% 5%) 100%)`,
  },
  wind: {
    fill: `${gloss}, linear-gradient(180deg, hsl(114 90% 40%) 0%, hsl(114 90% 15%) 55%, hsl(114 90% 5%) 100%)`,
  },
  norm: {
    fill: `${gloss}, linear-gradient(180deg, hsl(0 0% 90%) 0%, hsl(0 0% 40%) 55%, hsl(0 0% 5%) 100%)`,
  },
};
