import React, { useReducer, useRef } from "react";

export default function TodoRed() {
  const INITIAL_STATE = [];

  const todoInput = useRef("");
  const todoReducer = (state, action) => {
    let newState = state;
    switch (action.type) {
      case "ADD_TODO":
        newState = [
          { id: Date.now(), text: todoInput.current.value },
          ...state,
        ];
        break;
      case "REM_TODO":
        newState = newState.filter((item) => item.id !== action.payload.id);
        break;
      case "COMP_TODO":
        console.log("in comp");
        newState = newState.map((item) =>
          item.id === action.payload.id ? { ...item, completed: true } : item
        );
    }

    return newState;
  };

  const [todoList, dispatchTodo] = useReducer(todoReducer, INITIAL_STATE);
  return (
    <div>
      <input type="text" ref={todoInput} />
      <button onClick={() => dispatchTodo({ type: "ADD_TODO" })}>Add</button>
      <h2>TODO'S</h2>
      <ul>
        {todoList.map((todo, index) => (
          <>
            <li
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              key={index}
            >
              {todo.text}
            </li>
            <button
              onClick={() => dispatchTodo({ type: "REM_TODO", payload: todo })}
            >
              Remove
            </button>
            <button
              onClick={() => dispatchTodo({ type: "COMP_TODO", payload: todo })}
            >
              Completed
            </button>
          </>
        ))}
      </ul>
    </div>
  );
}
