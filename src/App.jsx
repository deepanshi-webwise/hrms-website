import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Outlet from "./Outlet/Outlet";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
