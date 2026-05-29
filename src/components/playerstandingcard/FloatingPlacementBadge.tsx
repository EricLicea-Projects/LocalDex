import { Box, Typography } from "@mui/material";

type Props = {
  placement: number;
};

const FloatingPlacementBadge = ({ placement }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        top: -12,
        left: 10,
        px: 1.5,
        py: 0.5,
        bgcolor: "hsl(280, 100%, 75%)",
        borderRadius: 4,
        fontSize: "0.85rem",
        alignItems: "center",
        gap: 0.5,
        zIndex: 10,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          fontWeight: 800,
          fontSize: "0.65rem",
          color: "hsl(78, 50%, 100%)",
        }}
      >
        RANK {placement}
      </Typography>
    </Box>
  );
};

export default FloatingPlacementBadge;
