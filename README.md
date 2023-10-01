#  useEffect Hook  

The Effect Hook lets you perform side effects in functional components.

using 'useEffect' following 3 lifecycle method operation can execute in one hook. 

```js
componentDidMount(){
    document.title = `You clicked ${this.state.count} times`;
    this.interval = setInterval(this.tick, 1000);
}

componentDidUpdate(){
    document.title = `You clicked ${this.state.count} times`;
}

componentWillUnmount(){
    clearInterval(this.interval)
}
```

It is a close replacement for 'componentDidMount', 'componentDidUpdate' and 'componentWillUnmount'.

###  useEffect after render

1. create new functional component call 'CounterHook.js' and impliment counter increment when click the button on the button and browser title.   

* becuae of 'setCount' async we can't put update title inside 'handleIncrement' function.

* in following code for every update of the component execute the 'useEffect' function.   

```js
import React, { useState, useEffect } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `Click ${count} times`;
  });

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    // becuae of 'setCount' async we can't put update title here.
  };
  return (
    <div>
      <button onClick={handleIncrement}>Click {count} times</button>
    </div>
  );
};

export default HookCounter;
```

###  Conditionally run effects  

2. Add input element and state for 'name' and  console.log to 'useEffect' function. show every input of key press 'useEffect' function is executing which is not good.  

```js
const HookCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Click ${count} times`;
    console.log('update title count'); // console.log ****
  });

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={handleIncrement}>Click {count} times</button>
    </div>
  );
};
```

3. To update 'title' only 'count' change, add second parameter to the 'useEffect' of any depending state or props as array     
HookCounter.js   
```js
  useEffect(() => {
    document.title = `Click ${count} times`;
    console.log('update title count'); // console.log ****
  },[count]);
``` 

4. show how to make execute 'useEffect' function only once.   
* create functional component call 'HookMouse.js' and listen browser window mouse event X,Y coordinate and show them on browser.    

* add empty array as second parameter to useEffect hook for execute only onese in the component.    

```jsx
import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  const logMousePosition = (event) => {
    console.log("Mouse event");
    setX(event.clientX);
    setY(event.clientY);
  };

  return (
    <div>
      <h2>{`Mouse X: ${x}, Y: ${y}`}</h2>
    </div>
  );
};

export default HookMouse;
```

### useEffect with cleanup   

5. create new functional component call 'MouseContainer.js' and make above 'HookMouse.js' component child of it and add toggle button for 'MouseContainer.js' component for dispaly and hide 'HookMouse.js' component. 

show even 'HookMouse.js' component removed but console.log in 'HookMouse.js' component stil priting when mouse is moving on the browser canvas.   


MouseContainer.js
```jsx
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
```

6. show how to clean event listener in 'HookMouse.js' component when it removed from 'MouseContainer.js' component.   

* you can return anonymise function inside which list of what you want to clear

HookMouse.js
```jsx
  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
    return ()=>{ // add here
        window.removeEventListener("mousemove", logMousePosition);
    }
  }, []);
```

### useEffect with incorrect dependency   

7. create functinal component call 'IntervalHookCounter' and by implementing interval count incrementing show when we are using 'setCount((prevCount) => prevCount + 1)' form of useState can't use 'count' in dependency array in 'useEffect' but when we are using 'setCount(count + 1);' form of 'useState' then you should use 'count' in dependency array. 

```js
import React, { useEffect, useState } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  const tick = ()=>{
    console.log("interval", count);
    setCount((prevCount) => prevCount + 1);
    // setCount(count + 1);
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000); // add interval here

    return () => { //clear timer
      clearInterval(interval);
    };
  },[]); // },[count]);

  return (
  <div>
    <div>Count: {count} </div>
  </div>
  );
};

export default IntervalHookCounter;
```