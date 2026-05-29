import { createBrowserRouter, Navigate } from "react-router";
import AppLayout from "../layout/AppLayout";
import RecentEventRecap from "../pages/RecentEventRecap";
import Leaderboard from "../pages/Leaderboard";
import PlayerProfile from "../pages/PlayerProfile";
import MaintenanceMode from "../pages/MaintenanceMode";
import SeasonalStats from "../pages/SeasonalStats";
import ChampionProfile from "../pages/ChampionProfile";

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
        path: "seasonal-stats",
        Component: SeasonalStats,
      },
      {
        path: "player-profile/:playerId",
        Component: PlayerProfile,
      },
      {
        path: "champion-profile/:championId",
        Component: ChampionProfile,
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
