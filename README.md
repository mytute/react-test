# JSX 

JSX makes simplycity on your code.  


1. create new functional component call 'Hello.js' in components folder. 'snipt:rafce'. and test it.
Hello.js
```js
import React from 'react';

const Hello = () => {
  return (
    <div>
        <h2>Hello Samadhi</h2>
    </div>
  )
}

export default Hello;
```

3. now rewrite above 'Hello' component without JSX. and show 'h1' not working here.
Hello.js
```js 
import React from 'react';

const Hello = () => {
 /**
  * @param div tag name
  * @param null attributes for tag like class, disable .. etc
  * @param ' '  childrens 
  */
   return React.createElement('div', null, 'Hello Samadhi');
}

export default Hello;
```

4. wrap 'h1' tag around chilren and show 'h1' tag print as string on browser .
Hello.js
```js 
import React from 'react';

const Hello = () => {
   return React.createElement('div', null, '<h1>Hello Samadhi</h1>');
}

export default Hello;
```

5. because of 'createElement' can get n number of children after 2nd parameter then add h1 as 3 parameter and 'Hello Samadhi' as 4 parameter. but show it also not work as expecting.   
Hello.js
```js 
import React from 'react';

const Hello = () => {
   return React.createElement('div', null, React.createElement('h1', null, 'Hello Samadhi') );
}
export default Hello;
```

6. show how to add 'id' and 'class' style for the html element when we are using 'createElement'.   
and show console error when we use 'class' keyword for styles instead of 'className'. 
Hello.js
```js 
React.createElement('div', {id:'hello', class: 'dymmyClass'} , React.createElement('h1', null, 'Hello Samadhi') );
```


### JSX differences  
Class -> className
for -> htmlFor
onclick -> onClick
tabindex -> tabIndex