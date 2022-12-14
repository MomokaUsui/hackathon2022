import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertModal } from "../Components/Modal/AlertModal";
import { NotFoundModal } from "../Components/Modal/NotFoundModal";

function NotFound() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);
  const navigate = useNavigate()
  setTimeout(() => {
    setAlertOpen(true);
  }, 5000);
  //おばけを3つとも見つけていればgoalへ遷移する
  if(sessionStorage.getItem("obake1") == "true" && sessionStorage.getItem("obake2") == "true" && sessionStorage.getItem("obake3") == "true") {
    navigate("/goal")
  }

  return (
    <div>
      <AlertModal isAlertOpen={isAlertOpen} setAlertOpen={setAlertOpen} />
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
      <NotFoundModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default NotFound;
