import { v4 as uuid } from 'uuid';
import { ABUNDANCE_FACTORS, MaterialRaw, MATERIALS_RAW } from '../../resources';
import { MATERIALS_BY_BODY } from '../constants';
import { CelestialBody, Location } from '../types';

export function generateBodyLocations(
  countMap: Map<CelestialBody, number>,
  systemName: string
): Location[] {
  const locations: Location[] = [];

  return locations;
}

function generateResources(type: CelestialBody) {
  const materialOdds = MATERIALS_BY_BODY[type];
  const materials = Object.entries(materialOdds).reduce<
    Record<Partial<MaterialRaw>, 'abundant' | 'moderate' | 'scarce'>
  >(
    (acc, [material, odds]) => {
      const rand = Math.random();
      if (rand < odds) {
        const abundanceFactor = ABUNDANCE_FACTORS[MATERIALS_RAW[material as MaterialRaw].abundance];
        const abundanceRand = Math.random();
        if (abundanceRand < abundanceFactor[0]) {
          acc[material as MaterialRaw] = 'scarce';
        } else if (abundanceRand < abundanceFactor[1]) {
          acc[material as MaterialRaw] = 'moderate';
        } else {
          acc[material as MaterialRaw] = 'abundant';
        }
      }
      return acc;
    },
    {} as Record<Partial<MaterialRaw>, 'abundant' | 'moderate' | 'scarce'>
  );
  return materials;
}

// --- Solar System & Rogue Planet Bodies ---
function generateStar(name: string): Location {
  return {
    id: uuid(),
    name,
    body: 'star',
    resources: generateResources('star'),
    unlocked: false,
  };
}

function generateRockyPlanet(name: string): Location {
  return {
    id: uuid(),
    name,
    body: 'rocky-planet',
    resources: generateResources('rocky-planet'),
    unlocked: false,
  };
}

function generateGasPlanet(name: string): Location {}

function generateMoon(name: string): Location {}

function generateComet(name: string): Location {}

function generateAsteroidBelts(name: string): Location {}

// --- Nebula Bodies ---

function generateCloud(name: string): Location {}

function generateProtostarNursery(name: string): Location {}

function generateNeutronStar(name: string): Location {}

// Black Hole Bodies

function generateBlackHole(): Location {}

function generateEventHorizon(): Location {}
