import React, { useEffect, useRef } from 'react';
import { ForceGraph3D } from 'react-force-graph';

interface CelestialBody {
  id: string;
  name: string;
  type: 'planet' | 'moon' | 'asteroid' | 'station';
  size: number;
}

interface Delivery {
  source: string;
  target: string;
  value: number;
}

interface CelestialDeliveryMapProps {
  celestialBodies: CelestialBody[];
  deliveries: Delivery[];
}

const CelestialDeliveryMap: React.FC<CelestialDeliveryMapProps> = ({
  celestialBodies,
  deliveries,
}) => {
  const fgRef = useRef<any>();

  useEffect(() => {
    // Add camera controls
    const fg = fgRef.current;
    fg.controls().enableDamping = true;
    fg.controls().dampingFactor = 0.25;
    fg.controls().enableZoom = true;
    fg.controls().autoRotate = true;
  }, []);

  const getNodeColor = (node: CelestialBody) => {
    switch (node.type) {
      case 'planet':
        return 'blue';
      case 'moon':
        return 'gray';
      case 'asteroid':
        return 'brown';
      case 'station':
        return 'green';
      default:
        return 'white';
    }
  };

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={{ nodes: celestialBodies, links: deliveries }}
      nodeLabel="name"
      nodeColor={getNodeColor}
      nodeVal={(node) => node.size}
      linkWidth={(link) => Math.sqrt(link.value)}
      linkDirectionalParticles={2}
      linkDirectionalParticleSpeed={(link) => link.value * 0.001}
    />
  );
};

export default CelestialDeliveryMap;
