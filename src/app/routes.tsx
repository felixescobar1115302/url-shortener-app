import { createBrowserRouter } from "react-router";
import SearchPage from "./pages/SearchPage";
import HistoryPage from "./pages/HistoryPage";
import MorePage from "./pages/MorePage";
import RecommendPage from "./pages/RecommendPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SearchPage,
  },
  {
    path: "/history",
    Component: HistoryPage,
  },
  {
    path: "/more",
    Component: MorePage,
  },
  {
    path: "/recommend",
    Component: RecommendPage,
  },
]);
