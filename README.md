# Components  


### functional component 

1. create new folder call 'components' and within the folder create file call 'Greet.js'.

2. in 'Greet.js' file create react functional component and export it,
Greet.js
```js
import React from 'react';

function Greet(){
    return <h1>Hello Samadhi</h1>
}

export default Greet;
```

3. in App component remove all html elements except outer div tags and add 'Greet' component  in App.js file as self closing custom html tag "<ComponentName/>"
App.js
```js 
import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div >
       <Greet/>
    </div>
  );
}

export default App;
```

4. Rewrite 'Greet' component in es6 arrow function syntax.   
Greet.js
```js 
import React from 'react';

const Greet = () => <h1>Hello Samadhi</h1>;

export default Greet;
```

5. show using 'export default' can import any name on 'App.js' file.  
App.js
```js 
import './App.css';
import Greet2 from './components/Greet';

function App() {
  return (
    <div >
       <Greet2/>
    </div>
  );
}

export default App;
```

5. show using only 'export' can only import same name on 'App.js' file inside cruly braces. This is call 'name export'  
App.js
```js 
import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div >
       <Greet/>
    </div>
  );
}

export default App;
```

### class component 

6. creat new file call 'Welcom.js' inside component and create class comopnent in it that can get same result as above 'Greet' component. And import it in to App.js component as before.    
Welcome.js
```js  
import React, {Component} from 'react';

class Welcome extends Component {
    render(){
        return <h1>Class Component</h1>
    }
}

export default Welcome;
```