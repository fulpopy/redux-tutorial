import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log("amount", action.payload, typeof action.payload);
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      console.log("amount", action.payload, typeof action.payload);
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
