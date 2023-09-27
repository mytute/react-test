# Higher Order Components  

Share common functionality between components. 

```js
const NewComponent = higherOrderComponent(originalComponent);
```

A pattern where a function takes a componnet as an argument and retuns a new component.   

1. create class component call 'ClickCounter.js' in component folder and add button with click counter on button.   

ClickCounter.js
```js
import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
          Click {this.state.count} time
        </button>
      </div>
    );
  }
}

export default ClickCounter;
```

2. create another class component call 'HoverCounter.js' component and implement counter on 'h2' tag when hoverover the mouse. you can copy-past increment functionality from 'ClickCounter.js' component.    

HoverCounter.js
```js
import React, { Component } from "react";

class HoverCounter extends Component {
  // ******** copied from CounterClick.js ******** //
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };
  // ***** end of copied from CounterClick.js ***** //
  render() {
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>
          Hovered {this.state.count} times
        </h2>
      </div>
    );
  }
}

export default HoverCounter;
```

3. create 'withCounter.js' component in component folder and pass name props to original component.

UpdatedComponent.js 
```js 
import React from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComponent name="Samadhi" />;
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
```

4. wrap the 'HoverCounter.js' and 'ClickCounter.js' with 'UpdatedComponent' and add 'name' props to someware display and show we can pass props to original component from higherOder component.

ClickCounter.js    
```js 
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
  // ....
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
        {this.props.name} Click {this.state.count} time
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
```

HoverCounter.js    
```js 
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
  // ....
  render() {
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>
          {this.props.name} Hovered {this.state.count} times
        </h2>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
```    

5. show how to modify HOC component to add counter functionality.    

* copy the code which have to be share and past in the HOC pass 'count' and 'increment' functions as props.  

UpdatedComponent.js (HOC)
```js
import React from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => ({
        ...prevState,
        count: prevState.count + 1,
      }));
    };

    render() {
      return (
        <OriginalComponent
          name="Samadhi"
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
```

HoverCounter.js   
```js
import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.incrementCount}>
          {this.props.name} Hovered {this.props.count} times
        </h2>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
```

ClickCounter.js   
```js
import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>
        {this.props.name} Click {this.props.count} time
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
```

6. show naming convention of HOC. 

```js
import React from "react";
// UpdatedComponent > withCounter (file name)
// OriginalComponent > WrapedComponent
// NewComponent > WithCounter
const withCounter = (WrapedComponent) => {
  class WithCounter extends React.Component {
    render() {
      return (
        <WrapedComponent/>
      );
    }
  }
  return WithCounter;
};

export default withCounter;
```

7. show when you pass props original component to HOC component it will not work direcly.  

* pass props call 'age' to 'ClickCounter.js' and 'HoverCounter.js' component from 'App.js' component.   
App.js  
```js
function App() {
  return (
    <div>
      <HoverCounter age={25}/>
      <ClickCounter age={26}/>
    </div>
  );
}
```  
* display 'age' props in 'HoverCounter.js' compnent and show it is not working because we are passing props direcly to HOC in order to display on 'HoverCounter.js' component we need to pass props from HOC to 'HoverCounter.js' component.      

HoverCounter.js(not showing age)   
```js
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.incrementCount}>
          {this.props.age} Hovered {this.props.count} times
        </h2>
      </div>
    );
  }
```  

* to show the age pass props from HOC to Wraped component.      

```js
    render() {
      return (
        <OriginalComponent
          name="Samadhi"
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props} // add here
        />
      );
    }
```

8. show how to pass parameter to HOC component while wrapping the function it self.  
* let's see we need to increment counter for 'HoverCounter.js' by 5 and for 'ClickCounter.js' by 10.

withCounter.js (HOC)
```js
import React from "react";

const UpdatedComponent = (OriginalComponent, incrementNumber) => { // add here
  class NewComponent extends React.Component {
    // ....
    incrementCount = () => {
      this.setState((prevState) => ({
        ...prevState,
        count: prevState.count + incrementNumber, // add here
      }));
    };

  }
  return NewComponent;
};
```


HoverCounter.js   
```js
export default UpdatedComponent(HoverCounter, 5);
```

ClickCounter.js   
```js
export default UpdatedComponent(ClickCounter, 10);
```