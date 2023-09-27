# Error Boundary  


runtime errors could put our application in a broken state and react basicallu unmount the whole react component tree. To catch the error and show fallback UI is better approch.      

* Error boundary is a class component that implements either one or more of the lifecycle methods 'getDerivedStateFromError' or 'componentDidCatch' becomes an error boundary.   

* The static method 'getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the 'componentDidCatch' method is used to log the error information.   

!!! important   
Error Boundary can't catch inside event handlers. so we have to use try-catch block for those and this method only can catch 
'during reandering in lifecycle methods' 
'constructors of the whole tree below them'

1. create functional component call 'Hero.js' and make it throw error if props name call 'heroName' is equal to 'Joker' and show if there is error then whole app going to crash.   

Hero.js
```js
import React from 'react'

const Hero = ({heroName}) => {
    if(heroName === 'Joker'){
        throw new Error('Not a hero');
    }
  return (
    <div>{heroName}</div>
  )
}

export default Hero;
```
App.js
```js
import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <div>   
     <Hero heroName='Batman'/>
     <Hero heroName='Superman'/>
     <Hero heroName='Joker'/>
    </div>
  );
}

export default App;
```

2. create new class component call 'ErrorBoundary.js' and using 'getDerivedStateFromError' function catch and change state when error detected.   

ErrorBoundary.js   
```js
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1>Someting went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```

3. show how to wrap all the components with 'ErrorBoundary.js' component.   

App.js  
```js
function App() {
  return (
    <div>
      <ErrorBoundary>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}
```

4. show if we wrap 'ErrorBoundary.js' component with each 'Hero.js' component it would be better. Because one component have error not effected to display other components.   

App.js    
```js
function App() {
  return (
    <div>
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}
```

5. show how to log errors using componentDidCatch in the 'ErrorBoundary.js' component.   
Note: react automatically logs error in browser.     

ErrorBoundary.js   
```js
  componentDidCatch(error, info){
    console.log(error);
    console.log(info)
  }
```

