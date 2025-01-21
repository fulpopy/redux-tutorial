import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="App">
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="text"
          onChange={(e) => setAmount(parseInt(e.target.value))}
          value={amount}
        />
        <button
          onClick={() => {
            dispatch(incrementByAmount(amount));
            setAmount("");
          }}
        >
          Increment By Amount
        </button>
        <button
          onClick={() => {
            dispatch(decrementByAmount(amount));
            setAmount("");
          }}
        >
          Decrement By Amount
        </button>
      </div>
    </div>
  );
}

export default App;
