import {
  Avatar,
  AvatarGroup,
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import getChampionImagePath from "../../util/getChampionImagePath";
import type { PlayerStats } from "../../hooks/useGetPlayerStatsTable";
import FloatingPlacementBadge from "../playerstandingcard/FloatingPlacementBadge";

type Props = {
  player: PlayerStats;
  rank: number;
};

const LocalLeaderBoardMobileCard = ({ player, rank }: Props) => (
  <Paper
    elevation={1}
    sx={{
      display: { xs: "block", sm: "none" },
      position: "relative",
      p: 2,
      mb: 2,
      width: 328,
      border: "1px double",
      borderColor: "border.muted",
      borderRadius: 2,
    }}
  >
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <FloatingPlacementBadge placement={rank + 1} />
    </Box>
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle1" fontWeight={700}>
            {player.username}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {player.player_cp} CP
          </Typography>
        </Box>
        <Avatar
          src={`/element/${player.main_element.toLowerCase()}.png`}
          sx={{ width: 40, height: 40 }}
        />
      </Stack>
      <Box>
        <Typography variant="body2" fontWeight={600} mb={0.5}>
          Win Rate: {player.win_rate}%
        </Typography>
        <Box
          sx={{
            height: 8,
            width: "100%",
            borderRadius: 1,
            background: (theme) => {
              const winPct = player.win_rate * 100;
              const green = theme.palette.success.main;
              const red = theme.palette.error.main;
              return `linear-gradient(90deg, ${green} 0%, ${green} ${winPct}%, ${red} ${winPct}%, ${red} 100%)`;
            },
          }}
        />
      </Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="body2"
          fontWeight={600}
          sx={{ textTransform: "uppercase" }}
        >
          Top Champions
        </Typography>
        <AvatarGroup max={3}>
          {player.top_3_champions.map((champ) => (
            <Avatar
              key={champ.champion_id}
              src={getChampionImagePath(champ.champion_name)}
              sx={{ width: 36, height: 36 }}
            />
          ))}
        </AvatarGroup>
      </Stack>
    </Stack>
  </Paper>
);

export default LocalLeaderBoardMobileCard;
