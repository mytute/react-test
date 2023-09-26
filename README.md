# Fragments  

group a list of children without adding extra nodes to the Dom

1. create functional component call 'FragmentDemo' in component folder and add multiple html tag in to return brackets and show following error on browser window.

```bash
Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment..
```

FragmentDemo.js
```js
import React from 'react';

const FragmentDemo = () => {
  return (
    <h1>Fragment Demo</h1>
    <p>This description the Fragment Demo component</p>
  )
}

export default FragmentDemo;
```

2. to resolve above issue enclose returing html elements with div tag and in browser inspect show it added on DOM.

FragmentDemo.js
```js

  return (
    <div>
        <h1>Fragment Demo</h1>
        <p>This description the Fragment Demo component</p>
    </div>
  )
```

3. add 'React.Fragment' instead of div tag and show .

FragmentDemo.js
```js

  return (
    <React.Fragment>
        <h1>Fragment Demo</h1>
        <p>This description the Fragment Demo component</p>
    </React.Fragment>
  )
```

4. show how 'React.Fragment' are helps to fix divide related html elements to different component.     
* create new component call 'Table.js' and 'Column.js' in component folder. 
* in 'Table.js' component create html table and only 'td' tag add to 'Column.js' as child and show this will getting error.  

Table.js
```js 
import React from "react";
import Column from "./Column";

const Table = () => {
  return (
    <table>
      <tbody>
        <tr>
          <Column/>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
```

Column.js
```js 
import React from 'react';

const Column = () => {
  return (
    <div>
      <td>Name</td>
      <td>Vishwas</td>
    </div>
  )
}

export default Column;
```

5. show how to fix above issue by replacing 'React.Fragment' instead of outer 'div' tag of the 'Colum' component.  

Column.js
```js 
  return (
    <React.Fragment>
      <td>Name</td>
      <td>Vishwas</td>
    </React.Fragment>
  )
```

6. show how to add key attribute in 'React.Fragment' tags when rendering a List.
Column.js
```js 
import React from "react";

const Column = () => {
  const items = ["s", "a", "m", "d"];
  return (
    <React.Fragment>
      {items.map((item, index) => (
        <React.Fragment key={index}> <td>{item}</td></React.Fragment>
      ))}
      <td>Samadhi</td>
      <td>Laksahan</td>
    </React.Fragment>
  );
};

export default Column;
```

7. show instead of 'React.Fragment' we can use it's shorthand form of empty tag '<></>' and it's have one limitation that can't add 'key' prop. 
Column.js
```js 
const Column = () => {
  const items = ["s", "a", "m", "d"];
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}> <td>{item}</td></React.Fragment>
      ))}
      <td>Samadhi</td>
      <td>Laksahan</td>
    </>
  );
};
```