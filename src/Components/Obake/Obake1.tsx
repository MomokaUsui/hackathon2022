import React from "react";

export const Obake1 = (props: {
  obake1: boolean;
  setObake1: (toggle: boolean) => void;
}) => {
  return (
    <>
      {props.obake1 ? (
        <div>
          <button onClick={() => props.setObake1(false)}>
            <img src={`${process.env.PUBLIC_URL}/obake1.png`} />
          </button>
        </div>
      ) : null}
    </>
  );
};
