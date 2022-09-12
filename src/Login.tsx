import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import door from "./images/door.png";
import PolicyModal from "./Components/PolicyModal";
import { timeAtom } from "./Pages/ObakeAtom";
import { useRecoilState } from "recoil";
import CancelModal from "./Components/Modal/CancelModal";

const Login: React.FC = () => {
  const [name, setName] = useState("ユーザー名");
  const [email, setEmail] = useState("メールアドレス");
  const [time, setTime] = useRecoilState(timeAtom);
  const nowTime = new Date();
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [isCancelOpen, setCancelOpen] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [checkPolicy, setCheckPolicy] = useState(false);

  const newUserNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const newUserEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const changeCheckBox = () => {
    setCheckBox(!checkBox);
    console.log(checkBox);
  };
  const navigate = useNavigate();

  useEffect(() => {
    //sessionstrageの初期化
    sessionStorage.clear();
  }, []);

  const ButtonClicked = () => {
    if (!checkBox) {
      window.alert("利用規約に同意してください");
    } else if (!checkPolicy) {
      window.alert("利用規約をちゃんと読んでから同意してください");
    } else {
      sessionStorage.setItem("name", `${name}`);
      sessionStorage.setItem("isLogin", "true");
      navigate("/main");
    }
  };

  const CancelButtonClicked = () => {
    setEmail("");
    setName("");
  };

  return (
    <>
      <div>
        <div
          style={{
            backgroundImage: `url(${door} )`,
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <div className="">
            <div className="p-8 lg:w-1/2 mx-auto">
              <div className="bg-blue-900 rounded-t-lg">
                <div>
                  <div className="flex items-center justify-center ">
                    {/* <p className="text-2xl">お化けマンション</p> */}
                    <img src={`${process.env.PUBLIC_URL}/title.png`} className="w-96 mt-4 mb-0" />

                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
                <form className="mt-6">
                  <div className="relative">
                    <input
                      className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                      id="username"
                      type="text"
                      value={name}
                      onChange={newUserNameInput}
                    />
                  </div>
                  <div className="relative mt-3">
                    <input
                      className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                      id="email"
                      type="text"
                      value={email}
                      onChange={newUserEmailInput}
                    />
                  </div>
                  <div className="mt-4 flex items-center text-gray-500">
                    <input
                      type="checkbox"
                      name="remember"
                      className="mr-3"
                      onChange={() => {
                        changeCheckBox();
                      }}
                    />
                    <label htmlFor="remember">
                      <u
                        onClick={() => {
                          setAlertOpen(!isAlertOpen);
                          setCheckPolicy(true);
                        }}
                      >
                        利用規約
                      </u>
                      に同意します
                    </label>
                    <br />
                    <PolicyModal
                      showModal={isAlertOpen}
                      setShowModal={setAlertOpen}
                    />
                  </div>

                  <div className="flex items-center justify-center mt-8 space-x-4">
                    <button
                      className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                      onClick={ButtonClicked}
                      disabled={!name || !email}
                    >
                      ログイン
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          position: "relative",
          top: -270,
          left: 800,
          maxWidth: 500,
        }}
      >
        <p className="text-white text-3xl">僕たちを探してクリックしてね!</p>
        <div className="flex" style={{}}>
          <img src={`${process.env.PUBLIC_URL}/obake1.png`} className="w-20" />
          <img src={`${process.env.PUBLIC_URL}/obake2.png`} className="w-20" />
          <img src={`${process.env.PUBLIC_URL}/obake3.png`} className="w-20" />
        </div>
        <p className="text-white text-3xl">全員探せたらクリア!</p>
      </div>
      <div />
    </>
  );
};

export default Login;
