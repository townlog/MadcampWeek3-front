import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TownPage from "./pages/TownPage";
import GlobalStyle from "./styles/GlobalStyle";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getAccessToken } from "./api/Auth";
import request from "./api/axios";
import MyHousePage from "./pages/MyHousePage";

const App = () => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      setLogin(true);
      request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
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
    </>
  );
};

export default App;
