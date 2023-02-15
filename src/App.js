import React from "react";
import "./style.css";
import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === 'buy_ingredients') return {money: state.money - 10};
    if (action.type === 'serve_regular') return {money: state.money + 10};
    if (action.type === 'serve_vip') return {money: state.money + 100};
    return state;
}

 function App() {

  const initialState = {money:100};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: 'buy_ingredients'})}>Shopping for Ingredients</button>
        <button onClick={() => dispatch({type: 'serve_regular'})}>Serving Regulars</button>
        <button onClick={() => dispatch({type: 'serve_vip'})}>Serving VIP's</button>
      </div>
    </div>

  );
}

export default App;