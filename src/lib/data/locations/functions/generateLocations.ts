import { v4 as uuid } from 'uuid';
import { ABUNDANCE_FACTORS, MaterialRaw, MATERIALS_RAW } from '../../resources';
import { MATERIALS_BY_BODY, MOONS_BY_BODY } from '../constants';
import { exponential, poisson } from '../distributions';
import { CelestialBody, CelestialSystemType, Location } from '../types';
import { generateName } from './generateNames';
import { MOON_LETTERS, ROMAN_NUMERALS } from './names';

export function generateBodyLocations(
  countMap: Map<CelestialBody, number>,
  systemType: CelestialSystemType,
  systemName: string
): Location[] {
  const locations: Location[] = [];
  // --- Solar System Locations ---
  for (let i = 0; i < Number(countMap.get('star')); i++) {
    locations.push(generateStar(systemName));
  }
  for (let i = 0; i < Number(countMap.get('rocky-planet')); i++) {
    locations.push(
      generateRockyPlanet(
        systemType === 'solar-system' ? `${systemName} ${ROMAN_NUMERALS[i]}` : systemName
      )
    );
  }
  for (let i = 0; i < Number(countMap.get('gas-planet')); i++) {
    locations.push(
      generateGasPlanet(
        systemType === 'solar-system'
          ? `${systemName} ${ROMAN_NUMERALS[i + Number(countMap.get('rocky-planet'))]}`
          : systemName
      )
    );
  }
  for (let i = 0; i < Number(countMap.get('comet')); i++) {
    locations.push(generateComet(generateName('comet')));
  }
  for (let i = 0; i < Number(countMap.get('asteroid-belt')); i++) {
    locations.push(
      generateAsteroidBelt(
        `${systemName} Asteroid Belt${Number(countMap.get('asteroid-belt')) > 1 ? ` ${ROMAN_NUMERALS[i]}` : ''}`
      )
    );
  }

  // --- Nebula Locations ---
  for (let i = 0; i < Number(countMap.get('cloud')); i++) {
    locations.push(
      generateCloud(`${systemName.replace(' Nebula', '')} Sector ${ROMAN_NUMERALS[i]}`)
    );
  }
  for (let i = 0; i < Number(countMap.get('protostar-nursery')); i++) {
    locations.push(
      generateProtostarNursery(`${systemName.replace(' Nebula', '')} Nursery ${ROMAN_NUMERALS[i]}`)
    );
  }
  for (let i = 0; i < Number(countMap.get('neutron-star')); i++) {
    locations.push(generateNeutronStar(`${systemName.replace(' Nebula', '')} Neutron Star`));
  }

  // --- Black Hole Locations ---
  for (let i = 0; i < Number(countMap.get('black-hole')); i++) {
    locations.push(generateBlackHole());
  }
  for (let i = 0; i < Number(countMap.get('event-horizon')); i++) {
    locations.push(generateEventHorizon());
  }

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
  const moonCount = poisson(MOONS_BY_BODY['gas-planet']);
  const moons: Location[] = [];
  for (let i = 0; i < moonCount; i++) {
    moons.push(generateMoon(`${name}-${MOON_LETTERS[i]}`));
  }
  return {
    id: uuid(),
    name,
    body: 'rocky-planet',
    resources: generateResources('rocky-planet'),
    unlocked: false,
    locations: moons,
  };
}

function generateGasPlanet(name: string): Location {
  const moonCount = exponential(MOONS_BY_BODY['gas-planet']);
  const moons: Location[] = [];
  for (let i = 0; i < moonCount; i++) {
    moons.push(generateMoon(`${name}-${MOON_LETTERS[i]}`));
  }
  return {
    id: uuid(),
    name,
    body: 'gas-planet',
    resources: generateResources('gas-planet'),
    unlocked: false,
  };
}

function generateMoon(name: string): Location {
  return {
    id: uuid(),
    name,
    body: 'moon',
    resources: generateResources('moon'),
    unlocked: false,
  };
}

function generateComet(name: string): Location {
  return {
    id: uuid(),
    name,
    body: 'comet',
    resources: generateResources('comet'),
    unlocked: false,
  };
}

function generateAsteroidBelt(name: string): Location {
  return {
    id: uuid(),
    name,
    body: 'asteroid-belt',
    resources: generateResources('asteroid-belt'),
    unlocked: false,
  };
}

// --- Nebula Bodies ---

function generateCloud(name: string): Location {
  return {
    id: uuid(),
    name,
    body: 'cloud',
    resources: generateResources('cloud'),
    unlocked: false,
  };
}

function generateProtostarNursery(name: string): Location {
  return {
    id: uuid(),
    name,
    body: 'protostar-nursery',
    resources: generateResources('protostar-nursery'),
    unlocked: false,
  };
}

function generateNeutronStar(name: string): Location {
  return {
    id: uuid(),
    name,
    body: 'neutron-star',
    resources: generateResources('neutron-star'),
    unlocked: false,
  };
}

// Black Hole Bodies

function generateBlackHole(): Location {
  return {
    id: uuid(),
    name: 'Black Hole',
    body: 'black-hole',
    resources: generateResources('black-hole'),
    unlocked: false,
  };
}

function generateEventHorizon(): Location {
  return {
    id: uuid(),
    name: 'Event Horizon',
    body: 'event-horizon',
    resources: generateResources('event-horizon'),
    unlocked: false,
  };
}
