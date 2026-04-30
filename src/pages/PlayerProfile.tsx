import { useParams } from "react-router";
import { Box } from "@mui/material";
import useGetPlayerProfile from "../hooks/useGetPlayerProfile";

import LoaderOverlay from "../components/LoaderOverlay";
import HamsterLoader from "../loaders/HamsterLoader";
import PageContentFade from "../components/PageContentFade";
import PlayerProfileContent from "../components/playerProfile/PlayerProfileContent";

const PlayerProfile = () => {
  const { playerId } = useParams();
  const { data, loading } = useGetPlayerProfile(playerId);

  return (
    <Box minHeight="100vh" width="100%" display="flex" justifyContent="center">
      <LoaderOverlay loading={loading}>
        <HamsterLoader />
      </LoaderOverlay>
      <PageContentFade loading={loading}>
        {data ? <PlayerProfileContent data={data} /> : <Box p={2}>No Data</Box>}
      </PageContentFade>
    </Box>
  );
};

export default PlayerProfile;
