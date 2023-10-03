import React from "react";
import { CountContext } from "../App";

const ComponentF = () => {
  const countContext = React.useContext(CountContext);
  return (
    <div style={{border:'1px solid red'}}>
      <div>ComponentF</div>
      <div>
        <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
      </div>
    </div>
  );
};

export default ComponentF;
