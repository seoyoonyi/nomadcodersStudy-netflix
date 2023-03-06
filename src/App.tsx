import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

export const App = () => {
  return (
    <>
      <Helmet>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        </style>
      </Helmet>
      <Outlet />
    </>
  );
};
