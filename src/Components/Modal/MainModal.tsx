import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { obake3Atom } from "../../Pages/ObakeAtom";
import { Obake3 } from "../Obake/Obake3";


export const MainModal = (props: {
  isOpen: boolean;
  setIsOpen: (toggle: boolean) => void;
}) => {
  return (
    <>
      {props.isOpen ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-sm">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-blue-800 shadow-lg outline-none focus:outline-none">
                {/*header*/}
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-lg leading-relaxed text-white">
                  <img src={`${process.env.PUBLIC_URL}/kabo.jpg`} />
                  </p>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className="background-transparent mb-1 mr-1 px-10 py-2 text-sm font-bold uppercase text-blue-700 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => props.setIsOpen(false)}
                  >
                    close
                  </button>
                  <button
                    className="mb-1 mr-1 rounded bg-green-400 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blue-300"
                    type="button"
                  >
                    lock
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};
