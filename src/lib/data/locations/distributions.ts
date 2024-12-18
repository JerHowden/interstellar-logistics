import { DistributionVariables } from '../types';

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function poisson({ lambda, range }: DistributionVariables): number {
  let L = Math.exp(-lambda); // e^(-lambda)
  let p = 1;
  let k = 0;

  // Keep generating random numbers until we reach a cumulative probability greater than a random number
  while (p > L) {
    k++;
    p *= Math.random();
  }

  return clamp(k - 1, range[0], range[1]); // Subtract 1 to account for the initial increment
}

export function exponential({ lambda, range }: DistributionVariables): number {
  const value = -Math.log(1 - Math.random()) / lambda;
  return clamp(value, range[0], range[1]);
}
