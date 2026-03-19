import { Stack, Avatar } from "@mui/material";

type Props = {
  mainElement: string;
  championElement: string;
};

const ElementStack = ({ mainElement, championElement }: Props) => {
  return (
    <Stack spacing={0.5}>
      <Avatar
        src={`/element/${mainElement.toLowerCase()}.png`}
        sx={{
          width: 26,
          height: 26,
        }}
        variant="rounded"
      />
      <Avatar
        src={`/element/${championElement.toLowerCase()}.png`}
        sx={{
          width: 26,
          height: 26,
        }}
        variant="rounded"
      />
    </Stack>
  );
};

export default ElementStack;
