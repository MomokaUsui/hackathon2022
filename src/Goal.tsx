import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom"

function Goal() {

  const navigate = useNavigate()
  useEffect(() => { //ログインしてない人を弾く
    const isLogin = sessionStorage.getItem('isLogin')   
    if(isLogin !== "true") {
      navigate("/")
    }
  }, [])
  
  return (
    <div>
      <div>Goal</div>
    </div>
  );
}

export default Goal;
