import { useCallback, useEffect, useRef } from 'react';
import { ForceGraph3D } from 'react-force-graph';
import { useDispatch, useSelector } from '@/hooks/redux';
import { MapNode } from '@/lib/data/locations';
import { selectNode } from './reducer';
import { getMapLinks, getMapNodes, getSelectedMapNodes } from './selectors';

export function Map() {
  const dispatch = useDispatch();
  const fgRef = useRef<any>();

  const nodes = useSelector(getMapNodes);
  const links = useSelector(getMapLinks);
  const selectedNodes = useSelector(getSelectedMapNodes);

  useEffect(() => {
    // Add camera controls on mount
    const fg = fgRef.current;
    fg.controls().enableDamping = true;
    fg.controls().dampingFactor = 0.25;
    fg.controls().enableZoom = true;
    fg.controls().autoRotate = true;
  }, []);

  const getNodeColor = useCallback(
    (node: MapNode) => {
      if (node.type === 'celestial-system') {
        switch (node.data.type) {
          case 'solar-system':
            return 'orange';
          case 'nebula':
            return 'pink';
          case 'black-hole':
            return 'black';
          case 'rogue-planet':
            return 'red';
          default:
            return 'gray';
        }
      } else if (node.type === 'location') {
        switch (node.data.body) {
          case 'rocky-planet':
            return 'green';
          case 'moon':
            return 'gray';
          case 'asteroid-belt':
            return 'dark-gray';
          case 'gas-planet':
            return 'yellow';
          case 'comet':
            return 'cyan';
          default:
            return 'white';
        }
      }
      return 'gray';
    },
    [nodes, selectedNodes]
  );

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={{ nodes, links }}
      nodeLabel={(node) => node.data.name}
      nodeColor={getNodeColor}
      nodeVal={(node) => node.size}
      onNodeClick={(node) => dispatch(selectNode(node.id))}
      linkWidth={(link) => Math.sqrt(link.value)}
      linkDirectionalParticles={2}
      linkDirectionalParticleSpeed={(link) => link.value * 0.001}
    />
  );
}
