import { v4 as uuid } from 'uuid';
import { BODIES_BY_SYSTEM } from '../constants';
import { exponential, poisson } from '../distributions';
import {
  BlackHoleBody,
  CelestialSystem,
  CelestialSystemType,
  Location,
  NebulaBody,
  RoguePlanetBody,
  SolarSystemBody,
} from '../types';
import { generateBodyLocations } from './generateLocations';
import { generateName } from './generateNames';

function generateSystemLocations(type: CelestialSystemType, systemName: string): Location[] {
  if (type === 'solar-system') {
    const bodies = BODIES_BY_SYSTEM['solar-system'];
    const locationCount = new Map<SolarSystemBody, number>();
    locationCount.set('star', 1);
    locationCount.set('rocky-planet', poisson(bodies['rocky-planet']));
    locationCount.set('gas-planet', poisson(bodies['gas-planet']));
    locationCount.set('comet', exponential(bodies['comet']));
    locationCount.set('asteroid-belt', poisson(bodies['asteroid-belt']));
    return generateBodyLocations(locationCount, type, systemName);
  } else if (type === 'nebula') {
    const bodies = BODIES_BY_SYSTEM.nebula;
    const locationCount = new Map<NebulaBody, number>();
    locationCount.set('cloud', poisson(bodies['cloud']));
    locationCount.set('protostar-nursery', poisson(bodies['protostar-nursery']));
    locationCount.set('neutron-star', poisson(bodies['neutron-star']));
    return generateBodyLocations(locationCount, type, systemName);
  } else if (type === 'black-hole') {
    const locationCount = new Map<BlackHoleBody, number>();
    locationCount.set('black-hole', 1);
    locationCount.set('event-horizon', 1);
    return generateBodyLocations(locationCount, type, systemName);
  } else if (type === 'rogue-planet') {
    const bodies = BODIES_BY_SYSTEM['rogue-planet'];
    const locationCount = new Map<RoguePlanetBody, number>();
    locationCount.set('rocky-planet', poisson(bodies['rocky-planet']));
    if (locationCount.get('rocky-planet') === 0) {
      locationCount.set('gas-planet', 1);
      locationCount.set('moon', exponential(bodies['moon']));
    } else {
      locationCount.set('moon', poisson(bodies['moon']));
    }
    return generateBodyLocations(locationCount, type, systemName);
  }
  return [];
}

export function generateCelestialSystem(type: CelestialSystemType): CelestialSystem {
  const name = generateName(type);
  return {
    id: uuid(),
    name,
    type,
    unlocked: false,
    locations: generateSystemLocations(type, name),
  };
}
