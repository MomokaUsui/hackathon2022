import React from "react";

export const Obake1 = (props: {
  obake1: boolean;
  setObake1: (toggle: boolean) => void;
}) => {
  const clickObake = async() => {
    sessionStorage.setItem('obake1', "true");
    props.setObake1(false)
  }
  return (
    <>
      {props.obake1 ? (
        <div>
          <button onClick={clickObake}>
            <img src={`${process.env.PUBLIC_URL}/obake1.png`} />
          </button>
        </div>
      ) : null}
    </>
  );
};
