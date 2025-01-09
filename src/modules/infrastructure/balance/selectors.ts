import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/providers/store';

export const getBalance = (state: RootState) => state.balance.value;
