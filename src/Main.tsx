import React from "react";

import obake1 from "../src/images/obake1.png";
import obake2 from "../src/images/obake2.png";
import obake3 from "../src/images/obake3.png";
import back from "../src/images/back.png";
import nekomata from "../src/images/nekomata.jpg";
import kappa from "../src/images/kappa.jpg";
import kabotya from "../src/images/kabotya.jpg";

function Main() {
  return (
    <div className="bg-blue-900 w-screen h-full">
      ここがMainページです
      <img src={obake1} className="w-20" />
      <section className=" dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl dark:text-white">
              おばけマンション
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

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  What do you want to know about UI
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

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  All the features you want to know
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
                src={kabotya}
                alt=""
              />

              <div className="mt-8">
                <span className="text-blue-500 uppercase">
                  ジャックオランタン
                </span>
                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Which services you get from Meraki UI
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente
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

                  <a
                    href="#"
                    className="inline-block text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <img src={obake2} classNameName="w-20" />
      <img src={obake3} classNameName="w-20" /> */}
    </div>
  );
}

export default Main;
