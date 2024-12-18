import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CelestialSystem, Location, MapLink } from '@/lib/data/locations';

type MapState = {
  nodes: CelestialSystem[];
  links: MapLink[];
  selectedNodeId: string | null;
  selectedLinkId: string | null;
};

const initialState: MapState = {
  nodes: [],
  links: [],
  selectedNodeId: null,
  selectedLinkId: null,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    // setCelestialBodies: (state, action: PayloadAction<CelestialBody[]>) => {
    //   state.celestialBodies = action.payload;
    // },
    // setDeliveries: (state, action: PayloadAction<Delivery[]>) => {
    //   state.deliveries = action.payload;
    // },
    // selectNode: (state, action: PayloadAction<string>) => {
    //   state.selectedNodeId = action.payload;
    // },
    // deselectNode: (state) => {
    //   state.selectedNodeId = null;
    // },
    // selectLink: (state, action: PayloadAction<{ source: string; target: string }>) => {
    //   state.selectedLinkId = `${action.payload.source}-${action.payload.target}`;
    // },
    // deselectLink: (state) => {
    //   state.selectedLinkId = null;
    // },
    // addCelestialBody: (state, action: PayloadAction<CelestialBody>) => {
    //   state.celestialBodies.push(action.payload);
    // },
    // removeCelestialBody: (state, action: PayloadAction<string>) => {
    //   state.celestialBodies = state.celestialBodies.filter((body) => body.id !== action.payload);
    // },
    // addDelivery: (state, action: PayloadAction<Delivery>) => {
    //   state.deliveries.push(action.payload);
    // },
    // removeDelivery: (state, action: PayloadAction<{ source: string; target: string }>) => {
    //   state.deliveries = state.deliveries.filter(
    //     (delivery) =>
    //       !(delivery.source === action.payload.source && delivery.target === action.payload.target)
    //   );
    // },
    // updateDelivery: (state, action: PayloadAction<Delivery>) => {
    //   const index = state.deliveries.findIndex(
    //     (delivery) =>
    //       delivery.source === action.payload.source && delivery.target === action.payload.target
    //   );
    //   if (index !== -1) {
    //     state.deliveries[index] = action.payload;
    //   }
    // },
  },
});

export const {
  // setCelestialBodies,
  // setDeliveries,
  // selectNode,
  // deselectNode,
  // addCelestialBody,
  // removeCelestialBody,
  // addDelivery,
  // removeDelivery,
  // updateDelivery,
} = mapSlice.actions;

export default mapSlice.reducer;
