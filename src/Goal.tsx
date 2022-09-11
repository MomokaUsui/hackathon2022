import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apartment from "../src/images/apartment.jpeg";
import useSound from "use-sound";
import goal_music from "../src/musics/music.mp3";
import { GoalModal } from "./Components/Modal/GoalModal";



function Goal() {
  //javascript
  const [isOpen, setIsOpen] = useState(false);
  setTimeout(() => {
    setIsOpen(true);
  }, 5000);
  const music = new Audio(goal_music);
  function play() {
    music.play();
  }
  const navigate = useNavigate();
  useEffect(() => { //ログインしてない人を弾く
    const isLogin = sessionStorage.getItem("isLogin");
    for (let i = 1; i < 3; i++){
      play();
    };
    if (isLogin !== "true") {
      navigate("/");
    }
  }, []);
  
  
  useEffect(() => { //おばけを三匹見つけていなかったらmainに飛ばす
    if(sessionStorage.getItem("obake1") !== "true" || sessionStorage.getItem("obake2") !== "true" || sessionStorage.getItem("obake3") !== "true") {
      navigate("/main")
    }
  }, [])
  

  setTimeout(() => {
    console.log("Hello, World!");
  }, );
  
  

  return (
    <div>
      {/* <button onClick={play}>play</button> */}
      <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <GoalModal isOpen={isOpen} setIsOpen={setIsOpen} />
        <img src={apartment} className="absolute h-full w-full object-cover" />
        <div className="inset-0 bg-black opacity-25 absolute"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 items-center py-32 xl:py-40">
          <div className="w-full flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-7xl text-center sm:text-8xl text-white leading-tight mt-4">
              お疲れ様です
            </h1>

            <div className="flex ml-64 pl-32 ">
              <img className="w-20" src={`${process.env.PUBLIC_URL}/obake1.png`} />
              <img className="w-20" src={`${process.env.PUBLIC_URL}/obake2.png`} />
              <img className="w-20" src={`${process.env.PUBLIC_URL}/obake3.png`} />
            </div>
          </div>
          <div className="flex items-center flex-col">
            <Link
              to="/"
              className="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-10 "
              onClick={() => {sessionStorage.clear()}}
            >
              トップページに戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goal;
