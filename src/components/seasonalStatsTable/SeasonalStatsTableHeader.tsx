import { TableCell, TableHead, TableRow } from "@mui/material";

const headerRow = ["Rank", "Name", "Pick Rate", "Win Rate", "Top Elements"];
const SeasonalStatsTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {headerRow.map((header) => (
          <TableCell
            key={header}
            align="center"
            sx={{
              backgroundColor: "background.dark",
              borderBottom: "2px solid",
              borderColor: "border.muted",
            }}
          >
            {header}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default SeasonalStatsTableHeader;
