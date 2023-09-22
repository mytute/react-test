# State  

### state basic    

1. create new class component call 'Message' and print a message test "Welcome Visitor".    
Message.js    
```js 
import React, { Component } from 'react';

export class Message extends Component {
  render() {
    return (
      <div>Welcome Visitor</div>
    )
  }
}
export default Message;
``` 

2. show how to change above component message to "Thank you for subscribing" when click button in 'Message' component. for now use arrow function for click event with state change.        
Message.js    
```js 
export class Message extends Component {
  
  constructor(){
    super();
    this.state = {
        message: "Welcome Visitor"
    }
  }
  
  changeMessage(){
    this.setState({
        message: "Thank you for subscribing"
    })
  }

  render() {
    return (
      <>
        <div>{this.state.message}</div>
        <button onClick={()=>{this.changeMessage()}} >Click</button>
      </>
    )
  }
}
``` 

### setState     

3. create new class component call 'Counter' and implement counter increment when click the button. And make console.log after setState function to see updated counter value.        
* here notice DOM counter value always behind log value because of setStatus is async function.      
Counter.js    
```js
import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count:0
        }
    }

    increment(){
        this.setState({
            count: this.state.count+1
        })
        console.log(this.state.count);
    }

    render() {
        return (
        <>
          <div>{this.state.count}</div>
          <button onClick={()=>{this.increment()}}>Increment</button>
        </>
        )
    }
}

export default Counter;
```

4. show in above counter-increment example how to match DOM count and console.log count using setStatus callback.        
Counter.js   
```js  
    increment(){
        this.setState({
            count: this.state.count+1
        },()=>{
            console.log(this.state.count);
        })
    }
```


5. In above counter-increment example in increment function change state value direcly and see results  
* here this will change 'count' value in console.log but not updating the DOM. 
Counter.js    
```js
    increment(){
        this.state.count = this.state.count +1;
        console.log(this.state.count);
    }

```

6. For counter example create new function call 'incrementFile' and inside it call 'increment' function 5 times and see the result.    
* becuse react group multiple setState in to single update for better performance. 
Counter.js    
```js  
class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count:0
        }
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    increment(){
        this.setState({
            count: this.state.count+1
        },()=>{
            console.log(this.state.count);
        })

    }

    render() {
        return (
        <>
          <div>{this.state.count}</div>
          <button onClick={()=>{this.incrementFive()}}>Increment</button>
        </>
        )
    }

```

7. show how to avoid group multiple setState in to single update with setState previous state value.   
Counter.js    
```js  
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    increment(){
        this.setState((prevState)=>{
          return ({
            count: prevState.count +1
          })
        })
    }

```
8. show how to use props with setState function    
Counter.js    
```js  
    increment(){
        this.setState((prevState, props)=>{
          return ({
            count: prevState.count + props.count // just for show only
          })
        })
    }

```