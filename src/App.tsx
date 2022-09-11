import React from "react";
import RoutePage from "./Pages/RoutePage";
import { BrowserRouter } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <RoutePage />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
