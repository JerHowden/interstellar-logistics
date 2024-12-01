import { Material } from '../resources';

type Company =
  | 'Kepler Industries'
  | 'Redshift Dynamics'
  | 'Titan Haul'
  | 'White Dwarf Co.'
  | "Galaxy's Finest"
  | 'Horizon Automata';
type CompanyID = 'KI' | 'RD' | 'TH' | 'WD' | 'GF' | 'HA';

export type Ship = {
  id: string;
  name: string;
  company: Company;
  level: 1 | 2 | 3 | 4 | 5;
  speed: number; // light years per second (ly/s) 1-100
  crew: number; // number of crew needed to operate
  capacity: number; // weight (t)
  tank: number; // fuel capacity (t)
  efficiency: number; // light years per metric ton of fuel (ly/t)
  maintenanceRate: number; // cost of maintenance per light year travelled ($/ly)
};

export type ShipOwned = {
  ship: Ship;
  name: string;
  fuelPercentage: number; // percentage 0-100
  cargo: Map<Material, number>; // ES6 Map
};
