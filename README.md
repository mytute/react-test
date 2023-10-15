#  Custom Hooks

A custom Hook is basically a JavaScript function whose name starts with 'use'.  

A custom hook can also call other Hooks if required.   

Why ? 
Share logic - Alternative to HOCs and Render Props.  

1. create two component call 'DocTitleOne.jsx' and 'DocTitleTwo.jsx' 

DocTitleOne.js
```js
import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const DocTitleOne = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click {count}
      </button>
    </div>
  );
};

export default DocTitleOne;
```

DocTitleTwo.js
```js
import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const DocTitleTwo = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click {count}
      </button>
    </div>
  );
};

export default DocTitleTwo;
```

useDocumentTitle.js
```js 
import { useEffect } from "react";

const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
};

export default useDocumentTitle;
```

App.js
```js
import "./App.css";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";

function App() {
  return (
    <div>
      <DocTitleOne/>
      <DocTitleTwo/>
    </div>
  );
}

export default App;
```   








