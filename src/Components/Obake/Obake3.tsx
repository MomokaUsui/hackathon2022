import React from "react";

export const Obake3 = (props: {
  obake3: boolean;
  setObake3: (toggle: boolean) => void;
}) => {
  return (
    <>
      {props.obake3 ? (
        <div>
          <button onClick={() => props.setObake3(false)}>
            <img src={`${process.env.PUBLIC_URL}/obake3.png`} />
          </button>
        </div>
      ) : null}
    </>
  );
};
