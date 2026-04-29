import { Card, Box, Avatar } from "@mui/material";
import getChampionImagePath from "../../util/getChampionImagePath";
import FloatingPlacementBadge from "./FloatingPlacementBadge";
import ElementStack from "./ElementStack";
import PlayerAndChampionBlock from "./PlayerAndChampionBlock";
import StatsRow from "./StatsRow";
import DesktopPlacementNumber from "./DesktopPlacementNumber";

import type { Standing } from "../../hooks/useLatestEventStandings";

const PlayerStandingCard = ({ player }: { player: Standing }) => {
  return (
    <Card
      sx={{
        width: 336,
        mt: 2,
        borderRadius: 4,
        display: "flex",
        position: "relative",
        flexDirection: "column",
        overflow: "visible",
      }}
    >
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <FloatingPlacementBadge placement={player.placement} />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", p: 2, pt: 3, gap: 2 }}>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <DesktopPlacementNumber placement={player.placement} />
        </Box>
        <Avatar
          src={getChampionImagePath(player.champion_name)}
          sx={{ width: 64, height: 64 }}
        />
        <ElementStack
          mainElement={player.main_element}
          championElement={player.champion_element}
        />
        <PlayerAndChampionBlock
          playerId={player.player_id}
          username={player.username}
          championName={player.champion_name}
        />
      </Box>

      <StatsRow
        wins={player.wins}
        losses={player.losses}
        stalemates={player.stalemates}
        score={player.score}
        byes={player.byes}
      />
    </Card>
  );
};

export default PlayerStandingCard;
