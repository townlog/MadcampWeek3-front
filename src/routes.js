import { Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TownPage from "./pages/TownPage";
import MyHousePage from "./pages/MyHousePage";

const routes = (isLoggedIn) => {
  console.log(`isLoggedIn`, isLoggedIn);
  return [
    {
      path: "/login",
      element: isLoggedIn ? <Navigate to="/town" /> : <LoginPage />,
    },
    {
      path: "/register",
      element: isLoggedIn ? <Navigate to="/town" /> : <TownPage />,
    },
    {
      path: "/town",
      element: isLoggedIn ? (
        <TownPage />
      ) : (
        <Navigate to="/login" replace={true} />
      ),
    },
    {
      path: "/house",
      element: isLoggedIn ? (
        <MyHousePage />
      ) : (
        <Navigate to="/login" replace={true} />
      ),
    },
  ];
};

export default routes;
