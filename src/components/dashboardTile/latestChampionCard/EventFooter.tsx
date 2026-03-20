import { Box, Typography, Divider } from "@mui/material";

type Props = {
  wins: number;
  losses: number;
  stalemates: number;
  score: number;
  byes: number;
  textColor: string;
};

const EventFooter = ({
  wins,
  losses,
  stalemates,
  score,
  byes,
  textColor,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        py: 1,
        color: textColor,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "0.75rem",
            fontWeight: 800,
            textTransform: "uppercase",
          }}
        >
          Record
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: 600, fontSize: "0.75rem" }}
        >
          {wins}W - {losses}L - {stalemates}D
        </Typography>
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ height: 32, my: "auto", borderColor: textColor }}
      />
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "0.75rem",
            fontWeight: 800,
            textTransform: "uppercase",
          }}
        >
          Score
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: 600, fontSize: "0.75rem" }}
        >
          {score} PTS
        </Typography>
      </Box>

      <Divider
        orientation="vertical"
        flexItem
        sx={{ height: 32, my: "auto", borderColor: textColor }}
      />
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "0.75rem",
            fontWeight: 800,
            textTransform: "uppercase",
          }}
        >
          Byes
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: 600, fontSize: "0.75rem" }}
        >
          {byes}
        </Typography>
      </Box>
    </Box>
  );
};

export default EventFooter;
