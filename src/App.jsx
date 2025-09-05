import { useState } from "react";
import padsData from "./padsData.js";
import Pad from "./Pad.jsx";

function App({ darkMode }) {
  //1) state variable and initialise with the info in padsData.js
  const [padsArray, setPadsArray] = useState(padsData);

  // const stylesss = {
  //   backgroundColor: darkMode ? "#222222" : "#cccccc",
  // };

  //2)Map the State array to pass in jsx
  const buttonElements = padsArray.map((pad) => {
    return <Pad key={pad.id} color={pad.color} on={pad.on} />;
    //return <button style={stylesss} ></button>;
  });

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}

export default App;
