import {
  Avatar,
  Box,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import PlayerProfileCard from "./PlayerProfileCard";

// Hardcoded — swap with real data later
const currentCP = 1800;
const currentRankLabel = "Gold";
const nextRankLabel = "Platinum";
const currentRankMin = 1500;
const nextRankMin = 1900;
const progressPct =
  ((currentCP - currentRankMin) / (nextRankMin - currentRankMin)) * 100;

const AVATAR_SIZE = 36;

const PersonalRatings = () => {
  return (
    <PlayerProfileCard side="left" header="Personal Ratings">
      <Divider variant="middle" sx={{ borderColor: "border.muted" }} />{" "}
      <CardContent>
        <Stack spacing={1} alignItems={"center"}>
          <Stack spacing={2} direction="row" alignItems="center">
            <Avatar src="/rank/gold.png" sx={{ height: 152, width: 152 }} />
            <Stack>
              <Typography variant="h6">Gold 1500 CP</Typography>
              <Typography variant="body2">Rank 350</Typography>
              <Typography variant="body2">Win Rate: 86%</Typography>
              <Typography variant="body2">Wins: 142 - Losses: 23</Typography>
            </Stack>
          </Stack>

          {/* Rank progression */}
          <Box sx={{ position: "relative", width: "100%" }}>
            {/* Bar: inset by half the avatar size so it connects both avatar centers */}
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

            {/* Rank emblems row */}
            <Stack direction="row" justifyContent="space-between">
              <Stack alignItems="center" spacing={0.5}>
                <Avatar
                  src="/rank/gold.png"
                  sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
                />
                <Typography variant="caption" color="text.secondary">
                  {currentRankLabel}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {currentRankMin.toLocaleString()} CP
                </Typography>
              </Stack>

              <Stack alignItems="center" spacing={0.5}>
                <Avatar
                  src="/rank/platinum.png"
                  sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
                />
                <Typography variant="caption" color="text.secondary">
                  {nextRankLabel}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {nextRankMin.toLocaleString()} CP
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </CardContent>
    </PlayerProfileCard>
  );
};

export default PersonalRatings;
