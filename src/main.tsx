import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
//
import App from "./App";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Tv } from "./pages/tv";
import { Movie } from "./pages/movie";
import { Search } from "./pages/search";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "tv/:tvId", element: <Tv /> },
        { path: "movie/:movieId", element: <Movie /> },
        { path: "search", element: <Search /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
