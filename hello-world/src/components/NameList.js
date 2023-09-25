// import React, {useState} from 'react';

// const NameList = () => {

//   const [names, setNames] = useState(['Samadhi', 'Laksahan', 'Piyasiri']);
// //   const nameList = names.map(name=> <h2>{name}</h2>)
//   const handleEditName = () => {
//     setNames( [ ...names, 'lak' ])
//   }
//   const removeItem = (index) => {
//     const newItems = names.filter((_, i) => i !== index);
//     setNames(newItems);
//   };
//   return (
//     // <div>{nameList}</div>
//     <>
//       {names.map((name, index)=> <div key={index}><h2  >{index} {name}</h2>  <button onClick={()=>{removeItem(index)}}>remove</button> </div>)}
//       <button onClick={handleEditName}>change</button>
     
//     </>
//   )
// }

// export default NameList;

import React, { useState } from 'react';

function ListItem({ item, onToggle }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle(item.id);
  };

  return (
    <li>
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      {item.text}
    </li>
  );
}

function App() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  const handleToggle = (id) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="App">
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} item={item} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
}

export default App;
