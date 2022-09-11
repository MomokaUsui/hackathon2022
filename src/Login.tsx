import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import door from "./images/door.png";
import PolicyModal from "./Components/PolicyModal";

const Login: React.FC = () => {
  const [name, setName] = useState("ユーザー名")
  const [email, setEmail] = useState("メールアドレス")
  const [isAlertOpen, setAlertOpen] = useState(false)
  const newUserNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const newUserEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  const navigate = useNavigate()

  const buttonClicked = () => {
    sessionStorage.setItem('name', `${name}`);
    sessionStorage.setItem('isLogin', "true");
    navigate("/main")
  }


  

  return (
    <div style={{backgroundImage: `url(${door} )`, backgroundSize: "cover", height: "100vh"}}>
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
          <input type="checkbox" name="remember" className="mr-3" />
          <label htmlFor="remember"><u onClick={() => {setAlertOpen(!isAlertOpen)}}>利用規約</u>に同意しません</label><br/>
        <PolicyModal showModal={isAlertOpen} setShowModal={setAlertOpen} />
          
        </div>





        


        <div className="flex items-center justify-center mt-8">
          <button
            className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            onClick={buttonClicked}
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
  )
}

export default Login;
