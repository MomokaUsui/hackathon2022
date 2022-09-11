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
  const [isCancelOpen, setCancelOpen] = useState(false)
  const [checkBox, setCheckBox] = useState(false);
  const [checkPolicy, setCheckPolicy] = useState(false)
  const [count, setCount] = useState(0) //キャンセルボタン用
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

  useEffect(() => { //sessionstrageの初期化
    sessionStorage.clear()
  }, [])

  useEffect(() => { //キャンセルボタン用
    setCancelOpen(!isCancelOpen)
    console.log("無限ループ")
  }, [count])

  const ButtonClicked = () => {
    if (!checkBox) {
      window.alert("利用規約に同意してください");
    } else if(!checkPolicy) {
      window.alert("利用規約をちゃんと読んでください");

    } else {
      sessionStorage.setItem("name", `${name}`);
      sessionStorage.setItem("isLogin", "true");
      navigate("/main");
    }
  };

  const CancelButtonClicked = () => {
    setEmail("")
    setName("")
  }

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
              <div className="bg-white rounded-t-lg p-8">
                <div>
                  <div className="flex items-center justify-center space-x-4 mt-0">
                    <p className="text-2xl">お化けマンション</p>
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
                    <input type="checkbox" name="remember" className="mr-3" onChange={() => {changeCheckBox()}}/>
                    <label htmlFor="remember">
                      <u
                        onClick={() => {
                          setAlertOpen(!isAlertOpen);
                          setCheckPolicy(true)
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

                    <button
                      className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                      onClick={() => {setCount(count + 1)}}
                    >
                      キャンセル
                    </button>
                    <br/>
                    {/*
                    <CancelModal
                      isCancelOpen={isCancelOpen}
                      setCancelOpen={setCancelOpen}
                    />
                    */}

{isCancelOpen ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  本当にキャンセルしますか？
                  </h3>
                  
                </div>
                {/*body*/}
                
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {setCancelOpen(false); setName(""); setEmail("") }}
                    style={{minWidth: 100}}
                  >
                    はい
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setCancelOpen(false)}
                  >
                    キャンセル
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}






                          










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
          left: 900,
          maxWidth: 300
        }}
      >
        <p className="text-white text-3xl">僕たちを探してね!</p>
        <div className="flex" style={{}}>
          <img src={`${process.env.PUBLIC_URL}/obake1.png`} className="w-20" />
          <img src={`${process.env.PUBLIC_URL}/obake2.png`} className="w-20" />
          <img src={`${process.env.PUBLIC_URL}/obake3.png`} className="w-20" />
        </div>
      </div>
      <div />
    </>
  );
};

export default Login;
