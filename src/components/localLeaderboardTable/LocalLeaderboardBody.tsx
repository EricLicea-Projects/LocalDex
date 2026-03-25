import {
  Avatar,
  AvatarGroup,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import type { PlayerStats } from "../../hooks/useGetPlayerStatsTable";
import getChampionImagePath from "../../util/getChampionImagePath";
import LocalLeaderboardWinRate from "./LocalLeaderboardWinRate";

type Props = {
  playerStats: PlayerStats[];
};

const LocalLeaderboardBody = ({ playerStats }: Props) => {
  return (
    <TableBody
      sx={{
        "& td": {
          borderBottom: "2px solid",
          borderColor: "border.muted",
        },
      }}
    >
      {playerStats.map((player, rank) => (
        <TableRow
          key={player.username}
          hover
          sx={{
            "&:nth-of-type(odd)": {
              backgroundColor: "background.default",
            },
          }}
        >
          <TableCell>
            <Typography fontWeight={700}>{rank + 1}</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography>{player.username}</Typography>
          </TableCell>
          <TableCell>{player.player_cp}</TableCell>
          <LocalLeaderboardWinRate
            winRate={player.win_rate}
            totalGames={player.total_games}
            totalLosses={player.total_losses}
            totalWins={player.total_wins}
          />
          <TableCell>
            <Avatar
              src={`/element/${player.main_element.toLowerCase()}.png`}
              alt="Main Element"
              variant="rounded"
              sx={{
                width: 32,
                height: 32,
                mx: "auto",
              }}
            />
          </TableCell>
          <TableCell>
            <AvatarGroup
              max={3}
              sx={{
                justifyContent: "flex-end",
                "& .MuiAvatar-root": {
                  width: 40,
                  height: 40,
                },
              }}
            >
              {player.top_3_champions.map((champion) => (
                <Avatar
                  key={champion}
                  src={getChampionImagePath(champion)}
                  alt={champion}
                />
              ))}
            </AvatarGroup>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default LocalLeaderboardBody;
