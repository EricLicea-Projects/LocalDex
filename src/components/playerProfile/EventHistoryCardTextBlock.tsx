import { Stack, Typography } from "@mui/material";

type Props = {
  championName: string;
  wins: number;
  losses: number;
  stalemates: number;
};

const EventHistoryCardTextBlock = ({
  championName,
  wins,
  stalemates,
  losses,
}: Props) => {
  return (
    <Stack sx={{ flexGrow: 1, minWidth: 0 }} spacing={1}>
      <Typography
        mb={0.5}
        noWrap
        sx={{
          typography: { xs: "body1", sm: "h6" },
          fontWeight: 800,
          lineHeight: 1.1,
        }}
      >
        {championName}
      </Typography>

      <Typography variant="caption" fontWeight={400}>
        {`${wins} W - ${losses} L - ${stalemates} D`}
      </Typography>
    </Stack>
  );
};

export default EventHistoryCardTextBlock;
