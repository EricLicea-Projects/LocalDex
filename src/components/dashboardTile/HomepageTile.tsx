import type { ReactNode } from "react";
import { Card } from "@mui/material";
import { elementThemes } from "./latestChampionCard/elementTheme";
import type { Element } from "./latestChampionCard/elementTheme";

type Props = {
  children: ReactNode;
  themeElement?: string;
};

const HomepageTile = ({ children, themeElement }: Props) => {
  const theme = elementThemes[themeElement as Element];
  const bgImg = theme?.background ? theme.background : "none";

  return (
    <Card
      elevation={8}
      sx={{
        borderRadius: 4,
        position: "relative",
        backgroundImage: bgImg,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        width: { xs: "328px", sm: "360px" },
        maxHeight: "400",
        flexShrink: 0,
      }}
    >
      {children}
    </Card>
  );
};

export default HomepageTile;
