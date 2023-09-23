# Conditional Rendering

you need to show or hide elements on conditions

* if/else.
* Element variable.
* Ternary conditional operator.  
* Short circuit operator.

1. create new class component call 'UserGreeting' in component folder and make it show "Welcome Samadhi" and "Welcome Gust" message.  
UserGreeting.js   
```js
import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {
    return (
      <div>
        <div>Welcome Samadhi</div>
        <div>Welcome Gust</div>
      </div>
    )
  }
}
export default UserGreeting;
```

2. show how to show "Welcome Samadhi" message when user logged in and if not show "Welcome Gust" using if/else conditions.   if/else not working inside jsx and we can't put if/else inside return elements.  
UserGreeting.js   
```js
  render() {
    if(this.state.isLoggedIn){
        return <div>Welcome Samadhi</div>
    }else{
        return <div>Welcome Gust</div>
    }
  }
```

3. show how to show "Welcome Samadhi" message when user logged in and if not show "Welcome Gust" using element variables. 
UserGreeting.js   
```js
  render() {
    let message;
    if(this.state.isLoggedIn){
      message = <div>Welcome Samadhi</div>;
    }else{
        message = <div>Welcome Gust</div>;
    }
    return <div>{message}</div>
  }
```

4. show how to show "Welcome Samadhi" message when user logged in and if not show "Welcome Gust" using ternary conditional operator. 
UserGreeting.js   
```js
  render() {
    return this.state.isLoggedIn ?  <div>Welcome Samadhi</div> : <div>Welcome Gust</div>
  }
```

5. show how to show "Welcome Samadhi" message when user logged in using short circuit operator. 
UserGreeting.js   
```js
  render() {
    return this.state.isLoggedIn && <div>Welcome Samadhi</div>
  }
```
