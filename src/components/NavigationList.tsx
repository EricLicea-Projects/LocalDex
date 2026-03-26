import { NavLink } from "react-router";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Stadium, PeopleAlt } from "@mui/icons-material";

type Props = {
  onNavigate?: () => void;
};

const navItems = [
  {
    label: "Locals Recap",
    to: "/",
    icon: <Stadium />,
  },
  {
    label: "Player Profile",
    to: "/player-profile",
    icon: <PeopleAlt />,
  },
  {
    label: "Leaderboard",
    to: "/leaderboard",
    icon: <PeopleAlt />,
  },
];

const NavigationList = ({ onNavigate }: Props) => {
  return (
    <List disablePadding>
      {navItems.map((item) => (
        <ListItem key={item.to} disablePadding>
          <ListItemButton
            component={NavLink}
            to={item.to}
            onClick={onNavigate}
            end={item.to === "/"}
            sx={{
              height: 56,
              color: "text.secondary",
              borderBottom: "1px solid",
              borderColor: "border.muted",
              "&.active": {
                bgcolor: "highlight",
                color: "text.primary",
              },
              "&.active .MuiListItemText-primary": {
                fontWeight: 800,
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationList;
