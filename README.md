#  useContext   

Context provides a way to pass data through the component tree without having to pass props down manually at every level.   

1. create following list of component with parent-child relationshiop(done).   
App.js > ComponentC.js > ComponentE.js > ComponentF.js     

2. show how to create two context api call 'user' and 'channel' without using useContext.   

App.js   
```jsx
import "./App.css";
import React from "react";
import ComponentC from "./components/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div>
      <UserContext.Provider value="Samadhi">
        <ChannelContext.Provider value="Laksahan">
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
```
ComponentC.js
```jsx
import React from "react";
import ComponentE from "./ComponentE";

const ComponentC = () => {
  return (
    <div>
      <ComponentE />
    </div>
  );
};

export default ComponentC;
```
ComponentE.js
```jsx
import React from "react";
import ComponentF from "./ComponentF";

const ComponentE = () => {
  return (
    <div>
      <ComponentF />
    </div>
  );
};

export default ComponentE;

```
ComponentF.js
```jsx
import React from "react";
import { UserContext, ChannelContext } from "../App";

const ComponentF = () => {
  return (
    <UserContext.Consumer>
        {
            (user)=>{
                return (
                    <ChannelContext.Consumer>
                        {(channel)=>{
                            return <div> user : {user} | channel : {channel}</div>
                        }}
                    </ChannelContext.Consumer>
                )
            }
        }
    </UserContext.Consumer>
  );
};

export default ComponentF;
```

3. show how to simplefy context consumer using 'useContext' hook.    

```jsx
import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "../App";

const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <div>
        ComponentE user: {user} | channel: {channel}
      </div>
      <ComponentF />
    </div>
  );
};

export default ComponentE;
```




