#  Render Props (pattern)  

The term 'render prop' refer to a technique for sharing code between React components using a props whose value is a function.   

1. create two class components call 'HoverCounter.js' and 'ClickCounter.js' and implement increment counter when hover and click.   

HoverCounter.js    
```js
import React, { Component } from "react";

class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1 onMouseOver={this.incrementCount}>Hover {count} times</h1>
      </div>
    );
  }
}

export default HoverCounter;
```

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
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}>Click {count} times</button>
      </div>
    );
  }
}

export default ClickCounter;
```

2. as a baby step create class component call 'User' and instead of passing 'name' props from the parent(App.js) pass the function that return name value and you can add some arguments also.    

User.js    
```js
import React, { Component } from "react";

class User extends Component {
  render() {
    const isLogged = true;
    return (
      //   <div>{this.props.name}</div>
      <div>{this.props.name(isLogged)}</div>
    );
  }
}

export default User;
```

App.js   
```js
  return (
    <div>
      <ClickCounter/>
      <HoverCounter/>
      <User name={(isLogged)=> isLogged ? 'Samadhi' : 'Gust'} /> // add here
    </div>
  );

```

3. show how to use common increment functionality.  

* create new class component call 'Counter.js' 

App.js   
```js
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}
export default App;

```

Counter.js  
```js
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return <div>{this.props.render(this.state.count, this.incrementCount)}</div>;
  }
}

export default Counter;
```

ClickCounter.js    
```js
import React, { Component } from "react";

class ClickCounter extends Component {

  render() {
    const { count, incrementCount } = this.props; // state > props
    return (
      <div>
        <button onClick={incrementCount}>Click {count} times</button>
      </div>
    );
  }
}

export default ClickCounter;
```

HoverCounter.js    
```js
import React, { Component } from "react";

class HoverCounter extends Component {

  render() {
    const { count, incrementCount } = this.props; // state > props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
      </div>
    );
  }
}

export default HoverCounter;
```


4. In same example show how to pass props to 'Counter.js' as child props.   

App.js     
```js
function App() {
  return (
    <div>
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}
```

Counter.js   
```js
  // change this.props.render() to this.props.children
  render() {
    return <div>{this.props.children(this.state.count, this.incrementCount)}</div>;
  }
```


