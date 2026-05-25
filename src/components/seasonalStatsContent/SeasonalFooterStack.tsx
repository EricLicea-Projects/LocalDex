import { Stack, Typography } from "@mui/material";

type Props = {
  lable: string;
  children: React.ReactNode;
};

const SeasonalFooterStack = ({ lable, children }: Props) => {
  return (
    <Stack
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={0.25}
    >
      <Typography
        sx={{
          fontSize: "0.6rem",
          fontWeight: 700,
          color: "text.secondary",
          letterSpacing: "0.05rem",
        }}
      >
        {lable}
      </Typography>
      {children}
    </Stack>
  );
};

export default SeasonalFooterStack;
