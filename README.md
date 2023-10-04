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














