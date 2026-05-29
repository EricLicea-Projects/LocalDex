import { Box, Typography, Divider } from "@mui/material";

type Props = {
  wins: number;
  losses: number;
  stalemates: number;
  score: number;
  byes: number;
};

const StatsRow = ({ wins, losses, stalemates, score, byes }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        pb: 1,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "0.6rem",
            fontWeight: 800,
            textTransform: "uppercase",
          }}
        >
          Record
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: 800, fontSize: "0.8rem" }}
        >
          {wins}W - {losses}L - {stalemates}D
        </Typography>
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          height: "1.7rem",
          borderColor: "hsla(271, 100%, 53%, 0.50)",
          my: "auto",
        }}
      />
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "0.6rem",
            fontWeight: 800,
            textTransform: "uppercase",
          }}
        >
          Score
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: 800, fontSize: "0.8rem" }}
        >
          {score} PTS
        </Typography>
      </Box>

      <Divider
        orientation="vertical"
        flexItem
        sx={{
          height: "1.7rem",
          borderColor: "hsla(271, 100%, 53%, 0.50)",
          my: "auto",
        }}
      />
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "0.6rem",
            fontWeight: 800,
            textTransform: "uppercase",
          }}
        >
          Byes
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: 800, fontSize: "0.8rem", color: "#ffb74d" }}
        >
          {byes}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatsRow;
