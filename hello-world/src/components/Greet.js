import React from 'react';

const Greet = (props) => {
  return (
    <>
    <div>Hello {props.name}</div>
    {props.children}
    </>
  )
} 

export default Greet;