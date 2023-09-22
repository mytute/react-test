import React from 'react';

const ChildComponent = ({greetHandler}) => {
  return (
    <div>
        <button onClick={greetHandler}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent;