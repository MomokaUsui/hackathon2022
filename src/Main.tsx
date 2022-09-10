import React from "react";

import obake1 from "../src/images/obake1.png";
import obake2 from "../src/images/obake2.png";
import obake3 from "../src/images/obake3.png";
function Main() {
  return (
    <div>
      ここがMainページです
      <img src={obake1} className="w-20" />
      <img src={obake2} className="w-20"/>
      <img src={obake3} className="w-20"/>
    </div>
  );
}

export default Main;
