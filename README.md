# Peops (properties)

### funtional component   

1. in 'App.js' component repeat 'Greet' component 3 times and see the result. 
App.js
```js
import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div >
       <Greet/>
       <Greet/>
       <Greet/>
    </div>
  );
}

export default App;
```

2. show how to change name of the greet person for from the parent.  

App.js
```js
    <Greet name='Samadhi'/>
    <Greet name='Pasindu'/>
    <Greet name='Saman'/>
```

Greet.js 
```js
import React from 'react';

const Greet = (props) => {
  return (
    <div>Hello {props.name}</div>
  )
} 

export default Greet;
```

3. show how to pass not sure property/properties as children to the last Greet(child) component.  
convert seft closing tag to open-close tag to pass chilren from parent.

App.js    
```js
    <Greet name='Samadhi'/>
    <Greet name='Pasindu'/>
    <Greet name='Saman'> 
        <label>show me</label>
        <button>click</button>
    </Greet>
```

Greet.js 
```js
import React from 'react';

const Greet = (props) => {
  return (
    <>
    <div>Hello {props.name}</div>
    {props.children}
    </>
  )
} 
export default Greet;
```


### class component