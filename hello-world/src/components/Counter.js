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