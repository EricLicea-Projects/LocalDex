import { Stack, Typography } from "@mui/material";
import StarBackgroundLayout from "../components/backgrounds/StarBackgroundLayout";

const MaintenanceMode = () => {
  return (
    <StarBackgroundLayout>
      <Stack
        spacing={2}
        alignItems="center"
        sx={{
          px: { xs: 2, sm: 4 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          noWrap
          sx={{
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 7vw, 3.75rem)",
            whiteSpace: "nowrap",
          }}
        >
          ^-^ Maintenance Mode ^-^
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
          }}
        >
          Our system is undergoing a little tuning.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
          }}
        >
          Take a breath, enjoy the view, and we’ll see you again in just a few
          minutes.
        </Typography>
      </Stack>
    </StarBackgroundLayout>
  );
};

export default MaintenanceMode;
