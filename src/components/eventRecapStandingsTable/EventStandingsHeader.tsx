import { TableCell, TableHead, TableRow } from "@mui/material";

const headerRow = ["Rank", "Player", "W - L - T", "Byes", "Score"];
const EventStandingsHeader = () => {
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

export default EventStandingsHeader;
