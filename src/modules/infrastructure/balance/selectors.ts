import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/providers/store';

export const getBalance = createSelector(
  (state: RootState) => state.balance.value,
  (value) => value
);
