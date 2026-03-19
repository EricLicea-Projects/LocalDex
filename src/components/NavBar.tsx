import { useState } from "react";
import { Box, IconButton, Drawer, Typography } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import NavigationList from "./NavigationList";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <Box
      position="relative"
      display="flex"
      sx={{
        p: "0.5rem",
        height: "4.5rem",
        bgcolor: "background.dark",
        borderBottom: "1px solid",
        borderColor: "border.muted",
        justifyContent: { xs: "center", xl: "flex-start" },
        alignItems: "center",
      }}
    >
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          position: "absolute",
          left: 8,
          display: { xl: "none" },
          color: "text.primary",
        }}
      >
        <Menu />
      </IconButton>
      <Typography variant="h4">LocalDex</Typography>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xl: "none" },
          "& .MuiDrawer-paper": {
            width: 280,
            bgcolor: "background.dark",
            color: "text.primary",
            borderRight: "1px solid",
            borderColor: "border.muted",
            backgroundImage: "none",
          },
        }}
      >
        <Box
          sx={{
            px: 2,
            height: "4.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid",
            borderColor: "border.muted",
          }}
        >
          <Typography variant="h5" fontWeight={800}>
            Menu
          </Typography>
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ color: "text.primary" }}
          >
            <Close />
          </IconButton>
        </Box>
        <NavigationList onNavigate={() => setOpen(false)} />
      </Drawer>
    </Box>
  );
};

export default NavBar;
