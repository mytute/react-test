#  useState Hook   

What/Why are Hooks ? 
* Hooks are react feature from version 16.8 maintain state in component.    
* no need to understand how this keyword works in javascript
* no need to bund event handlers in component.
* can reuse state without restructure code (wthout HOC and Render Props).
* no need to call in multiple lifecycle methods(componentDidMount, componentDidUpdate) for one task like data feching.

### Rules on Hooks   
* only call Hooks at the Top Level   
* Only call Hooks from React Fucntions

1. create new fucntional component call 'HookCounter.js' in component folder and implement counter component with 'useState' hook.   
* use 'setCount(count+1)'

HookCounter.js   
```jsx
import React, {useState} from 'react';

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const handleClick = ()=>{
    setCount( count +1 )
  }
  return( <div>
    
    <button onClick={handleClick}>Click {count}</button>
  </div>);
};

export default HookCounter;
```

2. in above example in 'handleClick' function dublicate 'setCount(count+1)' 2 times and show only increment 1 time. for fix that add other form of 'useState' hook that with previous value.

if new state value depends on the previous state value then you can pass a funtion to the setter function.

HookCounter.js   
```jsx
import React, { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    setCount(prevCount=> prevCount+1); // with previous state
    setCount(prevCount=> prevCount+1); // with previous state

  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>Click {count}</button>
    </div>
  );
};

export default HookCounter;
```

### useState with object    

3. create functional component call 'User.js' inside component folder and make two input fields for user 'firstName' and 'lastName'. And dispaly values in using 'div' tags on browser.  And show how to use spread operators(overrite object) in 'setName' function when update the name.

* spread operator do merge object here.

User.js
```jsx
import React, { useState } from "react";

const User = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(event) => {
          setName({ ...name, firstName: event.target.value });
        }}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(event) => {
          setName({ ...name, lastName: event.target.value });
        }}
      />

      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name, null, 2)}</h2>
    </form>
  );
};

export default User;
```

### useState with array

4. create functional component call 'Item.js' inside component folder and make add random numbers when click 'Add a number' button. And dispaly values as a list using 'ul/li' tags on browser.  And show how to use spread operators(overrite array) in 'setItem' function when add the number.    

Item.js   
```jsx
import React, { useState } from "react";

const Items = () => {
  const [item, setItem] = useState([]);
  const addItem = () => {
    setItem([
      ...item,
      {
        id: item.length,
        value: Math.floor(Math.random() * 10) + 1,
      }
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add a Number</button>
      <ul>
        {item.map((item) => (
           <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      <div>{JSON.stringify(item, null, 2)}</div>
    </div>
  );
};

export default Items;
```

