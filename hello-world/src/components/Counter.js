import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) =>{
    switch(action.type){
      case 'increment1':
        return state +1 ;
      case 'decrement1':
        return state -1;
      case 'reset1':
        return initialState;
      default:
        return state;
    }
}

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>Count1 : {count}</h2>
        <button onClick={()=>{dispatch('increment1')}}>Increment 1</button>
        <button onClick={()=>{dispatch('decrement1')}}>Decrement 1</button>
        <button onClick={()=>{dispatch('reset1')}}>Reset 1</button>
        <hr/>
        <h2>Count1 : {count}</h2>
        <button onClick={()=>{dispatch('increment2')}}>Increment 2</button>
        <button onClick={()=>{dispatch('decrement2')}}>Decrement 2</button>
        <button onClick={()=>{dispatch('reset2')}}>Reset 2</button>
    </div>
  )
}

export default Counter;