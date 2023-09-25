# List Rendering

1. create new functional component call 'NameList' in component folder and create array of name in it. show how to show this list using map function.   
NameList.js
```js 
import React from 'react';

const NameList = () => {

  const names = ['Samadhi', 'Laksahan', 'Piyasiri'];
  const nameList = names.map(name=> <h2>{name}</h2>);
  return (
    <div>{nameList}</div>
  )
}

export default NameList;
```

2. curly braces is way to implement js code inside jsx. show same (1) example do inside jsx.   
NameList.js
```js 
import React from 'react';

const NameList = () => {

  const names = ['Samadhi', 'Laksahan', 'Piyasiri'];
  return (
    <>
      {names.map(name=> <h2>{name}</h2> )}
    </>
  )
}

export default NameList;
```

3. show error in console log warning about list key props. show how to fix this issue using unique key to the outer tag of item list.   
NameList.js
```js 
  return (
    <>
      {names.map(name=> <h2 key={name} > {name}</h2> )}
    </>
  )
```
4. show 'key' attribute is recerved by react. so we can use that word for our custom props.
App.js
```js 
  return (
    <div>
     <NameList key="samadhi"/>
    </div>
  );
```

NameList.js
```js 
import React from 'react';

const NameList = ({key}) => {
  return <></>
}

```

### List and Keys.    
* A "key" is a special string attribute you need to include when creating list of elements.   
* Keys give the elements a stable identity.   
* Kyes help React identify which items have changed, are added, or are removed.   
* Help in efficient update of the user interface.  

### Index as Key Anti-pattern.   

show example that issues when using map function index. 

// TODO