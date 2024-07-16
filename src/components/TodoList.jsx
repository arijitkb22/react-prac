import React, { useRef, useState } from "react";

export default function TodoList() {
  const item = useRef("");
  const [todoItems, setTodoItems] = useState(["Go to School"]);
  const handleAdd = () => {
    const newTodo = [item.current.value, ...todoItems];
    setTodoItems(newTodo);
    item.current.value = "";
  };
  const handleRemove = (item) => {
    const newTodo = todoItems.filter((listItem) => item != listItem);
    setTodoItems(newTodo);
  };
  return (
    <div>
      <input type="text" ref={item} className="todo-input" />
      <button onClick={handleAdd}>Add</button>
      {todoItems.map((item, index) => (
        <div>
          <span key={index}>{item}</span>
          <button key={index - 1} onClick={() => handleRemove(item)}>
            remove
          </button>
        </div>
      ))}
    </div>
  );
}
