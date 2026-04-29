import {
  Avatar,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Link as MuiLink,
  Stack,
} from "@mui/material";
import { Link as RouterLink } from "react-router";
import type { Standing } from "../../hooks/useLatestEventStandings";
import getChampionImagePath from "../../util/getChampionImagePath";

type Props = {
  players: Standing[];
};

const EventStandingsBody = ({ players }: Props) => {
  return (
    <TableBody
      sx={{
        "& .MuiTableCell-root": {
          textAlign: "center",
          borderBottom: "2px solid",
          borderColor: "border.muted",
        },
      }}
    >
      {players.slice(1).map((player) => (
        <TableRow
          key={player.player_id}
          hover
          sx={{
            "&:nth-of-type(odd)": {
              backgroundColor: "background.default",
            },
          }}
        >
          <TableCell>
            <Typography fontWeight={700}>{player.placement}</Typography>
          </TableCell>
          <TableCell sx={{ width: 360 }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Avatar
                src={`${getChampionImagePath(player.champion_name)}`}
                alt="Main Element"
                variant="rounded"
                sx={{
                  width: 64,
                  height: 64,
                  mx: "auto",
                }}
              />
              <Stack spacing={0.5}>
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
                <Avatar
                  src={`/element/${player.champion_element.toLowerCase()}.png`}
                  alt="Main Element"
                  variant="rounded"
                  sx={{
                    width: 32,
                    height: 32,
                    mx: "auto",
                  }}
                />
              </Stack>
              <Stack spacing={0.5} justifyContent="center">
                <MuiLink
                  component={RouterLink}
                  to={`/player-profile/${player.player_id}`}
                  noWrap
                  underline="none"
                  sx={{
                    typography: "h6",
                    color: "inherit",
                    textAlign: "left",
                  }}
                >
                  {player.username}
                </MuiLink>
                <Typography variant="body2" noWrap sx={{ opacity: 0.7 }}>
                  {player.champion_name}
                </Typography>
              </Stack>
            </Stack>
          </TableCell>
          <TableCell>
            {`${player.wins} - ${player.losses} - ${player.stalemates}`}
          </TableCell>
          <TableCell>{player.byes}</TableCell>
          <TableCell>{player.score}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default EventStandingsBody;
