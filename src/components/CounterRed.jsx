import React, { useReducer } from "react";

export default function CounterRed() {
  const counterReducer = (currState, action) => {
    let newState = currState;

    switch(action.type){
      case "INC_COUNT" :
        newState = {count: newState.count+1}
        break
      case "DEC_COUNT" :
        newState = {count: newState.count-1}
        break
      case "RES_COUNT" :
        newState = {count: 0}
        break
    }
    // if(action.type === "INC_COUNT") {
    //   newState = {count: newState.count+1}
    // }
    // if(action.type === "DEC_COUNT") {
    //   if(newState.count>0) {
    //     newState = {count: newState.count-1}
    //   }
      
    // }
    // if(action.type === "RES_COUNT") {
      
    //     newState = {count: 0}
      
    // }

    return newState;
  };
  const [counter, dispatchCounter] = useReducer(counterReducer, {count:0});

  const incCounter = () => {
    dispatchCounter({type: "INC_COUNT"})

  }
  const decCounter = () => {
    dispatchCounter({type: "DEC_COUNT"})
  }
  const resCounter = () => {
    dispatchCounter({type: "RES_COUNT"})
  }
  return (
    <>
      
      <div>Counter : {counter.count}</div>
      <button onClick={incCounter}>+</button>
      <button onClick={decCounter}>-</button>
      <button onClick={resCounter}>Reset</button>
    </>
  );
}
