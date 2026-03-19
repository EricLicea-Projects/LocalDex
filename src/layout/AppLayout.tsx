import { Outlet } from "react-router";
import { Box, Stack } from "@mui/material";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const AppLayout = () => {
  return (
    <Stack width="100vw" height="100vh">
      <NavBar />
      <Box display="flex" flex={1}>
        <SideBar />
        <Outlet />
      </Box>
    </Stack>
  );
};

export default AppLayout;
