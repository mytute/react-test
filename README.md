#  Context  

Context provides a way to pass data through the component tree without having to pass props down manually at every level.  

!!! important 
only decending component can consume the context values.  

steps   
1. create the context.    
2. Provide a context vlue.   
3. Consume the context value.   


1. create class component that nested by following order.   
App > ComponentC > ComponentE > ComponentF   

2. create new file call 'userContext.js' and show how to create UserContext.    

userContext.js     
```js
import React from "react";

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
```

3. add user provider on the 'App.js' file by wraping the 'ComponentC' because only decending component can consume the context values. And pass the value on 'UserProvider' tag.  

App.js    
```js 
import "./App.css";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

function App() {
  return (
    <div>
      <UserProvider  value="Samadhi"> // add value here
        <ComponentC  />
      </UserProvider>
    </div>
  );
}

export default App;
```

4. show how to consume 'App.js' passing value from 'ComponentF.js'   

```js 
import React, { Component } from 'react';
import { UserConsumer } from './userContext';

export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {
          (username)=>{
            return  <div>Hello {username}</div>
          }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF;
```

5. show how to set default value to your user context value while creating the context. And remove 'UserProvider' wrapper in 'App.js' to see the reuslt.    

userContext.js
```js
import React from "react";

const UserContext = React.createContext('Laksahan'); // add detault value here

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
```

App.js   
```js
import "./App.css";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

function App() {
  return (
    <div> // remove here
        <ComponentC  />
    </div>
  );
}

export default App;
```

7. show how to consume context value using 'contextType'.    

for that we need to export 'UserContext' from 'userContext'   
userContext.js
```js
import React from "react";

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext; // add here
```

* for this we consule context value from 'ComponentE.js'

ComponentE.js
```js
import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

class ComponentE extends Component {
   // static contextType = UserContext;
  render() {
    return (
      <div>
        <div>Component E context {this.context}</div>
        <ComponentF/>
      </div>
    )
  }
}

ComponentE.contextType = UserContext; // add here

export default ComponentE;
```