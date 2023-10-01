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

8. show that you can use multiple 'useEffect' hooks in same component.  

### Fetching data with useEffect

9. first install 'axios' for data fetching.  

```bash
$ npm install axios
```

10. create functional component call 'DataFetching.js' in component folder and show how to call api 'GET' call using 'axios' and show if use 'useEffect(()=>{})' without second parameter is getting infinity api call and with 'useEffect(()=>{},[])' empty array second parameter only call api onese.    

```jsx
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DataFetching = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log('res: ',res)
            setPosts(res.data);
        })
        .catch(error=>{
            console.log('error:', error)
        })
        console.log("useEffect calls")
    },[]);
  return (
    <div>
        <ul>
            {posts.map(post=><li key={post.id}>{post.body}</li>)}
        </ul>
    </div>
  )
}

export default DataFetching;
```

###  Fetching data with useEffect  

11. in the same 'DataFetching' chage the code and show how to fetch single post.   

* add new state for store 'id'. (post id)    
* change 'posts' state to 'post' state.     
* add input field to update and call the api and update the post.   
* remove 'posts.map' in jsx to show single post.    

```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log("res: ", res);
        setPost(res.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
    console.log("useEffect calls");
  }, [id]);
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event) => {
          setId(event.target.value);
        }}
      />
      <p key={post.id}>{post.body}</p>
    </div>
  );
};

export default DataFetching;
```

12. show how to improve above code with go api call for no 'id' value.   

* here you can add button to call api.    
```jsx
const DataFetching = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [buttonClick, setButtonClick] = useState(1); // add here

  useEffect(() => {
    // .....
  }, [buttonClick]);
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event) => {
          setId(event.target.value);
        }}
      />
      <button onClick={()=>{setButtonClick(id)}} >Fech data</button>
      <p key={post.id}>{post.body}</p>
    </div>
  );
};
```  