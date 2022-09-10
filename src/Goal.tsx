import React from "react";
import apartment from "../src/images/apartment.jpeg"

function Goal() {
  //javascript
  return (
    <div style={{backgroundImage: `url(${apartment} )`, backgroundSize: "cover", height: "100vh"}}>
      <div>Goal</div>
    </div>
  );
}

export default Goal;
