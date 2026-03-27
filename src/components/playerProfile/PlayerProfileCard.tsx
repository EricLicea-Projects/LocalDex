import type { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

type Props = {
  side: "left" | "right";
  header: string;
  children: ReactNode;
};

const PlayerProfileCard = ({ side, header, children }: Props) => {
  const isLeft = side === "left";
  return (
    <Card
      variant="outlined"
      sx={{
        width: isLeft ? 472 : "100%",
        border: "2px double",
        borderColor: "border.muted",
        flexShrink: isLeft ? 0 : 1,
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="body1"
            textAlign="center"
            letterSpacing={1}
            fontWeight={500}
          >
            {header}
          </Typography>
        }
      />
      <Divider variant="middle" sx={{ borderColor: "border.muted" }} />
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
};

export default PlayerProfileCard;
