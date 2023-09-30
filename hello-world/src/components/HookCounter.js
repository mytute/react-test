import React, { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    setCount(prevCount=> prevCount+1);
    setCount(prevCount=> prevCount+1);

  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>Click {count}</button>
    </div>
  );
};

export default HookCounter;
