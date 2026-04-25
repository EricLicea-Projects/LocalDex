import { Avatar, Box, Stack, Typography } from "@mui/material";
import PlayerProfileCard from "./PlayerProfileCard";
import { RANK_LADDER } from "./rankLadder";
import { getRankProgress } from "./getRankProgress";

type Props = {
  currentCP: number;
  playerRank: number;
  playerWinRate: number;
  playerWins: number;
  playerLosses: number;
};

const AVATAR_SIZE = 36;

const PersonalRatings = ({
  currentCP,
  playerRank,
  playerWinRate,
  playerLosses,
  playerWins,
}: Props) => {
  const {
    currentRank,
    nextRank,
    currentRankMin,
    nextRankMin,
    progressPct,
    isMaxRank,
  } = getRankProgress(currentCP, RANK_LADDER);

  const rightRank = nextRank ?? currentRank;

  return (
    <PlayerProfileCard side="left" header="Personal Ratings">
      <Stack spacing={1} alignItems="center">
        <Stack spacing={2} direction="row" alignItems="center">
          <Avatar
            src={`/rank/${currentRank.key}.png`}
            sx={{ height: 152, width: 152 }}
          />

          <Stack>
            <Typography variant="h6">
              {`${currentRank.label} ${currentCP.toLocaleString()} CP`}
            </Typography>

            <Typography variant="body2">{`Rank: ${playerRank}`}</Typography>
            <Typography variant="body2">{`Win Rate: ${playerWinRate}%`}</Typography>
            <Typography variant="body2">
              {`Wins: ${playerWins} - Losses: ${playerLosses}`}
            </Typography>
          </Stack>
        </Stack>

        {/* Rank progression */}
        <Box sx={{ position: "relative", width: "100%" }}>
          <Box
            sx={{
              position: "absolute",
              left: AVATAR_SIZE / 2,
              right: AVATAR_SIZE / 2,
              top: (AVATAR_SIZE - 8) / 2,
              height: 8,
              border: "1px solid",
              borderColor: "border.muted",
              borderRadius: 1,
              bgcolor: "background.default",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: `${progressPct}%`,
                background: (theme) =>
                  `linear-gradient(90deg, ${theme.palette.warning.main}, ${theme.palette.info.main})`,
                borderRadius: 1,
              }}
            />
          </Box>

          <Stack direction="row" justifyContent="space-between">
            <Stack alignItems="center" spacing={0.5}>
              <Avatar
                src={`/rank/${currentRank.key}.png`}
                sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
              />

              <Typography variant="caption" color="text.secondary">
                {currentRank.label}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                {currentRankMin.toLocaleString()} CP
              </Typography>
            </Stack>

            <Stack alignItems="center" spacing={0.5}>
              <Avatar
                src={`/rank/${rightRank.key}.png`}
                sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
              />

              <Typography variant="caption" color="text.secondary">
                {isMaxRank ? "Max Rank" : rightRank.label}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                {nextRankMin
                  ? `${nextRankMin.toLocaleString()} CP`
                  : `${currentCP.toLocaleString()} CP`}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </PlayerProfileCard>
  );
};

export default PersonalRatings;
