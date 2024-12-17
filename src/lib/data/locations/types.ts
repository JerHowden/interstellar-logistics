import { Material } from '../resources/types';

export type CelestialBody =
  | 'star'
  | 'gas-planet'
  | 'rocky-planet'
  | 'moon'
  | 'comet'
  | 'asteroid-belt';
type CelestialBodyProbabilities = {
  range: [number, number];
  lambda: number;
};
export type CelestialBodyRanges = Partial<Record<CelestialBody, CelestialBodyProbabilities>>;

export type CelestialSystemType = 'solar-system' | 'nebula' | 'rogue-planet' | 'black-hole';
export type CelestialSystemBodyRanges = Record<CelestialSystemType, CelestialBodyRanges>;

export type Location = {
  id: string;
  name: string;
  body: CelestialBody;
  gravity: number; // (m/s²)
  resources: Record<Partial<Material>, number>;
};

export type CelestialSystem = {
  name: string;
  type: CelestialSystemType;
  locations: Location[];
};
