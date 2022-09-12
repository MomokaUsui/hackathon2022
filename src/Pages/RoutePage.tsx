import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Goal from "../Goal";
import Login from "../Login";
import Main from "../Main";
import { TimeUp } from "../TimeUp";
import NotFound from "./NotFound";

function RoutePage() {
  return (
    <div>
      <Routes>
        <Route path="/goal" element={<Goal />} />
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/timeup" element={<TimeUp />} />
      </Routes>
    </div>
  );
}

export default RoutePage;
