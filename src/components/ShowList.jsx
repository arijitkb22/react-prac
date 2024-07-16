import React from "react";

export default function ShowList() {
  const fruits = ["Apple", "Mango", "Orange", "Lichi", "Papaya"];
  return (
    <div>
      <h1 className="fruits">Fruits Available</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruits.indexOf(fruit)}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
