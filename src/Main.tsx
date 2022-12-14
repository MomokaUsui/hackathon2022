import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../src/images/back.png";
import nekomata from "../src/images/nekomata.jpg";
import kappa from "../src/images/kappa.jpg";
import kabotya from "../src/images/kabotya.jpg";
import { useTimer } from "react-timer-hook";
import Timer from "./Components/Timer";
import { AlertMain } from "./Components/Modal/AlertMain";
import { CallModal } from "./Components/Modal/CallModal";
import goal_music from "../src/musics/music.mp3";
import { useRecoilState } from "recoil";
import { obake1Atom, obake2Atom, timeAtom } from "./Pages/ObakeAtom";
import { SalesModal } from "./Components/Modal/SalesModal";
import { AnimalModal } from "./Components/Modal/AnimalModal";
import { MainModal } from "./Components/Modal/MainModal";
import { Obake1 } from "./Components/Obake/Obake1";
import { Obake2 } from "./Components/Obake/Obake2";
import call_music from "../src/musics/call_music.mp3";
import call4 from "../src/musics/call4.mp3";
import { clear } from "console";
function Main() {
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCallOpen, setCallOpen] = useState(false);
  const [isNekoOpen, setNekoOpen] = useState(false);
  const [isKaboOpen, setKaboOpen] = useState(false);
  const [time, setTime] = useRecoilState(timeAtom);

  const [modalPotision, setModalPosition] = useState(1);
  console.log(time);
  const [obake1, setObake1] = useRecoilState(obake1Atom);
  const [obake2, setObake2] = useRecoilState(obake2Atom);
  const music = new Audio(goal_music);
  const callMusic = new Audio(call_music);
  const call4Music = new Audio(call4);
  function play() {
    music.play();
  }

  setTimeout(() => {
    setAlertOpen(true);
  }, 50000);

  
  useEffect(() => {
    // 制限時間
    time.setSeconds(300);
    time.getSeconds();

    //電話
    let callCall = setTimeout(() => {
      setCallOpen(true);
      call4Music.play();
      console.log("電話");
    }, 8000);
    return () => {
      clearTimeout(callCall);
    };
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    // ログインしてない人を弾く
    play();
    const isLogin = sessionStorage.getItem("isLogin");
    if (isLogin !== "true") {
      navigate("/");
    }
    // 10 minutes timer
    // time.setSeconds(300); 
    // time.getSeconds ();
  }, []);

  //おばけを3つとも見つけていればgoalへ遷移する
  if (
    sessionStorage.getItem("obake1") == "true" &&
    sessionStorage.getItem("obake2") == "true" &&
    sessionStorage.getItem("obake3") == "true"
  ) {
    navigate("/goal");
  }

  return (
    <div className="bg-blue-900 w-screen h-full">
      <AlertMain isAlertOpen={isAlertOpen} setAlertOpen={setAlertOpen} />
      <CallModal
        isAlertOpen={isCallOpen}
        setAlertOpen={setCallOpen}
        music={call4Music}
      />
      <Timer expiryTimestamp={time} />
      <Obake1 setObake1={setObake1} obake1={obake1} />
      <section className=" dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="flex items-center justify-between">
            <p></p>
            <h1 className="text-3xl font-semibold text-green-400 capitalize lg:text-4xl dark:text-white">
              <span className="cursor-pointer hover:text-green-700 underline">
                おばけ
              </span>
              マンション
            </h1>

            <button className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src={nekomata}
                alt=""
              />

              <div className="mt-8">
                <span className="text-blue-500 uppercase">猫又</span>

                <h1
                  className="mt-4 text-xl cursor-copy font-semibold text-green-500 dark:text-white"
                  onClick={() => setNekoOpen(true)}
                >
                  猫又とは？
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  中国では日本より古く隋時代には「猫鬼（びょうき）」「金花猫」といった怪猫の話が伝えられていたが、日本においては鎌倉時代前期の藤原定家による『明月記』の天福元年（1233年）8月2日の記事に、南都（現・奈良県）で「猫胯」が一晩で数人の人間を食い殺した
                  という記述がある。これが、猫又が文献上に登場した初出とされており、猫又は山中の獣として語られていた。
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      John snow
                    </a>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      February 1, 2022
                    </p>
                  </div>

                  <a
                    href="#"
                    className="inline-block text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src={kappa}
                alt=""
              />

              <div className="mt-8">
                <span className="text-blue-500 uppercase">河童</span>

                <h1 className="mt-4 text-xl font-semibold text-green-500 dark:text-white">
                  河童とは？
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  河童（かっぱ）は、日本の妖怪。標準和名の「かっぱ」は、「かわ（川）」に「わらは（童）」の変化形「わっぱ」が複合した「かわわっぱ」が変化したもの。河太郎（かわたろう）とも言う。ほぼ日本全国で伝承され、その呼び名や形状も各地方によって異なるが、芥川龍之介の1927年の小説『河童』によって知名度が上がり、代表的な呼び名となった。類縁にセコなどがいる。水神、またはその依り代、またはその仮の姿ともいう。鬼、天狗と並んで日本の妖怪の中で最も有名なものの一つとされる
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      Arthur Melo
                    </a>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      February 6, 2022
                    </p>
                  </div>

                  <button className="inline-block text-blue-500 underline hover:text-blue-400">
                    Read more
                  </button>
                </div>
              </div>
            </div>

            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src={kabotya}
                alt=""
              />

              <div className="mt-8">
                <span className="text-blue-500 uppercase">
                  ジャックオランタン
                </span>
                <h1
                  className="mt-4 text-xl font-semibold text-green-500 dark:text-white"
                  onClick={() => setKaboOpen(true)}
                >
                  ジャックオランタンとは?
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  ジャック・オー・ランタン（英: Jack-o'-Lantern[注釈 1][注釈
                  2]）は、アイルランド、および、スコットランド（いずれもケルト系文化が色濃い）に伝わる鬼火のような存在。
                  日本語ではジャック・オー・ランタン以外にも「ジャック・オ・ランタン」や「ジャッコランタン」、あるいは
                  "-o'-"
                  に当たる部分を省略した「ジャックランタン」との表記・発音もある。漢語との混ぜ書きでは「提灯ジャック」とも言う。
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      Tom Hank
                    </a>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      February 19, 2022
                    </p>
                  </div>

                  <button
                    className="inline-block text-white underline hover:text-blue-400"
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  >
                    CLICK
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/amabie.png`}
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80 bg-gray-300"
              />

              <div className="mt-8">
                <span className="text-blue-500 uppercase">アマビエ</span>
                <h1
                  className="mt-4 text-xl font-semibold text-green-500 dark:text-white"
                  onClick={() => setKaboOpen(true)}
                >
                  アマビエとは
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  アマビエは、1846年5月（弘化3年4月）に現在の熊本県にあたる肥後国海上に出現したとされる日本の疫病封じの妖怪[1]。海中から光を輝かせるなどの現象を起こし、豊作や疫病などに関する予言をしたと伝えられる。
                  同種と考えられる存在にアマビコやアリエなどがある。
                </p>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                「404 not found」とは、クライアントの要求に対応するページが、すでに存在しないことを意味する、「サーバーが返すHTTPステータスコードの一つ」のことです
                </p>


                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      hint aruyo
                    </a>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      February 19, 2022
                    </p>
                  </div>

                  <button
                    className="inline-block text-white underline hover:text-blue-400"
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  >
                    CLICK
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/nurari.png`}
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80 bg-gray-300"
              />
              <div className="mt-8">
                <span className="text-blue-500 uppercase">ぬらりひょん</span>
                <h1
                  className="mt-4 text-xl font-semibold text-green-500 dark:text-white"
                  onClick={() => setKaboOpen(true)}
                >
                  ぬらりひょんとは?
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  一般に、瓢箪鯰（ひょうたんなまず）のように掴まえ所が無い化物[1]
                  であるとされる。江戸時代に描かれた妖怪絵巻などにその姿が多く確認できるが、詳細は不明である。民間伝承には百鬼夜行の一員（秋田県）、海坊主の一種（岡山県）にその名称が確認されるが、描かれている妖怪画の「ぬらりひょん」との前後の関係性は明らかではない
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      Tom Hank
                    </a>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      February 19, 2022
                    </p>
                  </div>

                  <button
                    className="inline-block text-white underline hover:text-blue-400"
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  >
                    CLICK
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="relative top-24 left-32 ">
                <Obake2 setObake2={setObake2} obake2={obake2} />
              </div>
              <SalesModal />
            </div>
            <MainModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
