import { Box } from "@mui/material";

import useLatestEventStandings from "../hooks/useLatestEventStandings";
import HamsterLoader from "../loaders/HamsterLoader";
import EventRecapContent from "../components/eventRecapContent/EventRecapContent";
import LoaderOverlay from "../components/LoaderOverlay";
import PageContentFade from "../components/PageContentFade";

const RecentEventRecap = () => {
  const { data, loading } = useLatestEventStandings();

  return (
    <Box position="relative" minHeight="100vh" width="100%">
      <LoaderOverlay loading={loading}>
        <HamsterLoader />
      </LoaderOverlay>

      <PageContentFade loading={loading}>
        {data ? (
          <EventRecapContent data={data} />
        ) : (
          <Box p={2}>No Data Found.</Box>
        )}
      </PageContentFade>
    </Box>
  );
};

export default RecentEventRecap;
