export type RankInfo = {
  key: string;
  label: string;
  minCP: number;
};

export const RANK_LADDER: RankInfo[] = [
  {
    key: "unranked",
    label: "Unranked",
    minCP: 0,
  },
  {
    key: "bronze",
    label: "Bronze",
    minCP: 600,
  },
  {
    key: "silver",
    label: "Silver",
    minCP: 1000,
  },
  {
    key: "gold",
    label: "Gold",
    minCP: 1500,
  },
  {
    key: "platinum",
    label: "Platinum",
    minCP: 1900,
  },
  {
    key: "diamond",
    label: "Diamond",
    minCP: 2300,
  },
  {
    key: "ascendant",
    label: "Ascendant",
    minCP: 2600,
  },
];
