import React from "react";
import { Link } from "react-router-dom";

export const TimeUp = () => {
  return (
    <div className="bg-blue-900 w-screen h-screen text-center">
      <img src={`${process.env.PUBLIC_URL}/timeup.png`} className="m-auto" />
      <Link to="/">
        <button className="bg-blue-600 hover:bg-blue-800 text-white rounded px-4 py-2">
          ホームに戻る
        </button>
      </Link>
    </div>
  );
};
