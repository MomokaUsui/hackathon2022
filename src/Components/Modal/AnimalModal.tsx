import React from "react";

// export const NekoModal = () => {
//   return (
//     <div>

export const AnimalModal = (props: {
  isAlertOpen: boolean;
  setAlertOpen: (toggle: boolean) => void;
  animal: string;
}) => {
  return (
    <>
      {props.isAlertOpen ? (
        <div
          className="center"
        >
          <img
            src={`${process.env.PUBLIC_URL}/${props.animal}.jpg`}
            className="w-96"
          />
        </div>
      ) : null}
    </>
  );
};
