export type ElementalTheme =
  | "fire"
  | "water"
  | "wind"
  | "norm"
  | "astra"
  | "arcane"
  | "luxem"
  | "exia"
  | "tera"
  | "neos"
  | "crux"
  | "umbra";

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
  astra: {
    fill: `${gloss}, linear-gradient(180deg, hsl(264 50% 50%) 0%, hsl(264 45% 53%) 55%, hsl(264 55% 18%) 100%)`,
  },
  arcane: {
    fill: `${gloss}, linear-gradient(180deg, hsl(207 100% 35%) 0%, hsl(207 100% 55%) 55%, hsl(207 100% 9%) 100%)`,
  },
  luxem: {
    fill: `${gloss}, linear-gradient(180deg, hsl(40 100% 70%) 0%, hsl(45 100% 75%) 55%, hsl(55 100% 10%) 100%)`,
  },
  exia: {
    fill: `${gloss}, linear-gradient(180deg, hsl(0 100% 33%) 0%, hsl(0 100% 15%) 55%, hsl(0 100% 33%) 100%)`,
  },
  tera: {
    fill: `${gloss}, linear-gradient(180deg, hsl(85 100% 20%) 0%, hsl(80 45% 40%) 55%, hsl(80 100% 8%) 100%)`,
  },
  neos: {
    fill: `${gloss}, linear-gradient(180deg, hsl(37 100% 50%) 0%, hsl(45 100% 50%) 55%, hsl(37 100% 10%) 100%)`,
  },
  crux: {
    fill: `${gloss}, linear-gradient(180deg, hsl(265 100% 80%) 0%, hsl(260 250% 75%) 55%, hsl(255 100% 50%) 100%)`,
  },
  umbra: {
    fill: `${gloss}, linear-gradient(180deg, hsl(260 100% 20%) 0%, hsl(275 250% 15%) 55%, hsl(275 100% 5%) 100%)`,
  },
};
