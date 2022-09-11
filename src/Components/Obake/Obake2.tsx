import React from "react";

export const Obake2 = (props: {
  obake2: boolean;
  setObake2: (toggle: boolean) => void;
}) => {
  const clickObake = () => {
    sessionStorage.setItem('obake2', "true");
    props.setObake2(false)
  }
  return (
    <>
      {props.obake2 ? (
        <div>
          <button onClick={clickObake}>
            <img src={`${process.env.PUBLIC_URL}/obake2.png`} />
          </button>
        </div>
      ) : null}
    </>
  );
};
