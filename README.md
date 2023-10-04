#  useRef   

1. in 'FocusInput.js' component add auto focus input element when component code.   

FocusInput.js
```jsx
import React, { useEffect, useRef } from 'react';

const FocusInput = () => {

  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  },[]);

  return (
    <div>
       <input type="text" ref={inputRef} />
    </div>
  )
}

export default FocusInput;
```

2. create class component(ClassTimer.js) that count auto increment by timer and stop timer count (clearTimer) by calling function that click by button. 

ClassTimer.jsx  
```jsx
import React, { Component } from "react";

export class ClassTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>ClassTimer {this.state.count}</h2>
        <button onClick={() => { clearInterval(this.interval);}}>Stop Timer</button>
      </div>
    );
  }
}

export default ClassTimer;
```

3. create new functional component call 'HookTimer.js' and implement above functionality in functional component and show normally we can't stop timer by clicking button.   

HookTimer.js
```jsx
import React, { useEffect } from "react";

const HookTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    });

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => {}}>Clear Interval</button>
    </div>
  );
};

export default HookTimer;
```

4. using useRef store timer in as a variable event value of the varialbe not change when component is updating.   

HookTimer.js
```js
import React, { useEffect, useState, useRef } from "react";

const HookTimer = () => {
  const [count, setCount] = useState(0);
  let intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef);
    };
  }, []);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => {clearInterval(intervalRef.current)}}>Clear Interval</button>
    </div>
  );
};

export default HookTimer;
```





