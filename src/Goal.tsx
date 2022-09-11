
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import obake1 from "../src/images/obake1.png";
import obake2 from "../src/images/obake2.png";
import obake3 from "../src/images/obake3.png";
import apartment from "../src/images/apartment.jpeg";
import useSound from 'use-sound';
import goal_music from "../src/musics/death_sound4.mp3";


function Goal() {
  //javascript
  const navigate = useNavigate()
  useEffect(() => { //ログインしてない人を弾く
    const isLogin = sessionStorage.getItem('isLogin')
    if (isLogin !== "true") {
      navigate("/")
    }
  }, [])
  setTimeout(() => {
    console.log('Hello, World!')
  }, 3000);
    const music = new Audio(goal_music);
    function play() {
      music.play();
    }
    
  return (
    <div>
      <button onClick={play}>play</button>
      
      <div className="bg-indigo-900 relative overflow-hidden h-screen">
        <img src={apartment} className="absolute h-full w-full object-cover" />
        <div className="inset-0 bg-black opacity-25 absolute">
        </div>
        <header className="absolute top-0 left-0 right-0 z-20">
          <nav className="container mx-auto px-6 md:px-12 py-4">
            <div className="md:flex justify-center items-center">
              <div className="flex justify-between items-center">
                <div className="md:hidden">
                  <button className="text-white focus:outline-none">
                    <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hidden md:flex items-center">
                <a className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                  Ticket
                </a>
                <a className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                  Info
                </a>
                <a className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </header>
        <div className="container mx-auto px-6 md:px-12 relative z-10 items-center py-32 xl:py-40">
          <div className="w-full flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-7xl text-center sm:text-8xl text-white leading-tight mt-4">
              お疲れ様です
            </h1>

            <div className="flex ml-64 pl-32 ">
              <img src={obake1} className="w-20 ml-64" />
              <img src={obake2} className="w-20 ml-6" />
              <img src={obake3} className="w-20 ml-6" />
            </div>
          </div>
          <div className="flex items-center flex-col">
          <Link to="/" className="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-10 ">
            トップページに戻る
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goal;
