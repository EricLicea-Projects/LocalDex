import { Fade, Box } from "@mui/material";
import useDelayedUnmount from "../hooks/useDelayedUnmount";

const EXIT_MS = 450;
const NAVBAR_HEIGHT = "64px";

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

const LoaderOverlay = ({ loading, children }: Props) => {
  const mounted = useDelayedUnmount(loading, EXIT_MS);

  if (!mounted) return null;

  return (
    <Fade in={loading} timeout={{ enter: 250, exit: EXIT_MS }}>
      <Box
        sx={{
          position: "fixed",
          top: NAVBAR_HEIGHT,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          pt: "100px",
          boxSizing: "border-box",
          bgcolor: "background.default",
          zIndex: (theme) => theme.zIndex.appBar - 1,
        }}
      >
        {children}
      </Box>
    </Fade>
  );
};

export default LoaderOverlay;
