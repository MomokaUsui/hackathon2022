import React, {useState} from "react";

export const SalesModal = () => {
    const [modalPosition, setModalPosition] = useState<number>(-65)
  return (
    <div style={{
      position: "relative",
      top: modalPosition,
      left: 5,
    }} className="shadow-lg rounded-2xl w-96 bg-white dark:bg-gray-800 p-4 h-fit ">
      <div className="flex">
        <p className="text-gray-800 dark:text-gray-50 text-3xl font-medium mb-4 mr-64">
          Pro
        </p>
        <button onClick={() => {setModalPosition(modalPosition - 80)}} className=" float-right px-3 py-1 mb-4 bg-blue-400 text-xs text-white font-semibold rounded hover:bg-blue-500">
          ^
        </button>
      </div>
      <p className="text-gray-900 dark:text-white text-3xl font-bold">
        $777
        <span className="text-gray-300 text-sm">/ month</span>
      </p>
      <p className="text-gray-600 dark:text-gray-100  text-xs mt-4"></p>
      <ul className="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
        <li className="mb-3 flex items-center ">
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            stroke="currentColor"
            fill="#10b981"
            viewBox="0 0 1792 1792"
          >
            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
          </svg>
          All illimited components
        </li>
        <li className="mb-3 flex items-center ">
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            stroke="currentColor"
            fill="#10b981"
            viewBox="0 0 1792 1792"
          >
            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
          </svg>
          Own custom Tailwind styles
        </li>
        <li className="mb-3 flex items-center ">
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            stroke="currentColor"
            fill="#10b981"
            viewBox="0 0 1792 1792"
          >
            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
          </svg>
          Unlimited Templates
        </li>
        <li className="mb-3 flex items-center ">
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            stroke="currentColor"
            fill="#10b981"
            viewBox="0 0 1792 1792"
          >
            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
          </svg>
          Free premium dashboard
        </li>
        <li className="mb-3 flex items-center ">
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            stroke="currentColor"
            fill="#10b981"
            viewBox="0 0 1792 1792"
          >
            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
          </svg>
          Best ranking
        </li>
        <li className="mb-3 flex items-center opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            className="h-6 w-6 mr-2"
            fill="red"
            viewBox="0 0 1792 1792"
          >
            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
          </svg>
          Prenium svg
        </li>
        <li className="mb-3 flex items-center opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            className="h-6 w-6 mr-2"
            fill="red"
            viewBox="0 0 1792 1792"
          >
            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
          </svg>
          Prenium goto
        </li>
        <li className="mb-3 flex items-center opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            className="h-6 w-6 mr-2"
            fill="red"
            viewBox="0 0 1792 1792"
          >
            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
          </svg>
          Prenium ura
        </li>
        <li className="mb-3 flex items-center opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            className="h-6 w-6 mr-2"
            fill="red"
            viewBox="0 0 1792 1792"
          >
            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
          </svg>
          premium momo
        </li>
      </ul>
      <button
        type="button"
        className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        Choose plan
      </button>
    </div>
  );
};
