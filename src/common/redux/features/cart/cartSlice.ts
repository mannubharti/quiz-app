import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;