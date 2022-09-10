import React from "react";
import { useTimer } from "react-timer-hook";

function Timer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="text-center">
      <h1>制限時間 </h1>
      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p className="p-3">{isRunning ? "Running" : "Not running"}</p>
      <button className="px-5 bg-blue-200" onClick={start}>
        Start
      </button>
      <button className="px-5 bg-blue-200" onClick={pause}>
        Pause
      </button>
      <button className="px-5 bg-blue-200" onClick={resume}>
        Resume
      </button>
      <button
        className="px-5 bg-blue-200"
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default Timer;
