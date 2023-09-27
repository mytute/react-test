# Portals   

So far we add our rendered code in to 'root' element that located in 'public/index.html' file. because in 'src/index.js' file select 'root' element. In portal show how to bind specific component into outside of root element.    

Even this is outside of root element, it works all react features with component that located inside root element. 

1. in 'index.html' right below the html create new 'div' element with id equal to 'portal-root'.  
index.html   
```html
    <div id="root"></div>
    <div id="portal-root"></div>
```

2. create new functional component call 'PortalDemo.js' and add it to 'App.js' component and show in brower that this component under 'root' element.    
PortalDemo.js  
```js 
import './App.css';
import PortalDemo from './components/PortalDemo';

function App() {
  return (
    <div>   
      <PortalDemo/>
    </div>
  );
}

export default App;
```

3. Add 'ReactDOM' package in 'PortalDemo.js' file and call 'ReactDOM.createPortal' function with second argument with element that we want to bind.    
PortalDemo.js    
```js  
import React from 'react';
import ReactDOM  from 'react-dom';

const PortalDemo = () => {
  return ReactDOM.createPortal(
    <div>PortalDemo</div>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo;
```

