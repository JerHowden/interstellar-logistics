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
  | 'iron'
  | 'nickel'
  | 'copper'
  | 'rare earth elements'
  | 'boron'
  | 'lithium'
  | 'carbon' // graphite
  | 'titanium'
  | 'silver'
  | 'phosphorus'
  | 'nitrogen'
  | 'sulfur'
  | 'helium-3' // Fusion fuel
  | 'deuterium' // Fusion fuel hydrogen
  | 'tritium' // Fusion fuel hydrogen
  | 'uranium' // Nuclear fuel
  | 'thorium' // Nuclear fuel
  | 'antimatter' // Advanced propulsion, energy generation
  | 'oxygen'
  | 'water'
  | 'aluminum'
  | 'silicon'
  | 'platinum';

export type MaterialProcessed =
  | 'concrete'
  | 'alloyed metal'
  | 'composite materials'
  | 'fusion fuel'
  | 'high-temperature insulators'
  | 'superconductors'
  | 'lithium-ion batteries'
  | 'carbon nanotubes'
  | 'bioreactor materials'
  | 'oxygen generation system'
  | 'water recycling system'
  | 'thermal insulation'
  | 'radiation shielding'
  | 'diamond'
  | 'servo motors'
  | 'precision bearings'
  | 'organic growth medium'
  | 'oxygen and co2 regulators';

export type MaterialManufactured =
  | 'ftl engine'
  | 'spacecraft parts'
  | 'fusion reactor'
  | 'life support system'
  | 'energy storage system'
  | 'solar panel'
  | 'space mining drills'
  | 'robotic arm'
  | 'artificial ecosystem generator';

export type Material = MaterialRaw | MaterialProcessed | MaterialManufactured;

export type MaterialData = {
  name: string;
  description: string;
  category: ResourceCategory;
  state: StateOfMatter;
  abundance: Abundance;
  form: ResourceForm;
};
