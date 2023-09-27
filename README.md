# Ref   

access DOM node direcly in react.   

1. create new class component call 'RefsDemo' in component folder and add input field to it and show focused input field when it loaded.    

* create ref using 'React.createRef()'
* attach ref to input element in the render method. 
* add 'componentDidMount' lifecycle hook and console.log() 'ref' and see browser console and show it's 'current' property have actual dom property and find focus property.   

RefsDemo.js
```js  
import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
      super(props)

      this.inputRef = React.createRef();
    }
    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }
  render() {
    return (
      <div>
        <input type='test' ref={this.inputRef} />
      </div>
    )
  }
}

export default RefsDemo;
```

2. show how to fetch input values using ref. 

RefsDemo.js
```js  
    clickHandler (){
        alert(this.inputRef.current.value);
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    )
  }
```

3. show how to handle old method like callback ref implement in same above example.

* define cbRef and setCbref inside constructor function. 
* firt need to check is 'this.cbRef' is null or not before make focus the element.
* here we no need to access focus function via 'current' keyword.

```js
class RefsDemo extends Component {
    constructor(props) {
      super(props)

      this.cbRef = null; // add
      this.setCbRef = element => { // add
        this.cbRef = element;
      }
    }
    componentDidMount(){  
        if(this.cbRef){ // add
            this.cbRef.focus();
        }
    }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <input type='text' ref={this.setCbRef} /> // add
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    )
  }
}

export default RefsDemo;
```

### Ref to another class component 

4. create new class component call 'Input.js' that child to 'FocusInput.js' component. Show how to focus  'Input.js' component input element from 'FocusInput.js' component using component ref.   

* child should be attach to functional component. only class component.

Input.js (child)
```js 
import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  focusInput() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default Input;
```

FocusInput.js (parent)
```js 
import React, { Component } from "react";
import Input from "./Input";

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }
  clickHandler = () => {
    this.componentRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
```

### Forwarding Refs

This is a tecnique for automatically passing a ref throught a component one of it's children.

5. show how to implement forwording ref in functional component.   

* create new functional component call 'FRInput.js' and add input element.
* create new class component call 'FRParentInput.js' add 'FRInput' component as child and button .
* in 'FRInput' child component wrap normal component with 'React.forwordRef' function and show it comes with second argument with 'ref' that can add to input element in 'FRinput' component.

normally props pass in to 

FRParentInput.js (parent)
```js  
import React, { Component } from 'react';
import FRInput from './FRInput';

class FRParentInput extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    handleClick = ()=>{
        this.inputRef.current.focus();
    }
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef}/>
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    )
  }
}

export default FRParentInput;
```

FRInput.js (child)
```js
import React from 'react';

// const FRInput = () => {
//   return (
//     <div>
//         <input type='text'/>
//     </div>
//   )
// }


const FRInput = React.forwardRef((props, ref) => {

    return (
      <div>
          <input type='text' ref={ref}/>
      </div>
    )
  })

export default FRInput;
```