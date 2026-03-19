import { Stack } from "@mui/material";
import NavigationList from "./NavigationList";

const SideBar = () => {
  return (
    <Stack
      component="nav"
      width="200px"
      height="100%"
      bgcolor="background.dark"
      borderRight="1px solid"
      borderColor="border.muted"
      display={{ xs: "none", xl: "flex" }}
      flexShrink={0}
    >
      <NavigationList />
    </Stack>
  );
};

export default SideBar;
