#  Styled Components   

Styled components is a CSS-in-JS styling solution for React and React-Native.   
It uses tagged template literals whicj allows you to write plain CSS that is scoped to a single component isdie your JavaScript code.    


#### Features / Benefits.    

* Automatic critical CSS. 
* No class name bugs.   
* Easier deleton of CSS (deleting component will delete styles as welll  and show unuse styles on vscode)
* Dynamic styling. 
* Painless maintenance.   
* Automatic vendor prefixing. (cross brower css works).   

#### Instrolation.   
add vscode-styled-components(by Julien Poissonnier) 

```bash 
$ npm i styled-components
```

#### basic styled components   

1. create functional component call 'Button' inside component folder and using 'styled-components' module add custom styles to 'button' tag and show how to add it in to jsx.  

Button.jsx
```jsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
`

const Button = () => {
  return (
    <>
    <button>Button</button>
    <StyledButton>Button</StyledButton>
    </>
  )
}

export default Button;
```

2. For more organize the code use following folder structure instructions.    

/components/Button/Button.jsx
```jsx
import React from 'react';
import StyledButton from './Button.styles';

export default StyledButton;
```

/components/Button/Button.styles.js
```jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
`
export default StyledButton;
```

#### Using Props    

3. for above button show how to pass a prop call 'variant' and if 'variant' equal to 'outline' make white background of the button. 



/components/Button/Button.styles.js
```jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props)=> 
    props.variant === 'outline' ? '#FFF': '#4caf50'};
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
`
export default StyledButton;
```

#### Extending Styles

4. in 'Button.styles.js' file create another button using 'StyledButton' with overrite it. name new button call 'FancyButton' and add gradient background to it.    

/components/Button/Button.styles.js
```js
import styled from 'styled-components';

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props)=> 
    props.variant === 'outline' ? '#FFF': '#4caf50'};
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
`
export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`
```   

5. show how to use polimofic props with newly created button. add 'as' props with 'a' to convert this button with anchor tag. and show result on the browser.     

App.js
```jsx
<FancyButton as='a'>Fancy Button</FancyButton>
```   

#### Pseudo classes  

6. show how to add hover effect to above created 'StyledButton'.  

/components/Button/Button.styles.js
```js
import styled from 'styled-components';

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props)=> 
    props.variant === 'outline' ? '#FFF': '#4caf50'};
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props)=>
       props.variant !== 'outline' ? '#FFF': '#4caf50'};
    color: ${(props)=> props.variant !== 'outline' ? '#4caf50': '#FFF'};   


  }
`
```

#### Passed Props and Adding Attributes  

7. show styled component html attributes automatically apply it's parent component. show reuslts on the browser inspect.       

App.js   
```jsx  
<StyleButton type="submit">Styled Button</StyleButton>
```

8. show how to add attribute to styled button inside it's style file. and show here we can use props too.   

/components/Button/Button.styles.js
```js
// ...
export const FancyButton = styled(StyledButton).attrs((props)=>({
    type: 'submit'
}))`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${(props)=>
     props.variant !== 'outline' ? '#FFF': '#4caf50'};
    box-shadow: 0 5px #666;
    transform: translateY(4px); 
  }
`
```  


#### Animations    

9. using 'keyframes' helper create keyframes and add into animation.

App.js
```js
import logo from './logo.svg';
import { AnimatedLogo } from './components/Button/Button.styles';
<AnimatedLogo src={logo} />
``` 


/components/Button/Button.styles.js
```js
import {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const animatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 2s linear;
`
```  

#### Theming   

10. import 'ThemeProvider' from 'styled-components' module and wrap 'App' component with 'ThemeProvider' and show how theme pass using context-api in react by add theme values to styled components.  


App.js   
```jsx  
import { ThemeProvider} from 'styled-component';

const theme = {
    dark:{
        primary: '#000',
        text: '#fff'
    },
    light: {
        primary: '#fff',
        text: '#000'
    }
};

function App(){
    return (
        <ThemeProvider theme={theme}>
          <div className='App'>
             <DarkButton>Dark Theme</DarkButton>
          </div>
        </ThemeProvider>
    )
}
```


/components/Button/Button.styles.js
```js
export const DarkButton = styled(StyledButton)`
  border: 2px solid ${props=> props.theme.dark.primary};
  background-color: ${props=> props.theme.dark.primary};
  color: ${props=> props.theme.dark.text};
`
```  

#### Global Styles 

11. import 'createGlobalStyle' from 'styled-components' and create global sytles from it and just add it's variable into the jsx as component.   

App.js   
```jsx  
import { createGlobalStyle } from 'styled-component';

const GlobalStyles = createGlobalStyle`
  button {
    font-family: 'Roboto';
  }
`

function App(){
    return (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div className='App'>
             <DarkButton>Dark Theme</DarkButton>
          </div>
        </ThemeProvider>
    )
}
```  

12. show how to add global style from the theme.   

App.js   
```jsx  
import { createGlobalStyle } from 'styled-component';

const theme = {
    dark:{
        primary: '#000',
        text: '#fff'
    },
    light: {
        primary: '#fff',
        text: '#000'
    },
    fontFamily: 'Segoe UI',
};


const GlobalStyles = createGlobalStyle`
  button {
    font-family: ${(props)=> props.theme.fontFamily};
  }
`

function App(){
    return (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div className='App'>
             <DarkButton>Dark Theme</DarkButton>
          </div>
        </ThemeProvider>
    )
}
```  