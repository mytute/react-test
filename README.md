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