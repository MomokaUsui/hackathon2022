import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Goal from "../Goal";
import Login from "../Login";
import Main from "../Main";

function RoutePage() {
  return (
    <div>
      <Routes>
        <Route path="/goal" element={<Goal />} />
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default RoutePage;
