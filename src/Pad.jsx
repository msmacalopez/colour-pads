import React from "react";

const Pad = (props) => {
  console.log(props.on);
  //1)initial state for the ON state
  // const [onState, setOnState] = React.useState(props.on);

  //2) function to toggle state variable
  // function toggleOn() {
  //   setOnState((prevOn) => !prevOn);
  // }

  //3)-->add on Click to button

  return (
    <button
      style={{ background: props.color }}
      // className={props.on ? "on" : null}
      className={props.on ? "on" : null}
      onClick={() => {
        props.toogleOn(props.id);
      }}
    ></button>
  );
};

export default Pad;
