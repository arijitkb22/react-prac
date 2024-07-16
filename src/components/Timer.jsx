import React, { useEffect, useState } from "react";

export default function Timer() {
  const [currTime, setCurrTime] = useState(60);

  useEffect(() => {
    if (currTime > 0) {
      const timer = setTimeout(() => setCurrTime(currTime - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCurrTime(60);
    }
  }, [currTime]);

  return <div>Time Left {currTime} Sec</div>;
}
