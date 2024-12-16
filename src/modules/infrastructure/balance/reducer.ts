// write a reducer for balance that the player will use to purchase ships and resources and receive balance for deliveries

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Balance = {
  value: number;
};

const initialState: Balance = {
  value: 0, // starting balance
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    addBalance: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    subtractBalance: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { addBalance, subtractBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
