import React from 'react';

const Greet = (props) => {
 
  return (
    <>
      <div>Hello {props.firstName} {props.lastName}</div>
    </>
  )
}

export default Greet;