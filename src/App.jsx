import { useState } from "react";
import padsData from "./padsData.js";
import Pad from "./Pad.jsx";

function App({ darkMode }) {
  //1) state variable and initialise with the info in padsData.js
  const [padsArray, setPadsArray] = useState(padsData);

  // const stylesss = {
  //   backgroundColor: darkMode ? "#222222" : "#cccccc",
  // };

  //3)Create toogle fx for padsArray State
  //this fx is call only from Pad.jsx
  function toogleOn(id) {
    //map over the pads array and find item with the id to flip
    setPadsArray((prevArray) =>
      prevArray.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      })
    );
  }

  //4)All OFF
  function shutdown() {
    setPadsArray((prevArray) =>
      prevArray.map((item) => {
        return { ...item, on: false };
      })
    );
  }

  //2)Map the State array to pass in jsx
  const buttonElements = padsArray.map((pad) => {
    return (
      <Pad
        key={pad.id}
        id={pad.id}
        color={pad.color}
        on={pad.on}
        toogleOn={toogleOn}
      />
    );
    //return <button style={stylesss} ></button>;
  });

  return (
    <main>
      <div className="pad-container"> {buttonElements} </div>
      <button className="red" onClick={shutdown}></button>
    </main>
  );
}

export default App;
