import { Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TownPage from "./pages/TownPage";

const routes = (isLoggedIn) => {
  console.log(`isLoggedIn`, isLoggedIn);
  return [
    {
      path: "/login",
      element: isLoggedIn ? <Navigate to="/home" /> : <LoginPage />,
    },
    {
      path: "/register",
      element: isLoggedIn ? <Navigate to="/home" /> : <TownPage />,
    },
    {
      path: "/home",
      element: isLoggedIn ? (
        <TownPage />
      ) : (
        <Navigate to="/login" replace={true} />
      ),
    },
  ];
};

export default routes;
