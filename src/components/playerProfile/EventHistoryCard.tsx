import { Avatar, Box, Card, Chip, Stack, Typography } from "@mui/material";
import getChampionImagePath from "../../util/getChampionImagePath";
import ElementStack from "../playerstandingcard/ElementStack";
import PlayerAndChampionBlock from "../playerstandingcard/PlayerAndChampionBlock";
import type { EventHistory } from "../../hooks/useGetPlayerProfile";
import formatEventDate from "../../util/formatEventDate";

type Props = {
  event: EventHistory;
};

const EventHistoryCard = ({ event }: Props) => {
  const eventDate = formatEventDate(event.start_at);
  return (
    <Card
      elevation={3}
      sx={{
        width: "100%",
        mb: 1.5,
        borderRadius: 4,
        background: "hsla(264, 31%, 11%, 0.6)",
        transition: "transform 0.2s",
        "&:hover": {
          background: "hsla(264, 50%, 17%, 0.6)",
          transform: "translateX(4px)",
        },
      }}
    >
      <Stack
        direction="row"
        sx={{
          px: 2,
          pt: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Chip
          label={`Rank ${event.placement}`}
          size="small"
          sx={{
            fontWeight: 700,
            borderRadius: 999,
            color: "white",
            bgcolor: "secondary.main",
          }}
        />

        <Typography variant="caption" fontWeight={600}>
          {eventDate.date}
        </Typography>
      </Stack>
      <Box sx={{ display: "flex", alignItems: "center", p: 2, gap: 1.5 }}>
        <Avatar
          src={getChampionImagePath(event.champion_name)}
          sx={{ width: 64, height: 64 }}
        />
        <ElementStack
          mainElement={event.main_element}
          championElement={event.champion_element}
        />
        <PlayerAndChampionBlock
          wins={event.wins}
          losses={event.losses}
          stalemates={event.stalemates}
          championName={event.champion_name}
        />
      </Box>
    </Card>
  );
};

export default EventHistoryCard;
