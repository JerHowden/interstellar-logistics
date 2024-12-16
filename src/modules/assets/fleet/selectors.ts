import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/providers/store';

export const getFleet = createSelector(
  (state: RootState) => state.fleet.fleet,
  (fleet) => fleet
);

export const getFleetShip = createSelector(
  [getFleet, (_state: RootState, id: number) => id],
  (fleet, id) => fleet.find((ship) => ship.id === id)
);
