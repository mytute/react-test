import React from 'react';

const Greet = (props) => {
  // props.name = 'new name';
  return (
    <>
    <div>Hello {props.name}</div>
    {props.children}
    </>
  )
} 

export default Greet;