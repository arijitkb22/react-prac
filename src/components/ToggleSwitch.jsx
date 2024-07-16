import React, { useState } from "react";

export default function ToggleSwitch() {
  const [toggleStatus, setToggleStatus] = useState(false);
  return (
    <div>
      <h4>Check Box toggle</h4>
      <input
        type="checkbox"
        className="toggle"
        onClick={() => setToggleStatus(!toggleStatus)}
      />
      <h5>{toggleStatus ? "ON" : "OFF"}</h5>
    </div>
  );
}
