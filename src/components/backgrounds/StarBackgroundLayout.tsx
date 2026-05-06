import { Box } from "@mui/material";
import Stars from "../../loaders/Stars";

type Props = {
  children: React.ReactNode;
};

const StarBackgroundLayout = ({ children }: Props) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Stars />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default StarBackgroundLayout;
