To implement Redux in a React project without using Redux Toolkit, you'll need to manually create actions, reducers, and configure the store. Here's how to do that:

### Step 1: Install Redux and React-Redux

Since you already have a React project set up, install Redux and React-Redux (if not already installed):

```bash
$ npm install redux react-redux
```

### Step 2: Set Up Redux

1. Create Action Types: In the <mark>src</mark> folder, create a folder named <mark>redux</mark> and inside it, add a file <mark>counterActionTypes.ts</mark>.
Create Action Types: In the src folder, create a folder named redux and inside it, add a file counterActionTypes.ts.

```typescript
// src/redux/counterActionTypes.ts
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_BY_AMOUNT = 'INCREMENT_BY_AMOUNT';
```
2. Create Actions: In the same redux folder, create a file called counterActions.ts.

```typescript

// src/redux/counterActions.ts
import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from './counterActionTypes';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const incrementByAmount = (amount: number) => ({
  type: INCREMENT_BY_AMOUNT,
  payload: amount,
});
```

3. Create a Reducer: Create a file counterReducer.ts inside the redux folder:

```typescript
// src/redux/counterReducer.ts
import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from './counterActionTypes';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterReducer = (state = initialState, action: { type: string; payload?: number }) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    case INCREMENT_BY_AMOUNT:
      return { ...state, value: state.value + (action.payload || 0) };
    default:
      return state;
  }
};
```

4. Create and Configure the Redux Store: Now, create a store.ts file in the redux folder to set up the store.

```typescript
    // src/redux/store.ts
    import { createStore } from 'redux';
    import { counterReducer } from './counterReducer';

    export const store = createStore(counterReducer);

    export type RootState = ReturnType<typeof store.getState>;
    export type AppDispatch = typeof store.dispatch;
```

### Step 3: Provide the Store to React

1. Wrap the App with the Redux Provider: In src/index.tsx, use the Provider component to give the React app access to the Redux store.

```typescript
    // src/index.tsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import { Provider } from 'react-redux';
    import { store } from './redux/store';

    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    );
```

### Step 4: Create a Redux-Connected Component

1. Create the Counter Component: Now, let's use Redux in the Counter.tsx component.

```typescript
    // src/Counter.tsx
    import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { increment, decrement, incrementByAmount } from './redux/counterActions';
    import { RootState } from './redux/store';

    const Counter: React.FC = () => {
      const count = useSelector((state: RootState) => state.value);
      const dispatch = useDispatch();

      return (
        <div>
          <h1>{count}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
      );
    };

    export default Counter;
```

### Step 5: Use the Counter Component in the App

1. Modify App.tsx to include the Counter:

 ```typescript
    // src/App.tsx
    import React from 'react';
    import './App.css';
    import Counter from './Counter';

    const App: React.FC = () => {
      return (
        <div className="App">
          <h1>Redux Counter (without Redux Toolkit)</h1>
          <Counter />
        </div>
      );
    };

    export default App;
```

### Step 6: Run the Application

1. Run your application by executing:

```bash
npm start
```

This example demonstrates using Redux without the Redux Toolkit. It requires manually managing actions, reducers, and the store, giving you more control, but also requiring more boilerplate code. You should see the same counter UI with buttons to increment, decrement, and increment by a specific amount.


## Redux using redux tool kit 
