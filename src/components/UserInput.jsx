import React, { useRef, useState } from "react";

export default function UserInput() {
  const [inputVal, setInputVal] = useState("");
  const handleOnChange = (event) => {
    // console.log(event);
    setInputVal(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        className="user-input"
        onChange={(event) => {
          handleOnChange(event);
        }}
      />
      <div className="input-val">{inputVal}</div>
    </div>
  );
}
