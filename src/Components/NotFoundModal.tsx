import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//TODO:4.8.1.5.1
//削除ができているか微妙(リロードしないと削除不可)

export const NotFoundModal = (props: {
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
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-indigo-800 shadow-lg outline-none focus:outline-none">
                {/*header*/}
                {/* <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h3 className="text-2xl font-medium"></h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => props.setIsOpen(false)}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none"></span>
                  </button>
                </div> */}
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-lg leading-relaxed text-white">
                    よく見つけたね！！
                  </p>
                </div>
                <img  className='w-20' src={`${process.env.PUBLIC_URL}/obake3.png`} />
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className="background-transparent mb-1 mr-1 px-10 py-2 text-sm font-bold uppercase text-green-700 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => props.setIsOpen(false)}
                  >
                    close
                  </button>
                  <button
                    className="mb-1 mr-1 rounded bg-indigo-400 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-red-300"
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
