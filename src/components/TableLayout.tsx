import { Paper, Table, TableContainer } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const TableLayout = ({ children }: Props) => {
  return (
    <TableContainer
      component={Paper}
      elevation={8}
      sx={{
        display: { xs: "none", sm: "flex" },
        width: 696,
        border: "2px double",
        borderColor: "border.muted",
        borderRadius: 3,
        overflow: "hidden",
        backgroundImage: "none",
      }}
    >
      <Table stickyHeader>{children}</Table>
    </TableContainer>
  );
};

export default TableLayout;
