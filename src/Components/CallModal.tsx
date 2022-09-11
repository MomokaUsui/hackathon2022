import React from "react";
import { AiTwotonePhone } from "react-icons/ai";
import { ImPhoneHangUp } from "react-icons/im";
export const CallModal = (props: {
  isAlertOpen: boolean;
  setAlertOpen: (toggle: boolean) => void;
}) => {
  let nowTime = new Date(); //  現在日時を得る
  let nowHour = nowTime.getHours(); // 時間を抜き出す
  let nowMin = nowTime.getMinutes(); // 分数を抜き出す
  let msg = nowHour + ":" + nowMin;

  return (
    <div>
      {props.isAlertOpen ? (
        <div
          className="ml-auto shadow w-1/2 bg-opacity-50 bg-gray-400 rounded-md mt-2 mr-2"
          role="alert"
        >
          <div className="p-4 flex">
            <div className="w-24  bg-green-500 flex items-center text-white rounded-lg justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <div className="pl-4 text-gray-200">
                <p className="font-bold text-red-500">電話 緊急</p>
                <p>
                  非通知設定 <span className="text-gray-200">{msg}</span>
                </p>
              </div>
            </div>
            <div className="center">
              <button
                type="button"
                className="ml-4 mt-2 text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <AiTwotonePhone className="text-xl" />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </div>
            <div className="center">
              {/* 電話切る */}
              <button
                type="button"
                className="ml-4 mt-2 text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => props.setAlertOpen(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ImPhoneHangUp className="text-xl" />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
