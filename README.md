#  useReducer   

* useReducer is a hook that is used for state management.    
* It is an alternative to useState. 
* useState is built using useReducer.   

* javascript reducer vs react useReducer    
```js
$ array.reduce(reducer, initailValue) > userReducer(reducer, intialState);
$ singleValue = reducer(accumulator, itemValue) > newState = reducer(currentState, action);   
$ reduce method returns a single value > useReducer returns a pair of values [newState, dispatch]  
```

1. create new functional component call 'Counter.js' in component folder and show how to implement count increment, decrement and reset functions with 'useReducer' hook.   

* here usually 'initialState' and 'reducer' put outside of the component.    

```js 
import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) =>{
    switch(action){
      case 'increment':
        return state +1;
      case 'decrement':
        return state -1;
      case 'reset':
        return initialState;
      default:
        return state;
    }
}

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={()=>{dispatch('increment')}}>Increment</button>
        <button onClick={()=>{dispatch('decrement')}}>Decrement</button>
        <button onClick={()=>{dispatch('reset')}}>Reset</button>
    </div>
  )
}

export default Counter;
```

2. In above example add another counter with same 'useReducer' hook and make differant steps to increment.      

* we have to convert 'reducer' 'action' type, string to object for send dispatch name and other data.    
ex: action = {type:'increment', value: 5}  
* we have to change initialState number to object   
ex: const initialState = {count1: 0, count2: 0};

```jsx  
import React, { useReducer } from 'react'

const initialState = {count1: 0, count2: 0};
const reducer = (state, action) =>{
    switch(action.type){
      case 'increment1':
        return {...state, count1: state.count1 +1};
      case 'decrement1':
        return {...state, count1: state.count1 -1};
      case 'reset1':
        return {...state, count1: initialState.count1};
      case 'increment2':
        return {...state, count2: state.count2 +1};
      case 'decrement2':
        return {...state, count2: state.count2 -1};
      case 'reset2':
        return {...state, count2: initialState.count2};
      default:
        return state;
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>Count1 : {count.count1}</h2>
            <button onClick={() => dispatch({type: 'increment1'})}>Increment 1</button>
            <button onClick={() => dispatch({type: 'decrement1'})}>Decrement 1</button>
            <button onClick={() => dispatch({type: 'reset1'})}>Reset 1</button>
            <hr/>
            <h2>Count2 : {count.count2}</h2>
            <button onClick={() => dispatch({type: 'increment2'})}>Increment 2</button>
            <button onClick={() => dispatch({type: 'decrement2'})}>Decrement 2</button>
            <button onClick={() => dispatch({type: 'reset2'})}>Reset 2</button>
        </div>
    );
}

export default Counter;
```

### Multiple useReducers   

3. because of we are use one useReducer we have to dublicate same functionality in useReducer hook in above code.Show how to remove code dublication by using tow useReducer hook.    

when we are dealing with multiple state variable that have the same state transition it is good idea have to multiple views reducers making use of same reducer functions.

```jsx
import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) =>{
    switch(action.type){
      case 'increment':
        return state+1;
      case 'decrement':
        return state-1;
      case 'reset':
        return initialState;
      default:
        return state;
    }
}

const Counter = () => {
    const [count1, dispatch1] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>Count1 : {count1}</h2>
            <button onClick={() => dispatch1({type: 'increment'})}>Increment 1</button>
            <button onClick={() => dispatch1({type: 'decrement'})}>Decrement 1</button>
            <button onClick={() => dispatch1({type: 'reset'})}>Reset 1</button>
            <hr/>
            <h2>Count2 : {count2}</h2>
            <button onClick={() => dispatch2({type: 'increment'})}>Increment 2</button>
            <button onClick={() => dispatch2({type: 'decrement'})}>Decrement 2</button>
            <button onClick={() => dispatch2({type: 'reset'})}>Reset 2</button>
        </div>
    );
}

export default Counter;
```    

### useReducer with useContext

userReducer for Local State management.    
Share state between components- Global state management useReducer + useContext.  

4. show how to use useReducer with useContext for global.
* create following folder structure.  
    App
      > ComponentA
      > ComponentB
      > ComponentC > > ComponentE > ComponentF
  
* implement context and counter functionality in 'App.js' component and call counter functionality from 'ComponentF'.  

App.js
```jsx
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import Counter from "./components/Counter";
import React, { useReducer } from "react";


const initailValue = 0;
const reducer = (state, action)=>{
    switch(action){
      case 'increment':
        return state+1;
      case 'decrement':
        return state-1;
      case 'reset':
        return initailValue;
      default:
        return state;
    }
}
export const CountContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initailValue)
  return (
    <div>
      {/* <ComponentC />
      <Counter/> */}
      {count}
      <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
      <CountContext.Provider value={{countState:count, countDispatch: dispatch}}>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </CountContext.Provider>
    </div>
  );
}

export default App;
```

ComponentF.js   
```js  
import React from "react";
import { CountContext } from "../App";

const ComponentF = () => {
  const countContext = React.useContext(CountContext);
  return (
    <div style={{border:'1px solid red'}}>
      <div>ComponentF</div>
      <div>
        <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
      </div>
    </div>
  );
};

export default ComponentF;
``` 

5. show how to change following 'useState' api handling in to 'useReducer' .    

DateFetching.js with useState
```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const DateFetching = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setPost({});
        setError(error.message);
      });
  }, []);
  return (
    <div>
      {loading ? <p>Loading...</p> : <p></p>}
      {error ? <p>Someting went wrong</p> : <p>{post.title}</p>}
    </div>
  );
};

export default DateFetching;
```    

DateFetching.js with useReducer
```jsx
import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

const initailState = {
  post: {},
  loading: false,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        post: action.payload,
        loading: false,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        post: {},
        loading: false,
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};

const DateFetching = () => {
  const [state, dispatch] = useReducer(reducer, initailState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: "FETCH_ERROR", payload: {} });
      });
  }, []);

  return (
    <div>
      {state.loading ? <p>Loading...</p> : <p></p>}
      {state.error ? <p>Someting went wrong</p> : <p>{state.post.title}</p>}
    </div>
  );
};

export default DateFetching;
```

### useState vs useReducer   

> according to type of data.   
useState : Number, string, Boolean   
useReducer : Object or Array  

> according to number of state transitions.       
useState : one or two  
useReducer : Too many  

> Rekated state transitions. 
useState : No  
useReducer : true  

> according to business logic.       
useState : no business logic  
useReducer : complex business logic 

> Local vs global   
useState : Local. 
useReducer : Global. 






