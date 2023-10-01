import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Show/Hide
      </button>
      {display && <HookMouse />}
    </div>
  );
};

export default MouseContainer;
