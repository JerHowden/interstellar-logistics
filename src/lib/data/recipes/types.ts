import { Material } from '../resources';

type CraftingMaterials = {
  material: Material;
  amount: number;
};
export type MaterialRecipe = {
  key: Material;
  inputs: CraftingMaterials[];
  outputs: CraftingMaterials[];
  type: 'processing' | 'manufacturing';
  level: 1 | 2 | 3 | 4 | 5;
};

export type ConstructingRecipe = {
  key: Material;
  inputs: CraftingMaterials[];
  level: 1 | 2 | 3 | 4 | 5;
};

export type ShipbuildingRecipe = {
  key: Material;
  inputs: CraftingMaterials[];
  level: 1 | 2 | 3 | 4 | 5;
};
