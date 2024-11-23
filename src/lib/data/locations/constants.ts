import { CelestialSystemBodyRanges } from './types';

export const BodiesBySystem: CelestialSystemBodyRanges = {
  'solar-system': {
    star: { range: [1, 1], lambda: 1 },
    'rocky-planet': { range: [1, 5], lambda: 2 },
    'gas-planet': { range: [1, 4], lambda: 1.5 },
    moon: { range: [0, 50], lambda: 4 },
    comet: { range: [10, 300], lambda: 0.1 },
    'asteroid-belt': { range: [1, 3], lambda: 1 },
  },
  nebula: {},
  'black-hole': {},
  'rogue-planet': {
    moon: { range: [0, 12], lambda: 1 },
  },
};

export const ResourceRangeByLocation = {};
