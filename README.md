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
        return state +1 ;
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

* we have to convert 'reducer' 'action' type string to object for send dispatch name and other data.    
ex: action = {type:'increment', value: 5}

