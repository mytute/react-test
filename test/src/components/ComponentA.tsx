import React from 'react'
import { CounterContext } from './Counter'

export const ComponentA:React.FC = () => {
  const countContext = React.useContext(CounterContext);
  return (
    <div>
      <h1>{countContext?.countState.count}</h1>
      <button onClick={()=>countContext?.countDispatch({type:"increment"})}>Increment</button>   
    </div>
  )
}
