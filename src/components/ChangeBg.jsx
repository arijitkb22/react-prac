import React, { useState } from "react";

export default function ChangeBg() {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={`change-bg ${clicked ? "clicked" : "no-click"}`}
      onClick={() => setClicked(!clicked)}
    >
      ChangeBg
    </div>
  );
}
