export type ResourceCategory =
  | 'energy' // lightning icon
  | 'structural' // frame icon
  | 'tech' // microscope icon
  | 'life-support'; //plant icon
export type StateOfMatter = 'solid' | 'liquid' | 'gas' | 'exotic';
export type Abundance = 'common' | 'uncommon' | 'rare';
export type ResourceForm = 'raw' | 'processed' | 'manufactured';

export type MaterialRaw =
  | 'aggregate'
  | 'aluminum'
  | 'antimatter' // Advanced propulsion, energy generation
  | 'boron'
  | 'carbon' // graphite
  | 'copper'
  | 'deuterium' // Fusion fuel hydrogen
  | 'helium-3' // Fusion fuel
  | 'iron'
  | 'lithium'
  | 'nickel'
  | 'nitrogen'
  | 'oxygen'
  | 'phosphorus'
  | 'platinum'
  | 'rare earth elements'
  | 'silicon'
  | 'silver'
  | 'sulfur'
  | 'thorium' // Nuclear fuel
  | 'titanium'
  | 'tritium' // Fusion fuel hydrogen
  | 'uranium' // Nuclear fuel
  | 'water';

export type MaterialProcessed =
  | 'alloyed metal'
  | 'bioreactor materials'
  | 'carbon nanotubes'
  | 'composite materials'
  | 'concrete'
  | 'diamond'
  | 'fusion fuel'
  | 'high-temperature insulators'
  | 'lithium-ion batteries'
  | 'oxygen and co2 regulators'
  | 'oxygen generation system'
  | 'precision bearings'
  | 'radiation shielding'
  | 'servo motors'
  | 'solar panel'
  | 'superconductors'
  | 'thermal insulation'
  | 'water recycling system';

export type MaterialManufactured =
  | 'artificial ecosystem generator'
  | 'energy storage system'
  | 'fusion reactor'
  | 'ftl engine'
  | 'life support system'
  | 'robotic arm'
  | 'diamondium drill'
  | 'spacecraft parts';

export type Material = MaterialRaw | MaterialProcessed | MaterialManufactured;

export type MaterialData = {
  name: string;
  description: string;
  category: ResourceCategory;
  state: StateOfMatter;
  abundance: Abundance;
  form: ResourceForm;
  weight: number; // (kg)
};
