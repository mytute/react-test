#  useCallback    

useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.   

It is usefull when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.    

1. check the parent component and show when increment 'age' or 'salary' update all component include salary. 

2. add the 'memo' to 'Title.js' component and show it can remove from rerendering when increment 'age' or 'salary'.     

3. add the 'memo' to 'Count.js' component and show when increment 'age' then 'Count.js' for salary will not rerendering.    

4. add the memo to 'Button.js' and show it is stll rendering if there no state change. Because of we put 'ParentComponent.js' functions to 'Button.js' function(functions are recreat every update of the function).

5. using useCallback hook show how to cash 'incrementSalary' function that it not rerender when change. (!important: we have to use memo in 'Button' component in order to not to rerender other component that have callback functions as props).  

6. why we should not use useCallback in everywhare.    


* Overhead of Hook Execution: The useCallback hook itself has a runtime cost. For each render cycle, React needs to check the dependency array to determine if the function should be recreated. In components that re-render frequently, the overhead of this check can add up.

* Memory Overhead: Memoizing functions means they won't be immediately eligible for garbage collection. If you excessively use useCallback, especially in large lists or grids, you might consume more memory, which can be problematic, especially in memory-constrained environments.

* Dependency Mistakes: Incorrectly specifying dependencies, or forgetting to specify them, can lead to bugs. This might not directly degrade performance, but the time spent debugging can be substantial.


1. create component call "ParentComponent.js" inside component folder.      

```js
import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = () => {
    setAge(age + 1);
  };
  const incrementSalary = () => {
    setSalary(salary + 1000);
  };
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default ParentComponent;
```


2. create following "Title.js", "Button.js", and "Count.js" components inside "components" folder.    

> Title.js     
```js
import React from "react";

const Title = () => {
  console.log("Rendering Title");
  return <h2>useCallback Hook</h2>;
};

export default Title;
``` 

> Button.js    
```js
import React from "react";

const Button = ({ handleClick, children }) => {
  console.log("Rendering button -", children);
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
```
> Count.js  
```js
import React from "react";

const Count = ({ text, count }) => {
  console.log("Rendering Count", count);
  return (
    <div>
      {text} {count}
    </div>
  );
};

export default Count;
```

3. Now click and show that when click any button it rerender the "Title", "Button" and "Count" component using browser console.   

```bash
Rendering Title 2 Title.jsx:4
Rendering Count 26 2 Count.jsx:5
Rendering button - Increment Age 2 Button.jsx:4
Rendering Count 50000 2 Count.jsx:5
Rendering button - Increment Salary
```

4. wrap the "Title" component using "React.memo()" and check the browser console for rerendering. and show "Title" component not re rendered.  

```js 
import React from "react";

const Title = () => {
  console.log("Rendering Title");
  return <h2>useCallback Hook</h2>;
};

export default React.memo(Title);
```
 
5. Add "React.memo()" to the other component in same way and show even we change it to "memo" it make keep rerender.    
explain in the functional component funtion not identify same after component rerender and because of that here props detect as updated while rerending and make rerender.    
For memorise the fucntion with it's dependency.   

After add "React.memo()" for all the three component browser console should be like following way when click "Increment Age" button.       
```bash
Rendering Count 31 2 Count.jsx:5
Rendering button - Increment Age 2 Button.jsx:4
Rendering button - Increment Salary
```

For not to execute "Increment Salary" log we can use "useCallback" for all the function that inside the "ParentComponent" 
```js 
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  },[age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  },[salary]);
```

After click "Increment Age" button now only showing following logs in the console.   
```bash 
Rendering Count 26 2 Count.jsx:5
Rendering button - Increment Age
```

### Summary

By wrapping components with React.memo and memoizing callback functions with useCallback, we prevent unnecessary re-renders and optimize our React application:

   1. React.memo prevents re-renders if props remain unchanged.
   2. useCallback ensures that function references stay the same between renders unless dependencies change.

This pattern is useful for performance optimization, especially in larger React applications where re-renders can impact the user experience.




