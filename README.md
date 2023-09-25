# Styling and CSS Basics 

* CSS stylesheets.
* Inline styling.
* CSS Modules.
* CSS in JS Libaries.

# CSS stylesheets   

1. show how to make styles in react component by imported css file. 
* create functional component call 'Stylesheet' and css file call 'myStyles.css' in the same location and import style file in to 'Stylesheet' component.
* create and css class in 'myStyles.css' file and apply in to component element.       
Stylesheet.js  
```js
import React from 'react';
import './myStyles.css'

const Stylesheet = () => {
  return (
    <div>
        <h1 className='primary'> Stylesheet</h1>
    </div>
  )
}
export default Stylesheet;
```
myStyles.css
```css 
.primary{
    color: orange;
}
```

2. show how to apply dyanmic styles in to component according to value pass by parent component.   
* in 'App.js' file add props 'primary={true}' to 'Styleseet' tag.  
App.js  
```js
<Stylesheet primary={true}/>
```

Stylesheet.js  
```js
const Stylesheet = ({primary}) => {
    let className = primary ? 'primary' : '';
  return (
    <div>
        <h1 className={className}> Stylesheet</h1>
    </div>
  )
}
```

3. show how to apply styles using template literal.   
* in 'myStyles.css' add new style and add it to same 'Stylesheet' using backticks .  

myStyles.css
```css 
.font-xl{
    color: orange;
}
```

Stylesheet.js  
```js
    <div>
        <h1 className={`${className} font-xl`}> Stylesheet</h1>
    </div>
```

4. show how to add inline styles to the component tag.

this styles are like object whose key is the camel cased version of the style names the value is usually a string.

* create new functional component call 'Inline.js' add fontSize and color styles to h1 tag.   
Inline.js   
```js 
import React from 'react';

const Inline = () => {
  const heading ={
    fontSize: '72px',
    color: 'blue'
  }
  return (
    <div>
     <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline;
```

5. show how to use CSS modules (update react-script package to major version 2)  

* create file with suffixed '.module.css'  name call 'appStyles.module.css'.   
* create another regular styleseet call 'appStyles.css' 
* import both files to 'App.js' file.   

App.js   
```js 
import './App.css';
import './appStyles.css'; // not how to import 
import styles from './appStyles.module.css'; // note how to import 

function App() {
  return (
    <div>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App;
```

6. show css moudles scope to component and regular css styles apply hole dom when it import to dom tree some where event in child component.  

* in 'App.js' component add h2 tag with 'font-xl' that css import in 'Stylesheet' child component and show styles are added.    
App.js   
```js 
<h1 className='font-xl'> Stylesheet</h1>
```
* in Stylesheet component remove 'import './myStyles.css';' and show above added styles are gone.   

* in Stylesheet component add '<h1 className='success'>Child Success</h1>' and show in 'appStyles.module.css' file's 'success' styles not added.