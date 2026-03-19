import { Typography } from "@mui/material";

type Props = {
  placement: number;
};

const DesktopPlacementNumber = ({ placement }: Props) => {
  return (
    <Typography
      variant="h4"
      sx={{
        fontWeight: 900,
        minWidth: 45,
        textAlign: "center",
        color: "#bd99c0",
      }}
    >
      {placement}
    </Typography>
  );
};

export default DesktopPlacementNumber;
