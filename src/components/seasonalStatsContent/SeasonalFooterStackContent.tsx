import { Typography } from "@mui/material";

type Props = {
  value: number;
  colorEffect?: boolean;
};

const SeasonalFooterStackContent = ({ value, colorEffect }: Props) => {
  return (
    <Typography
      variant="body2"
      sx={{
        pt: 0.25,
        fontWeight: 600,
        fontSize: "1.2rem",
        color: colorEffect ? (value >= 50 ? "#81c784" : "#e57373") : "none",
      }}
    >
      {value}%
    </Typography>
  );
};

export default SeasonalFooterStackContent;
