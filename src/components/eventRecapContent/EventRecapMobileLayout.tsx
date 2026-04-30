import { useState, type SyntheticEvent } from "react";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import { EmojiEvents, Flare } from "@mui/icons-material";
import type { Standing } from "../../hooks/useLatestEventStandings";
import PlayerStandingCard from "../playerstandingcard/PlayerStandingCard";

interface Props {
  championTile: React.ReactNode;
  elementMetaTile: React.ReactNode;
  standings: Standing[];
}

const EventRecapMobileLayout = ({
  championTile,
  elementMetaTile,
  standings,
}: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width="100%">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Champion and Element Tabs"
          variant="fullWidth"
          sx={{ mb: 2 }}
        >
          <Tab icon={<EmojiEvents />} label="Champion" />
          <Tab icon={<Flare />} label="Element Meta" />
        </Tabs>
        <Box display="flex" justifyContent="center">
          {value === 0 && championTile}
          {value === 1 && elementMetaTile}
        </Box>
      </Box>

      <Stack width="100%" alignItems="center">
        {standings.slice(1).map((player) => (
          <PlayerStandingCard key={player.player_id} player={player} />
        ))}
      </Stack>
    </>
  );
};

export default EventRecapMobileLayout;
