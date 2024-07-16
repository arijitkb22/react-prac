import React, { useEffect, useState } from "react";

export default function FetchData() {
  const [value, SetValue] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => SetValue(data.posts));
  }, []);
  return (
    <div>
      {value.map((val) => (
        <>
          <h2 key={val.id}>{val.title}</h2>
          <h4 key={val.id + 1}>{val.body}</h4>
        </>
      ))}
    </div>
  );
}
