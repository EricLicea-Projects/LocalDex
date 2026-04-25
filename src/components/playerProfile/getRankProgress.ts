import type { RankInfo } from "./rankLadder";

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export const getRankProgress = (currentCP: number, ranks: RankInfo[]) => {
  const sortedRanks = [...ranks].sort((a, b) => a.minCP - b.minCP);

  const currentRankIndex = sortedRanks.reduce((bestIndex, rank, index) => {
    return currentCP >= rank.minCP ? index : bestIndex;
  }, 0);

  const currentRank = sortedRanks[currentRankIndex];
  const nextRank = sortedRanks[currentRankIndex + 1] ?? null;

  if (!nextRank) {
    return {
      currentRank,
      nextRank: null,
      currentRankMin: currentRank.minCP,
      nextRankMin: null,
      progressPct: 100,
      isMaxRank: true,
    };
  }

  const progressPct =
    ((currentCP - currentRank.minCP) / (nextRank.minCP - currentRank.minCP)) *
    100;

  return {
    currentRank,
    nextRank,
    currentRankMin: currentRank.minCP,
    nextRankMin: nextRank.minCP,
    progressPct: clamp(progressPct, 0, 100),
    isMaxRank: false,
  };
};
