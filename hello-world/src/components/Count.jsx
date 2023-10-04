import React, { memo } from "react";

const Count = ({ text, count }) => {
  console.log('render count', text);
  return (
    <div>
      {text} {count}
    </div>
  );
};

export default memo(Count);
