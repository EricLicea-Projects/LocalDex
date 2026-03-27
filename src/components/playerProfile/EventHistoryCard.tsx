import {
  Avatar,
  Box,
  Card,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import getChampionImagePath from "../../util/getChampionImagePath";
import ElementStack from "../playerstandingcard/ElementStack";
import PlayerAndChampionBlock from "../playerstandingcard/PlayerAndChampionBlock";
import type { Standing } from "../../hooks/useLatestEventStandings";

const EventHistoryCard = ({ player }: { player: Standing }) => {
  return (
    <Card
      elevation={3}
      sx={{
        width: "100%",
        mb: 1.5,
        borderRadius: 4,
        background: "hsla(264, 31%, 11%, 0.6)",
        display: "flex",
        transition: "transform 0.2s",
        "&:hover": {
          background: "hsla(264, 50%, 17%, 0.6)",
          transform: "translateX(4px)",
        },
      }}
    >
      <Stack
        sx={{
          px: 2,
          pt: 1.5,
          pb: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Chip
          label={`Rank ${player.placement}`}
          size="small"
          sx={{
            fontWeight: 700,
            borderRadius: 999,
            color: "white",
            bgcolor: "secondary.main",
          }}
        />

        <Typography variant="caption" fontWeight={600}>
          2W - 1L - 0D
        </Typography>
        <Typography variant="caption" fontWeight={600}>
          March 3, 2026
        </Typography>
      </Stack>
      <Box sx={{ display: "flex", alignItems: "center", p: 2, pt: 3, gap: 2 }}>
        <Avatar
          src={getChampionImagePath(player.champion_name)}
          sx={{ width: 64, height: 64 }}
        />
        <ElementStack
          mainElement={player.main_element}
          championElement={player.champion_element}
        />
        <PlayerAndChampionBlock
          username={player.username}
          championName={player.champion_name}
        />
      </Box>
    </Card>
  );
};

export default EventHistoryCard;
