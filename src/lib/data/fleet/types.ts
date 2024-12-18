import { Material } from '../resources';

type Company =
  | 'Kepler Industries'
  | 'Redshift Dynamics'
  | 'Titan Haul'
  | "Galaxy's Finest"
  | 'Horizon Automata';
type CompanyID = 'KI' | 'RD' | 'TH' | 'GF' | 'HA';
type ShipLevel = 1 | 2 | 3 | 4 | 5;
export type ShipID = `${CompanyID}-${ShipLevel}`;

export type Ship = {
  id: ShipID;
  name: string;
  company: Company;
  level: ShipLevel;
  speed: number; // light years per second (ly/s) 1-100 determined by warp drive
  crew: number; // number of crew needed to operate
  mass: number; // weight (t)
  capacity: number; // weight (t)
  tank: number; // fuel capacity for ftl travel, 1 ton of fuel = 1 ton of mass traveled per light year (t)
  maintenanceRate: number; // cost of maintenance per light year travelled ($/ly)
  cost: number; // cost of purchasing the ship ($)
};

type Cargo = {
  material: Material;
  amount: number;
  destination: string; // location id of the destination
};

type Delivery = {
  originLocation: string; // location id of the ship
  destinationLocation: string; // location id of the destination
  originTs: number; // timestamp of delivery start
  destinationTs: number; // timestamp of delivery end
};

export type ShipOwned = {
  id: number; // 0 - inf, ship number based on acquisition
  ship: Ship;
  name: string;
  fuelPercentage: number; // percentage 0-100
  cargo: Cargo[]; // list of cargo items
  location: string; // location id of the ship
  status: 'docked' | 'in transit';
  delivery: Delivery;
};
