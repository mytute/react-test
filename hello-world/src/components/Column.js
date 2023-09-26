import React from "react";

const Column = () => {
  const items = ["s", "a", "m", "d"];
  return (
    <React.Fragment>
      {items.map((item, index) => (
        <React.Fragment key={index}> <td>{item}</td></React.Fragment>
      ))}
      <td>Samadhi</td>
      <td>Laksahan</td>
    </React.Fragment>
  );
};

export default Column;
