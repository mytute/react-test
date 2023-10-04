#  useMemo    

useMemo is hook that only recalculate the cashed values when on of the dependency has been changes.  

1. show in browser when click 'Count - one' button it will delay to show updated result because of while loop in 'isEven' function.   

2. show in browser when click 'Count -two' button- it also delay to show updated result because of when component rendering it will execute 'isEven' function.    

3. show how to use 'useMemo' hook for cache the 'isEven' function value if now changes with 'countOne' state. 
* here we should change 'isEven' function to variable(value).      

```jsx
import React, { useState, useMemo } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };


  const isEven = useMemo(() => {
    let i = 0;
    while(i<2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne])  

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count - one {counterOne} </button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count - two {counterTwo} </button>
      </div>
    </div>
  );
};

export default Counter;
```

!important : useMemo function not use for every funtion optimization.    