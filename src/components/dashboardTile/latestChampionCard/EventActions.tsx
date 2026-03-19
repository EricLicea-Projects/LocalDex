import { CardActions, Button } from "@mui/material";

type Props = {
  url: string;
  buttonColor: string;
  buttonText: string;
};

const EventActions = ({ url, buttonColor, buttonText }: Props) => {
  return (
    <CardActions sx={{ p: 2, justifyContent: "space-between" }}>
      <Button
        variant="contained"
        size="small"
        href={url}
        sx={{
          borderRadius: 2,
          px: 3,
          backgroundColor: buttonColor,
          color: buttonText,
        }}
      >
        Omni Link
      </Button>

      <Button
        size="small"
        variant="contained"
        sx={{
          borderRadius: 2,
          px: 3,
          backgroundColor: buttonColor,
          color: buttonText,
        }}
      >
        Standings
      </Button>
    </CardActions>
  );
};

export default EventActions;
