import { MaterialRaw } from '../resources';
import { CelestialBody, CelestialSystemBodyRanges } from './types';

export const BODIES_BY_SYSTEM: CelestialSystemBodyRanges = {
  'solar-system': {
    star: { range: [1, 1], lambda: 1 },
    'rocky-planet': { range: [1, 5], lambda: 2 },
    'gas-planet': { range: [1, 4], lambda: 1.5 },
    moon: {
      range: [0, 50],
      lambda: 4,
    },
    comet: {
      range: [10, 300],
      lambda: 0.1,
    },
    'asteroid-belt': { range: [1, 3], lambda: 1 },
  },
  nebula: {
    cloud: {
      range: [2, 7],
      lambda: 1,
    },
    'protostar-nursery': {
      range: [0, 2],
      lambda: 1,
    },
    'neutron-star': {
      range: [0, 1],
      lambda: 0,
    },
  },
  'black-hole': {
    'black-hole': { range: [1, 1], lambda: 1 },
    'event-horizon': { range: [1, 1], lambda: 1 },
  },
  'rogue-planet': {
    'rocky-planet': { range: [0, 1], lambda: 1 },
    'gas-planet': { range: [0, 1], lambda: 1 },
    moon: {
      range: [0, 12],
      lambda: 1,
    },
  },
};

export const MATERIALS_BY_BODY: Record<CelestialBody, Partial<Record<MaterialRaw, number>>> = {
  // Solar System Bodies
  star: { 'helium-3': 0.8, deuterium: 0.6 },
  'gas-planet': { 'helium-3': 0.7, nitrogen: 0.9, oxygen: 0.5 },
  'rocky-planet': {
    aggregate: 0.9,
    silicon: 0.9,
    iron: 0.8,
    aluminum: 0.7,
    nickel: 0.6,
    sulfur: 0.6,
    phosphorus: 0.5,
    titanium: 0.4,
    water: 0.4,
    'rare earth elements': 0.3,
    platinum: 0.2,
  },
  moon: {
    aggregate: 0.9,
    silicon: 0.8,
    iron: 0.7,
    aluminum: 0.6,
    carbon: 0.5,
    nickel: 0.4,
    titanium: 0.3,
    water: 0.2,
  },
  comet: { water: 0.9, carbon: 0.7, sulfur: 0.5 },
  'asteroid-belt': {
    aggregate: 0.9,
    iron: 0.8,
    silicon: 0.7,
    nickel: 0.6,
    carbon: 0.5,
    phosphorus: 0.4,
    platinum: 0.3,
    'rare earth elements': 0.2,
  },

  // Nebula Bodies
  cloud: { 'helium-3': 0.7, deuterium: 0.6 },
  'protostar-nursery': { 'helium-3': 0.8, deuterium: 0.7 },
  'neutron-star': { tritium: 0.5 },

  // Black Hole Bodies
  'black-hole': {},
  'event-horizon': { antimatter: 0.1 },
};
