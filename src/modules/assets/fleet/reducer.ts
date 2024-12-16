// write a redux reducer for the fleet page, including the fleet data from the lib folder

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ship, ShipOwned, SHIPS_MAP } from '@/lib/data/fleet';

type FleetState = {
  fleet: ShipOwned[];
  shipsRemoved: number;
};

const initialState: FleetState = {
  fleet: [],
  shipsRemoved: 0,
};

const fleetSlice = createSlice({
  name: 'fleet',
  initialState,
  reducers: {
    addShipToFleet: (state, action: PayloadAction<Ship['id']>) => {
      const ship = SHIPS_MAP[action.payload];
      const ownedShip: ShipOwned = {
        id: state.fleet.length + state.shipsRemoved,
        ship,
        name: ship.name,
        fuelPercentage: 100,
        cargo: new Map(),
      };
      state.fleet.push(ownedShip);
    },
    editShip: (state, action: PayloadAction<ShipOwned>) => {
      // replace ship with action payload
      const index = state.fleet.findIndex((ship) => ship.id === action.payload.id);
      if (index >= 0) {
        state.fleet[index] = action.payload;
      }
    },
    removeShipFromFleet: (state, action: PayloadAction<ShipOwned['id']>) => {
      state.fleet = state.fleet.filter((ship) => ship.id !== action.payload);
      state.shipsRemoved++;
    },
  },
});

export const { addShipToFleet, removeShipFromFleet } = fleetSlice.actions;

export default fleetSlice.reducer;
