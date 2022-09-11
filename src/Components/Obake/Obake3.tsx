import React from "react";

export const Obake3 = (props: {
  obake3: boolean;
  setObake3: (toggle: boolean) => void;
}) => {
  const clickObake = () => {
    sessionStorage.setItem('obake3', "true");
    props.setObake3(false)
  }
  return (
    <>
      {props.obake3 ? (
        <div>
          <button onClick={clickObake}>
            <img src={`${process.env.PUBLIC_URL}/obake3.png`} />
          </button>
        </div>
      ) : null}
    </>
  );
};
