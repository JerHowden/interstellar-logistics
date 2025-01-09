import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MapNode } from '@/lib/data/locations';

type MapState = {
  nodeMap: Record<string, MapNode>;
  selectedNodes: string[];
};

const initialState: MapState = {
  nodeMap: {},
  selectedNodes: [],
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setNodeMap: (state, action: PayloadAction<typeof initialState.nodeMap>) => {
      state.nodeMap = action.payload;
    },
    selectNode: (state, action: PayloadAction<string>) => {
      const selectedNodeID = action.payload;
      if (!state.selectedNodes.includes(selectedNodeID)) {
        state.selectedNodes.push(selectedNodeID);
      } else {
        state.selectedNodes = state.selectedNodes.filter((id) => id !== selectedNodeID);
      }
    },
    clearSelectedNodes: (state) => {
      state.selectedNodes = [];
    },
  },
});

export const { setNodeMap, selectNode, clearSelectedNodes } = mapSlice.actions;

export default mapSlice.reducer;
