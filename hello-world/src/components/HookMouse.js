import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
    return ()=>{
        window.removeEventListener("mousemove", logMousePosition);
    }
  }, []);

  const logMousePosition = (event) => {
    console.log("Mouse event");
    setX(event.clientX);
    setY(event.clientY);
  };

  return (
    <div>
      <h2>{`Mouse X: ${x}, Y: ${y}`}</h2>
    </div>
  );
};

export default HookMouse;
