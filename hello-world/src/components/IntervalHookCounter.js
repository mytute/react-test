import React, { useEffect, useState } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  const tick = ()=>{
    console.log("interval", count);
    setCount((prevCount) => prevCount + 1);
    // setCount(count + 1);
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000); // add interval here

    return () => { //clear timer
      clearInterval(interval);
    };
  },[]);

  return (
  <div>
    <div>Count: {count} </div>
  </div>
  );
};

export default IntervalHookCounter;
