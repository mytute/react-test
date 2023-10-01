import React, { useState, useEffect } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Click ${count} times`;
    console.log('update title count');
  });

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={handleIncrement}>Click {count} times</button>
    </div>
  );
};

export default HookCounter;
