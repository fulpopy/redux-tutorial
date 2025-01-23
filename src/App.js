import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  incrementAsync,
} from "./counterSlice";
import { useState } from "react";
import { BackgroundLines } from "./components/ui/background-lines";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

function App() {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <BackgroundLines className="bglines">
      <div className="App">
        <h1>REDUX TOOLKIT DEMO</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="count">{count}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px 10px 0 10px",
            }}
          >
            <div onClick={() => dispatch(increment())}>
              <ArrowDropUp fontSize="large" />
            </div>
            <div onClick={() => dispatch(decrement())}>
              <ArrowDropDown fontSize="large" />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            onChange={(e) => setAmount(parseInt(e.target.value))}
            value={amount}
          />
          <div style={{ display: "flex" }}>
            {" "}
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
        <button
          onClick={() => {
            dispatch(incrementAsync({ amount, time: 3000 }));
            setAmount("");
          }}
        >
          Increment After wait of 3 sec
        </button>
      </div>
    </BackgroundLines>
  );
}

export default App;
