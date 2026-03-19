import { createBrowserRouter } from "react-router";
import AppLayout from "../layout/AppLayout";
import RecentEventRecap from "../pages/RecentEventRecap";
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
        path: "player-profile",
        Component: PlayerProfile,
      },
    ],
  },
]);

export default router;
