import { createBrowserRouter } from "react-router";
import AppLayout from "../layout/AppLayout";
import RecentEventRecap from "../pages/RecentEventRecap";
import Leaderboard from "../pages/Leaderboard";
import PlayerProfile from "../pages/PlayerProfile";

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
        path: "player-profile",
        Component: PlayerProfile,
      },
    ],
  },
]);

export default router;
