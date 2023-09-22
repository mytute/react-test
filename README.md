# Event Handling

In React event are name using camele case rather then lowercase.   

1. create new functional component call 'FunctionClick' and add button to fire console.log message when click it. 
 FunctionClick.js   
```js 
import React from 'react';

const FunctionClick = () => {
    
  const clickHandler = () =>{
    console.log('button click');
  }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick;
```

2. show there is no result if you call 'clickHandler()' function inside onClick. 

3. create new class component call 'ClassClick' and add button to fire console.log message when click it. 
 ClassClick.js   
```js 
import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log('button click');
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
```

4. create new class component call 'EvenBind' and add button to change message in following way and see the error. And notice 'this' keyword in 'clickHandler' function is undefined.   
EventBind.js   
```js 
import React, { Component } from "react";

class EvenBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler() {
    console.log(this);
    this.setState({ message: "Goodbye!" });
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default EvenBind;
```

5. show how to bind 'this' keyword with 'clickHandler' function inside 'render' method by .bind() method.  
because of every render it will create new event handler that not good for perfomance.    
EventBind.js   
```js 
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click Me</button>
      </div>
    );
  }
```

6. show how to bind 'this' keyword with 'clickHandler' function inside 'render' method by arrow function.  
this method also not good for perfomance.    
EventBind.js   
```js 
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={()=>{this.clickHandler()}}>Click Me</button>
      </div>
    );
  }
```

7. show how to bind 'this' keyword with 'clickHandler' function inside 'constructor' method by .bind() method.  
this is the recommended way in react doc. 
EventBind.js   
```js 
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
```

8. show how to bind 'this' keyword with 'clickHandler' function by convert it to arrow function.  
this is the recommended way in react doc. 
EventBind.js   
```js 
  clickHandler = () => {
    this.setState({ message: "Goodbye!" });
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
```

