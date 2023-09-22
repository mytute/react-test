# Destructuring props and state



1. show how 'Greet' functional component destructuring in the parameter.
Greet.js   
```js 
import React from 'react';

const Greet = ({firstName, lastName}) => {

  return (
    <>
    <div>Hello {firstName} {lastName}</div>

    </>
  )
} 

export default Greet;
```

2. show how 'Greet' functional component destructuring in the function body.
Greet.js   
```js 
import React from 'react';

const Greet = (props) => {
   const {firstName, lastName}= props;
 
  return (
    <>
    <div>Hello {firstName} {lastName}</div>
    </>
  )
} 

export default Greet;
```

3. show how 'Welcome' class component destructuring in the render method.
Welcome.js   
```js 
import React, { Component } from 'react';

export class Welcome extends Component {
    
  render() {
    const {firstName, lastName}= this.props; 
    //const { state1, state2 } = this.state;
    return (
      <div>Welcome {firstName} {lastName}</div>
    )
  }
}

export default Welcome;
```