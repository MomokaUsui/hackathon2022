import React from "react";

export const Obake2 = (props: {
  obake2: boolean;
  setObake2: (toggle: boolean) => void;
}) => {
  return (
    <>
      {props.obake2 ? (
        <div>
          <button onClick={() => props.setObake2(false)}>
            <img src={`${process.env.PUBLIC_URL}/obake2.png`} />
          </button>
        </div>
      ) : null}
    </>
  );
};
