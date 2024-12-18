import { Material, MaterialRaw } from '../resources/types';
import { DistributionVariables } from '../types';

export type SolarSystemBody =
  | 'star'
  | 'gas-planet'
  | 'rocky-planet'
  | 'moon'
  | 'comet'
  | 'asteroid-belt';
export type NebulaBody = 'cloud' | 'protostar-nursery' | 'neutron-star';
export type BlackHoleBody = 'black-hole' | 'event-horizon';
export type RoguePlanetBody = 'rocky-planet' | 'gas-planet' | 'moon';
export type CelestialBody = SolarSystemBody | NebulaBody | BlackHoleBody | RoguePlanetBody;

export type SolarSystemBodyRanges = Record<SolarSystemBody, DistributionVariables>;
export type NebulaBodyRanges = Record<NebulaBody, DistributionVariables>;
export type BlackHoleBodyRanges = Record<BlackHoleBody, DistributionVariables>;
export type RoguePlanetBodyRanges = Record<RoguePlanetBody, DistributionVariables>;

export type CelestialSystemType = 'solar-system' | 'nebula' | 'black-hole' | 'rogue-planet';
export type CelestialSystemBodyRanges = {
  'solar-system': SolarSystemBodyRanges;
  nebula: NebulaBodyRanges;
  'black-hole': BlackHoleBodyRanges;
  'rogue-planet': RoguePlanetBodyRanges;
};

export type Location = {
  id: string;
  name: string;
  body: CelestialBody;
  resources: Record<Partial<MaterialRaw>, 'abundant' | 'moderate' | 'scarce'>;
  unlocked: boolean;
  locations?: Location[];
};

export type CelestialSystem = {
  id: string;
  name: string;
  type: CelestialSystemType;
  discovered: boolean;
  locations: Location[];
};
