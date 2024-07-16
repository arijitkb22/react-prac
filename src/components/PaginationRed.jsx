import React, { useEffect, useReducer } from "react";

const paginationReducer = (state, action) => {
  let newState = state;
  switch (action.type) {
    case "SET_TOTAL_ITEMS":
      newState = { ...state, totalItem: action.payload };
      break;
    case "GO_PREV":
      newState = { ...state, currentPage: action.payload };
      break;
    case "GO_NEXT":
      newState = { ...state, currentPage: action.payload };
      break;
  }

  return newState;
};
export default function PaginationRed() {
  const INITIAL_STATE = {
    currentPage: 1,
    totalItem: 0,
    itemsPerPage: 10,
  };
  const [paginationState, dispatchPage] = useReducer(
    paginationReducer,
    INITIAL_STATE
  );

  const data = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);
  console.log(data)

  useEffect(() => {
    dispatchPage({ type: "SET_TOTAL_ITEMS", payload: data.length });
  }, []);

  const startIndex =
    (paginationState.currentPage - 1) * paginationState.itemsPerPage;

  const endIndex = paginationState.currentPage * paginationState.itemsPerPage;

  const displayData = data.slice(startIndex, endIndex);

  return (
    <div>
      <h2>Paginated Data</h2>
      <ul>
        {displayData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button disabled={paginationState.currentPage===1} onClick={() => dispatchPage({type:"GO_PREV", payload:paginationState.currentPage -1})}>Previous</button>
      <button disabled={endIndex>=data.length} onClick={() => dispatchPage({type:"GO_NEXT", payload:paginationState.currentPage +1})}>Next</button>
    </div>
  );
}
