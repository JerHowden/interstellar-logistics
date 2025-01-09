import { createSelector } from '@reduxjs/toolkit';
import { MapLink, MapNode } from '@/lib/data/locations';
import { RootState } from '@/providers/store';

const getMapNodeMap = (state: RootState) => state.map.nodeMap;
export const getSelectedMapNodes = (state: RootState) => state.map.selectedNodes;

export const getMapNodes = createSelector(
  [getMapNodeMap, getSelectedMapNodes],
  (nodeMap, selectedNodes) => {
    const nodes: MapNode[] = Object.values(nodeMap).filter(
      (node) => node.type === 'celestial-system'
    );
    for (let i = 0; i < selectedNodes.length; i++) {
      const selectedNode = nodeMap[selectedNodes[i]];
      if (selectedNode.type === 'celestial-system') {
        for (let j = 0; j < selectedNode.data.locations.length; j++) {
          nodes.push(nodeMap[selectedNode.data.locations[j].id]);
        }
      }
    }
    return nodes;
  }
);

export const getMapLinks = createSelector([getMapNodes], (nodesList) => {
  const links: MapLink[] = [];
  for (let i = 0; i < nodesList.length; i++) {
    links.concat(nodesList[i].links);
  }
  return links;
});
