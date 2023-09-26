# Lifecycle Methods

1. Mounting: when an instance of a component is being created and inserted into the DOM. 
2. Updation: When a component is being re-rendered as a result of changes to either its props or state. 
3. Unmounting: when a component is being removed from the DOM.  
4. Error Handling: When there is an error during rendering, in lifecycle method, or in the constructor of any child component.  

* Mounting  
 1. constructor
 2. static getDerivedStateFromProps
 3. render
 4. componentDidMount 

* Updation
 1. static getDerivedStateFromProps
 2. shouldComponentUpdate
 3. render
 4. getSnapshotBeforeUpdate
 5. componentDidUpdate


* Unmounting
 1. componentWillUnmount   

* Error Handling  
 1. static getDerivedStateFromError   
 2. componentDidCatch     

### Mounting Lifecycle Methods.  

> constructor(props)  
 1. A specail function that will get called whenever a new component is created.  
 2. Initializing state, Binding the events handlers. 
 3. Do not cause side effects. Ex: HTTP requests.  
 4. super(props) Directly overwrite this.state.   

> static getDerivedStateFromProps(props, state)  
 1. When the state of the component depends on changes in props over time.  
 2. Set the state. 
 3. Do not cause side effects. Ex: HTTP requests.

 > render()  
 1. Only required method in class components.  
 2. Read props & state and return JSX. 
 3. Do not change state or interact with DOM or make ajax calls.
 4. Children components lifecycle methods are also executed.

  > componentDidMount()  
 1. Invoked immediately after a component and all its children components have been rendered to the DOM.  
 2. Cause side effects. Ex: Interact with the DOM or perform any ajax calls to load data.


 1. create class component call 'LifecycleA' and put the following console.log for see the order of executing. 
LifecycleA.js
 ```js 
 import React, { Component } from "react";

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Samadhi'
    };
    console.log('LifecycleA constructor ')
  }
  static getDerivedStateFromProps(props, state){
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
  }
  componentDidMount = () =>{
    console.log('LifecycleA componentDidMount');
  }
  render() {
    console.log('LifecycleA render');
    return <div>LifecycleA</div>;
  }
}

export default LifecycleA;
```

2. create child class component call 'LifecycleB' to 'LifecycleA' component and do same thing what we did in 'LifecycleA' (console.logs) 

LifecycleA.js
 ```js 
  render() {
    console.log('LifecycleA render');
    return <div> <LifecycleB/> </div>; // add here
  }

```


LifecycleB.js
 ```js 
import React, { Component } from "react";

export class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Samadhi'
    };
    console.log('LifecycleB constructor ')
  }
  static getDerivedStateFromProps(props, state){
    console.log('LifecycleB getDerivedStateFromProps');
    return null;
  }
  componentDidMount = () =>{
    console.log('LifecycleB componentDidMount');
  }
  render() {
    console.log('LifecycleB render');
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
```

the order shoud be 
LifecycleA constructor
LifecycleA getDerivedStateFromProps
LifecycleA render
LifecycleB constructor
LifecycleB getDerivedStateFromProps
LifecycleB render
LifecycleB componentDidMount
LifecycleA render



### Updating Lifecycle Methods.  


 > static getDerivedStateFromProps
  1. Method is called every time a component is re-rendered.  
  2. Set the state. 
  3. Do not cause side effects. Ex: HTTP requests.

 > shouldComponentUpdate 
  1. Dictates if the component should re-render or not.
  2. basically for performance optimization. 
  3. Do not cause side effects. Ex: HTTP requests.

 > render
  1. only required method.
  2. Read props & state and return JSX.  
  3. Do not change state or interact with DOM or make ajax calls.  

 > getSnapshotBeforeUpdate  
  1. Called right before the changes from the vitual DOM are to be refleted in the DOM.
  2. Capture some information from the DOM Ex: scroll position.  
  3. Method will either return null or return value. Returned value will be passed as the third parameter to the next method. 

 > componentDidUpdate
  1. Called after the render is finished in the re-render cycles.
  2. Cause side effects Ex: ajax calls make after check is state change or not. 




  3. add following three new methods to our previous example 'LifecycleA' component and 'LifecycleB' component. And for update component we add button click to parent component.      
  * shouldComponentUpdate. 
  * getSnapshotBeforeUpdate.
  * componentDidUpdate.



  LifecycleA.js
 ```js 
import React, { Component } from "react";
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Samadhi'
    };
    console.log('LifecycleA constructor ')
  }
  static getDerivedStateFromProps(props, state){
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
  }
  componentDidMount = () =>{
    console.log('LifecycleA componentDidMount');
  }
  shouldComponentUpdate(){
    console.log('LifecycleA shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate(){
    console.log('LifecycleA componentDidUpdate');
  }
  changeState = () =>{
    this.setState({name:'Laksahan'})
  }
  render() {
    console.log('LifecycleA render');
    return (
        <div>
            <div>LifecycleA</div>
            <button onClick={changeState}>Change State</button>
            <div> <LifecycleB/> </div>
        </div>
    );
  }
}

export default LifecycleA;
```

LifecycleB.js
 ```js 
import React, { Component } from "react";

export class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Samadhi'
    };
    console.log('LifecycleB constructor ')
  }
  static getDerivedStateFromProps(props, state){
    console.log('LifecycleB getDerivedStateFromProps');
    return null;
  }
  componentDidMount = () =>{
    console.log('LifecycleB componentDidMount');
  }
  shouldComponentUpdate(){
    console.log('LifecycleB shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifecycleB getSnapshotBeforeUpdate');
  }
  componentDidUpdate(){
    console.log('LifecycleB componentDidUpdate');
  }
  render() {
    console.log('LifecycleB render');
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
```    

the order shoud be 
LifecycleA getDerivedStateFromProps
LifecycleA shouldComponentUpdate
LifecycleA render
LifecycleB getDerivedStateFromProps
LifecycleB shouldComponentUpdate
LifecycleB render
LifecycleB getSnapshotBeforeUpdate
LifecycleA getSnapshotBeforeUpdate
LifecycleB componentDidUpdate
LifecycleA componentDidUpdate



### Unmounting Phase Methods.  


 > componentWillUnmount()
  1. Method is invoked immediately before a component is unmounted and destroyed.  
  2. Cancelling any network requests, removing event handlers, cancelling any subcriptions and also invelidating timers. 
  3. Do not call the setState method. because not render happening after call this function.

### Error Handling Phase Methods.(later will full tutorial)  
 when there is an error either during rendering, in a lifecycle method on in the constructor of any child component.

 > static getDerivedStateFromError(error)
 > componentDidCatch(error, info)
