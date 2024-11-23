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

type Location = {
  name: string;
  body: CelestialBody;
  resources: Record<Partial<Material>, number>;
};
