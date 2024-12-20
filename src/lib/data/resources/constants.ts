import {
  Abundance,
  MaterialData,
  MaterialManufactured,
  MaterialProcessed,
  MaterialRaw,
} from './types';

export const ABUNDANCE_FACTORS: Record<Abundance, [number, number]> = {
  // abundance: [scarce, moderate, abundant]
  common: [0.1, 0.4],
  uncommon: [0.2, 0.8],
  rare: [0.6, 0.9],
};

export const MATERIALS_RAW: Record<MaterialRaw, MaterialData> = {
  aggregate: {
    name: 'Aggregate',
    description: 'Raw mixture of minerals or materials used in concrete production.',
    category: 'structural',
    state: 'solid',
    abundance: 'common',
    form: 'raw',
    weight: 1.5,
  },
  aluminum: {
    name: 'Aluminum',
    description: 'Lightweight metal used in spacecraft and structural applications.',
    category: 'structural',
    state: 'solid',
    abundance: 'common',
    form: 'raw',
    weight: 2.71,
  },
  antimatter: {
    name: 'Antimatter',
    description: 'Matter composed of antiparticles, used in advanced propulsion and energy.',
    category: 'tech',
    state: 'exotic',
    abundance: 'rare',
    form: 'raw',
    weight: 1,
  },
  boron: {
    name: 'Boron',
    description: 'Element used in semiconductors, nuclear applications, and lightweight materials.',
    category: 'tech',
    state: 'solid',
    abundance: 'uncommon',
    form: 'raw',
    weight: 2.34,
  },
  carbon: {
    name: 'Carbon',
    description: 'Element that exists as graphite, diamond, or carbon nanotubes.',
    category: 'structural',
    state: 'solid',
    abundance: 'common',
    form: 'raw',
    weight: 2.266,
  },
  copper: {
    name: 'Copper',
    description: 'Metal used for wiring, electronics, and power generation.',
    category: 'structural',
    state: 'solid',
    abundance: 'common',
    form: 'raw',
    weight: 8.94,
  },
  deuterium: {
    name: 'Deuterium',
    description: 'Isotope of hydrogen used in fusion reactors.',
    category: 'energy',
    state: 'gas',
    abundance: 'common',
    form: 'raw',
    weight: 1.0169,
  },
  'helium-3': {
    name: 'Helium-3',
    description: 'Compressed isotope of helium used in fusion reactors.',
    category: 'energy',
    state: 'gas',
    abundance: 'rare',
    form: 'raw',
    weight: 1.0001785,
  },
  iron: {
    name: 'Iron',
    description: 'Common metal used in structural construction and manufacturing.',
    category: 'structural',
    state: 'solid',
    abundance: 'common',
    form: 'raw',
    weight: 7.873,
  },
  lithium: {
    name: 'Lithium',
    description: 'Light metal used in batteries and energy storage systems.',
    category: 'energy',
    state: 'solid',
    abundance: 'common',
    form: 'raw',
    weight: 0.534,
  },
  nickel: {
    name: 'Nickel',
    description: 'Metal used in batteries, alloys, and as a catalyst.',
    category: 'structural',
    state: 'solid',
    abundance: 'common',
    form: 'raw',
    weight: 8.908,
  },
  nitrogen: {
    name: 'Nitrogen',
    description: 'Essential for life and industrial processes, used in ammonia and fertilizers.',
    category: 'life-support',
    state: 'gas',
    abundance: 'common',
    form: 'raw',
    weight: 1.0265,
  },
  oxygen: {
    name: 'Oxygen',
    description: 'Element essential for life, extracted from water or atmosphere.',
    category: 'life-support',
    state: 'gas',
    abundance: 'common',
    form: 'raw',
    weight: 1.141,
  },
  phosphorus: {
    name: 'Phosphorus',
    description: 'Element used in fertilizers and energy storage.',
    category: 'energy',
    state: 'solid',
    abundance: 'uncommon',
    form: 'raw',
    weight: 1.82,
  },
  platinum: {
    name: 'Platinum',
    description: 'Precious metal used in fuel cells and advanced technology.',
    category: 'tech',
    state: 'solid',
    abundance: 'rare',
    form: 'raw',
    weight: 21.447,
  },
  'rare earth elements': {
    name: 'Rare Earth Elements',
    description: 'Group of metals used in electronics, magnets, and high-tech applications.',
    category: 'tech',
    state: 'solid',
    abundance: 'rare',
    form: 'raw',
    weight: 6.172,
  },
  silicon: {
    name: 'Silicon',
    description: 'Semiconductor material used in electronics and solar cells.',
    category: 'tech',
    state: 'solid',
    abundance: 'common',
    form: 'raw',
    weight: 2.33,
  },
  silver: {
    name: 'Silver',
    description: 'Metal used in electronics, solar cells, and batteries.',
    category: 'tech',
    state: 'solid',
    abundance: 'common',
    form: 'raw',
    weight: 10.49,
  },
  sulfur: {
    name: 'Sulfur',
    description: 'Element used in industrial processes, power generation, and fertilizers.',
    category: 'energy',
    state: 'solid',
    abundance: 'uncommon',
    form: 'raw',
    weight: 2.07,
  },
  thorium: {
    name: 'Thorium',
    description: 'Radioactive element used as an alternative nuclear fuel.',
    category: 'energy',
    state: 'solid',
    abundance: 'rare',
    form: 'raw',
    weight: 11.72,
  },
  titanium: {
    name: 'Titanium',
    description: 'Strong, lightweight metal used in alloys, aerospace, and construction.',
    category: 'structural',
    state: 'solid',
    abundance: 'uncommon',
    form: 'raw',
    weight: 4.54,
  },
  tritium: {
    name: 'Tritium',
    description:
      'A radioactive isotope of hydrogen used as fuel in fusion reactors and for advanced propulsion systems.',
    category: 'energy',
    state: 'gas',
    abundance: 'rare',
    form: 'raw',
    weight: 1.001215,
  },
  uranium: {
    name: 'Uranium',
    description: 'Radioactive metal used in nuclear reactors.',
    category: 'energy',
    state: 'solid',
    abundance: 'rare',
    form: 'raw',
    weight: 19.05,
  },
  water: {
    name: 'Water',
    description: 'Essential for life, used for drinking, irrigation, and power generation.',
    category: 'life-support',
    state: 'liquid',
    abundance: 'common',
    form: 'raw',
    weight: 1,
  },
};

export const MATERIALS_PROCESSED: Record<MaterialProcessed, MaterialData> = {
  'alloyed metal': {
    name: 'Alloyed Metal',
    description: 'Metal created by combining two or more elements, often for enhanced properties.',
    category: 'structural',
    state: 'solid',
    abundance: 'common',
    form: 'processed',
    weight: 167.81,
  },
  'bioreactor materials': {
    name: 'Bioreactor Materials',
    description:
      'Materials used in reactors for growing organic matter, such as algae or microorganisms.',
    category: 'life-support',
    state: 'solid',
    abundance: 'uncommon',
    form: 'processed',
    weight: 250,
  },
  'carbon nanotubes': {
    name: 'Carbon Nanotubes',
    description:
      'Cylindrical nanostructures made of carbon atoms, used in high-strength materials.',
    category: 'tech',
    state: 'solid',
    abundance: 'uncommon',
    form: 'processed',
    weight: 1.4,
  },
  'composite materials': {
    name: 'Composite Materials',
    description:
      'Materials made from two or more different substances, enhancing strength and weight.',
    category: 'structural',
    state: 'solid',
    abundance: 'common',
    form: 'processed',
    weight: 2.44,
  },
  concrete: {
    name: 'Concrete',
    description: 'Raw mixture of cement, aggregate, and water used in construction.',
    category: 'structural',
    state: 'solid',
    abundance: 'common',
    form: 'processed',
    weight: 2,
  },
  diamond: {
    name: 'Diamond',
    description: 'The result of carbon under extreme pressure.',
    category: 'tech',
    state: 'solid',
    abundance: 'uncommon',
    form: 'processed',
    weight: 3.333,
  },
  'fusion fuel': {
    name: 'Fusion Fuel',
    description: 'Processed fuel consisting of deuterium and tritium used in fusion reactors.',
    category: 'energy',
    state: 'gas',
    abundance: 'rare',
    form: 'processed',
    weight: 12, // 2 for gas, 10 for canister
  },
  'high-temperature insulators': {
    name: 'High-Temperature Insulators',
    description:
      'Materials used to insulate high-temperature environments, such as reactors or engines.',
    category: 'tech',
    state: 'solid',
    abundance: 'uncommon',
    form: 'processed',
    weight: 250,
  },
  'lithium-ion batteries': {
    name: 'Lithium-Ion Batteries',
    description: 'Energy storage devices that use lithium-based compounds as electrodes.',
    category: 'energy',
    state: 'solid',
    abundance: 'common',
    form: 'processed',
    weight: 10,
  },
  'oxygen and co2 regulators': {
    name: 'Oxygen and CO2 Regulators',
    description:
      'Systems designed to regulate the levels of oxygen and carbon dioxide in a habitat.',
    category: 'life-support',
    state: 'solid',
    abundance: 'common',
    form: 'processed',
    weight: 2,
  },
  'oxygen generation system': {
    name: 'Oxygen Generation System',
    description: 'System that extracts oxygen from water or the atmosphere for life support.',
    category: 'life-support',
    state: 'solid',
    abundance: 'common',
    form: 'processed',
    weight: 1000,
  },
  'precision bearings': {
    name: 'Precision Bearings',
    description:
      'Components that reduce friction between moving parts for accurate motion control.',
    category: 'tech',
    state: 'solid',
    abundance: 'common',
    form: 'processed',
    weight: 32,
  },
  'radiation shielding': {
    name: 'Radiation Shielding',
    description:
      'Material used to protect against ionizing radiation in space and nuclear environments.',
    category: 'structural',
    state: 'solid',
    abundance: 'uncommon',
    form: 'processed',
    weight: 450,
  },
  'servo motors': {
    name: 'Servo Motors',
    description: 'Motors used in precision applications requiring feedback-controlled movement.',
    category: 'tech',
    state: 'solid',
    abundance: 'common',
    form: 'processed',
    weight: 9.21,
  },
  'solar panel': {
    name: 'Solar Panel',
    description: 'System of solar panels used to generate power from sunlight.',
    category: 'energy',
    state: 'solid',
    abundance: 'common',
    form: 'processed',
    weight: 200,
  },
  superconductors: {
    name: 'Superconductors',
    description:
      'Materials that conduct electricity with zero resistance under certain conditions.',
    category: 'tech',
    state: 'solid',
    abundance: 'rare',
    form: 'processed',
    weight: 1800,
  },
  'thermal insulation': {
    name: 'Thermal Insulation',
    description:
      'Material used to reduce the flow of heat, maintaining temperature control in systems.',
    category: 'structural',
    state: 'solid',
    abundance: 'common',
    form: 'processed',
    weight: 10,
  },
  'water recycling system': {
    name: 'Water Recycling System',
    description: 'System used to filter and purify water for reuse in closed-loop environments.',
    category: 'life-support',
    state: 'solid',
    abundance: 'common',
    form: 'processed',
    weight: 1800,
  },
};

export const MATERIALS_MANUFACTURED: Record<MaterialManufactured, MaterialData> = {
  'artificial ecosystem generator': {
    name: 'Artificial Ecosystem Generator',
    description: 'Systems designed to create self-sustaining ecosystems for life support.',
    category: 'life-support',
    state: 'solid',
    abundance: 'rare',
    form: 'manufactured',
    weight: 400000,
  },
  'energy storage system': {
    name: 'Energy Storage System',
    description:
      'Devices such as batteries or capacitors used to store excess energy for later use.',
    category: 'energy',
    state: 'solid',
    abundance: 'common',
    form: 'manufactured',
    weight: 300000, // 400k raw
  },
  'fusion reactor': {
    name: 'Fusion Reactor',
    description:
      'Energy generation system that powers spacecraft or colonies using nuclear fusion.',
    category: 'energy',
    state: 'solid',
    abundance: 'rare',
    form: 'manufactured',
    weight: 200000, // ~2e6 raw
  },
  'ftl engine': {
    name: 'FTL Engine',
    description: 'Faster-than-light propulsion system designed for interstellar travel.',
    category: 'tech',
    state: 'solid',
    abundance: 'rare',
    form: 'manufactured',
    weight: 10000, // ~2e6 raw
  },
  'life support system': {
    name: 'Life Support System',
    description:
      'System that provides breathable air, clean water, and waste management for habitats.',
    category: 'life-support',
    state: 'solid',
    abundance: 'common',
    form: 'manufactured',
    weight: 40000,
  },
  'robotic arm': {
    name: 'Robotic Arm',
    description: 'Mechanical arm used in spacecraft for manipulation of objects and tools.',
    category: 'tech',
    state: 'solid',
    abundance: 'common',
    form: 'manufactured',
    weight: 1000,
  },
  'diamondium drill': {
    name: 'Diamondium Drill',
    description: 'Diamond-tipped drill designed for extracting resources from asteroids or moons.',
    category: 'tech',
    state: 'solid',
    abundance: 'common',
    form: 'manufactured',
    weight: 20,
  },
  'spacecraft parts': {
    name: 'Spacecraft Parts',
    description: 'Varied components used in the construction of spacecraft.',
    category: 'structural',
    state: 'solid',
    abundance: 'common',
    form: 'manufactured',
    weight: 200000,
  },
};
