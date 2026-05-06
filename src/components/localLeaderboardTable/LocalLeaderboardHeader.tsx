import { TableCell, TableHead, TableRow } from "@mui/material";

const headerRow = [
  "Rank",
  "Player Name",
  "CP",
  "Win Rate",
  "Main Element",
  "Top Champions",
];

const LocalLeaderboardHeader = () => {
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

export default LocalLeaderboardHeader;
