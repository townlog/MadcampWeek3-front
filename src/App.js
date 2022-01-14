import React, { useEffect } from "react";
import { BrowserRouter, Routes, useRoutes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { getAccessToken } from "./api/Auth";
import request from "./api/axios";
import MyHousePage from "./pages/MyHousePage";
import { getMe } from "./api/User";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "./actions/authAction";
import routes from "./routes";


const App = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = getAccessToken();
    request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    if (token) {
      (async () => {
        const { status, user } = await getMe(token);
        if (status) {
          dispatch(logIn(user));
        }
      })();
    }
    console.log(`loggedIn`, loggedIn);
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/town" element={<TownPage />} />
          <Route exact path="/house" element={<MyHousePage />} />
        </Routes>
      </BrowserRouter>
      {useRoutes(routes(loggedIn))}
    </>
  );
};

export default App;
