import React from 'react';

const Greet = (props) => {
   const {firstName, lastName}= props;
 
  return (
    <>
    <div>Hello {firstName} {lastName}</div>

    </>
  )
} 

export default Greet;