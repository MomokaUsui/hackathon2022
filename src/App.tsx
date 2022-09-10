import React from "react";
import RoutePage from "./Pages/RoutePage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutePage />
      </BrowserRouter>
    </>
  );
}

export default App;
