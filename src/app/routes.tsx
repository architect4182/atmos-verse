import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { Movies } from "./pages/Movies";
import { TVShows } from "./pages/TVShows";
import { Anime } from "./pages/Anime";
import { Trending } from "./pages/Trending";
import { Watchlist } from "./pages/Watchlist";
import { Universe } from "./pages/Universe";
import { ContentDetail } from "./pages/ContentDetail";
import { Mood } from "./pages/Mood";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "explore", Component: Explore },
      { path: "movies", Component: Movies },
      { path: "tv-shows", Component: TVShows },
      { path: "anime", Component: Anime },
      { path: "trending", Component: Trending },
      { path: "watchlist", Component: Watchlist },
      { path: "universe/:id", Component: Universe },
      { path: "content/:id", Component: ContentDetail },
      { path: "mood/:id", Component: Mood },
    ],
  },
]);
