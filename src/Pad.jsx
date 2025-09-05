import React from "react";

const Pad = (props) => {
  console.log(props.on);
  return (
    <button
      style={{ background: props.color }}
      className={props.on ? "on" : null}
    ></button>
  );
};

export default Pad;
