import React, { Dispatch, useReducer } from 'react'
import { ComponentA } from './ComponentA';

type StateType = {
  count: number
}

type ActionType = {
  type: string
}

interface CounterContexType {
  countState: StateType;
  countDispatch: Dispatch<ActionType>
}
const initialState:{count:number} = {count:0};

const reducer = (state:StateType, action:ActionType) =>{
  switch(action.type){
    case 'increment':
      return {...state, count:state.count+1};
    case 'decrement':
      return {...state, count:state.count-1};
    case 'reset':
      return {...state, count:initialState.count};
    default:
      return state;
  }
}

export const CounterContext = React.createContext<CounterContexType|null>(null);

export const Counter:React.FC<{}> = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{count.count}</h2>
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
      <CounterContext.Provider value={{countState:count, countDispatch:dispatch}}>
        <ComponentA/>
      </CounterContext.Provider>
    </div>
  )
}
