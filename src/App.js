import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import TownPage from "./pages/TownPage";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/home" element={<TownPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
