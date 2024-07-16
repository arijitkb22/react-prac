import React, { useEffect, useState } from "react";

export default function Quote() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => setQuote(data.quote));
  }, []);
  return <div>{quote}</div>;
}
