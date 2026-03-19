import { Avatar, Stack, Typography } from "@mui/material";

type Props = {
  element: string;
  playRate: number;
};

const ElementalAvatar = ({ element, playRate }: Props) => {
  const elementIcon = `/element/${element}.png`;

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Avatar
        alt="Champion Element"
        src={elementIcon}
        sx={{ width: 32, height: 32 }}
      />
      <Typography fontWeight={900}> {playRate}%</Typography>
    </Stack>
  );
};

export default ElementalAvatar;
