export type Levels = 1 | 2 | 3 | 4 | 5;
export type LevelsOptional = 0 | Levels;

export type DistributionVariables = {
  lambda: number;
  range: [number, number];
};
