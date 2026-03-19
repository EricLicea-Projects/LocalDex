import { Box, Typography, Stack, Chip } from "@mui/material";

type Props = {
  date: string;
  bestOfLabel: string;
  roundsLabel: string;
  textColor: string;
  chipColor: string;
};

const EventHeader = ({
  date,
  bestOfLabel,
  roundsLabel,
  textColor,
  chipColor,
}: Props) => {
  return (
    <Box
      sx={{
        px: 3,
        pt: 2,
        pb: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="caption"
        sx={{ fontWeight: 700, letterSpacing: 1, color: textColor }}
      >
        {date.toUpperCase()}
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip
          label={bestOfLabel}
          size="small"
          variant="outlined"
          sx={{
            height: 20,
            fontSize: "0.65rem",
            color: textColor,
            borderColor: chipColor,
          }}
        />
        <Chip
          label={roundsLabel}
          size="small"
          variant="outlined"
          sx={{
            height: 20,
            fontSize: "0.65rem",
            color: textColor,
            borderColor: chipColor,
          }}
        />
      </Stack>
    </Box>
  );
};

export default EventHeader;
