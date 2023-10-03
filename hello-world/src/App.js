import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import Counter from "./components/Counter";
import React, { useReducer } from "react";
import DateFetching from "./components/DateFetching";


const initailValue = 0;
const reducer = (state, action)=>{
    switch(action){
      case 'increment':
        return state+1;
      case 'decrement':
        return state-1;
      case 'reset':
        return initailValue;
      default:
        return state;
    }
}
export const CountContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initailValue)
  return (
    <div>
      {/* <ComponentC />
      <Counter/> */}
      {/* {count}
      <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
      <CountContext.Provider value={{countState:count, countDispatch: dispatch}}>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </CountContext.Provider> */}
      <DateFetching/>
    </div>
  );
}

export default App;
