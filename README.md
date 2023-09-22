# Methods as props

child component communicate parent component as event.  

1. create functional component call 'ChildComponent' in component folder and set the button to execute props function when click the button.    
ChildComponent.js   
```js 
import React from 'react';

const ChildComponent = ({greetHandler}) => {
  return (
    <div>
        <button onClick={greetHandler}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent;
```

1. create class component call 'ParentComponent' in component folder make 'ChildComponent' as it's child and pass 'greetParent' function to 'ChildComponent' that define on 'ParentComponent' body.   
ParentComponent.js   
```js 
import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
      this.greetParent = this.greetParent.bind(this);
    }
    greetParent(){
        alert( `Hello ${this.state.parentName}`); // `` is template literal 
    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent;
```

3. show when click 'ChildComponent' button make execute 'ParentComponent' method.  

4. show how to pass value in above function child to parent as argument. 
convert 'ChildComponent' onClick function in to arrow function and pass parameter to it.

ChildComponent.js   
```js 
import React from 'react';

const ChildComponent = ({greetHandler}) => {
  return (
    <div>
        <button onClick={()=>{greetHandler('child')}}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent;
```

ParentComponent.js   
```js 
    greetParent(childName){
        alert( `Hello ${this.state.parentName} ${childName}`);
    }
```