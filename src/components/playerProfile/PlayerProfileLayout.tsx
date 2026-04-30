import { Stack } from "@mui/material";

interface Props {
  personalStats: React.ReactNode;
  championStats: React.ReactNode;
}

const PlayerProfileLayout = ({ personalStats, championStats }: Props) => {
  return (
    <Stack spacing={2} direction="row" width="100%" alignItems="flex-start">
      {personalStats}
      {championStats}
    </Stack>
  );
};

export default PlayerProfileLayout;
