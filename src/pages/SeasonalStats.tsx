import { Box, Stack, Typography } from "@mui/material";
import LoaderOverlay from "../components/LoaderOverlay";
import HamsterLoader from "../loaders/HamsterLoader";
import PageContentFade from "../components/PageContentFade";
import useGetChampionStatsTable from "../hooks/useGetChampionStatsTable";
import SeasonalStatsLayout from "../components/seasonalStatsContent/SeasonalStatsLayout";
import SeasonalStatsLayoutMobile from "../components/seasonalStatsContent/SeasonalStatsLayoutMobile";

const SeasonalStats = () => {
  const { data, loading } = useGetChampionStatsTable();

  return (
    <Box minHeight="100vh" width="100%" display="flex" justifyContent="center">
      <LoaderOverlay loading={loading}>
        <HamsterLoader />
      </LoaderOverlay>
      <PageContentFade loading={loading}>
        {data ? (
          <Stack p={2} spacing={2} maxWidth={760} alignItems="center">
            <Stack>
              <Typography variant="h4">Radiant Orgins Seasonal Data</Typography>
              <Typography variant="body2">See the local meta game.</Typography>
            </Stack>
            <SeasonalStatsLayout seasonData={data} />
            <SeasonalStatsLayoutMobile seasonData={data} />
          </Stack>
        ) : (
          <Box p={2}>No Data Found.</Box>
        )}
      </PageContentFade>
    </Box>
  );
};

export default SeasonalStats;
