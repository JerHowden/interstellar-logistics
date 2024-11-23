import { ConstructingRecipe, MaterialRecipe, ShipbuildingRecipe } from './types';

const ConstructingRecipes: ConstructingRecipe[] = [];

const ShipbuildingRecipes: ShipbuildingRecipe[] = [];

const ProcessingRecipes: MaterialRecipe[] = [
  {
    key: 'fusion fuel',
    inputs: [
      { material: 'deuterium', amount: 1000 },
      { material: 'tritium', amount: 1000 },
    ],
    outputs: [{ material: 'fusion fuel', amount: 1 }],
    type: 'processing',
    level: 1,
  },
  {
    key: 'superconductors',
    inputs: [
      { material: 'copper', amount: 100 },
      { material: 'nickel', amount: 100 },
      { material: 'rare earth elements', amount: 10 },
    ],
    outputs: [{ material: 'superconductors', amount: 1 }],
    type: 'processing',
    level: 3,
  },
  {
    key: 'high-temperature insulators',
    inputs: [
      { material: 'boron', amount: 100 },
      { material: 'nitrogen', amount: 100 },
    ],
    outputs: [{ material: 'high-temperature insulators', amount: 1 }],
    type: 'processing',
    level: 1,
  },
  {
    key: 'alloyed metal',
    inputs: [
      { material: 'iron', amount: 10 },
      { material: 'nickel', amount: 10 },
    ],
    outputs: [{ material: 'alloyed metal', amount: 1 }],
    type: 'processing',
    level: 2,
  },
  {
    key: 'composite materials',
    inputs: [
      { material: 'carbon', amount: 1 },
      { material: 'silicon', amount: 1 },
      { material: 'aluminum', amount: 1 },
    ],
    outputs: [{ material: 'composite materials', amount: 1 }],
    type: 'processing',
    level: 3,
  },
  {
    key: 'radiation shielding',
    inputs: [
      { material: 'titanium', amount: 100 },
      { material: 'sulfur', amount: 1 },
    ],
    outputs: [{ material: 'radiation shielding', amount: 1 }],
    type: 'processing',
    level: 2,
  },
  {
    key: 'radiation shielding',
    inputs: [
      { material: 'boron', amount: 400 },
      { material: 'carbon', amount: 100 },
    ],
    outputs: [{ material: 'radiation shielding', amount: 4 }],
    type: 'processing',
    level: 2,
  },
  {
    key: 'oxygen generation system',
    inputs: [
      { material: 'water', amount: 10000 },
      { material: 'sulfur', amount: 10 },
      { material: 'oxygen', amount: 40 },
    ],
    outputs: [{ material: 'oxygen generation system', amount: 1 }],
    type: 'processing',
    level: 1,
  },
  {
    key: 'bioreactor materials',
    inputs: [
      { material: 'carbon', amount: 100 },
      { material: 'nitrogen', amount: 40 },
      { material: 'phosphorus', amount: 10 },
      { material: 'water', amount: 10 },
    ],
    outputs: [{ material: 'bioreactor materials', amount: 1 }],
    type: 'processing',
    level: 3,
  },
  {
    key: 'oxygen and co2 regulators',
    inputs: [
      { material: 'nitrogen', amount: 1 },
      { material: 'oxygen', amount: 1 },
    ],
    outputs: [{ material: 'oxygen and co2 regulators', amount: 1 }],
    type: 'processing',
    level: 3,
  },
  {
    key: 'lithium-ion batteries',
    inputs: [
      { material: 'lithium', amount: 1000 },
      { material: 'carbon', amount: 100 },
      { material: 'silicon', amount: 100 },
    ],
    outputs: [{ material: 'lithium-ion batteries', amount: 1 }],
    type: 'processing',
    level: 2,
  },
  {
    key: 'diamond',
    inputs: [{ material: 'carbon', amount: 1000 }],
    outputs: [{ material: 'diamond', amount: 1 }],
    type: 'processing',
    level: 1,
  },
  {
    key: 'servo motors',
    inputs: [
      { material: 'aluminum', amount: 10 },
      { material: 'copper', amount: 100 },
    ],
    outputs: [{ material: 'servo motors', amount: 1 }],
    type: 'processing',
    level: 1,
  },
  {
    key: 'precision bearings',
    inputs: [
      { material: 'aluminum', amount: 64 },
      { material: 'silver', amount: 8 },
    ],
    outputs: [{ material: 'precision bearings', amount: 1 }],
    type: 'processing',
    level: 1,
  },
  {
    key: 'carbon nanotubes',
    inputs: [{ material: 'carbon', amount: 100 }],
    outputs: [{ material: 'carbon nanotubes', amount: 10000 }],
    type: 'processing',
    level: 4,
  },
];

export const ManufacturingRecipes: MaterialRecipe[] = [
  {
    key: 'ftl engine',
    inputs: [
      { material: 'fusion fuel', amount: 10000 },
      { material: 'superconductors', amount: 1000 },
      { material: 'high-temperature insulators', amount: 1000 },
    ],
    outputs: [{ material: 'ftl engine', amount: 1 }],
    type: 'manufacturing',
    level: 5,
  },
  {
    key: 'spacecraft parts',
    inputs: [
      { material: 'alloyed metal', amount: 1000 },
      { material: 'composite materials', amount: 400 },
      { material: 'radiation shielding', amount: 100 },
    ],
    outputs: [{ material: 'spacecraft parts', amount: 25 }],
    type: 'manufacturing',
    level: 3,
  },
  {
    key: 'fusion reactor',
    inputs: [
      { material: 'fusion fuel', amount: 1000 },
      { material: 'high-temperature insulators', amount: 100 },
      { material: 'alloyed metal', amount: 10000 },
    ],
    outputs: [{ material: 'fusion reactor', amount: 1 }],
    type: 'manufacturing',
    level: 4,
  },
  {
    key: 'life support system',
    inputs: [
      { material: 'oxygen generation system', amount: 8 },
      { material: 'bioreactor materials', amount: 160 },
      { material: 'oxygen and co2 regulators', amount: 8 },
    ],
    outputs: [{ material: 'life support system', amount: 1 }],
    type: 'manufacturing',
    level: 2,
  },
  {
    key: 'energy storage system',
    inputs: [
      { material: 'lithium-ion batteries', amount: 500 },
      { material: 'superconductors', amount: 100 },
      { material: 'alloyed metal', amount: 1000 },
    ],
    outputs: [{ material: 'energy storage system', amount: 1 }],
    type: 'manufacturing',
    level: 1,
  },
  {
    key: 'solar panel',
    inputs: [
      { material: 'composite materials', amount: 10000 },
      { material: 'carbon nanotubes', amount: 10000 },
    ],
    outputs: [{ material: 'solar panel', amount: 1 }],
    type: 'manufacturing',
    level: 1,
  },
  {
    key: 'space mining drills',
    inputs: [
      { material: 'diamond', amount: 16 },
      { material: 'servo motors', amount: 16 },
      { material: 'alloyed metal', amount: 160 },
    ],
    outputs: [{ material: 'space mining drills', amount: 1 }],
    type: 'manufacturing',
    level: 3,
  },
  {
    key: 'robotic arm',
    inputs: [
      { material: 'servo motors', amount: 8 },
      { material: 'precision bearings', amount: 16 },
      { material: 'composite materials', amount: 500 },
    ],
    outputs: [{ material: 'robotic arm', amount: 1 }],
    type: 'manufacturing',
    level: 2,
  },
  {
    key: 'artificial ecosystem generator',
    inputs: [
      { material: 'bioreactor materials', amount: 1600 },
      { material: 'oxygen generation system', amount: 16 },
      { material: 'oxygen and co2 regulators', amount: 32 },
      { material: 'water recycling system', amount: 8 },
    ],
    outputs: [{ material: 'artificial ecosystem generator', amount: 1 }],
    type: 'manufacturing',
    level: 4,
  },
];
