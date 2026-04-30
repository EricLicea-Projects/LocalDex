import { Fade, Box } from "@mui/material";

const CONTENT_ENTER_MS = 500;

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

const PageContentFade = ({ loading, children }: Props) => {
  return (
    <Fade
      in={!loading}
      timeout={CONTENT_ENTER_MS}
      style={{ transitionDelay: !loading ? "150ms" : "0ms" }}
    >
      <Box>{!loading && children}</Box>
    </Fade>
  );
};

export default PageContentFade;
