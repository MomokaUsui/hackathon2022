import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { obake3Atom } from "../../Pages/ObakeAtom";

//TODO:4.8.1.5.1
//削除ができているか微妙(リロードしないと削除不可)

export const GoalModal = (props: {
  isOpen: boolean;
  setIsOpen: (toggle: boolean) => void;
}) => {
  const [obake3, setObake3] = useRecoilState(obake3Atom);
  return (
    <div>
      {props.isOpen ? (
        <div>
        <img src={`${process.env.PUBLIC_URL}/zombie.jpg`} />
      </div>
      ) : null}
    </div>
      
  );
};
