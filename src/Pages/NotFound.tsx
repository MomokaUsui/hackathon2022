import React, { useState } from "react";
import { Link } from "react-router-dom";
import NotFoundModal from "../Components/NotFoundModal";

function NotFound() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="bg-indigo-900 relative overflow-hidden h-screen">
        <img
          src="/images/landscape/8.svg"
          className="absolute h-full w-full object-cover"
        />
        <div className="inset-0 bg-black opacity-25 absolute"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div className="w-full font-mono flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
              You&#x27;re alone here
            </h1>
            <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
              404
            </p>
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="float-right "
            >
              click
            </button>
          </div>
        </div>
      </div>
      <NotFoundModal />
    </div>
  );
}

export default NotFound;
