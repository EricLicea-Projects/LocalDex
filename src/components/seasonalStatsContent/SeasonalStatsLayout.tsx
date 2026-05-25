import TableLayout from "../TableLayout";
import SeasonalStatsTableHeader from "../seasonalStatsTable/SeasonalStatsTableHeader";
import SeasonalStatsTableBody from "../seasonalStatsTable/SeasonalStatsTableBody";
import type { ChampionStatsResponse } from "../../hooks/useGetChampionStatsTable";

type Props = {
  seasonData: ChampionStatsResponse;
};

const SeasonalStatsLayout = ({ seasonData }: Props) => {
  return (
    <TableLayout>
      <SeasonalStatsTableHeader />
      <SeasonalStatsTableBody champion={seasonData} />
    </TableLayout>
  );
};

export default SeasonalStatsLayout;
