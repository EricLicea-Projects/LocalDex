import {
  Avatar,
  AvatarGroup,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Link as MuiLink,
  Stack,
} from "@mui/material";
import { Link as RouterLink } from "react-router";
import type { ChampionStats } from "../../hooks/useGetChampionStatsTable";
import getChampionImagePath from "../../util/getChampionImagePath";

type Props = {
  champion: ChampionStats[];
};

const SeasonalStatsTableBody = ({ champion }: Props) => {
  return (
    <TableBody
      sx={{
        "& td": {
          textAlign: "center",
          borderBottom: "2px solid",
          borderColor: "border.muted",
        },
      }}
    >
      {champion.map((champion, rank) => (
        <TableRow
          key={champion.champion_id}
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
            <Stack direction="row" spacing={1.5} alignItems={"center"}>
              <Avatar
                src={getChampionImagePath(champion.champion_name)}
                variant="rounded"
                sx={{
                  width: 56,
                  height: 56,
                  mx: "auto",
                }}
              />
              <MuiLink
                component={RouterLink}
                to={`/player-profile/${champion.champion_id}`}
                underline="none"
                sx={{
                  typography: "body1",
                  fontWeight: 900,
                  color: "inherit",
                }}
              >
                {champion.champion_name}
              </MuiLink>
            </Stack>
          </TableCell>
          <TableCell>{champion.pick_rate}%</TableCell>
          <TableCell>{champion.win_rate}%</TableCell>
          <TableCell>
            <AvatarGroup
              max={3}
              sx={{
                justifyContent: "flex-end",
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                },
              }}
            >
              {champion.top_elements.map((element) => (
                <Avatar
                  key={element.element_id}
                  src={`/element/${element.element_name.toLowerCase()}.png`}
                  alt={element.element_name}
                />
              ))}
            </AvatarGroup>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default SeasonalStatsTableBody;
