import React, { useEffect, useState, useRef } from "react";

const HookTimer = () => {
  const [count, setCount] = useState(0);
  let intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef);
    };
  }, []);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => {clearInterval(intervalRef.current)}}>Clear Interval</button>
    </div>
  );
};

export default HookTimer;
