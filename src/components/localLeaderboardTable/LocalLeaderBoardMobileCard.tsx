import {
  Avatar,
  AvatarGroup,
  Box,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Link as RouterLink } from "react-router";

import getChampionImagePath from "../../util/getChampionImagePath";
import type { PlayerStats } from "../../hooks/useGetPlayerStatsTable";

type Props = {
  player: PlayerStats;
  rank: number;
};

const LocalLeaderBoardMobileCard = ({ player, rank }: Props) => {
  const isTop3 = rank < 3;

  const rankTextGradients = [
    "linear-gradient(135deg, #FFDF00 0%, #D4AF37 100%)",
    "linear-gradient(135deg, #E0E0E0 0%, #9E9E9E 100%)",
    "linear-gradient(135deg, #CD7F32 0%, #A0522D 100%)",
  ];

  const rankTextBg = isTop3
    ? rankTextGradients[rank]
    : "linear-gradient(135deg, hsl(24, 79%, 74%) 0%, hsl(27, 74%, 43%) 100%)";

  return (
    <Box
      sx={{
        display: { xs: "block", sm: "none" },
        position: "relative",
        mb: 2,
        width: 336,
        background: "linear-gradient(145deg, #1e1e2a 0%, #121218 100%)",
        borderRadius: "12px",
        border: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.05)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 3,
          minWidth: 44,
          height: 32,
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottomRightRadius: "12px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          borderRight: "1px solid rgba(255,255,255,0.05)",
          boxShadow: "inset 0 -2px 4px rgba(0,0,0,0.5)",
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: "0.95rem",
            letterSpacing: "-0.5px",
            lineHeight: 1,
            textAlign: "center",
            display: "inline-block",
            background: rankTextBg,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            textShadow: isTop3
              ? "0 1px 0 rgba(255,255,255,0.2)"
              : "0 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          #{rank + 1}
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.25,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <img
          src={`/champion/Spirit-of-${player.main_element}.png`}
          alt={`${player.main_element} Spirit`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
          }}
        />
      </Box>

      <Box sx={{ p: 2, position: "relative", zIndex: 1 }}>
        <Box
          sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.5 }}
        >
          <Box sx={{ flexGrow: 1, ml: 4.5 }}>
            <MuiLink
              component={RouterLink}
              to={`/player-profile/${player.player_id}`}
              underline="none"
              sx={{
                fontWeight: 800,
                fontSize: "1.3rem",
                lineHeight: 1.2,
                color: "hsl(0, 0%, 95%)",
                textShadow: "0 2px 4px rgba(0,0,0,0.6)",
              }}
            >
              {player.username}
            </MuiLink>
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                gap: 0.25,
                mt: 0.5,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "hsl(214, 0%, 90%)",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  lineHeight: 1.1,
                }}
              >
                {player.player_cp}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "hsla(32, 100%, 50%, 0.85)",
                  fontWeight: 500,
                  fontSize: "0.8rem",
                  letterSpacing: "0.5px",
                  lineHeight: 1.1,
                }}
              >
                CP
              </Typography>
            </Box>
          </Box>
          <AvatarGroup
            max={3}
            sx={{
              "& .MuiAvatar-root": {
                width: 40,
                height: 40,
                borderColor: "#1e1e2a",
                borderWidth: 2,
              },
            }}
          >
            {player.top_3_champions.map((champ) => (
              <Avatar
                key={champ.champion_id}
                src={getChampionImagePath(champ.champion_name)}
                alt={champ.champion_name}
              />
            ))}
          </AvatarGroup>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              mb: 0.5,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                fontSize: "0.7rem",
                color: "hsl(216, 0%, 85%)",
                letterSpacing: "0.08em",
              }}
            >
              WIN RATE
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 800,
                color: "#ffffff",
                fontSize: "0.85rem",
                lineHeight: 1,
              }}
            >
              {player.win_rate}%
            </Typography>
          </Box>
          <Box
            sx={{
              height: 8,
              width: "100%",
              borderRadius: 3,
              bgcolor: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.05)",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: `${player.win_rate}%`,
                background: "linear-gradient(90deg, #4caf50 0%, #81c784 100%)",
                boxShadow: "0 0 8px rgba(76, 175, 80, 0.4)",
                borderRadius: 3,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LocalLeaderBoardMobileCard;
