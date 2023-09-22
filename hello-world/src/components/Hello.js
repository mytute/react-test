import React from 'react';

const Hello = () => {
//   return (
//     <div>
//         <h2>Hello Samadhi</h2>
//     </div>
//   )
 /**
  * @param div tag name
  * @param null attributes for tag like class, disable .. etc
  * @param ' '  childrens 
  */
//  return React.createElement('div', null, '<h1>Hello Samadhi</h1>');
// return React.createElement('div', null, React.createElement('h1', null, 'Hello Samadhi') );
return React.createElement('div', {id:'hello', class: 'dymmyClass'}, React.createElement('h1', null, 'Hello Samadhi') );
}

export default Hello;