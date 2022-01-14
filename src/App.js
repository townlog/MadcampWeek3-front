import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getAccessToken } from "./api/Auth";
import request from "./api/axios";

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
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
