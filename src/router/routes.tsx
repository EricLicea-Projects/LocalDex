import { createBrowserRouter, Navigate } from "react-router";
import AppLayout from "../layout/AppLayout";
import RecentEventRecap from "../pages/RecentEventRecap";
import Leaderboard from "../pages/Leaderboard";
import PlayerProfile from "../pages/PlayerProfile";
import MaintenanceMode from "../pages/MaintenanceMode";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: RecentEventRecap,
      },
      {
        path: "leaderboard",
        Component: Leaderboard,
      },
      {
        path: "player-profile/:playerId",
        Component: PlayerProfile,
      },
      {
        path: "maintenance",
        Component: MaintenanceMode,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default router;
