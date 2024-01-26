import React, { useReducer } from 'react';
import './Reducer.css';
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="box">
      <div className="contain"><p>Count: {state.count}</p></div>

      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}
